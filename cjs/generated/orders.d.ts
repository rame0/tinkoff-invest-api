import _m0 from "protobufjs/minimal.js";
import { Quotation, MoneyValue, Ping } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Направление операции. */
export declare enum OrderDirection {
    /** ORDER_DIRECTION_UNSPECIFIED - Значение не указано */
    ORDER_DIRECTION_UNSPECIFIED = 0,
    /** ORDER_DIRECTION_BUY - Покупка */
    ORDER_DIRECTION_BUY = 1,
    /** ORDER_DIRECTION_SELL - Продажа */
    ORDER_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function orderDirectionFromJSON(object: any): OrderDirection;
export declare function orderDirectionToJSON(object: OrderDirection): string;
/** Тип заявки. */
export declare enum OrderType {
    /** ORDER_TYPE_UNSPECIFIED - Значение не указано */
    ORDER_TYPE_UNSPECIFIED = 0,
    /** ORDER_TYPE_LIMIT - Лимитная */
    ORDER_TYPE_LIMIT = 1,
    /** ORDER_TYPE_MARKET - Рыночная */
    ORDER_TYPE_MARKET = 2,
    /** ORDER_TYPE_BESTPRICE - Лучшая цена */
    ORDER_TYPE_BESTPRICE = 3,
    UNRECOGNIZED = -1
}
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
/** Текущий статус заявки (поручения) */
export declare enum OrderExecutionReportStatus {
    EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
    /** EXECUTION_REPORT_STATUS_FILL - Исполнена */
    EXECUTION_REPORT_STATUS_FILL = 1,
    /** EXECUTION_REPORT_STATUS_REJECTED - Отклонена */
    EXECUTION_REPORT_STATUS_REJECTED = 2,
    /** EXECUTION_REPORT_STATUS_CANCELLED - Отменена пользователем */
    EXECUTION_REPORT_STATUS_CANCELLED = 3,
    /** EXECUTION_REPORT_STATUS_NEW - Новая */
    EXECUTION_REPORT_STATUS_NEW = 4,
    /** EXECUTION_REPORT_STATUS_PARTIALLYFILL - Частично исполнена */
    EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5,
    UNRECOGNIZED = -1
}
export declare function orderExecutionReportStatusFromJSON(object: any): OrderExecutionReportStatus;
export declare function orderExecutionReportStatusToJSON(object: OrderExecutionReportStatus): string;
/** Тип цены. */
export declare enum PriceType {
    /** PRICE_TYPE_UNSPECIFIED - Значение не определено. */
    PRICE_TYPE_UNSPECIFIED = 0,
    /** PRICE_TYPE_POINT - Цена в пунктах (только для фьючерсов и облигаций). */
    PRICE_TYPE_POINT = 1,
    /** PRICE_TYPE_CURRENCY - Цена в валюте расчётов по инструменту. */
    PRICE_TYPE_CURRENCY = 2,
    UNRECOGNIZED = -1
}
export declare function priceTypeFromJSON(object: any): PriceType;
export declare function priceTypeToJSON(object: PriceType): string;
/** Запрос установки соединения. */
export interface TradesStreamRequest {
    /** Идентификаторы счетов. */
    accounts: string[];
}
/** Информация о торговых поручениях. */
export interface TradesStreamResponse {
    /** Информация об исполнении торгового поручения. */
    orderTrades?: OrderTrades | undefined;
    /** Проверка активности стрима. */
    ping?: Ping | undefined;
}
/** Информация об исполнении торгового поручения. */
export interface OrderTrades {
    /** Идентификатор торгового поручения. */
    orderId: string;
    /** Дата и время создания сообщения в часовом поясе UTC. */
    createdAt?: Date;
    /** Направление сделки. */
    direction: OrderDirection;
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Массив сделок. */
    trades: OrderTrade[];
    /** Идентификатор счёта. */
    accountId: string;
    /** UID идентификатор инструмента. */
    instrumentUid: string;
}
/** Информация о сделке. */
export interface OrderTrade {
    /** Дата и время совершения сделки в часовом поясе UTC. */
    dateTime?: Date;
    /** Цена за 1 инструмент, по которой совершена сделка. */
    price?: Quotation;
    /** Количество штук в сделке. */
    quantity: number;
    /** Идентификатор сделки. */
    tradeId: string;
}
/** Запрос выставления торгового поручения. */
export interface PostOrderRequest {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Количество лотов. */
    quantity: number;
    /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Игнорируется для рыночных поручений. */
    price?: Quotation;
    /** Направление операции. */
    direction: OrderDirection;
    /** Номер счёта. */
    accountId: string;
    /** Тип заявки. */
    orderType: OrderType;
    /** Идентификатор запроса выставления поручения для целей идемпотентности в формате UID. Максимальная длина 36 символов. */
    orderId: string;
    /** Идентификатор инструмента, принимает значения Figi или Instrument_uid. */
    instrumentId: string;
}
/** Информация о выставлении поручения. */
export interface PostOrderResponse {
    /** Биржевой идентификатор заявки. */
    orderId: string;
    /** Текущий статус заявки. */
    executionReportStatus: OrderExecutionReportStatus;
    /** Запрошено лотов. */
    lotsRequested: number;
    /** Исполнено лотов. */
    lotsExecuted: number;
    /** Начальная цена заявки. Произведение количества запрошенных лотов на цену. */
    initialOrderPrice?: MoneyValue;
    /** Исполненная средняя цена одного инструмента в заявке. */
    executedOrderPrice?: MoneyValue;
    /** Итоговая стоимость заявки, включающая все комиссии. */
    totalOrderAmount?: MoneyValue;
    /** Начальная комиссия. Комиссия рассчитанная при выставлении заявки. */
    initialCommission?: MoneyValue;
    /** Фактическая комиссия по итогам исполнения заявки. */
    executedCommission?: MoneyValue;
    /** Значение НКД (накопленного купонного дохода) на дату. Подробнее: [НКД при выставлении торговых поручений](https://tinkoff.github.io/investAPI/head-orders#coupon) */
    aciValue?: MoneyValue;
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Направление сделки. */
    direction: OrderDirection;
    /** Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
    initialSecurityPrice?: MoneyValue;
    /** Тип заявки. */
    orderType: OrderType;
    /** Дополнительные данные об исполнении заявки. */
    message: string;
    /** Начальная цена заявки в пунктах (для фьючерсов). */
    initialOrderPricePt?: Quotation;
    /** UID идентификатор инструмента. */
    instrumentUid: string;
}
/** Запрос отмены торгового поручения. */
export interface CancelOrderRequest {
    /** Номер счёта. */
    accountId: string;
    /** Идентификатор заявки. */
    orderId: string;
}
/** Результат отмены торгового поручения. */
export interface CancelOrderResponse {
    /** Дата и время отмены заявки в часовом поясе UTC. */
    time?: Date;
}
/** Запрос получения статуса торгового поручения. */
export interface GetOrderStateRequest {
    /** Номер счёта. */
    accountId: string;
    /** Идентификатор заявки. */
    orderId: string;
}
/** Запрос получения списка активных торговых поручений. */
export interface GetOrdersRequest {
    /** Номер счёта. */
    accountId: string;
}
/** Список активных торговых поручений. */
export interface GetOrdersResponse {
    /** Массив активных заявок. */
    orders: OrderState[];
}
/** Информация о торговом поручении. */
export interface OrderState {
    /** Биржевой идентификатор заявки. */
    orderId: string;
    /** Текущий статус заявки. */
    executionReportStatus: OrderExecutionReportStatus;
    /** Запрошено лотов. */
    lotsRequested: number;
    /** Исполнено лотов. */
    lotsExecuted: number;
    /** Начальная цена заявки. Произведение количества запрошенных лотов на цену. */
    initialOrderPrice?: MoneyValue;
    /** Исполненная цена заявки. Произведение средней цены покупки на количество лотов. */
    executedOrderPrice?: MoneyValue;
    /** Итоговая стоимость заявки, включающая все комиссии. */
    totalOrderAmount?: MoneyValue;
    /** Средняя цена позиции по сделке. */
    averagePositionPrice?: MoneyValue;
    /** Начальная комиссия. Комиссия, рассчитанная на момент подачи заявки. */
    initialCommission?: MoneyValue;
    /** Фактическая комиссия по итогам исполнения заявки. */
    executedCommission?: MoneyValue;
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Направление заявки. */
    direction: OrderDirection;
    /** Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
    initialSecurityPrice?: MoneyValue;
    /** Стадии выполнения заявки. */
    stages: OrderStage[];
    /** Сервисная комиссия. */
    serviceCommission?: MoneyValue;
    /** Валюта заявки. */
    currency: string;
    /** Тип заявки. */
    orderType: OrderType;
    /** Дата и время выставления заявки в часовом поясе UTC. */
    orderDate?: Date;
    /** UID идентификатор инструмента. */
    instrumentUid: string;
    /** Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. */
    orderRequestId: string;
}
/** Сделки в рамках торгового поручения. */
export interface OrderStage {
    /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
    price?: MoneyValue;
    /** Количество лотов. */
    quantity: number;
    /** Идентификатор сделки. */
    tradeId: string;
}
/** Запрос изменения выставленной заявки. */
export interface ReplaceOrderRequest {
    /** Номер счета. */
    accountId: string;
    /** Идентификатор заявки на бирже. */
    orderId: string;
    /** Новый идентификатор запроса выставления поручения для целей идемпотентности. Максимальная длина 36 символов. Перезатирает старый ключ. */
    idempotencyKey: string;
    /** Количество лотов. */
    quantity: number;
    /** Цена за 1 инструмент. */
    price?: Quotation;
    /** Тип цены. */
    priceType: PriceType;
}
export declare const TradesStreamRequest: {
    encode(message: TradesStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamRequest;
    fromJSON(object: any): TradesStreamRequest;
    toJSON(message: TradesStreamRequest): unknown;
};
export declare const TradesStreamResponse: {
    encode(message: TradesStreamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamResponse;
    fromJSON(object: any): TradesStreamResponse;
    toJSON(message: TradesStreamResponse): unknown;
};
export declare const OrderTrades: {
    encode(message: OrderTrades, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderTrades;
    fromJSON(object: any): OrderTrades;
    toJSON(message: OrderTrades): unknown;
};
export declare const OrderTrade: {
    encode(message: OrderTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderTrade;
    fromJSON(object: any): OrderTrade;
    toJSON(message: OrderTrade): unknown;
};
export declare const PostOrderRequest: {
    encode(message: PostOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderRequest;
    fromJSON(object: any): PostOrderRequest;
    toJSON(message: PostOrderRequest): unknown;
};
export declare const PostOrderResponse: {
    encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderResponse;
    fromJSON(object: any): PostOrderResponse;
    toJSON(message: PostOrderResponse): unknown;
};
export declare const CancelOrderRequest: {
    encode(message: CancelOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderRequest;
    fromJSON(object: any): CancelOrderRequest;
    toJSON(message: CancelOrderRequest): unknown;
};
export declare const CancelOrderResponse: {
    encode(message: CancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderResponse;
    fromJSON(object: any): CancelOrderResponse;
    toJSON(message: CancelOrderResponse): unknown;
};
export declare const GetOrderStateRequest: {
    encode(message: GetOrderStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderStateRequest;
    fromJSON(object: any): GetOrderStateRequest;
    toJSON(message: GetOrderStateRequest): unknown;
};
export declare const GetOrdersRequest: {
    encode(message: GetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersRequest;
    fromJSON(object: any): GetOrdersRequest;
    toJSON(message: GetOrdersRequest): unknown;
};
export declare const GetOrdersResponse: {
    encode(message: GetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersResponse;
    fromJSON(object: any): GetOrdersResponse;
    toJSON(message: GetOrdersResponse): unknown;
};
export declare const OrderState: {
    encode(message: OrderState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderState;
    fromJSON(object: any): OrderState;
    toJSON(message: OrderState): unknown;
};
export declare const OrderStage: {
    encode(message: OrderStage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderStage;
    fromJSON(object: any): OrderStage;
    toJSON(message: OrderStage): unknown;
};
export declare const ReplaceOrderRequest: {
    encode(message: ReplaceOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplaceOrderRequest;
    fromJSON(object: any): ReplaceOrderRequest;
    toJSON(message: ReplaceOrderRequest): unknown;
};
export declare type OrdersStreamServiceDefinition = typeof OrdersStreamServiceDefinition;
export declare const OrdersStreamServiceDefinition: {
    readonly name: "OrdersStreamService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersStreamService";
    readonly methods: {
        /** Stream сделок пользователя */
        readonly tradesStream: {
            readonly name: "TradesStream";
            readonly requestType: {
                encode(message: TradesStreamRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamRequest;
                fromJSON(object: any): TradesStreamRequest;
                toJSON(message: TradesStreamRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: TradesStreamResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamResponse;
                fromJSON(object: any): TradesStreamResponse;
                toJSON(message: TradesStreamResponse): unknown;
            };
            readonly responseStream: true;
            readonly options: {};
        };
    };
};
export interface OrdersStreamServiceServiceImplementation<CallContextExt = {}> {
    /** Stream сделок пользователя */
    tradesStream(request: TradesStreamRequest, context: CallContext & CallContextExt): ServerStreamingMethodResult<TradesStreamResponse>;
}
export interface OrdersStreamServiceClient<CallOptionsExt = {}> {
    /** Stream сделок пользователя */
    tradesStream(request: TradesStreamRequest, options?: CallOptions & CallOptionsExt): AsyncIterable<TradesStreamResponse>;
}
/**
 * Сервис предназначен для работы с торговыми поручениями:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
 * расчёт полной стоимости;</br> **5**. получение списка заявок.
 */
export declare type OrdersServiceDefinition = typeof OrdersServiceDefinition;
export declare const OrdersServiceDefinition: {
    readonly name: "OrdersService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersService";
    readonly methods: {
        /** Метод выставления заявки. */
        readonly postOrder: {
            readonly name: "PostOrder";
            readonly requestType: {
                encode(message: PostOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderRequest;
                fromJSON(object: any): PostOrderRequest;
                toJSON(message: PostOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderResponse;
                fromJSON(object: any): PostOrderResponse;
                toJSON(message: PostOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод отмены биржевой заявки. */
        readonly cancelOrder: {
            readonly name: "CancelOrder";
            readonly requestType: {
                encode(message: CancelOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderRequest;
                fromJSON(object: any): CancelOrderRequest;
                toJSON(message: CancelOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderResponse;
                fromJSON(object: any): CancelOrderResponse;
                toJSON(message: CancelOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения статуса торгового поручения. */
        readonly getOrderState: {
            readonly name: "GetOrderState";
            readonly requestType: {
                encode(message: GetOrderStateRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderStateRequest;
                fromJSON(object: any): GetOrderStateRequest;
                toJSON(message: GetOrderStateRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OrderState, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): OrderState;
                fromJSON(object: any): OrderState;
                toJSON(message: OrderState): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка активных заявок по счёту. */
        readonly getOrders: {
            readonly name: "GetOrders";
            readonly requestType: {
                encode(message: GetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersRequest;
                fromJSON(object: any): GetOrdersRequest;
                toJSON(message: GetOrdersRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersResponse;
                fromJSON(object: any): GetOrdersResponse;
                toJSON(message: GetOrdersResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод изменения выставленной заявки. */
        readonly replaceOrder: {
            readonly name: "ReplaceOrder";
            readonly requestType: {
                encode(message: ReplaceOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReplaceOrderRequest;
                fromJSON(object: any): ReplaceOrderRequest;
                toJSON(message: ReplaceOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderResponse;
                fromJSON(object: any): PostOrderResponse;
                toJSON(message: PostOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface OrdersServiceServiceImplementation<CallContextExt = {}> {
    /** Метод выставления заявки. */
    postOrder(request: PostOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
    /** Метод отмены биржевой заявки. */
    cancelOrder(request: CancelOrderRequest, context: CallContext & CallContextExt): Promise<CancelOrderResponse>;
    /** Метод получения статуса торгового поручения. */
    getOrderState(request: GetOrderStateRequest, context: CallContext & CallContextExt): Promise<OrderState>;
    /** Метод получения списка активных заявок по счёту. */
    getOrders(request: GetOrdersRequest, context: CallContext & CallContextExt): Promise<GetOrdersResponse>;
    /** Метод изменения выставленной заявки. */
    replaceOrder(request: ReplaceOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
}
export interface OrdersServiceClient<CallOptionsExt = {}> {
    /** Метод выставления заявки. */
    postOrder(request: PostOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
    /** Метод отмены биржевой заявки. */
    cancelOrder(request: CancelOrderRequest, options?: CallOptions & CallOptionsExt): Promise<CancelOrderResponse>;
    /** Метод получения статуса торгового поручения. */
    getOrderState(request: GetOrderStateRequest, options?: CallOptions & CallOptionsExt): Promise<OrderState>;
    /** Метод получения списка активных заявок по счёту. */
    getOrders(request: GetOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrdersResponse>;
    /** Метод изменения выставленной заявки. */
    replaceOrder(request: ReplaceOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
}
export declare type ServerStreamingMethodResult<Response> = {
    [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
//# sourceMappingURL=orders.d.ts.map