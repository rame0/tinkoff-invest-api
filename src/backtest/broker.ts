/**
 * Логика работы брокера.
 */

/* eslint-disable max-len */

import { Operation, OperationState, OperationType, PortfolioPosition } from '../generated/operations.js';
import { OrderDirection, OrderExecutionReportStatus, OrderState, OrderType, PostOrderRequest } from '../generated/orders.js';
import { Helpers } from '../helpers.js';
import { Backtest } from './index.js';

export class Broker {
  constructor(private backtest: Backtest) { }

  private get options() {
    return this.backtest.options;
  }

  createOrder(req: PostOrderRequest): OrderState {
    const lotsRequested = req.quantity;
    const price = Helpers.toNumber(req.price || this.backtest.marketdata.curCandle.close) || 0;
    return {
      orderId: req.orderId,
      executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW,
      lotsRequested,
      lotsExecuted: 0,
      initialOrderPrice: Helpers.toMoneyValue(price * lotsRequested, this.options.currency),
      initialSecurityPrice: Helpers.toMoneyValue(price, this.options.currency),
      figi: req.figi,
      direction: req.direction,
      orderType: req.orderType,
      stages: [],
      currency: this.options.currency,
      orderDate: new Date(),
    };
  }

  tryExecuteOrders() {
    this.backtest.orders.getActiveOrders().forEach(order => {
      const price = this.canExecuteOrder(order);
      if (!price) return;
      this.setOrderExecuted(order, price);
      const operation = this.createOperation(order);
      const comissionOperation = this.createComissionOperation(order, operation);
      this.backtest.operations.addOperations([ operation, comissionOperation ]);
    });
  }

  calcPosition(operations: Operation[]): PortfolioPosition {
    // сначала уходим в минус на кол-во проданных лотов
    let quantityLots = operations
      .filter(o => o.operationType === OperationType.OPERATION_TYPE_SELL)
      .reduce((acc, o) => acc - o.quantity, 0);

    // теперь идем по купленным лотам и считаем сумму по принципу fifo
    let totalPriceFifo = 0;
    operations
      .filter(o => o.operationType === OperationType.OPERATION_TYPE_BUY)
      .forEach(o => {
        quantityLots += o.quantity;
        // todo: если была продана только часть завки, то тут не очень верно
        if (quantityLots > 0) totalPriceFifo += Math.abs(Helpers.toNumber(o.payment!));
      });
    const quantity = quantityLots * 1;
    const averagePriceFifo = totalPriceFifo > 0 ? totalPriceFifo / quantity : 0;
    return {
      figi: operations[ 0 ].figi,
      instrumentType: operations[ 0 ].instrumentType,
      quantityLots: Helpers.toQuotation(quantityLots),
      quantity: Helpers.toQuotation(quantity),
      // todo: считать averagePositionPrice как filo, не как fifo
      averagePositionPrice: Helpers.toMoneyValue(averagePriceFifo, operations[ 0 ].currency),
      averagePositionPriceFifo: Helpers.toMoneyValue(averagePriceFifo, operations[ 0 ].currency),
    };
  }

  /**
   * Блокировать средства для заявки.
   * (Пока не блокируем, а просто проверяем)
   */
  blockPositionForOrder(order: OrderState) {
    if (order.direction === OrderDirection.ORDER_DIRECTION_BUY) {
      const orderAmount = Helpers.toNumber(order.initialOrderPrice!);
      const balance = this.backtest.operations.getBalance();
      if (orderAmount > balance) {
        throw new Error(`Недостаточно средств для заявки: ${orderAmount} > ${balance}`);
      }
    } else {
      const position = this.backtest.operations.getPosition(order.figi);
      const lots = position?.quantityLots || 0;
      if (order.lotsRequested > lots) {
        throw new Error(`Недостаточно лотов для заявки: ${order.lotsRequested} > ${lots}`);
      }
    }
  }

  /**
   * Разблокировать средства для заявки.
   */
  unblockPositionForOrder(_: OrderState) {
    // т.к. пока ничего не блокируем, то здесь noop
  }

  /**
   * See also: https://www.tradingview.com/pine-script-docs/en/v5/concepts/Strategies.html?highlight=backtesting#broker-emulator
   */
  private canExecuteOrder(order: OrderState) {
    // данные по предыдущей свече
    const { low, high, close } = this.backtest.marketdata.candles[ this.backtest.marketdata.curIndex - 1 ];
    switch (order.orderType) {
      case OrderType.ORDER_TYPE_MARKET: return Helpers.toNumber(close);
      case OrderType.ORDER_TYPE_LIMIT: {
        const limitPrice = Helpers.toNumber(order.initialSecurityPrice!);
        const lowPrice = Helpers.toNumber(low!);
        const highPrice = Helpers.toNumber(high!);
        if (limitPrice >= lowPrice && limitPrice <= highPrice) return limitPrice;
      }
    }
  }

  private setOrderExecuted(order: OrderState, price: number) {
    order.executionReportStatus = OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL;
    order.lotsExecuted = order.lotsRequested;
    const netPrice = price * order.lotsExecuted; // todo: qty
    const comission = this.options.brokerFee * netPrice / 100;
    const grossPrice = netPrice + comission;
    order.executedOrderPrice = Helpers.toMoneyValue(netPrice, this.options.currency);
    order.executedCommission = Helpers.toMoneyValue(comission, this.options.currency);
    order.totalOrderAmount = Helpers.toMoneyValue(grossPrice, this.options.currency);
    order.averagePositionPrice = Helpers.toMoneyValue(price, this.options.currency);
  }

  private createOperation(order: OrderState): Operation {
    const operationType: OperationType = order.direction === OrderDirection.ORDER_DIRECTION_BUY
      ? OperationType.OPERATION_TYPE_BUY
      : OperationType.OPERATION_TYPE_SELL;
    let orderPrice = Helpers.toNumber(order.executedOrderPrice!);
    if (order.direction === OrderDirection.ORDER_DIRECTION_BUY) orderPrice = -orderPrice;
    return {
      id: order.orderId,
      parentOperationId: '',
      figi: order.figi,
      operationType,
      state: OperationState.OPERATION_STATE_EXECUTED,
      payment: Helpers.toMoneyValue(orderPrice, order.currency),
      price: order.averagePositionPrice,
      currency: order.currency,
      quantity: order.lotsExecuted,
      quantityRest: 0,
      type: '',
      instrumentType: '', // todo
      trades: [],
      date: new Date(),
    };
  }

  private createComissionOperation(order: OrderState, operation: Operation): Operation {
    const payment = -Helpers.toNumber(order.executedCommission!);
    return {
      id: `${operation.id}_fee`,
      parentOperationId: operation.id,
      instrumentType: operation.instrumentType,
      figi: order.figi,
      operationType: OperationType.OPERATION_TYPE_BROKER_FEE,
      state: OperationState.OPERATION_STATE_EXECUTED,
      payment: Helpers.toMoneyValue(payment, order.currency),
      price: Helpers.toMoneyValue(0, order.currency),
      currency: order.currency,
      quantity: 0,
      quantityRest: 0,
      type: '',
      trades: [],
      date: new Date(),
    };
  }
}
