/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import {
  PingDelaySettings,
  Quotation,
  SecurityTradingStatus,
  PingRequest,
  Ping,
  InstrumentStatus,
  securityTradingStatusFromJSON,
  securityTradingStatusToJSON,
  instrumentStatusFromJSON,
  instrumentStatusToJSON,
} from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Тип операции со списком подписок. */
export enum SubscriptionAction {
  /** SUBSCRIPTION_ACTION_UNSPECIFIED - Статус подписки не определён. */
  SUBSCRIPTION_ACTION_UNSPECIFIED = 0,
  /** SUBSCRIPTION_ACTION_SUBSCRIBE - Подписаться. */
  SUBSCRIPTION_ACTION_SUBSCRIBE = 1,
  /** SUBSCRIPTION_ACTION_UNSUBSCRIBE - Отписаться. */
  SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2,
  UNRECOGNIZED = -1,
}

export function subscriptionActionFromJSON(object: any): SubscriptionAction {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_ACTION_UNSPECIFIED":
      return SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED;
    case 1:
    case "SUBSCRIPTION_ACTION_SUBSCRIBE":
      return SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE;
    case 2:
    case "SUBSCRIPTION_ACTION_UNSUBSCRIBE":
      return SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionAction.UNRECOGNIZED;
  }
}

export function subscriptionActionToJSON(object: SubscriptionAction): string {
  switch (object) {
    case SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED:
      return "SUBSCRIPTION_ACTION_UNSPECIFIED";
    case SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE:
      return "SUBSCRIPTION_ACTION_SUBSCRIBE";
    case SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE:
      return "SUBSCRIPTION_ACTION_UNSUBSCRIBE";
    case SubscriptionAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Интервал свечи. */
export enum SubscriptionInterval {
  /** SUBSCRIPTION_INTERVAL_UNSPECIFIED - Интервал свечи не определён. */
  SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0,
  /** SUBSCRIPTION_INTERVAL_ONE_MINUTE - Минутные свечи. */
  SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1,
  /** SUBSCRIPTION_INTERVAL_FIVE_MINUTES - Пятиминутные свечи. */
  SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2,
  /** SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES - Пятнадцатиминутные свечи. */
  SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES = 3,
  /** SUBSCRIPTION_INTERVAL_ONE_HOUR - Часовые свечи. */
  SUBSCRIPTION_INTERVAL_ONE_HOUR = 4,
  /** SUBSCRIPTION_INTERVAL_ONE_DAY - Дневные свечи. */
  SUBSCRIPTION_INTERVAL_ONE_DAY = 5,
  /** SUBSCRIPTION_INTERVAL_2_MIN - Двухминутные свечи. */
  SUBSCRIPTION_INTERVAL_2_MIN = 6,
  /** SUBSCRIPTION_INTERVAL_3_MIN - Трёхминутные свечи. */
  SUBSCRIPTION_INTERVAL_3_MIN = 7,
  /** SUBSCRIPTION_INTERVAL_10_MIN - Десятиминутные свечи. */
  SUBSCRIPTION_INTERVAL_10_MIN = 8,
  /** SUBSCRIPTION_INTERVAL_30_MIN - Тридцатиминутные свечи. */
  SUBSCRIPTION_INTERVAL_30_MIN = 9,
  /** SUBSCRIPTION_INTERVAL_2_HOUR - Двухчасовые свечи. */
  SUBSCRIPTION_INTERVAL_2_HOUR = 10,
  /** SUBSCRIPTION_INTERVAL_4_HOUR - Четырёхчасовые свечи. */
  SUBSCRIPTION_INTERVAL_4_HOUR = 11,
  /** SUBSCRIPTION_INTERVAL_WEEK - Недельные свечи. */
  SUBSCRIPTION_INTERVAL_WEEK = 12,
  /** SUBSCRIPTION_INTERVAL_MONTH - Месячные свечи. */
  SUBSCRIPTION_INTERVAL_MONTH = 13,
  UNRECOGNIZED = -1,
}

export function subscriptionIntervalFromJSON(
  object: any
): SubscriptionInterval {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_INTERVAL_UNSPECIFIED":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED;
    case 1:
    case "SUBSCRIPTION_INTERVAL_ONE_MINUTE":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;
    case 2:
    case "SUBSCRIPTION_INTERVAL_FIVE_MINUTES":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES;
    case 3:
    case "SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES;
    case 4:
    case "SUBSCRIPTION_INTERVAL_ONE_HOUR":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_HOUR;
    case 5:
    case "SUBSCRIPTION_INTERVAL_ONE_DAY":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_DAY;
    case 6:
    case "SUBSCRIPTION_INTERVAL_2_MIN":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_2_MIN;
    case 7:
    case "SUBSCRIPTION_INTERVAL_3_MIN":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_3_MIN;
    case 8:
    case "SUBSCRIPTION_INTERVAL_10_MIN":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_10_MIN;
    case 9:
    case "SUBSCRIPTION_INTERVAL_30_MIN":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_30_MIN;
    case 10:
    case "SUBSCRIPTION_INTERVAL_2_HOUR":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_2_HOUR;
    case 11:
    case "SUBSCRIPTION_INTERVAL_4_HOUR":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_4_HOUR;
    case 12:
    case "SUBSCRIPTION_INTERVAL_WEEK":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_WEEK;
    case 13:
    case "SUBSCRIPTION_INTERVAL_MONTH":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_MONTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionInterval.UNRECOGNIZED;
  }
}

export function subscriptionIntervalToJSON(
  object: SubscriptionInterval
): string {
  switch (object) {
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED:
      return "SUBSCRIPTION_INTERVAL_UNSPECIFIED";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE:
      return "SUBSCRIPTION_INTERVAL_ONE_MINUTE";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES:
      return "SUBSCRIPTION_INTERVAL_FIVE_MINUTES";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES:
      return "SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_HOUR:
      return "SUBSCRIPTION_INTERVAL_ONE_HOUR";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_DAY:
      return "SUBSCRIPTION_INTERVAL_ONE_DAY";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_2_MIN:
      return "SUBSCRIPTION_INTERVAL_2_MIN";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_3_MIN:
      return "SUBSCRIPTION_INTERVAL_3_MIN";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_10_MIN:
      return "SUBSCRIPTION_INTERVAL_10_MIN";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_30_MIN:
      return "SUBSCRIPTION_INTERVAL_30_MIN";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_2_HOUR:
      return "SUBSCRIPTION_INTERVAL_2_HOUR";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_4_HOUR:
      return "SUBSCRIPTION_INTERVAL_4_HOUR";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_WEEK:
      return "SUBSCRIPTION_INTERVAL_WEEK";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_MONTH:
      return "SUBSCRIPTION_INTERVAL_MONTH";
    case SubscriptionInterval.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Результат подписки. */
export enum SubscriptionStatus {
  /** SUBSCRIPTION_STATUS_UNSPECIFIED - Статус подписки не определён. */
  SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  /** SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
  SUBSCRIPTION_STATUS_SUCCESS = 1,
  /** SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND - Инструмент не найден. */
  SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2,
  /** SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID - Некорректный статус подписки. [Список возможных значений](https://russianinvestments.github.io/investAPI/marketdata#subscriptionaction). */
  SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3,
  /** SUBSCRIPTION_STATUS_DEPTH_IS_INVALID - Некорректная глубина стакана. Доступные значения — 1, 10, 20, 30, 40, 50. */
  SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4,
  /** SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID - Некорректный интервал свечей. [Список возможных значений](https://russianinvestments.github.io/investAPI/marketdata#subscriptioninterval). */
  SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5,
  /** SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED - Превышен лимит на общее количество подписок в рамках стрима. [Лимитная политика](https://russianinvestments.github.io/investAPI/limits/). */
  SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6,
  /** SUBSCRIPTION_STATUS_INTERNAL_ERROR - Внутренняя ошибка сервиса. */
  SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7,
  /** SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS - Превышен лимит на количество запросов на подписки в течение установленного отрезка времени. */
  SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS = 8,
  /** SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND - Активная подписка не найдена. Ошибка может возникнуть только при отписке от несуществующей подписки. */
  SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND = 9,
  /** SUBSCRIPTION_STATUS_SOURCE_IS_INVALID - Указан некорректный источник */
  SUBSCRIPTION_STATUS_SOURCE_IS_INVALID = 10,
  UNRECOGNIZED = -1,
}

export function subscriptionStatusFromJSON(object: any): SubscriptionStatus {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_STATUS_UNSPECIFIED":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED;
    case 1:
    case "SUBSCRIPTION_STATUS_SUCCESS":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS;
    case 2:
    case "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND;
    case 3:
    case "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID;
    case 4:
    case "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID;
    case 5:
    case "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID;
    case 6:
    case "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED;
    case 7:
    case "SUBSCRIPTION_STATUS_INTERNAL_ERROR":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR;
    case 8:
    case "SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS;
    case 9:
    case "SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND;
    case 10:
    case "SUBSCRIPTION_STATUS_SOURCE_IS_INVALID":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SOURCE_IS_INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionStatus.UNRECOGNIZED;
  }
}

export function subscriptionStatusToJSON(object: SubscriptionStatus): string {
  switch (object) {
    case SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED:
      return "SUBSCRIPTION_STATUS_UNSPECIFIED";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS:
      return "SUBSCRIPTION_STATUS_SUCCESS";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND:
      return "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID:
      return "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID:
      return "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID:
      return "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED:
      return "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR:
      return "SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS:
      return "SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND:
      return "SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SOURCE_IS_INVALID:
      return "SUBSCRIPTION_STATUS_SOURCE_IS_INVALID";
    case SubscriptionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Типы источников сделок. */
export enum TradeSourceType {
  /** TRADE_SOURCE_UNSPECIFIED - Тип источника сделки не определён. */
  TRADE_SOURCE_UNSPECIFIED = 0,
  /** TRADE_SOURCE_EXCHANGE - Биржевые сделки. */
  TRADE_SOURCE_EXCHANGE = 1,
  /** TRADE_SOURCE_DEALER - Сделки дилера. */
  TRADE_SOURCE_DEALER = 2,
  /** TRADE_SOURCE_ALL - Все сделки. */
  TRADE_SOURCE_ALL = 3,
  UNRECOGNIZED = -1,
}

export function tradeSourceTypeFromJSON(object: any): TradeSourceType {
  switch (object) {
    case 0:
    case "TRADE_SOURCE_UNSPECIFIED":
      return TradeSourceType.TRADE_SOURCE_UNSPECIFIED;
    case 1:
    case "TRADE_SOURCE_EXCHANGE":
      return TradeSourceType.TRADE_SOURCE_EXCHANGE;
    case 2:
    case "TRADE_SOURCE_DEALER":
      return TradeSourceType.TRADE_SOURCE_DEALER;
    case 3:
    case "TRADE_SOURCE_ALL":
      return TradeSourceType.TRADE_SOURCE_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TradeSourceType.UNRECOGNIZED;
  }
}

export function tradeSourceTypeToJSON(object: TradeSourceType): string {
  switch (object) {
    case TradeSourceType.TRADE_SOURCE_UNSPECIFIED:
      return "TRADE_SOURCE_UNSPECIFIED";
    case TradeSourceType.TRADE_SOURCE_EXCHANGE:
      return "TRADE_SOURCE_EXCHANGE";
    case TradeSourceType.TRADE_SOURCE_DEALER:
      return "TRADE_SOURCE_DEALER";
    case TradeSourceType.TRADE_SOURCE_ALL:
      return "TRADE_SOURCE_ALL";
    case TradeSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Направление сделки. */
export enum TradeDirection {
  /** TRADE_DIRECTION_UNSPECIFIED - Направление сделки не определено. */
  TRADE_DIRECTION_UNSPECIFIED = 0,
  /** TRADE_DIRECTION_BUY - Покупка. */
  TRADE_DIRECTION_BUY = 1,
  /** TRADE_DIRECTION_SELL - Продажа. */
  TRADE_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function tradeDirectionFromJSON(object: any): TradeDirection {
  switch (object) {
    case 0:
    case "TRADE_DIRECTION_UNSPECIFIED":
      return TradeDirection.TRADE_DIRECTION_UNSPECIFIED;
    case 1:
    case "TRADE_DIRECTION_BUY":
      return TradeDirection.TRADE_DIRECTION_BUY;
    case 2:
    case "TRADE_DIRECTION_SELL":
      return TradeDirection.TRADE_DIRECTION_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TradeDirection.UNRECOGNIZED;
  }
}

export function tradeDirectionToJSON(object: TradeDirection): string {
  switch (object) {
    case TradeDirection.TRADE_DIRECTION_UNSPECIFIED:
      return "TRADE_DIRECTION_UNSPECIFIED";
    case TradeDirection.TRADE_DIRECTION_BUY:
      return "TRADE_DIRECTION_BUY";
    case TradeDirection.TRADE_DIRECTION_SELL:
      return "TRADE_DIRECTION_SELL";
    case TradeDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Интервал свечей. Максимальное значение интервала приведено ориентировочно, может отличаться в большую сторону в зависимости от параметров запроса. */
export enum CandleInterval {
  /** CANDLE_INTERVAL_UNSPECIFIED - Интервал не определён. */
  CANDLE_INTERVAL_UNSPECIFIED = 0,
  /** CANDLE_INTERVAL_1_MIN - От 1 минуты до 1 дня (лимит 2400). */
  CANDLE_INTERVAL_1_MIN = 1,
  /** CANDLE_INTERVAL_5_MIN - От 5 минут до недели (лимит 2400). */
  CANDLE_INTERVAL_5_MIN = 2,
  /** CANDLE_INTERVAL_15_MIN - От 15 минут до 3 недель (лимит 2400). */
  CANDLE_INTERVAL_15_MIN = 3,
  /** CANDLE_INTERVAL_HOUR - От 1 часа до 3 месяцев (лимит 2400). */
  CANDLE_INTERVAL_HOUR = 4,
  /** CANDLE_INTERVAL_DAY - От 1 дня до 6 лет (лимит 2400). */
  CANDLE_INTERVAL_DAY = 5,
  /** CANDLE_INTERVAL_2_MIN - От 2 минут до 1 дня (лимит 1200). */
  CANDLE_INTERVAL_2_MIN = 6,
  /** CANDLE_INTERVAL_3_MIN - От 3 минут до 1 дня (лимит 750). */
  CANDLE_INTERVAL_3_MIN = 7,
  /** CANDLE_INTERVAL_10_MIN - От 10 минут до недели (лимит 1200). */
  CANDLE_INTERVAL_10_MIN = 8,
  /** CANDLE_INTERVAL_30_MIN - От 30 минут до 3 недель (лимит 1200). */
  CANDLE_INTERVAL_30_MIN = 9,
  /** CANDLE_INTERVAL_2_HOUR - От 2 часов до 3 месяцев (лимит 2400). */
  CANDLE_INTERVAL_2_HOUR = 10,
  /** CANDLE_INTERVAL_4_HOUR - От 4 часов до 3 месяцев (лимит 700). */
  CANDLE_INTERVAL_4_HOUR = 11,
  /** CANDLE_INTERVAL_WEEK - От 1 недели до 5 лет (лимит 300). */
  CANDLE_INTERVAL_WEEK = 12,
  /** CANDLE_INTERVAL_MONTH - От 1 месяца до 10 лет (лимит 120). */
  CANDLE_INTERVAL_MONTH = 13,
  UNRECOGNIZED = -1,
}

export function candleIntervalFromJSON(object: any): CandleInterval {
  switch (object) {
    case 0:
    case "CANDLE_INTERVAL_UNSPECIFIED":
      return CandleInterval.CANDLE_INTERVAL_UNSPECIFIED;
    case 1:
    case "CANDLE_INTERVAL_1_MIN":
      return CandleInterval.CANDLE_INTERVAL_1_MIN;
    case 2:
    case "CANDLE_INTERVAL_5_MIN":
      return CandleInterval.CANDLE_INTERVAL_5_MIN;
    case 3:
    case "CANDLE_INTERVAL_15_MIN":
      return CandleInterval.CANDLE_INTERVAL_15_MIN;
    case 4:
    case "CANDLE_INTERVAL_HOUR":
      return CandleInterval.CANDLE_INTERVAL_HOUR;
    case 5:
    case "CANDLE_INTERVAL_DAY":
      return CandleInterval.CANDLE_INTERVAL_DAY;
    case 6:
    case "CANDLE_INTERVAL_2_MIN":
      return CandleInterval.CANDLE_INTERVAL_2_MIN;
    case 7:
    case "CANDLE_INTERVAL_3_MIN":
      return CandleInterval.CANDLE_INTERVAL_3_MIN;
    case 8:
    case "CANDLE_INTERVAL_10_MIN":
      return CandleInterval.CANDLE_INTERVAL_10_MIN;
    case 9:
    case "CANDLE_INTERVAL_30_MIN":
      return CandleInterval.CANDLE_INTERVAL_30_MIN;
    case 10:
    case "CANDLE_INTERVAL_2_HOUR":
      return CandleInterval.CANDLE_INTERVAL_2_HOUR;
    case 11:
    case "CANDLE_INTERVAL_4_HOUR":
      return CandleInterval.CANDLE_INTERVAL_4_HOUR;
    case 12:
    case "CANDLE_INTERVAL_WEEK":
      return CandleInterval.CANDLE_INTERVAL_WEEK;
    case 13:
    case "CANDLE_INTERVAL_MONTH":
      return CandleInterval.CANDLE_INTERVAL_MONTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CandleInterval.UNRECOGNIZED;
  }
}

export function candleIntervalToJSON(object: CandleInterval): string {
  switch (object) {
    case CandleInterval.CANDLE_INTERVAL_UNSPECIFIED:
      return "CANDLE_INTERVAL_UNSPECIFIED";
    case CandleInterval.CANDLE_INTERVAL_1_MIN:
      return "CANDLE_INTERVAL_1_MIN";
    case CandleInterval.CANDLE_INTERVAL_5_MIN:
      return "CANDLE_INTERVAL_5_MIN";
    case CandleInterval.CANDLE_INTERVAL_15_MIN:
      return "CANDLE_INTERVAL_15_MIN";
    case CandleInterval.CANDLE_INTERVAL_HOUR:
      return "CANDLE_INTERVAL_HOUR";
    case CandleInterval.CANDLE_INTERVAL_DAY:
      return "CANDLE_INTERVAL_DAY";
    case CandleInterval.CANDLE_INTERVAL_2_MIN:
      return "CANDLE_INTERVAL_2_MIN";
    case CandleInterval.CANDLE_INTERVAL_3_MIN:
      return "CANDLE_INTERVAL_3_MIN";
    case CandleInterval.CANDLE_INTERVAL_10_MIN:
      return "CANDLE_INTERVAL_10_MIN";
    case CandleInterval.CANDLE_INTERVAL_30_MIN:
      return "CANDLE_INTERVAL_30_MIN";
    case CandleInterval.CANDLE_INTERVAL_2_HOUR:
      return "CANDLE_INTERVAL_2_HOUR";
    case CandleInterval.CANDLE_INTERVAL_4_HOUR:
      return "CANDLE_INTERVAL_4_HOUR";
    case CandleInterval.CANDLE_INTERVAL_WEEK:
      return "CANDLE_INTERVAL_WEEK";
    case CandleInterval.CANDLE_INTERVAL_MONTH:
      return "CANDLE_INTERVAL_MONTH";
    case CandleInterval.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CandleSource {
  /** CANDLE_SOURCE_UNSPECIFIED - Источник свечей не определён. */
  CANDLE_SOURCE_UNSPECIFIED = 0,
  /** CANDLE_SOURCE_EXCHANGE - Биржевые свечи. */
  CANDLE_SOURCE_EXCHANGE = 1,
  /** CANDLE_SOURCE_DEALER_WEEKEND - Свечи  дилера в результате торговли по выходным. */
  CANDLE_SOURCE_DEALER_WEEKEND = 2,
  UNRECOGNIZED = -1,
}

export function candleSourceFromJSON(object: any): CandleSource {
  switch (object) {
    case 0:
    case "CANDLE_SOURCE_UNSPECIFIED":
      return CandleSource.CANDLE_SOURCE_UNSPECIFIED;
    case 1:
    case "CANDLE_SOURCE_EXCHANGE":
      return CandleSource.CANDLE_SOURCE_EXCHANGE;
    case 2:
    case "CANDLE_SOURCE_DEALER_WEEKEND":
      return CandleSource.CANDLE_SOURCE_DEALER_WEEKEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CandleSource.UNRECOGNIZED;
  }
}

export function candleSourceToJSON(object: CandleSource): string {
  switch (object) {
    case CandleSource.CANDLE_SOURCE_UNSPECIFIED:
      return "CANDLE_SOURCE_UNSPECIFIED";
    case CandleSource.CANDLE_SOURCE_EXCHANGE:
      return "CANDLE_SOURCE_EXCHANGE";
    case CandleSource.CANDLE_SOURCE_DEALER_WEEKEND:
      return "CANDLE_SOURCE_DEALER_WEEKEND";
    case CandleSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum OrderBookType {
  /** ORDERBOOK_TYPE_UNSPECIFIED - Не определён. */
  ORDERBOOK_TYPE_UNSPECIFIED = 0,
  /** ORDERBOOK_TYPE_EXCHANGE - Биржевой стакан. */
  ORDERBOOK_TYPE_EXCHANGE = 1,
  /** ORDERBOOK_TYPE_DEALER - Стакан дилера. */
  ORDERBOOK_TYPE_DEALER = 2,
  /** ORDERBOOK_TYPE_ALL - Стакан биржевой и дилера. */
  ORDERBOOK_TYPE_ALL = 3,
  UNRECOGNIZED = -1,
}

export function orderBookTypeFromJSON(object: any): OrderBookType {
  switch (object) {
    case 0:
    case "ORDERBOOK_TYPE_UNSPECIFIED":
      return OrderBookType.ORDERBOOK_TYPE_UNSPECIFIED;
    case 1:
    case "ORDERBOOK_TYPE_EXCHANGE":
      return OrderBookType.ORDERBOOK_TYPE_EXCHANGE;
    case 2:
    case "ORDERBOOK_TYPE_DEALER":
      return OrderBookType.ORDERBOOK_TYPE_DEALER;
    case 3:
    case "ORDERBOOK_TYPE_ALL":
      return OrderBookType.ORDERBOOK_TYPE_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBookType.UNRECOGNIZED;
  }
}

export function orderBookTypeToJSON(object: OrderBookType): string {
  switch (object) {
    case OrderBookType.ORDERBOOK_TYPE_UNSPECIFIED:
      return "ORDERBOOK_TYPE_UNSPECIFIED";
    case OrderBookType.ORDERBOOK_TYPE_EXCHANGE:
      return "ORDERBOOK_TYPE_EXCHANGE";
    case OrderBookType.ORDERBOOK_TYPE_DEALER:
      return "ORDERBOOK_TYPE_DEALER";
    case OrderBookType.ORDERBOOK_TYPE_ALL:
      return "ORDERBOOK_TYPE_ALL";
    case OrderBookType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип последней цены */
export enum LastPriceType {
  /** LAST_PRICE_UNSPECIFIED - Не определен. */
  LAST_PRICE_UNSPECIFIED = 0,
  /** LAST_PRICE_EXCHANGE - Цена биржи. */
  LAST_PRICE_EXCHANGE = 1,
  /** LAST_PRICE_DEALER - Цена дилера */
  LAST_PRICE_DEALER = 2,
  UNRECOGNIZED = -1,
}

export function lastPriceTypeFromJSON(object: any): LastPriceType {
  switch (object) {
    case 0:
    case "LAST_PRICE_UNSPECIFIED":
      return LastPriceType.LAST_PRICE_UNSPECIFIED;
    case 1:
    case "LAST_PRICE_EXCHANGE":
      return LastPriceType.LAST_PRICE_EXCHANGE;
    case 2:
    case "LAST_PRICE_DEALER":
      return LastPriceType.LAST_PRICE_DEALER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LastPriceType.UNRECOGNIZED;
  }
}

export function lastPriceTypeToJSON(object: LastPriceType): string {
  switch (object) {
    case LastPriceType.LAST_PRICE_UNSPECIFIED:
      return "LAST_PRICE_UNSPECIFIED";
    case LastPriceType.LAST_PRICE_EXCHANGE:
      return "LAST_PRICE_EXCHANGE";
    case LastPriceType.LAST_PRICE_DEALER:
      return "LAST_PRICE_DEALER";
    case LastPriceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос подписки или отписки на определённые биржевые данные. */
export interface MarketDataRequest {
  /** Запрос подписки на свечи. */
  subscribeCandlesRequest?: SubscribeCandlesRequest | undefined;
  /** Запрос подписки на стаканы. */
  subscribeOrderBookRequest?: SubscribeOrderBookRequest | undefined;
  /** Запрос подписки на ленту обезличенных сделок. */
  subscribeTradesRequest?: SubscribeTradesRequest | undefined;
  /** Запрос подписки на торговые статусы инструментов. */
  subscribeInfoRequest?: SubscribeInfoRequest | undefined;
  /** Запрос подписки на цены последних сделок. */
  subscribeLastPriceRequest?: SubscribeLastPriceRequest | undefined;
  /** Запрос своих подписок. */
  getMySubscriptions?: GetMySubscriptions | undefined;
  /** Запрос проверки активности соединения. */
  ping?: PingRequest | undefined;
  /** Запрос настройки пинга. */
  pingSettings?: PingDelaySettings | undefined;
}

export interface MarketDataServerSideStreamRequest {
  /** Запрос подписки на свечи. */
  subscribeCandlesRequest?: SubscribeCandlesRequest;
  /** Запрос подписки на стаканы. */
  subscribeOrderBookRequest?: SubscribeOrderBookRequest;
  /** Запрос подписки на ленту обезличенных сделок. */
  subscribeTradesRequest?: SubscribeTradesRequest;
  /** Запрос подписки на торговые статусы инструментов. */
  subscribeInfoRequest?: SubscribeInfoRequest;
  /** Запрос подписки на цены последних сделок. */
  subscribeLastPriceRequest?: SubscribeLastPriceRequest;
  /** Запрос настройки пинга. */
  pingSettings?: PingDelaySettings;
}

/** Пакет биржевой информации по подписке. */
export interface MarketDataResponse {
  /** Результат подписки на свечи. */
  subscribeCandlesResponse?: SubscribeCandlesResponse | undefined;
  /** Результат подписки на стаканы. */
  subscribeOrderBookResponse?: SubscribeOrderBookResponse | undefined;
  /** Результат подписки на поток обезличенных сделок. */
  subscribeTradesResponse?: SubscribeTradesResponse | undefined;
  /** Результат подписки на торговые статусы инструментов. */
  subscribeInfoResponse?: SubscribeInfoResponse | undefined;
  /** Свеча. */
  candle?: Candle | undefined;
  /** Сделки. */
  trade?: Trade | undefined;
  /** Стакан. */
  orderbook?: OrderBook | undefined;
  /** Торговый статус. */
  tradingStatus?: TradingStatus | undefined;
  /** Проверка активности стрима. */
  ping?: Ping | undefined;
  /** Результат подписки на цены последние сделок по инструментам. */
  subscribeLastPriceResponse?: SubscribeLastPriceResponse | undefined;
  /** Цена последней сделки. */
  lastPrice?: LastPrice | undefined;
}

/** subscribeCandles | Изменения статуса подписки на свечи. */
export interface SubscribeCandlesRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на свечи. */
  instruments: CandleInstrument[];
  /** Флаг ожидания закрытия временного интервала для отправки свечи. */
  waitingClose: boolean;
  /** Источник свечей. */
  candleSourceType?: GetCandlesRequest_CandleSource | undefined;
}

/** Запрос изменения статус подписки на свечи. */
export interface CandleInstrument {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi: string;
  /** Интервал свечей. Двухчасовые и четырёхчасовые свечи в стриме отсчитываются с 0:00 по UTC. */
  interval: SubscriptionInterval;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string;
}

/** Результат изменения статус подписки на свечи. */
export interface SubscribeCandlesResponse {
  /** Уникальный идентификатор запроса. [Подробнее](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на свечи. */
  candlesSubscriptions: CandleSubscription[];
}

/** Статус подписки на свечи. */
export interface CandleSubscription {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Интервал свечей. */
  interval: SubscriptionInterval;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** UID инструмента. */
  instrumentUid: string;
  /** Флаг ожидания закрытия временного интервала для отправки свечи. */
  waitingClose: boolean;
  /** Идентификатор открытого соединения. */
  streamId: string;
  /** Идентификатор подписки в формате `UUID`. */
  subscriptionId: string;
  /** Источник свечей. */
  candleSourceType?: GetCandlesRequest_CandleSource | undefined;
}

/** Запрос на изменение статуса подписки на стаканы. */
export interface SubscribeOrderBookRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на стаканы. */
  instruments: OrderBookInstrument[];
}

/** Запрос подписки на стаканы. */
export interface OrderBookInstrument {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string;
  /** Тип стакана. По умолчанию ORDERBOOK_TYPE_ALL - стакан биржевой и дилера. */
  orderBookType: OrderBookType;
}

/** Результат изменения статуса подписки на стаканы. */
export interface SubscribeOrderBookResponse {
  /** Уникальный идентификатор запроса. [Подробнее](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на стаканы. */
  orderBookSubscriptions: OrderBookSubscription[];
}

/** Статус подписки. */
export interface OrderBookSubscription {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** UID инструмента. */
  instrumentUid: string;
  /** Идентификатор открытого соединения. */
  streamId: string;
  /** Идентификатор подписки в формате `UUID`. */
  subscriptionId: string;
  /** Тип стакана. */
  orderBookType: OrderBookType;
}

/** Изменение статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на поток обезличенных сделок. */
  instruments: TradeInstrument[];
  /** Тип источника сделок. По умолчанию TRADE_SOURCE_ALL - все сделки. */
  tradeSource: TradeSourceType;
}

/** Запрос подписки на поток обезличенных сделок. */
export interface TradeInstrument {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте instrument_id`.
   *
   * @deprecated
   */
  figi: string;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string;
}

/** Результат изменения статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesResponse {
  /** Уникальный идентификатор запроса. [Подробнее](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на поток сделок. */
  tradeSubscriptions: TradeSubscription[];
  /** Тип источника сделок. */
  tradeSource: TradeSourceType;
}

/** Статус подписки. */
export interface TradeSubscription {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** UID инструмента. */
  instrumentUid: string;
  /** Идентификатор открытого соединения. */
  streamId: string;
  /** Идентификатор подписки в формате UUID. */
  subscriptionId: string;
}

/** Изменение статуса подписки на торговый статус инструмента. */
export interface SubscribeInfoRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на торговый статус. */
  instruments: InfoInstrument[];
}

/** Запрос подписки на торговый статус. */
export interface InfoInstrument {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте instrument_id`.
   *
   * @deprecated
   */
  figi: string;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string;
}

/** Результат изменения статуса подписки на торговый статус. */
export interface SubscribeInfoResponse {
  /** Уникальный идентификатор запроса. [Подробнее](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на торговый статус. */
  infoSubscriptions: InfoSubscription[];
}

/** Статус подписки. */
export interface InfoSubscription {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** UID инструмента. */
  instrumentUid: string;
  /** Идентификатор открытого соединения. */
  streamId: string;
  /** Идентификатор подписки в формате UUID. */
  subscriptionId: string;
}

/** Изменение статуса подписки на цену последней сделки по инструменту. */
export interface SubscribeLastPriceRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на цену последней сделки. */
  instruments: LastPriceInstrument[];
}

/** Запрос подписки на последнюю цену. */
export interface LastPriceInstrument {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте instrument_id`.
   *
   * @deprecated
   */
  figi: string;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string;
}

/** Результат изменения статуса подписки на цену последней сделки. */
export interface SubscribeLastPriceResponse {
  /** Уникальный идентификатор запроса. [Подробнее](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на цену последней сделки. */
  lastPriceSubscriptions: LastPriceSubscription[];
}

/** Статус подписки на цену последней сделки. */
export interface LastPriceSubscription {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** UID инструмента. */
  instrumentUid: string;
  /** Идентификатор открытого соединения. */
  streamId: string;
  /** Идентификатор подписки в формате `UUID`. */
  subscriptionId: string;
}

/** Пакет свечей в рамках стрима. */
export interface Candle {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Интервал свечи. */
  interval: SubscriptionInterval;
  /** Цена открытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  open?: Quotation;
  /** Максимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  high?: Quotation;
  /** Минимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  low?: Quotation;
  /** Цена закрытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  close?: Quotation;
  /** Объём сделок в лотах. */
  volume: number;
  /** Время начала интервала свечи по UTC. */
  time?: Date;
  /** Время последней сделки, вошедшей в свечу по UTC. */
  lastTradeTs?: Date;
  /** UID инструмента. */
  instrumentUid: string;
  /** Источник свечей */
  candleSourceType: CandleSource;
}

/** Пакет стаканов в рамках стрима. */
export interface OrderBook {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Флаг консистентности стакана. **false** — не все заявки попали в стакан из-за сетевых задержек или нарушения порядка доставки. */
  isConsistent: boolean;
  /** Массив предложений. */
  bids: Order[];
  /** Массив спроса. */
  asks: Order[];
  /** Время формирования стакана в часовом поясе UTC по времени биржи. */
  time?: Date;
  /** Верхний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  limitUp?: Quotation;
  /** Нижний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  limitDown?: Quotation;
  /** UID инструмента. */
  instrumentUid: string;
  /** Тип стакана. */
  orderBookType: OrderBookType;
}

/** Массив предложений/спроса. */
export interface Order {
  /** Цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  price?: Quotation;
  /** Количество в лотах. */
  quantity: number;
}

/** Информация о сделке. */
export interface Trade {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Направление сделки. */
  direction: TradeDirection;
  /** Цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  price?: Quotation;
  /** Количество лотов. */
  quantity: number;
  /** Время сделки в часовом поясе UTC по времени биржи. */
  time?: Date;
  /** UID инструмента. */
  instrumentUid: string;
  /** Тип источника сделки. */
  tradeSource: TradeSourceType;
}

/** Пакет изменения торгового статуса. */
export interface TradingStatus {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Статус торговли инструментом. */
  tradingStatus: SecurityTradingStatus;
  /** Время изменения торгового статуса по UTC. */
  time?: Date;
  /** Признак доступности выставления лимитной заявки по инструменту. */
  limitOrderAvailableFlag: boolean;
  /** Признак доступности выставления рыночной заявки по инструменту. */
  marketOrderAvailableFlag: boolean;
  /** UID инструмента. */
  instrumentUid: string;
}

/** Запрос исторических свечей. */
export interface GetCandlesRequest {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi?: string | undefined;
  /** Начало запрашиваемого периода по UTC. */
  from?: Date;
  /** Окончание запрашиваемого периода по UTC. */
  to?: Date;
  /** Интервал запрошенных свечей. */
  interval: CandleInterval;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId?: string | undefined;
  /** Тип источника свечи. */
  candleSourceType?: GetCandlesRequest_CandleSource | undefined;
  /** Максимальное количество свечей в ответе. */
  limit?: number | undefined;
}

export enum GetCandlesRequest_CandleSource {
  /** CANDLE_SOURCE_UNSPECIFIED - Все свечи. */
  CANDLE_SOURCE_UNSPECIFIED = 0,
  /** CANDLE_SOURCE_EXCHANGE - Биржевые свечи. */
  CANDLE_SOURCE_EXCHANGE = 1,
  /** CANDLE_SOURCE_INCLUDE_WEEKEND - Все свечи с учетом торговли по выходным. */
  CANDLE_SOURCE_INCLUDE_WEEKEND = 3,
  UNRECOGNIZED = -1,
}

export function getCandlesRequest_CandleSourceFromJSON(
  object: any
): GetCandlesRequest_CandleSource {
  switch (object) {
    case 0:
    case "CANDLE_SOURCE_UNSPECIFIED":
      return GetCandlesRequest_CandleSource.CANDLE_SOURCE_UNSPECIFIED;
    case 1:
    case "CANDLE_SOURCE_EXCHANGE":
      return GetCandlesRequest_CandleSource.CANDLE_SOURCE_EXCHANGE;
    case 3:
    case "CANDLE_SOURCE_INCLUDE_WEEKEND":
      return GetCandlesRequest_CandleSource.CANDLE_SOURCE_INCLUDE_WEEKEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetCandlesRequest_CandleSource.UNRECOGNIZED;
  }
}

export function getCandlesRequest_CandleSourceToJSON(
  object: GetCandlesRequest_CandleSource
): string {
  switch (object) {
    case GetCandlesRequest_CandleSource.CANDLE_SOURCE_UNSPECIFIED:
      return "CANDLE_SOURCE_UNSPECIFIED";
    case GetCandlesRequest_CandleSource.CANDLE_SOURCE_EXCHANGE:
      return "CANDLE_SOURCE_EXCHANGE";
    case GetCandlesRequest_CandleSource.CANDLE_SOURCE_INCLUDE_WEEKEND:
      return "CANDLE_SOURCE_INCLUDE_WEEKEND";
    case GetCandlesRequest_CandleSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Список свечей. */
export interface GetCandlesResponse {
  /** Массив свечей. */
  candles: HistoricCandle[];
}

/** Информация о свече. */
export interface HistoricCandle {
  /** Цена открытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  open?: Quotation;
  /** Максимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  high?: Quotation;
  /** Минимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  low?: Quotation;
  /** Цена закрытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  close?: Quotation;
  /** Объём торгов в лотах. */
  volume: number;
  /** Время свечи в часовом поясе UTC. */
  time?: Date;
  /** Признак завершённости свечи. **false** — свеча за текущие интервал ещё сформирована не полностью. */
  isComplete: boolean;
  /** Тип источника свечи */
  candleSourceType: CandleSource;
}

/** Запрос получения цен последних сделок. */
export interface GetLastPricesRequest {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi: string[];
  /** Массив идентификаторов инструмента. Принимает значения `figi` или `instrument_uid`. */
  instrumentId: string[];
  /** Тип запрашиваемой последней цены. */
  lastPriceType: LastPriceType;
  /** Статус запрашиваемых инструментов. [Возможные значения](#instrumentstatus). */
  instrumentStatus?: InstrumentStatus | undefined;
}

/** Список цен последних сделок. */
export interface GetLastPricesResponse {
  /** Массив цен последних сделок. */
  lastPrices: LastPrice[];
}

/** Информация о цене последней сделки. */
export interface LastPrice {
  /** FIGI инструмента. */
  figi: string;
  /** Цена последней сделки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  price?: Quotation;
  /** Время получения последней цены в часовом поясе UTC по времени биржи. */
  time?: Date;
  /** UID инструмента. */
  instrumentUid: string;
  /** Тип последней цены. */
  lastPriceType: LastPriceType;
}

/** Запрос стакана. */
export interface GetOrderBookRequest {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi?: string | undefined;
  /** Глубина стакана. */
  depth: number;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId?: string | undefined;
}

/** Информация о стакане. */
export interface GetOrderBookResponse {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Множество пар значений на покупку. */
  bids: Order[];
  /** Множество пар значений на продажу. */
  asks: Order[];
  /** Цена последней сделки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  lastPrice?: Quotation;
  /** Цена закрытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  closePrice?: Quotation;
  /** Верхний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  limitUp?: Quotation;
  /** Нижний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](https://russianinvestments.github.io/investAPI/faq_marketdata/#_15). */
  limitDown?: Quotation;
  /** Время получения цены последней сделки. */
  lastPriceTs?: Date;
  /** Время получения цены закрытия. */
  closePriceTs?: Date;
  /** Время формирования стакана на бирже. */
  orderbookTs?: Date;
  /** UID инструмента. */
  instrumentUid: string;
}

/** Запрос получения торгового статуса. */
export interface GetTradingStatusRequest {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi?: string | undefined;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId?: string | undefined;
}

/** Запрос получения торгового статуса. */
export interface GetTradingStatusesRequest {
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string[];
}

/** Информация о торговом статусе. */
export interface GetTradingStatusesResponse {
  /** Массив информации о торговых статусах. */
  tradingStatuses: GetTradingStatusResponse[];
}

/** Информация о торговом статусе. */
export interface GetTradingStatusResponse {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Статус торговли инструментом. */
  tradingStatus: SecurityTradingStatus;
  /** Признак доступности выставления лимитной заявки по инструменту. */
  limitOrderAvailableFlag: boolean;
  /** Признак доступности выставления рыночной заявки по инструменту. */
  marketOrderAvailableFlag: boolean;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** UID инструмента. */
  instrumentUid: string;
  /** Признак доступности завяки по лучшей цене. */
  bestpriceOrderAvailableFlag: boolean;
  /** Признак доступности только заявки по лучшей цене. */
  onlyBestPrice: boolean;
}

/** Запрос обезличенных сделок за последний час. */
export interface GetLastTradesRequest {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi?: string | undefined;
  /** Начало запрашиваемого периода по UTC. */
  from?: Date;
  /** Окончание запрашиваемого периода по UTC. */
  to?: Date;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId?: string | undefined;
  /** Тип источника сделок. По умолчанию TRADE_SOURCE_ALL - все сделки. */
  tradeSource: TradeSourceType;
}

/** Обезличенных сделок за последний час. */
export interface GetLastTradesResponse {
  /** Массив сделок. */
  trades: Trade[];
}

/** Запрос активных подписок. Возвращает по одному сообщению на каждый тип активных подписок — `SubscribeLastPriceResponse`, `SubscribeInfoResponse`, `SubscribeTradesResponse`, `SubscribeOrderBookResponse`, `SubscribeCandlesResponse`. */
export interface GetMySubscriptions {}

/** Запрос цен закрытия торговой сессии по инструментам. */
export interface GetClosePricesRequest {
  /** Массив по инструментам. */
  instruments: InstrumentClosePriceRequest[];
  /** Статус запрашиваемых инструментов. [Возможные значения](#instrumentstatus). */
  instrumentStatus?: InstrumentStatus | undefined;
}

/** Запрос цен закрытия торговой сессии по инструменту. */
export interface InstrumentClosePriceRequest {
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string;
}

/** Цены закрытия торговой сессии по инструментам. */
export interface GetClosePricesResponse {
  /** Массив по инструментам. */
  closePrices: InstrumentClosePriceResponse[];
}

/** Цена закрытия торговой сессии по инструменту. */
export interface InstrumentClosePriceResponse {
  /** FIGI инструмента. */
  figi: string;
  /** UID инструмента. */
  instrumentUid: string;
  /** Цена закрытия торговой сессии. */
  price?: Quotation;
  /** Цена последней сделки с вечерней сессии. Цена публикуется биржей по торговым дням и в нерабочие дни не обновляется. */
  eveningSessionPrice?: Quotation;
  /** Дата совершения торгов. */
  time?: Date;
}

export interface GetTechAnalysisRequest {
  /** Тип технического индикатора. */
  indicatorType: GetTechAnalysisRequest_IndicatorType;
  /** UID инструмента. */
  instrumentUid: string;
  /** Начало запрашиваемого периода по UTC. */
  from?: Date;
  /** Окончание запрашиваемого периода по UTC. */
  to?: Date;
  /** Интервал, за который рассчитывается индикатор. */
  interval: GetTechAnalysisRequest_IndicatorInterval;
  /** Тип цены, который используется при расчёте индикатора. */
  typeOfPrice: GetTechAnalysisRequest_TypeOfPrice;
  /** Торговый период, за который рассчитывается индикатор. */
  length: number;
  /** Параметры отклонения. */
  deviation?: GetTechAnalysisRequest_Deviation;
  /** Параметры сглаживания. */
  smoothing?: GetTechAnalysisRequest_Smoothing;
}

/** Интервал свечи. */
export enum GetTechAnalysisRequest_IndicatorInterval {
  /** INDICATOR_INTERVAL_UNSPECIFIED - Интервал не определён. */
  INDICATOR_INTERVAL_UNSPECIFIED = 0,
  /** INDICATOR_INTERVAL_ONE_MINUTE - 1 минута. */
  INDICATOR_INTERVAL_ONE_MINUTE = 1,
  /** INDICATOR_INTERVAL_FIVE_MINUTES - 5 минут. */
  INDICATOR_INTERVAL_FIVE_MINUTES = 2,
  /** INDICATOR_INTERVAL_FIFTEEN_MINUTES - 15 минут. */
  INDICATOR_INTERVAL_FIFTEEN_MINUTES = 3,
  /** INDICATOR_INTERVAL_ONE_HOUR - 1 час. */
  INDICATOR_INTERVAL_ONE_HOUR = 4,
  /** INDICATOR_INTERVAL_ONE_DAY - 1 день. */
  INDICATOR_INTERVAL_ONE_DAY = 5,
  /** INDICATOR_INTERVAL_2_MIN - 2 минуты. */
  INDICATOR_INTERVAL_2_MIN = 6,
  /** INDICATOR_INTERVAL_3_MIN - 3 минуты. */
  INDICATOR_INTERVAL_3_MIN = 7,
  /** INDICATOR_INTERVAL_10_MIN - 10 минут. */
  INDICATOR_INTERVAL_10_MIN = 8,
  /** INDICATOR_INTERVAL_30_MIN - 30 минут. */
  INDICATOR_INTERVAL_30_MIN = 9,
  /** INDICATOR_INTERVAL_2_HOUR - 2 часа. */
  INDICATOR_INTERVAL_2_HOUR = 10,
  /** INDICATOR_INTERVAL_4_HOUR - 4 часа. */
  INDICATOR_INTERVAL_4_HOUR = 11,
  /** INDICATOR_INTERVAL_WEEK - Неделя. */
  INDICATOR_INTERVAL_WEEK = 12,
  /** INDICATOR_INTERVAL_MONTH - Месяц. */
  INDICATOR_INTERVAL_MONTH = 13,
  UNRECOGNIZED = -1,
}

export function getTechAnalysisRequest_IndicatorIntervalFromJSON(
  object: any
): GetTechAnalysisRequest_IndicatorInterval {
  switch (object) {
    case 0:
    case "INDICATOR_INTERVAL_UNSPECIFIED":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_UNSPECIFIED;
    case 1:
    case "INDICATOR_INTERVAL_ONE_MINUTE":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_ONE_MINUTE;
    case 2:
    case "INDICATOR_INTERVAL_FIVE_MINUTES":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_FIVE_MINUTES;
    case 3:
    case "INDICATOR_INTERVAL_FIFTEEN_MINUTES":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_FIFTEEN_MINUTES;
    case 4:
    case "INDICATOR_INTERVAL_ONE_HOUR":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_ONE_HOUR;
    case 5:
    case "INDICATOR_INTERVAL_ONE_DAY":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_ONE_DAY;
    case 6:
    case "INDICATOR_INTERVAL_2_MIN":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_2_MIN;
    case 7:
    case "INDICATOR_INTERVAL_3_MIN":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_3_MIN;
    case 8:
    case "INDICATOR_INTERVAL_10_MIN":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_10_MIN;
    case 9:
    case "INDICATOR_INTERVAL_30_MIN":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_30_MIN;
    case 10:
    case "INDICATOR_INTERVAL_2_HOUR":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_2_HOUR;
    case 11:
    case "INDICATOR_INTERVAL_4_HOUR":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_4_HOUR;
    case 12:
    case "INDICATOR_INTERVAL_WEEK":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_WEEK;
    case 13:
    case "INDICATOR_INTERVAL_MONTH":
      return GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_MONTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetTechAnalysisRequest_IndicatorInterval.UNRECOGNIZED;
  }
}

export function getTechAnalysisRequest_IndicatorIntervalToJSON(
  object: GetTechAnalysisRequest_IndicatorInterval
): string {
  switch (object) {
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_UNSPECIFIED:
      return "INDICATOR_INTERVAL_UNSPECIFIED";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_ONE_MINUTE:
      return "INDICATOR_INTERVAL_ONE_MINUTE";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_FIVE_MINUTES:
      return "INDICATOR_INTERVAL_FIVE_MINUTES";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_FIFTEEN_MINUTES:
      return "INDICATOR_INTERVAL_FIFTEEN_MINUTES";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_ONE_HOUR:
      return "INDICATOR_INTERVAL_ONE_HOUR";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_ONE_DAY:
      return "INDICATOR_INTERVAL_ONE_DAY";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_2_MIN:
      return "INDICATOR_INTERVAL_2_MIN";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_3_MIN:
      return "INDICATOR_INTERVAL_3_MIN";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_10_MIN:
      return "INDICATOR_INTERVAL_10_MIN";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_30_MIN:
      return "INDICATOR_INTERVAL_30_MIN";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_2_HOUR:
      return "INDICATOR_INTERVAL_2_HOUR";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_4_HOUR:
      return "INDICATOR_INTERVAL_4_HOUR";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_WEEK:
      return "INDICATOR_INTERVAL_WEEK";
    case GetTechAnalysisRequest_IndicatorInterval.INDICATOR_INTERVAL_MONTH:
      return "INDICATOR_INTERVAL_MONTH";
    case GetTechAnalysisRequest_IndicatorInterval.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GetTechAnalysisRequest_TypeOfPrice {
  /** TYPE_OF_PRICE_UNSPECIFIED - Не указано. */
  TYPE_OF_PRICE_UNSPECIFIED = 0,
  /** TYPE_OF_PRICE_CLOSE - Цена закрытия. */
  TYPE_OF_PRICE_CLOSE = 1,
  /** TYPE_OF_PRICE_OPEN - Цена открытия. */
  TYPE_OF_PRICE_OPEN = 2,
  /** TYPE_OF_PRICE_HIGH - Максимальное значение за выбранный интервал. */
  TYPE_OF_PRICE_HIGH = 3,
  /** TYPE_OF_PRICE_LOW - Минимальное значение за выбранный интервал. */
  TYPE_OF_PRICE_LOW = 4,
  /** TYPE_OF_PRICE_AVG - Среднее значение по показателям [ (close + open + high + low) / 4 ]. */
  TYPE_OF_PRICE_AVG = 5,
  UNRECOGNIZED = -1,
}

export function getTechAnalysisRequest_TypeOfPriceFromJSON(
  object: any
): GetTechAnalysisRequest_TypeOfPrice {
  switch (object) {
    case 0:
    case "TYPE_OF_PRICE_UNSPECIFIED":
      return GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_UNSPECIFIED;
    case 1:
    case "TYPE_OF_PRICE_CLOSE":
      return GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_CLOSE;
    case 2:
    case "TYPE_OF_PRICE_OPEN":
      return GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_OPEN;
    case 3:
    case "TYPE_OF_PRICE_HIGH":
      return GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_HIGH;
    case 4:
    case "TYPE_OF_PRICE_LOW":
      return GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_LOW;
    case 5:
    case "TYPE_OF_PRICE_AVG":
      return GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_AVG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetTechAnalysisRequest_TypeOfPrice.UNRECOGNIZED;
  }
}

export function getTechAnalysisRequest_TypeOfPriceToJSON(
  object: GetTechAnalysisRequest_TypeOfPrice
): string {
  switch (object) {
    case GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_UNSPECIFIED:
      return "TYPE_OF_PRICE_UNSPECIFIED";
    case GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_CLOSE:
      return "TYPE_OF_PRICE_CLOSE";
    case GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_OPEN:
      return "TYPE_OF_PRICE_OPEN";
    case GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_HIGH:
      return "TYPE_OF_PRICE_HIGH";
    case GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_LOW:
      return "TYPE_OF_PRICE_LOW";
    case GetTechAnalysisRequest_TypeOfPrice.TYPE_OF_PRICE_AVG:
      return "TYPE_OF_PRICE_AVG";
    case GetTechAnalysisRequest_TypeOfPrice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GetTechAnalysisRequest_IndicatorType {
  /** INDICATOR_TYPE_UNSPECIFIED - Не определён. */
  INDICATOR_TYPE_UNSPECIFIED = 0,
  /** INDICATOR_TYPE_BB - Bollinger Bands — линия Боллинжера. */
  INDICATOR_TYPE_BB = 1,
  /** INDICATOR_TYPE_EMA - Exponential Moving Average — EMA, экспоненциальная скользящая средняя. */
  INDICATOR_TYPE_EMA = 2,
  /** INDICATOR_TYPE_RSI - Relative Strength Index — индекс относительной силы. */
  INDICATOR_TYPE_RSI = 3,
  /** INDICATOR_TYPE_MACD - Moving Average Convergence/Divergence — схождение/расхождение скользящих средних. */
  INDICATOR_TYPE_MACD = 4,
  /** INDICATOR_TYPE_SMA - Simple Moving Average — простое скользящее среднее. */
  INDICATOR_TYPE_SMA = 5,
  UNRECOGNIZED = -1,
}

export function getTechAnalysisRequest_IndicatorTypeFromJSON(
  object: any
): GetTechAnalysisRequest_IndicatorType {
  switch (object) {
    case 0:
    case "INDICATOR_TYPE_UNSPECIFIED":
      return GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_UNSPECIFIED;
    case 1:
    case "INDICATOR_TYPE_BB":
      return GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_BB;
    case 2:
    case "INDICATOR_TYPE_EMA":
      return GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_EMA;
    case 3:
    case "INDICATOR_TYPE_RSI":
      return GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_RSI;
    case 4:
    case "INDICATOR_TYPE_MACD":
      return GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_MACD;
    case 5:
    case "INDICATOR_TYPE_SMA":
      return GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_SMA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetTechAnalysisRequest_IndicatorType.UNRECOGNIZED;
  }
}

export function getTechAnalysisRequest_IndicatorTypeToJSON(
  object: GetTechAnalysisRequest_IndicatorType
): string {
  switch (object) {
    case GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_UNSPECIFIED:
      return "INDICATOR_TYPE_UNSPECIFIED";
    case GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_BB:
      return "INDICATOR_TYPE_BB";
    case GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_EMA:
      return "INDICATOR_TYPE_EMA";
    case GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_RSI:
      return "INDICATOR_TYPE_RSI";
    case GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_MACD:
      return "INDICATOR_TYPE_MACD";
    case GetTechAnalysisRequest_IndicatorType.INDICATOR_TYPE_SMA:
      return "INDICATOR_TYPE_SMA";
    case GetTechAnalysisRequest_IndicatorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetTechAnalysisRequest_Smoothing {
  /** Короткий период сглаживания для первой экспоненциальной скользящей средней (EMA). */
  fastLength: number;
  /** Длинный период сглаживания для второй экспоненциальной скользящей средней (EMA). */
  slowLength: number;
  /** Период сглаживания для третьей экспоненциальной скользящей средней (EMA) */
  signalSmoothing: number;
}

export interface GetTechAnalysisRequest_Deviation {
  /** Количество стандартных отклонений, на которые отступают верхняя и нижняя границы. */
  deviationMultiplier?: Quotation;
}

export interface GetTechAnalysisResponse {
  /** Массив значений результатов технического анализа. */
  technicalIndicators: GetTechAnalysisResponse_TechAnalysisItem[];
}

export interface GetTechAnalysisResponse_TechAnalysisItem {
  /** Временная метка по UTC, для которой были рассчитаны значения индикатора. */
  timestamp?: Date;
  /** Значение простого скользящего среднего (средней линии). */
  middleBand?: Quotation | undefined;
  /** Значение верхней линии Боллинджера. */
  upperBand?: Quotation | undefined;
  /** Значение нижней линии Боллинджера. */
  lowerBand?: Quotation | undefined;
  /** Значение сигнальной линии. */
  signal?: Quotation | undefined;
  /** Значение линии MACD. */
  macd?: Quotation | undefined;
}

function createBaseMarketDataRequest(): MarketDataRequest {
  return {
    subscribeCandlesRequest: undefined,
    subscribeOrderBookRequest: undefined,
    subscribeTradesRequest: undefined,
    subscribeInfoRequest: undefined,
    subscribeLastPriceRequest: undefined,
    getMySubscriptions: undefined,
    ping: undefined,
    pingSettings: undefined,
  };
}

export const MarketDataRequest = {
  encode(
    message: MarketDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscribeCandlesRequest !== undefined) {
      SubscribeCandlesRequest.encode(
        message.subscribeCandlesRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subscribeOrderBookRequest !== undefined) {
      SubscribeOrderBookRequest.encode(
        message.subscribeOrderBookRequest,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.subscribeTradesRequest !== undefined) {
      SubscribeTradesRequest.encode(
        message.subscribeTradesRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.subscribeInfoRequest !== undefined) {
      SubscribeInfoRequest.encode(
        message.subscribeInfoRequest,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.subscribeLastPriceRequest !== undefined) {
      SubscribeLastPriceRequest.encode(
        message.subscribeLastPriceRequest,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.getMySubscriptions !== undefined) {
      GetMySubscriptions.encode(
        message.getMySubscriptions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.ping !== undefined) {
      PingRequest.encode(message.ping, writer.uint32(58).fork()).ldelim();
    }
    if (message.pingSettings !== undefined) {
      PingDelaySettings.encode(
        message.pingSettings,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscribeCandlesRequest = SubscribeCandlesRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.subscribeOrderBookRequest = SubscribeOrderBookRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.subscribeTradesRequest = SubscribeTradesRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.subscribeInfoRequest = SubscribeInfoRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.subscribeLastPriceRequest = SubscribeLastPriceRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.getMySubscriptions = GetMySubscriptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.ping = PingRequest.decode(reader, reader.uint32());
          break;
        case 15:
          message.pingSettings = PingDelaySettings.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDataRequest {
    return {
      subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
        ? SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
        : undefined,
      subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
        ? SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
        : undefined,
      subscribeTradesRequest: isSet(object.subscribeTradesRequest)
        ? SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
        : undefined,
      subscribeInfoRequest: isSet(object.subscribeInfoRequest)
        ? SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
        : undefined,
      subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
        ? SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
        : undefined,
      getMySubscriptions: isSet(object.getMySubscriptions)
        ? GetMySubscriptions.fromJSON(object.getMySubscriptions)
        : undefined,
      ping: isSet(object.ping) ? PingRequest.fromJSON(object.ping) : undefined,
      pingSettings: isSet(object.pingSettings)
        ? PingDelaySettings.fromJSON(object.pingSettings)
        : undefined,
    };
  },

  toJSON(message: MarketDataRequest): unknown {
    const obj: any = {};
    message.subscribeCandlesRequest !== undefined &&
      (obj.subscribeCandlesRequest = message.subscribeCandlesRequest
        ? SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest)
        : undefined);
    message.subscribeOrderBookRequest !== undefined &&
      (obj.subscribeOrderBookRequest = message.subscribeOrderBookRequest
        ? SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest)
        : undefined);
    message.subscribeTradesRequest !== undefined &&
      (obj.subscribeTradesRequest = message.subscribeTradesRequest
        ? SubscribeTradesRequest.toJSON(message.subscribeTradesRequest)
        : undefined);
    message.subscribeInfoRequest !== undefined &&
      (obj.subscribeInfoRequest = message.subscribeInfoRequest
        ? SubscribeInfoRequest.toJSON(message.subscribeInfoRequest)
        : undefined);
    message.subscribeLastPriceRequest !== undefined &&
      (obj.subscribeLastPriceRequest = message.subscribeLastPriceRequest
        ? SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest)
        : undefined);
    message.getMySubscriptions !== undefined &&
      (obj.getMySubscriptions = message.getMySubscriptions
        ? GetMySubscriptions.toJSON(message.getMySubscriptions)
        : undefined);
    message.ping !== undefined &&
      (obj.ping = message.ping ? PingRequest.toJSON(message.ping) : undefined);
    message.pingSettings !== undefined &&
      (obj.pingSettings = message.pingSettings
        ? PingDelaySettings.toJSON(message.pingSettings)
        : undefined);
    return obj;
  },
};

function createBaseMarketDataServerSideStreamRequest(): MarketDataServerSideStreamRequest {
  return {
    subscribeCandlesRequest: undefined,
    subscribeOrderBookRequest: undefined,
    subscribeTradesRequest: undefined,
    subscribeInfoRequest: undefined,
    subscribeLastPriceRequest: undefined,
    pingSettings: undefined,
  };
}

export const MarketDataServerSideStreamRequest = {
  encode(
    message: MarketDataServerSideStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscribeCandlesRequest !== undefined) {
      SubscribeCandlesRequest.encode(
        message.subscribeCandlesRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subscribeOrderBookRequest !== undefined) {
      SubscribeOrderBookRequest.encode(
        message.subscribeOrderBookRequest,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.subscribeTradesRequest !== undefined) {
      SubscribeTradesRequest.encode(
        message.subscribeTradesRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.subscribeInfoRequest !== undefined) {
      SubscribeInfoRequest.encode(
        message.subscribeInfoRequest,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.subscribeLastPriceRequest !== undefined) {
      SubscribeLastPriceRequest.encode(
        message.subscribeLastPriceRequest,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.pingSettings !== undefined) {
      PingDelaySettings.encode(
        message.pingSettings,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketDataServerSideStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataServerSideStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscribeCandlesRequest = SubscribeCandlesRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.subscribeOrderBookRequest = SubscribeOrderBookRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.subscribeTradesRequest = SubscribeTradesRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.subscribeInfoRequest = SubscribeInfoRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.subscribeLastPriceRequest = SubscribeLastPriceRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.pingSettings = PingDelaySettings.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDataServerSideStreamRequest {
    return {
      subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
        ? SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
        : undefined,
      subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
        ? SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
        : undefined,
      subscribeTradesRequest: isSet(object.subscribeTradesRequest)
        ? SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
        : undefined,
      subscribeInfoRequest: isSet(object.subscribeInfoRequest)
        ? SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
        : undefined,
      subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
        ? SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
        : undefined,
      pingSettings: isSet(object.pingSettings)
        ? PingDelaySettings.fromJSON(object.pingSettings)
        : undefined,
    };
  },

  toJSON(message: MarketDataServerSideStreamRequest): unknown {
    const obj: any = {};
    message.subscribeCandlesRequest !== undefined &&
      (obj.subscribeCandlesRequest = message.subscribeCandlesRequest
        ? SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest)
        : undefined);
    message.subscribeOrderBookRequest !== undefined &&
      (obj.subscribeOrderBookRequest = message.subscribeOrderBookRequest
        ? SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest)
        : undefined);
    message.subscribeTradesRequest !== undefined &&
      (obj.subscribeTradesRequest = message.subscribeTradesRequest
        ? SubscribeTradesRequest.toJSON(message.subscribeTradesRequest)
        : undefined);
    message.subscribeInfoRequest !== undefined &&
      (obj.subscribeInfoRequest = message.subscribeInfoRequest
        ? SubscribeInfoRequest.toJSON(message.subscribeInfoRequest)
        : undefined);
    message.subscribeLastPriceRequest !== undefined &&
      (obj.subscribeLastPriceRequest = message.subscribeLastPriceRequest
        ? SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest)
        : undefined);
    message.pingSettings !== undefined &&
      (obj.pingSettings = message.pingSettings
        ? PingDelaySettings.toJSON(message.pingSettings)
        : undefined);
    return obj;
  },
};

function createBaseMarketDataResponse(): MarketDataResponse {
  return {
    subscribeCandlesResponse: undefined,
    subscribeOrderBookResponse: undefined,
    subscribeTradesResponse: undefined,
    subscribeInfoResponse: undefined,
    candle: undefined,
    trade: undefined,
    orderbook: undefined,
    tradingStatus: undefined,
    ping: undefined,
    subscribeLastPriceResponse: undefined,
    lastPrice: undefined,
  };
}

export const MarketDataResponse = {
  encode(
    message: MarketDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscribeCandlesResponse !== undefined) {
      SubscribeCandlesResponse.encode(
        message.subscribeCandlesResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subscribeOrderBookResponse !== undefined) {
      SubscribeOrderBookResponse.encode(
        message.subscribeOrderBookResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.subscribeTradesResponse !== undefined) {
      SubscribeTradesResponse.encode(
        message.subscribeTradesResponse,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.subscribeInfoResponse !== undefined) {
      SubscribeInfoResponse.encode(
        message.subscribeInfoResponse,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.candle !== undefined) {
      Candle.encode(message.candle, writer.uint32(42).fork()).ldelim();
    }
    if (message.trade !== undefined) {
      Trade.encode(message.trade, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderbook !== undefined) {
      OrderBook.encode(message.orderbook, writer.uint32(58).fork()).ldelim();
    }
    if (message.tradingStatus !== undefined) {
      TradingStatus.encode(
        message.tradingStatus,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(74).fork()).ldelim();
    }
    if (message.subscribeLastPriceResponse !== undefined) {
      SubscribeLastPriceResponse.encode(
        message.subscribeLastPriceResponse,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.lastPrice !== undefined) {
      LastPrice.encode(message.lastPrice, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscribeCandlesResponse = SubscribeCandlesResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.subscribeOrderBookResponse =
            SubscribeOrderBookResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.subscribeTradesResponse = SubscribeTradesResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.subscribeInfoResponse = SubscribeInfoResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.candle = Candle.decode(reader, reader.uint32());
          break;
        case 6:
          message.trade = Trade.decode(reader, reader.uint32());
          break;
        case 7:
          message.orderbook = OrderBook.decode(reader, reader.uint32());
          break;
        case 8:
          message.tradingStatus = TradingStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.ping = Ping.decode(reader, reader.uint32());
          break;
        case 10:
          message.subscribeLastPriceResponse =
            SubscribeLastPriceResponse.decode(reader, reader.uint32());
          break;
        case 11:
          message.lastPrice = LastPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDataResponse {
    return {
      subscribeCandlesResponse: isSet(object.subscribeCandlesResponse)
        ? SubscribeCandlesResponse.fromJSON(object.subscribeCandlesResponse)
        : undefined,
      subscribeOrderBookResponse: isSet(object.subscribeOrderBookResponse)
        ? SubscribeOrderBookResponse.fromJSON(object.subscribeOrderBookResponse)
        : undefined,
      subscribeTradesResponse: isSet(object.subscribeTradesResponse)
        ? SubscribeTradesResponse.fromJSON(object.subscribeTradesResponse)
        : undefined,
      subscribeInfoResponse: isSet(object.subscribeInfoResponse)
        ? SubscribeInfoResponse.fromJSON(object.subscribeInfoResponse)
        : undefined,
      candle: isSet(object.candle) ? Candle.fromJSON(object.candle) : undefined,
      trade: isSet(object.trade) ? Trade.fromJSON(object.trade) : undefined,
      orderbook: isSet(object.orderbook)
        ? OrderBook.fromJSON(object.orderbook)
        : undefined,
      tradingStatus: isSet(object.tradingStatus)
        ? TradingStatus.fromJSON(object.tradingStatus)
        : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
      subscribeLastPriceResponse: isSet(object.subscribeLastPriceResponse)
        ? SubscribeLastPriceResponse.fromJSON(object.subscribeLastPriceResponse)
        : undefined,
      lastPrice: isSet(object.lastPrice)
        ? LastPrice.fromJSON(object.lastPrice)
        : undefined,
    };
  },

  toJSON(message: MarketDataResponse): unknown {
    const obj: any = {};
    message.subscribeCandlesResponse !== undefined &&
      (obj.subscribeCandlesResponse = message.subscribeCandlesResponse
        ? SubscribeCandlesResponse.toJSON(message.subscribeCandlesResponse)
        : undefined);
    message.subscribeOrderBookResponse !== undefined &&
      (obj.subscribeOrderBookResponse = message.subscribeOrderBookResponse
        ? SubscribeOrderBookResponse.toJSON(message.subscribeOrderBookResponse)
        : undefined);
    message.subscribeTradesResponse !== undefined &&
      (obj.subscribeTradesResponse = message.subscribeTradesResponse
        ? SubscribeTradesResponse.toJSON(message.subscribeTradesResponse)
        : undefined);
    message.subscribeInfoResponse !== undefined &&
      (obj.subscribeInfoResponse = message.subscribeInfoResponse
        ? SubscribeInfoResponse.toJSON(message.subscribeInfoResponse)
        : undefined);
    message.candle !== undefined &&
      (obj.candle = message.candle ? Candle.toJSON(message.candle) : undefined);
    message.trade !== undefined &&
      (obj.trade = message.trade ? Trade.toJSON(message.trade) : undefined);
    message.orderbook !== undefined &&
      (obj.orderbook = message.orderbook
        ? OrderBook.toJSON(message.orderbook)
        : undefined);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = message.tradingStatus
        ? TradingStatus.toJSON(message.tradingStatus)
        : undefined);
    message.ping !== undefined &&
      (obj.ping = message.ping ? Ping.toJSON(message.ping) : undefined);
    message.subscribeLastPriceResponse !== undefined &&
      (obj.subscribeLastPriceResponse = message.subscribeLastPriceResponse
        ? SubscribeLastPriceResponse.toJSON(message.subscribeLastPriceResponse)
        : undefined);
    message.lastPrice !== undefined &&
      (obj.lastPrice = message.lastPrice
        ? LastPrice.toJSON(message.lastPrice)
        : undefined);
    return obj;
  },
};

function createBaseSubscribeCandlesRequest(): SubscribeCandlesRequest {
  return {
    subscriptionAction: 0,
    instruments: [],
    waitingClose: false,
    candleSourceType: undefined,
  };
}

export const SubscribeCandlesRequest = {
  encode(
    message: SubscribeCandlesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      CandleInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.waitingClose === true) {
      writer.uint32(24).bool(message.waitingClose);
    }
    if (message.candleSourceType !== undefined) {
      writer.uint32(72).int32(message.candleSourceType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeCandlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeCandlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(
            CandleInstrument.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.waitingClose = reader.bool();
          break;
        case 9:
          message.candleSourceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeCandlesRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction)
        ? subscriptionActionFromJSON(object.subscriptionAction)
        : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => CandleInstrument.fromJSON(e))
        : [],
      waitingClose: isSet(object.waitingClose)
        ? Boolean(object.waitingClose)
        : false,
      candleSourceType: isSet(object.candleSourceType)
        ? getCandlesRequest_CandleSourceFromJSON(object.candleSourceType)
        : undefined,
    };
  },

  toJSON(message: SubscribeCandlesRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(
        message.subscriptionAction
      ));
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? CandleInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    message.waitingClose !== undefined &&
      (obj.waitingClose = message.waitingClose);
    message.candleSourceType !== undefined &&
      (obj.candleSourceType =
        message.candleSourceType !== undefined
          ? getCandlesRequest_CandleSourceToJSON(message.candleSourceType)
          : undefined);
    return obj;
  },
};

function createBaseCandleInstrument(): CandleInstrument {
  return { figi: "", interval: 0, instrumentId: "" };
}

export const CandleInstrument = {
  encode(
    message: CandleInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.instrumentId !== "") {
      writer.uint32(26).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandleInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandleInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        case 3:
          message.instrumentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandleInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      interval: isSet(object.interval)
        ? subscriptionIntervalFromJSON(object.interval)
        : 0,
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : "",
    };
  },

  toJSON(message: CandleInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.interval !== undefined &&
      (obj.interval = subscriptionIntervalToJSON(message.interval));
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    return obj;
  },
};

function createBaseSubscribeCandlesResponse(): SubscribeCandlesResponse {
  return { trackingId: "", candlesSubscriptions: [] };
}

export const SubscribeCandlesResponse = {
  encode(
    message: SubscribeCandlesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.candlesSubscriptions) {
      CandleSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeCandlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeCandlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.candlesSubscriptions.push(
            CandleSubscription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeCandlesResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
      candlesSubscriptions: Array.isArray(object?.candlesSubscriptions)
        ? object.candlesSubscriptions.map((e: any) =>
            CandleSubscription.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SubscribeCandlesResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.candlesSubscriptions) {
      obj.candlesSubscriptions = message.candlesSubscriptions.map((e) =>
        e ? CandleSubscription.toJSON(e) : undefined
      );
    } else {
      obj.candlesSubscriptions = [];
    }
    return obj;
  },
};

function createBaseCandleSubscription(): CandleSubscription {
  return {
    figi: "",
    interval: 0,
    subscriptionStatus: 0,
    instrumentUid: "",
    waitingClose: false,
    streamId: "",
    subscriptionId: "",
    candleSourceType: undefined,
  };
}

export const CandleSubscription = {
  encode(
    message: CandleSubscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(24).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(34).string(message.instrumentUid);
    }
    if (message.waitingClose === true) {
      writer.uint32(40).bool(message.waitingClose);
    }
    if (message.streamId !== "") {
      writer.uint32(50).string(message.streamId);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(58).string(message.subscriptionId);
    }
    if (message.candleSourceType !== undefined) {
      writer.uint32(72).int32(message.candleSourceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandleSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandleSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        case 3:
          message.subscriptionStatus = reader.int32() as any;
          break;
        case 4:
          message.instrumentUid = reader.string();
          break;
        case 5:
          message.waitingClose = reader.bool();
          break;
        case 6:
          message.streamId = reader.string();
          break;
        case 7:
          message.subscriptionId = reader.string();
          break;
        case 9:
          message.candleSourceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandleSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      interval: isSet(object.interval)
        ? subscriptionIntervalFromJSON(object.interval)
        : 0,
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? subscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      waitingClose: isSet(object.waitingClose)
        ? Boolean(object.waitingClose)
        : false,
      streamId: isSet(object.streamId) ? String(object.streamId) : "",
      subscriptionId: isSet(object.subscriptionId)
        ? String(object.subscriptionId)
        : "",
      candleSourceType: isSet(object.candleSourceType)
        ? getCandlesRequest_CandleSourceFromJSON(object.candleSourceType)
        : undefined,
    };
  },

  toJSON(message: CandleSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.interval !== undefined &&
      (obj.interval = subscriptionIntervalToJSON(message.interval));
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(
        message.subscriptionStatus
      ));
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.waitingClose !== undefined &&
      (obj.waitingClose = message.waitingClose);
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.subscriptionId !== undefined &&
      (obj.subscriptionId = message.subscriptionId);
    message.candleSourceType !== undefined &&
      (obj.candleSourceType =
        message.candleSourceType !== undefined
          ? getCandlesRequest_CandleSourceToJSON(message.candleSourceType)
          : undefined);
    return obj;
  },
};

function createBaseSubscribeOrderBookRequest(): SubscribeOrderBookRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeOrderBookRequest = {
  encode(
    message: SubscribeOrderBookRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      OrderBookInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeOrderBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOrderBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(
            OrderBookInstrument.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeOrderBookRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction)
        ? subscriptionActionFromJSON(object.subscriptionAction)
        : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => OrderBookInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeOrderBookRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(
        message.subscriptionAction
      ));
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? OrderBookInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },
};

function createBaseOrderBookInstrument(): OrderBookInstrument {
  return { figi: "", depth: 0, instrumentId: "", orderBookType: 0 };
}

export const OrderBookInstrument = {
  encode(
    message: OrderBookInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.instrumentId !== "") {
      writer.uint32(26).string(message.instrumentId);
    }
    if (message.orderBookType !== 0) {
      writer.uint32(32).int32(message.orderBookType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.instrumentId = reader.string();
          break;
        case 4:
          message.orderBookType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBookInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : "",
      orderBookType: isSet(object.orderBookType)
        ? orderBookTypeFromJSON(object.orderBookType)
        : 0,
    };
  },

  toJSON(message: OrderBookInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    message.orderBookType !== undefined &&
      (obj.orderBookType = orderBookTypeToJSON(message.orderBookType));
    return obj;
  },
};

function createBaseSubscribeOrderBookResponse(): SubscribeOrderBookResponse {
  return { trackingId: "", orderBookSubscriptions: [] };
}

export const SubscribeOrderBookResponse = {
  encode(
    message: SubscribeOrderBookResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.orderBookSubscriptions) {
      OrderBookSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeOrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOrderBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.orderBookSubscriptions.push(
            OrderBookSubscription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeOrderBookResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
      orderBookSubscriptions: Array.isArray(object?.orderBookSubscriptions)
        ? object.orderBookSubscriptions.map((e: any) =>
            OrderBookSubscription.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SubscribeOrderBookResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.orderBookSubscriptions) {
      obj.orderBookSubscriptions = message.orderBookSubscriptions.map((e) =>
        e ? OrderBookSubscription.toJSON(e) : undefined
      );
    } else {
      obj.orderBookSubscriptions = [];
    }
    return obj;
  },
};

function createBaseOrderBookSubscription(): OrderBookSubscription {
  return {
    figi: "",
    depth: 0,
    subscriptionStatus: 0,
    instrumentUid: "",
    streamId: "",
    subscriptionId: "",
    orderBookType: 0,
  };
}

export const OrderBookSubscription = {
  encode(
    message: OrderBookSubscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(24).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(34).string(message.instrumentUid);
    }
    if (message.streamId !== "") {
      writer.uint32(42).string(message.streamId);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(50).string(message.subscriptionId);
    }
    if (message.orderBookType !== 0) {
      writer.uint32(56).int32(message.orderBookType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrderBookSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.subscriptionStatus = reader.int32() as any;
          break;
        case 4:
          message.instrumentUid = reader.string();
          break;
        case 5:
          message.streamId = reader.string();
          break;
        case 6:
          message.subscriptionId = reader.string();
          break;
        case 7:
          message.orderBookType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBookSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? subscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      streamId: isSet(object.streamId) ? String(object.streamId) : "",
      subscriptionId: isSet(object.subscriptionId)
        ? String(object.subscriptionId)
        : "",
      orderBookType: isSet(object.orderBookType)
        ? orderBookTypeFromJSON(object.orderBookType)
        : 0,
    };
  },

  toJSON(message: OrderBookSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(
        message.subscriptionStatus
      ));
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.subscriptionId !== undefined &&
      (obj.subscriptionId = message.subscriptionId);
    message.orderBookType !== undefined &&
      (obj.orderBookType = orderBookTypeToJSON(message.orderBookType));
    return obj;
  },
};

function createBaseSubscribeTradesRequest(): SubscribeTradesRequest {
  return { subscriptionAction: 0, instruments: [], tradeSource: 0 };
}

export const SubscribeTradesRequest = {
  encode(
    message: SubscribeTradesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      TradeInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tradeSource !== 0) {
      writer.uint32(24).int32(message.tradeSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeTradesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(
            TradeInstrument.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.tradeSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeTradesRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction)
        ? subscriptionActionFromJSON(object.subscriptionAction)
        : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => TradeInstrument.fromJSON(e))
        : [],
      tradeSource: isSet(object.tradeSource)
        ? tradeSourceTypeFromJSON(object.tradeSource)
        : 0,
    };
  },

  toJSON(message: SubscribeTradesRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(
        message.subscriptionAction
      ));
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? TradeInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    message.tradeSource !== undefined &&
      (obj.tradeSource = tradeSourceTypeToJSON(message.tradeSource));
    return obj;
  },
};

function createBaseTradeInstrument(): TradeInstrument {
  return { figi: "", instrumentId: "" };
}

export const TradeInstrument = {
  encode(
    message: TradeInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.instrumentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradeInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : "",
    };
  },

  toJSON(message: TradeInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    return obj;
  },
};

function createBaseSubscribeTradesResponse(): SubscribeTradesResponse {
  return { trackingId: "", tradeSubscriptions: [], tradeSource: 0 };
}

export const SubscribeTradesResponse = {
  encode(
    message: SubscribeTradesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.tradeSubscriptions) {
      TradeSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tradeSource !== 0) {
      writer.uint32(24).int32(message.tradeSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeTradesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.tradeSubscriptions.push(
            TradeSubscription.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.tradeSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeTradesResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
      tradeSubscriptions: Array.isArray(object?.tradeSubscriptions)
        ? object.tradeSubscriptions.map((e: any) =>
            TradeSubscription.fromJSON(e)
          )
        : [],
      tradeSource: isSet(object.tradeSource)
        ? tradeSourceTypeFromJSON(object.tradeSource)
        : 0,
    };
  },

  toJSON(message: SubscribeTradesResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.tradeSubscriptions) {
      obj.tradeSubscriptions = message.tradeSubscriptions.map((e) =>
        e ? TradeSubscription.toJSON(e) : undefined
      );
    } else {
      obj.tradeSubscriptions = [];
    }
    message.tradeSource !== undefined &&
      (obj.tradeSource = tradeSourceTypeToJSON(message.tradeSource));
    return obj;
  },
};

function createBaseTradeSubscription(): TradeSubscription {
  return {
    figi: "",
    subscriptionStatus: 0,
    instrumentUid: "",
    streamId: "",
    subscriptionId: "",
  };
}

export const TradeSubscription = {
  encode(
    message: TradeSubscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(26).string(message.instrumentUid);
    }
    if (message.streamId !== "") {
      writer.uint32(34).string(message.streamId);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(42).string(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.subscriptionStatus = reader.int32() as any;
          break;
        case 3:
          message.instrumentUid = reader.string();
          break;
        case 4:
          message.streamId = reader.string();
          break;
        case 5:
          message.subscriptionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradeSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? subscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      streamId: isSet(object.streamId) ? String(object.streamId) : "",
      subscriptionId: isSet(object.subscriptionId)
        ? String(object.subscriptionId)
        : "",
    };
  },

  toJSON(message: TradeSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(
        message.subscriptionStatus
      ));
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.subscriptionId !== undefined &&
      (obj.subscriptionId = message.subscriptionId);
    return obj;
  },
};

function createBaseSubscribeInfoRequest(): SubscribeInfoRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeInfoRequest = {
  encode(
    message: SubscribeInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      InfoInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(
            InfoInstrument.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeInfoRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction)
        ? subscriptionActionFromJSON(object.subscriptionAction)
        : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => InfoInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeInfoRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(
        message.subscriptionAction
      ));
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? InfoInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },
};

function createBaseInfoInstrument(): InfoInstrument {
  return { figi: "", instrumentId: "" };
}

export const InfoInstrument = {
  encode(
    message: InfoInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.instrumentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InfoInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : "",
    };
  },

  toJSON(message: InfoInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    return obj;
  },
};

function createBaseSubscribeInfoResponse(): SubscribeInfoResponse {
  return { trackingId: "", infoSubscriptions: [] };
}

export const SubscribeInfoResponse = {
  encode(
    message: SubscribeInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.infoSubscriptions) {
      InfoSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.infoSubscriptions.push(
            InfoSubscription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeInfoResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
      infoSubscriptions: Array.isArray(object?.infoSubscriptions)
        ? object.infoSubscriptions.map((e: any) => InfoSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeInfoResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.infoSubscriptions) {
      obj.infoSubscriptions = message.infoSubscriptions.map((e) =>
        e ? InfoSubscription.toJSON(e) : undefined
      );
    } else {
      obj.infoSubscriptions = [];
    }
    return obj;
  },
};

function createBaseInfoSubscription(): InfoSubscription {
  return {
    figi: "",
    subscriptionStatus: 0,
    instrumentUid: "",
    streamId: "",
    subscriptionId: "",
  };
}

export const InfoSubscription = {
  encode(
    message: InfoSubscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(26).string(message.instrumentUid);
    }
    if (message.streamId !== "") {
      writer.uint32(34).string(message.streamId);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(42).string(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.subscriptionStatus = reader.int32() as any;
          break;
        case 3:
          message.instrumentUid = reader.string();
          break;
        case 4:
          message.streamId = reader.string();
          break;
        case 5:
          message.subscriptionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InfoSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? subscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      streamId: isSet(object.streamId) ? String(object.streamId) : "",
      subscriptionId: isSet(object.subscriptionId)
        ? String(object.subscriptionId)
        : "",
    };
  },

  toJSON(message: InfoSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(
        message.subscriptionStatus
      ));
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.subscriptionId !== undefined &&
      (obj.subscriptionId = message.subscriptionId);
    return obj;
  },
};

function createBaseSubscribeLastPriceRequest(): SubscribeLastPriceRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeLastPriceRequest = {
  encode(
    message: SubscribeLastPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      LastPriceInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeLastPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeLastPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(
            LastPriceInstrument.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeLastPriceRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction)
        ? subscriptionActionFromJSON(object.subscriptionAction)
        : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => LastPriceInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeLastPriceRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(
        message.subscriptionAction
      ));
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? LastPriceInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },
};

function createBaseLastPriceInstrument(): LastPriceInstrument {
  return { figi: "", instrumentId: "" };
}

export const LastPriceInstrument = {
  encode(
    message: LastPriceInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPriceInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.instrumentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastPriceInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : "",
    };
  },

  toJSON(message: LastPriceInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    return obj;
  },
};

function createBaseSubscribeLastPriceResponse(): SubscribeLastPriceResponse {
  return { trackingId: "", lastPriceSubscriptions: [] };
}

export const SubscribeLastPriceResponse = {
  encode(
    message: SubscribeLastPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.lastPriceSubscriptions) {
      LastPriceSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeLastPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeLastPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.lastPriceSubscriptions.push(
            LastPriceSubscription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeLastPriceResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
      lastPriceSubscriptions: Array.isArray(object?.lastPriceSubscriptions)
        ? object.lastPriceSubscriptions.map((e: any) =>
            LastPriceSubscription.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SubscribeLastPriceResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.lastPriceSubscriptions) {
      obj.lastPriceSubscriptions = message.lastPriceSubscriptions.map((e) =>
        e ? LastPriceSubscription.toJSON(e) : undefined
      );
    } else {
      obj.lastPriceSubscriptions = [];
    }
    return obj;
  },
};

function createBaseLastPriceSubscription(): LastPriceSubscription {
  return {
    figi: "",
    subscriptionStatus: 0,
    instrumentUid: "",
    streamId: "",
    subscriptionId: "",
  };
}

export const LastPriceSubscription = {
  encode(
    message: LastPriceSubscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(26).string(message.instrumentUid);
    }
    if (message.streamId !== "") {
      writer.uint32(34).string(message.streamId);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(42).string(message.subscriptionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LastPriceSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPriceSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.subscriptionStatus = reader.int32() as any;
          break;
        case 3:
          message.instrumentUid = reader.string();
          break;
        case 4:
          message.streamId = reader.string();
          break;
        case 5:
          message.subscriptionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastPriceSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? subscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      streamId: isSet(object.streamId) ? String(object.streamId) : "",
      subscriptionId: isSet(object.subscriptionId)
        ? String(object.subscriptionId)
        : "",
    };
  },

  toJSON(message: LastPriceSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(
        message.subscriptionStatus
      ));
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.subscriptionId !== undefined &&
      (obj.subscriptionId = message.subscriptionId);
    return obj;
  },
};

function createBaseCandle(): Candle {
  return {
    figi: "",
    interval: 0,
    open: undefined,
    high: undefined,
    low: undefined,
    close: undefined,
    volume: 0,
    time: undefined,
    lastTradeTs: undefined,
    instrumentUid: "",
    candleSourceType: 0,
  };
}

export const Candle = {
  encode(
    message: Candle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.open !== undefined) {
      Quotation.encode(message.open, writer.uint32(26).fork()).ldelim();
    }
    if (message.high !== undefined) {
      Quotation.encode(message.high, writer.uint32(34).fork()).ldelim();
    }
    if (message.low !== undefined) {
      Quotation.encode(message.low, writer.uint32(42).fork()).ldelim();
    }
    if (message.close !== undefined) {
      Quotation.encode(message.close, writer.uint32(50).fork()).ldelim();
    }
    if (message.volume !== 0) {
      writer.uint32(56).int64(message.volume);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.lastTradeTs !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastTradeTs),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(82).string(message.instrumentUid);
    }
    if (message.candleSourceType !== 0) {
      writer.uint32(152).int32(message.candleSourceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Candle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        case 3:
          message.open = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.high = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.low = Quotation.decode(reader, reader.uint32());
          break;
        case 6:
          message.close = Quotation.decode(reader, reader.uint32());
          break;
        case 7:
          message.volume = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.lastTradeTs = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.instrumentUid = reader.string();
          break;
        case 19:
          message.candleSourceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Candle {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      interval: isSet(object.interval)
        ? subscriptionIntervalFromJSON(object.interval)
        : 0,
      open: isSet(object.open) ? Quotation.fromJSON(object.open) : undefined,
      high: isSet(object.high) ? Quotation.fromJSON(object.high) : undefined,
      low: isSet(object.low) ? Quotation.fromJSON(object.low) : undefined,
      close: isSet(object.close) ? Quotation.fromJSON(object.close) : undefined,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      lastTradeTs: isSet(object.lastTradeTs)
        ? fromJsonTimestamp(object.lastTradeTs)
        : undefined,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      candleSourceType: isSet(object.candleSourceType)
        ? candleSourceFromJSON(object.candleSourceType)
        : 0,
    };
  },

  toJSON(message: Candle): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.interval !== undefined &&
      (obj.interval = subscriptionIntervalToJSON(message.interval));
    message.open !== undefined &&
      (obj.open = message.open ? Quotation.toJSON(message.open) : undefined);
    message.high !== undefined &&
      (obj.high = message.high ? Quotation.toJSON(message.high) : undefined);
    message.low !== undefined &&
      (obj.low = message.low ? Quotation.toJSON(message.low) : undefined);
    message.close !== undefined &&
      (obj.close = message.close ? Quotation.toJSON(message.close) : undefined);
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.lastTradeTs !== undefined &&
      (obj.lastTradeTs = message.lastTradeTs.toISOString());
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.candleSourceType !== undefined &&
      (obj.candleSourceType = candleSourceToJSON(message.candleSourceType));
    return obj;
  },
};

function createBaseOrderBook(): OrderBook {
  return {
    figi: "",
    depth: 0,
    isConsistent: false,
    bids: [],
    asks: [],
    time: undefined,
    limitUp: undefined,
    limitDown: undefined,
    instrumentUid: "",
    orderBookType: 0,
  };
}

export const OrderBook = {
  encode(
    message: OrderBook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.isConsistent === true) {
      writer.uint32(24).bool(message.isConsistent);
    }
    for (const v of message.bids) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.asks) {
      Order.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.limitUp !== undefined) {
      Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
    }
    if (message.limitDown !== undefined) {
      Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(74).string(message.instrumentUid);
    }
    if (message.orderBookType !== 0) {
      writer.uint32(80).int32(message.orderBookType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.isConsistent = reader.bool();
          break;
        case 4:
          message.bids.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.asks.push(Order.decode(reader, reader.uint32()));
          break;
        case 6:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.limitUp = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.limitDown = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.instrumentUid = reader.string();
          break;
        case 10:
          message.orderBookType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBook {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      isConsistent: isSet(object.isConsistent)
        ? Boolean(object.isConsistent)
        : false,
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => Order.fromJSON(e))
        : [],
      asks: Array.isArray(object?.asks)
        ? object.asks.map((e: any) => Order.fromJSON(e))
        : [],
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      limitUp: isSet(object.limitUp)
        ? Quotation.fromJSON(object.limitUp)
        : undefined,
      limitDown: isSet(object.limitDown)
        ? Quotation.fromJSON(object.limitDown)
        : undefined,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      orderBookType: isSet(object.orderBookType)
        ? orderBookTypeFromJSON(object.orderBookType)
        : 0,
    };
  },

  toJSON(message: OrderBook): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    message.isConsistent !== undefined &&
      (obj.isConsistent = message.isConsistent);
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    if (message.asks) {
      obj.asks = message.asks.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.asks = [];
    }
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.limitUp !== undefined &&
      (obj.limitUp = message.limitUp
        ? Quotation.toJSON(message.limitUp)
        : undefined);
    message.limitDown !== undefined &&
      (obj.limitDown = message.limitDown
        ? Quotation.toJSON(message.limitDown)
        : undefined);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.orderBookType !== undefined &&
      (obj.orderBookType = orderBookTypeToJSON(message.orderBookType));
    return obj;
  },
};

function createBaseOrder(): Order {
  return { price: undefined, quantity: 0 };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 2:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.price !== undefined &&
      (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    return obj;
  },
};

function createBaseTrade(): Trade {
  return {
    figi: "",
    direction: 0,
    price: undefined,
    quantity: 0,
    time: undefined,
    instrumentUid: "",
    tradeSource: 0,
  };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(32).int64(message.quantity);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(50).string(message.instrumentUid);
    }
    if (message.tradeSource !== 0) {
      writer.uint32(56).int32(message.tradeSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.direction = reader.int32() as any;
          break;
        case 3:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.instrumentUid = reader.string();
          break;
        case 7:
          message.tradeSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trade {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      direction: isSet(object.direction)
        ? tradeDirectionFromJSON(object.direction)
        : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      tradeSource: isSet(object.tradeSource)
        ? tradeSourceTypeFromJSON(object.tradeSource)
        : 0,
    };
  },

  toJSON(message: Trade): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.direction !== undefined &&
      (obj.direction = tradeDirectionToJSON(message.direction));
    message.price !== undefined &&
      (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.tradeSource !== undefined &&
      (obj.tradeSource = tradeSourceTypeToJSON(message.tradeSource));
    return obj;
  },
};

function createBaseTradingStatus(): TradingStatus {
  return {
    figi: "",
    tradingStatus: 0,
    time: undefined,
    limitOrderAvailableFlag: false,
    marketOrderAvailableFlag: false,
    instrumentUid: "",
  };
}

export const TradingStatus = {
  encode(
    message: TradingStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(16).int32(message.tradingStatus);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.limitOrderAvailableFlag === true) {
      writer.uint32(32).bool(message.limitOrderAvailableFlag);
    }
    if (message.marketOrderAvailableFlag === true) {
      writer.uint32(40).bool(message.marketOrderAvailableFlag);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(50).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.tradingStatus = reader.int32() as any;
          break;
        case 3:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.limitOrderAvailableFlag = reader.bool();
          break;
        case 5:
          message.marketOrderAvailableFlag = reader.bool();
          break;
        case 6:
          message.instrumentUid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradingStatus {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag)
        ? Boolean(object.limitOrderAvailableFlag)
        : false,
      marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
        ? Boolean(object.marketOrderAvailableFlag)
        : false,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
    };
  },

  toJSON(message: TradingStatus): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.limitOrderAvailableFlag !== undefined &&
      (obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag);
    message.marketOrderAvailableFlag !== undefined &&
      (obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    return obj;
  },
};

function createBaseGetCandlesRequest(): GetCandlesRequest {
  return {
    figi: undefined,
    from: undefined,
    to: undefined,
    interval: 0,
    instrumentId: undefined,
    candleSourceType: undefined,
    limit: undefined,
  };
}

export const GetCandlesRequest = {
  encode(
    message: GetCandlesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== undefined) {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.interval !== 0) {
      writer.uint32(32).int32(message.interval);
    }
    if (message.instrumentId !== undefined) {
      writer.uint32(42).string(message.instrumentId);
    }
    if (message.candleSourceType !== undefined) {
      writer.uint32(56).int32(message.candleSourceType);
    }
    if (message.limit !== undefined) {
      writer.uint32(80).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.interval = reader.int32() as any;
          break;
        case 5:
          message.instrumentId = reader.string();
          break;
        case 7:
          message.candleSourceType = reader.int32() as any;
          break;
        case 10:
          message.limit = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCandlesRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : undefined,
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      interval: isSet(object.interval)
        ? candleIntervalFromJSON(object.interval)
        : 0,
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : undefined,
      candleSourceType: isSet(object.candleSourceType)
        ? getCandlesRequest_CandleSourceFromJSON(object.candleSourceType)
        : undefined,
      limit: isSet(object.limit) ? Number(object.limit) : undefined,
    };
  },

  toJSON(message: GetCandlesRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    message.interval !== undefined &&
      (obj.interval = candleIntervalToJSON(message.interval));
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    message.candleSourceType !== undefined &&
      (obj.candleSourceType =
        message.candleSourceType !== undefined
          ? getCandlesRequest_CandleSourceToJSON(message.candleSourceType)
          : undefined);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },
};

function createBaseGetCandlesResponse(): GetCandlesResponse {
  return { candles: [] };
}

export const GetCandlesResponse = {
  encode(
    message: GetCandlesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.candles) {
      HistoricCandle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candles.push(HistoricCandle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCandlesResponse {
    return {
      candles: Array.isArray(object?.candles)
        ? object.candles.map((e: any) => HistoricCandle.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCandlesResponse): unknown {
    const obj: any = {};
    if (message.candles) {
      obj.candles = message.candles.map((e) =>
        e ? HistoricCandle.toJSON(e) : undefined
      );
    } else {
      obj.candles = [];
    }
    return obj;
  },
};

function createBaseHistoricCandle(): HistoricCandle {
  return {
    open: undefined,
    high: undefined,
    low: undefined,
    close: undefined,
    volume: 0,
    time: undefined,
    isComplete: false,
    candleSourceType: 0,
  };
}

export const HistoricCandle = {
  encode(
    message: HistoricCandle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.open !== undefined) {
      Quotation.encode(message.open, writer.uint32(10).fork()).ldelim();
    }
    if (message.high !== undefined) {
      Quotation.encode(message.high, writer.uint32(18).fork()).ldelim();
    }
    if (message.low !== undefined) {
      Quotation.encode(message.low, writer.uint32(26).fork()).ldelim();
    }
    if (message.close !== undefined) {
      Quotation.encode(message.close, writer.uint32(34).fork()).ldelim();
    }
    if (message.volume !== 0) {
      writer.uint32(40).int64(message.volume);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.isComplete === true) {
      writer.uint32(56).bool(message.isComplete);
    }
    if (message.candleSourceType !== 0) {
      writer.uint32(72).int32(message.candleSourceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricCandle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricCandle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.open = Quotation.decode(reader, reader.uint32());
          break;
        case 2:
          message.high = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.low = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.close = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.volume = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.isComplete = reader.bool();
          break;
        case 9:
          message.candleSourceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricCandle {
    return {
      open: isSet(object.open) ? Quotation.fromJSON(object.open) : undefined,
      high: isSet(object.high) ? Quotation.fromJSON(object.high) : undefined,
      low: isSet(object.low) ? Quotation.fromJSON(object.low) : undefined,
      close: isSet(object.close) ? Quotation.fromJSON(object.close) : undefined,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      isComplete: isSet(object.isComplete) ? Boolean(object.isComplete) : false,
      candleSourceType: isSet(object.candleSourceType)
        ? candleSourceFromJSON(object.candleSourceType)
        : 0,
    };
  },

  toJSON(message: HistoricCandle): unknown {
    const obj: any = {};
    message.open !== undefined &&
      (obj.open = message.open ? Quotation.toJSON(message.open) : undefined);
    message.high !== undefined &&
      (obj.high = message.high ? Quotation.toJSON(message.high) : undefined);
    message.low !== undefined &&
      (obj.low = message.low ? Quotation.toJSON(message.low) : undefined);
    message.close !== undefined &&
      (obj.close = message.close ? Quotation.toJSON(message.close) : undefined);
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.isComplete !== undefined && (obj.isComplete = message.isComplete);
    message.candleSourceType !== undefined &&
      (obj.candleSourceType = candleSourceToJSON(message.candleSourceType));
    return obj;
  },
};

function createBaseGetLastPricesRequest(): GetLastPricesRequest {
  return {
    figi: [],
    instrumentId: [],
    lastPriceType: 0,
    instrumentStatus: undefined,
  };
}

export const GetLastPricesRequest = {
  encode(
    message: GetLastPricesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.figi) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.instrumentId) {
      writer.uint32(18).string(v!);
    }
    if (message.lastPriceType !== 0) {
      writer.uint32(24).int32(message.lastPriceType);
    }
    if (message.instrumentStatus !== undefined) {
      writer.uint32(72).int32(message.instrumentStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi.push(reader.string());
          break;
        case 2:
          message.instrumentId.push(reader.string());
          break;
        case 3:
          message.lastPriceType = reader.int32() as any;
          break;
        case 9:
          message.instrumentStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastPricesRequest {
    return {
      figi: Array.isArray(object?.figi)
        ? object.figi.map((e: any) => String(e))
        : [],
      instrumentId: Array.isArray(object?.instrumentId)
        ? object.instrumentId.map((e: any) => String(e))
        : [],
      lastPriceType: isSet(object.lastPriceType)
        ? lastPriceTypeFromJSON(object.lastPriceType)
        : 0,
      instrumentStatus: isSet(object.instrumentStatus)
        ? instrumentStatusFromJSON(object.instrumentStatus)
        : undefined,
    };
  },

  toJSON(message: GetLastPricesRequest): unknown {
    const obj: any = {};
    if (message.figi) {
      obj.figi = message.figi.map((e) => e);
    } else {
      obj.figi = [];
    }
    if (message.instrumentId) {
      obj.instrumentId = message.instrumentId.map((e) => e);
    } else {
      obj.instrumentId = [];
    }
    message.lastPriceType !== undefined &&
      (obj.lastPriceType = lastPriceTypeToJSON(message.lastPriceType));
    message.instrumentStatus !== undefined &&
      (obj.instrumentStatus =
        message.instrumentStatus !== undefined
          ? instrumentStatusToJSON(message.instrumentStatus)
          : undefined);
    return obj;
  },
};

function createBaseGetLastPricesResponse(): GetLastPricesResponse {
  return { lastPrices: [] };
}

export const GetLastPricesResponse = {
  encode(
    message: GetLastPricesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lastPrices) {
      LastPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastPrices.push(LastPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastPricesResponse {
    return {
      lastPrices: Array.isArray(object?.lastPrices)
        ? object.lastPrices.map((e: any) => LastPrice.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetLastPricesResponse): unknown {
    const obj: any = {};
    if (message.lastPrices) {
      obj.lastPrices = message.lastPrices.map((e) =>
        e ? LastPrice.toJSON(e) : undefined
      );
    } else {
      obj.lastPrices = [];
    }
    return obj;
  },
};

function createBaseLastPrice(): LastPrice {
  return {
    figi: "",
    price: undefined,
    time: undefined,
    instrumentUid: "",
    lastPriceType: 0,
  };
}

export const LastPrice = {
  encode(
    message: LastPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(90).string(message.instrumentUid);
    }
    if (message.lastPriceType !== 0) {
      writer.uint32(96).int32(message.lastPriceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.instrumentUid = reader.string();
          break;
        case 12:
          message.lastPriceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastPrice {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      lastPriceType: isSet(object.lastPriceType)
        ? lastPriceTypeFromJSON(object.lastPriceType)
        : 0,
    };
  },

  toJSON(message: LastPrice): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.price !== undefined &&
      (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.lastPriceType !== undefined &&
      (obj.lastPriceType = lastPriceTypeToJSON(message.lastPriceType));
    return obj;
  },
};

function createBaseGetOrderBookRequest(): GetOrderBookRequest {
  return { figi: undefined, depth: 0, instrumentId: undefined };
}

export const GetOrderBookRequest = {
  encode(
    message: GetOrderBookRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== undefined) {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.instrumentId !== undefined) {
      writer.uint32(26).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.instrumentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrderBookRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : undefined,
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : undefined,
    };
  },

  toJSON(message: GetOrderBookRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    return obj;
  },
};

function createBaseGetOrderBookResponse(): GetOrderBookResponse {
  return {
    figi: "",
    depth: 0,
    bids: [],
    asks: [],
    lastPrice: undefined,
    closePrice: undefined,
    limitUp: undefined,
    limitDown: undefined,
    lastPriceTs: undefined,
    closePriceTs: undefined,
    orderbookTs: undefined,
    instrumentUid: "",
  };
}

export const GetOrderBookResponse = {
  encode(
    message: GetOrderBookResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    for (const v of message.bids) {
      Order.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.asks) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastPrice !== undefined) {
      Quotation.encode(message.lastPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.closePrice !== undefined) {
      Quotation.encode(message.closePrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.limitUp !== undefined) {
      Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
    }
    if (message.limitDown !== undefined) {
      Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastPriceTs !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastPriceTs),
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.closePriceTs !== undefined) {
      Timestamp.encode(
        toTimestamp(message.closePriceTs),
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.orderbookTs !== undefined) {
      Timestamp.encode(
        toTimestamp(message.orderbookTs),
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(74).string(message.instrumentUid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetOrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.bids.push(Order.decode(reader, reader.uint32()));
          break;
        case 4:
          message.asks.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastPrice = Quotation.decode(reader, reader.uint32());
          break;
        case 6:
          message.closePrice = Quotation.decode(reader, reader.uint32());
          break;
        case 7:
          message.limitUp = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.limitDown = Quotation.decode(reader, reader.uint32());
          break;
        case 21:
          message.lastPriceTs = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.closePriceTs = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 23:
          message.orderbookTs = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.instrumentUid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrderBookResponse {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => Order.fromJSON(e))
        : [],
      asks: Array.isArray(object?.asks)
        ? object.asks.map((e: any) => Order.fromJSON(e))
        : [],
      lastPrice: isSet(object.lastPrice)
        ? Quotation.fromJSON(object.lastPrice)
        : undefined,
      closePrice: isSet(object.closePrice)
        ? Quotation.fromJSON(object.closePrice)
        : undefined,
      limitUp: isSet(object.limitUp)
        ? Quotation.fromJSON(object.limitUp)
        : undefined,
      limitDown: isSet(object.limitDown)
        ? Quotation.fromJSON(object.limitDown)
        : undefined,
      lastPriceTs: isSet(object.lastPriceTs)
        ? fromJsonTimestamp(object.lastPriceTs)
        : undefined,
      closePriceTs: isSet(object.closePriceTs)
        ? fromJsonTimestamp(object.closePriceTs)
        : undefined,
      orderbookTs: isSet(object.orderbookTs)
        ? fromJsonTimestamp(object.orderbookTs)
        : undefined,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
    };
  },

  toJSON(message: GetOrderBookResponse): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    if (message.asks) {
      obj.asks = message.asks.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.asks = [];
    }
    message.lastPrice !== undefined &&
      (obj.lastPrice = message.lastPrice
        ? Quotation.toJSON(message.lastPrice)
        : undefined);
    message.closePrice !== undefined &&
      (obj.closePrice = message.closePrice
        ? Quotation.toJSON(message.closePrice)
        : undefined);
    message.limitUp !== undefined &&
      (obj.limitUp = message.limitUp
        ? Quotation.toJSON(message.limitUp)
        : undefined);
    message.limitDown !== undefined &&
      (obj.limitDown = message.limitDown
        ? Quotation.toJSON(message.limitDown)
        : undefined);
    message.lastPriceTs !== undefined &&
      (obj.lastPriceTs = message.lastPriceTs.toISOString());
    message.closePriceTs !== undefined &&
      (obj.closePriceTs = message.closePriceTs.toISOString());
    message.orderbookTs !== undefined &&
      (obj.orderbookTs = message.orderbookTs.toISOString());
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    return obj;
  },
};

function createBaseGetTradingStatusRequest(): GetTradingStatusRequest {
  return { figi: undefined, instrumentId: undefined };
}

export const GetTradingStatusRequest = {
  encode(
    message: GetTradingStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== undefined) {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== undefined) {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTradingStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.instrumentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : undefined,
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : undefined,
    };
  },

  toJSON(message: GetTradingStatusRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    return obj;
  },
};

function createBaseGetTradingStatusesRequest(): GetTradingStatusesRequest {
  return { instrumentId: [] };
}

export const GetTradingStatusesRequest = {
  encode(
    message: GetTradingStatusesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instrumentId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTradingStatusesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrumentId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusesRequest {
    return {
      instrumentId: Array.isArray(object?.instrumentId)
        ? object.instrumentId.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetTradingStatusesRequest): unknown {
    const obj: any = {};
    if (message.instrumentId) {
      obj.instrumentId = message.instrumentId.map((e) => e);
    } else {
      obj.instrumentId = [];
    }
    return obj;
  },
};

function createBaseGetTradingStatusesResponse(): GetTradingStatusesResponse {
  return { tradingStatuses: [] };
}

export const GetTradingStatusesResponse = {
  encode(
    message: GetTradingStatusesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tradingStatuses) {
      GetTradingStatusResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTradingStatusesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradingStatuses.push(
            GetTradingStatusResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusesResponse {
    return {
      tradingStatuses: Array.isArray(object?.tradingStatuses)
        ? object.tradingStatuses.map((e: any) =>
            GetTradingStatusResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetTradingStatusesResponse): unknown {
    const obj: any = {};
    if (message.tradingStatuses) {
      obj.tradingStatuses = message.tradingStatuses.map((e) =>
        e ? GetTradingStatusResponse.toJSON(e) : undefined
      );
    } else {
      obj.tradingStatuses = [];
    }
    return obj;
  },
};

function createBaseGetTradingStatusResponse(): GetTradingStatusResponse {
  return {
    figi: "",
    tradingStatus: 0,
    limitOrderAvailableFlag: false,
    marketOrderAvailableFlag: false,
    apiTradeAvailableFlag: false,
    instrumentUid: "",
    bestpriceOrderAvailableFlag: false,
    onlyBestPrice: false,
  };
}

export const GetTradingStatusResponse = {
  encode(
    message: GetTradingStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(16).int32(message.tradingStatus);
    }
    if (message.limitOrderAvailableFlag === true) {
      writer.uint32(24).bool(message.limitOrderAvailableFlag);
    }
    if (message.marketOrderAvailableFlag === true) {
      writer.uint32(32).bool(message.marketOrderAvailableFlag);
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(40).bool(message.apiTradeAvailableFlag);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(50).string(message.instrumentUid);
    }
    if (message.bestpriceOrderAvailableFlag === true) {
      writer.uint32(64).bool(message.bestpriceOrderAvailableFlag);
    }
    if (message.onlyBestPrice === true) {
      writer.uint32(72).bool(message.onlyBestPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTradingStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.tradingStatus = reader.int32() as any;
          break;
        case 3:
          message.limitOrderAvailableFlag = reader.bool();
          break;
        case 4:
          message.marketOrderAvailableFlag = reader.bool();
          break;
        case 5:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        case 6:
          message.instrumentUid = reader.string();
          break;
        case 8:
          message.bestpriceOrderAvailableFlag = reader.bool();
          break;
        case 9:
          message.onlyBestPrice = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusResponse {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag)
        ? Boolean(object.limitOrderAvailableFlag)
        : false,
      marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
        ? Boolean(object.marketOrderAvailableFlag)
        : false,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      bestpriceOrderAvailableFlag: isSet(object.bestpriceOrderAvailableFlag)
        ? Boolean(object.bestpriceOrderAvailableFlag)
        : false,
      onlyBestPrice: isSet(object.onlyBestPrice)
        ? Boolean(object.onlyBestPrice)
        : false,
    };
  },

  toJSON(message: GetTradingStatusResponse): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.limitOrderAvailableFlag !== undefined &&
      (obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag);
    message.marketOrderAvailableFlag !== undefined &&
      (obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.bestpriceOrderAvailableFlag !== undefined &&
      (obj.bestpriceOrderAvailableFlag = message.bestpriceOrderAvailableFlag);
    message.onlyBestPrice !== undefined &&
      (obj.onlyBestPrice = message.onlyBestPrice);
    return obj;
  },
};

function createBaseGetLastTradesRequest(): GetLastTradesRequest {
  return {
    figi: undefined,
    from: undefined,
    to: undefined,
    instrumentId: undefined,
    tradeSource: 0,
  };
}

export const GetLastTradesRequest = {
  encode(
    message: GetLastTradesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== undefined) {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.instrumentId !== undefined) {
      writer.uint32(34).string(message.instrumentId);
    }
    if (message.tradeSource !== 0) {
      writer.uint32(40).int32(message.tradeSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastTradesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.instrumentId = reader.string();
          break;
        case 5:
          message.tradeSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastTradesRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : undefined,
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : undefined,
      tradeSource: isSet(object.tradeSource)
        ? tradeSourceTypeFromJSON(object.tradeSource)
        : 0,
    };
  },

  toJSON(message: GetLastTradesRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    message.tradeSource !== undefined &&
      (obj.tradeSource = tradeSourceTypeToJSON(message.tradeSource));
    return obj;
  },
};

function createBaseGetLastTradesResponse(): GetLastTradesResponse {
  return { trades: [] };
}

export const GetLastTradesResponse = {
  encode(
    message: GetLastTradesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastTradesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastTradesResponse {
    return {
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => Trade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetLastTradesResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    return obj;
  },
};

function createBaseGetMySubscriptions(): GetMySubscriptions {
  return {};
}

export const GetMySubscriptions = {
  encode(
    _: GetMySubscriptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMySubscriptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMySubscriptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetMySubscriptions {
    return {};
  },

  toJSON(_: GetMySubscriptions): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetClosePricesRequest(): GetClosePricesRequest {
  return { instruments: [], instrumentStatus: undefined };
}

export const GetClosePricesRequest = {
  encode(
    message: GetClosePricesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      InstrumentClosePriceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.instrumentStatus !== undefined) {
      writer.uint32(72).int32(message.instrumentStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetClosePricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetClosePricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(
            InstrumentClosePriceRequest.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.instrumentStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetClosePricesRequest {
    return {
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) =>
            InstrumentClosePriceRequest.fromJSON(e)
          )
        : [],
      instrumentStatus: isSet(object.instrumentStatus)
        ? instrumentStatusFromJSON(object.instrumentStatus)
        : undefined,
    };
  },

  toJSON(message: GetClosePricesRequest): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? InstrumentClosePriceRequest.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    message.instrumentStatus !== undefined &&
      (obj.instrumentStatus =
        message.instrumentStatus !== undefined
          ? instrumentStatusToJSON(message.instrumentStatus)
          : undefined);
    return obj;
  },
};

function createBaseInstrumentClosePriceRequest(): InstrumentClosePriceRequest {
  return { instrumentId: "" };
}

export const InstrumentClosePriceRequest = {
  encode(
    message: InstrumentClosePriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrumentId !== "") {
      writer.uint32(10).string(message.instrumentId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InstrumentClosePriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentClosePriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrumentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentClosePriceRequest {
    return {
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : "",
    };
  },

  toJSON(message: InstrumentClosePriceRequest): unknown {
    const obj: any = {};
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    return obj;
  },
};

function createBaseGetClosePricesResponse(): GetClosePricesResponse {
  return { closePrices: [] };
}

export const GetClosePricesResponse = {
  encode(
    message: GetClosePricesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.closePrices) {
      InstrumentClosePriceResponse.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetClosePricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetClosePricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.closePrices.push(
            InstrumentClosePriceResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetClosePricesResponse {
    return {
      closePrices: Array.isArray(object?.closePrices)
        ? object.closePrices.map((e: any) =>
            InstrumentClosePriceResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetClosePricesResponse): unknown {
    const obj: any = {};
    if (message.closePrices) {
      obj.closePrices = message.closePrices.map((e) =>
        e ? InstrumentClosePriceResponse.toJSON(e) : undefined
      );
    } else {
      obj.closePrices = [];
    }
    return obj;
  },
};

function createBaseInstrumentClosePriceResponse(): InstrumentClosePriceResponse {
  return {
    figi: "",
    instrumentUid: "",
    price: undefined,
    eveningSessionPrice: undefined,
    time: undefined,
  };
}

export const InstrumentClosePriceResponse = {
  encode(
    message: InstrumentClosePriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(18).string(message.instrumentUid);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(90).fork()).ldelim();
    }
    if (message.eveningSessionPrice !== undefined) {
      Quotation.encode(
        message.eveningSessionPrice,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(170).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InstrumentClosePriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentClosePriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.instrumentUid = reader.string();
          break;
        case 11:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.eveningSessionPrice = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentClosePriceResponse {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      eveningSessionPrice: isSet(object.eveningSessionPrice)
        ? Quotation.fromJSON(object.eveningSessionPrice)
        : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
    };
  },

  toJSON(message: InstrumentClosePriceResponse): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.price !== undefined &&
      (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.eveningSessionPrice !== undefined &&
      (obj.eveningSessionPrice = message.eveningSessionPrice
        ? Quotation.toJSON(message.eveningSessionPrice)
        : undefined);
    message.time !== undefined && (obj.time = message.time.toISOString());
    return obj;
  },
};

function createBaseGetTechAnalysisRequest(): GetTechAnalysisRequest {
  return {
    indicatorType: 0,
    instrumentUid: "",
    from: undefined,
    to: undefined,
    interval: 0,
    typeOfPrice: 0,
    length: 0,
    deviation: undefined,
    smoothing: undefined,
  };
}

export const GetTechAnalysisRequest = {
  encode(
    message: GetTechAnalysisRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.indicatorType !== 0) {
      writer.uint32(8).int32(message.indicatorType);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(18).string(message.instrumentUid);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.interval !== 0) {
      writer.uint32(40).int32(message.interval);
    }
    if (message.typeOfPrice !== 0) {
      writer.uint32(48).int32(message.typeOfPrice);
    }
    if (message.length !== 0) {
      writer.uint32(56).int32(message.length);
    }
    if (message.deviation !== undefined) {
      GetTechAnalysisRequest_Deviation.encode(
        message.deviation,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.smoothing !== undefined) {
      GetTechAnalysisRequest_Smoothing.encode(
        message.smoothing,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTechAnalysisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTechAnalysisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.indicatorType = reader.int32() as any;
          break;
        case 2:
          message.instrumentUid = reader.string();
          break;
        case 3:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.interval = reader.int32() as any;
          break;
        case 6:
          message.typeOfPrice = reader.int32() as any;
          break;
        case 7:
          message.length = reader.int32();
          break;
        case 8:
          message.deviation = GetTechAnalysisRequest_Deviation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.smoothing = GetTechAnalysisRequest_Smoothing.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTechAnalysisRequest {
    return {
      indicatorType: isSet(object.indicatorType)
        ? getTechAnalysisRequest_IndicatorTypeFromJSON(object.indicatorType)
        : 0,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      interval: isSet(object.interval)
        ? getTechAnalysisRequest_IndicatorIntervalFromJSON(object.interval)
        : 0,
      typeOfPrice: isSet(object.typeOfPrice)
        ? getTechAnalysisRequest_TypeOfPriceFromJSON(object.typeOfPrice)
        : 0,
      length: isSet(object.length) ? Number(object.length) : 0,
      deviation: isSet(object.deviation)
        ? GetTechAnalysisRequest_Deviation.fromJSON(object.deviation)
        : undefined,
      smoothing: isSet(object.smoothing)
        ? GetTechAnalysisRequest_Smoothing.fromJSON(object.smoothing)
        : undefined,
    };
  },

  toJSON(message: GetTechAnalysisRequest): unknown {
    const obj: any = {};
    message.indicatorType !== undefined &&
      (obj.indicatorType = getTechAnalysisRequest_IndicatorTypeToJSON(
        message.indicatorType
      ));
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    message.interval !== undefined &&
      (obj.interval = getTechAnalysisRequest_IndicatorIntervalToJSON(
        message.interval
      ));
    message.typeOfPrice !== undefined &&
      (obj.typeOfPrice = getTechAnalysisRequest_TypeOfPriceToJSON(
        message.typeOfPrice
      ));
    message.length !== undefined && (obj.length = Math.round(message.length));
    message.deviation !== undefined &&
      (obj.deviation = message.deviation
        ? GetTechAnalysisRequest_Deviation.toJSON(message.deviation)
        : undefined);
    message.smoothing !== undefined &&
      (obj.smoothing = message.smoothing
        ? GetTechAnalysisRequest_Smoothing.toJSON(message.smoothing)
        : undefined);
    return obj;
  },
};

function createBaseGetTechAnalysisRequest_Smoothing(): GetTechAnalysisRequest_Smoothing {
  return { fastLength: 0, slowLength: 0, signalSmoothing: 0 };
}

export const GetTechAnalysisRequest_Smoothing = {
  encode(
    message: GetTechAnalysisRequest_Smoothing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fastLength !== 0) {
      writer.uint32(8).int32(message.fastLength);
    }
    if (message.slowLength !== 0) {
      writer.uint32(16).int32(message.slowLength);
    }
    if (message.signalSmoothing !== 0) {
      writer.uint32(24).int32(message.signalSmoothing);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTechAnalysisRequest_Smoothing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTechAnalysisRequest_Smoothing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fastLength = reader.int32();
          break;
        case 2:
          message.slowLength = reader.int32();
          break;
        case 3:
          message.signalSmoothing = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTechAnalysisRequest_Smoothing {
    return {
      fastLength: isSet(object.fastLength) ? Number(object.fastLength) : 0,
      slowLength: isSet(object.slowLength) ? Number(object.slowLength) : 0,
      signalSmoothing: isSet(object.signalSmoothing)
        ? Number(object.signalSmoothing)
        : 0,
    };
  },

  toJSON(message: GetTechAnalysisRequest_Smoothing): unknown {
    const obj: any = {};
    message.fastLength !== undefined &&
      (obj.fastLength = Math.round(message.fastLength));
    message.slowLength !== undefined &&
      (obj.slowLength = Math.round(message.slowLength));
    message.signalSmoothing !== undefined &&
      (obj.signalSmoothing = Math.round(message.signalSmoothing));
    return obj;
  },
};

function createBaseGetTechAnalysisRequest_Deviation(): GetTechAnalysisRequest_Deviation {
  return { deviationMultiplier: undefined };
}

export const GetTechAnalysisRequest_Deviation = {
  encode(
    message: GetTechAnalysisRequest_Deviation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviationMultiplier !== undefined) {
      Quotation.encode(
        message.deviationMultiplier,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTechAnalysisRequest_Deviation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTechAnalysisRequest_Deviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviationMultiplier = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTechAnalysisRequest_Deviation {
    return {
      deviationMultiplier: isSet(object.deviationMultiplier)
        ? Quotation.fromJSON(object.deviationMultiplier)
        : undefined,
    };
  },

  toJSON(message: GetTechAnalysisRequest_Deviation): unknown {
    const obj: any = {};
    message.deviationMultiplier !== undefined &&
      (obj.deviationMultiplier = message.deviationMultiplier
        ? Quotation.toJSON(message.deviationMultiplier)
        : undefined);
    return obj;
  },
};

function createBaseGetTechAnalysisResponse(): GetTechAnalysisResponse {
  return { technicalIndicators: [] };
}

export const GetTechAnalysisResponse = {
  encode(
    message: GetTechAnalysisResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.technicalIndicators) {
      GetTechAnalysisResponse_TechAnalysisItem.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTechAnalysisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTechAnalysisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.technicalIndicators.push(
            GetTechAnalysisResponse_TechAnalysisItem.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTechAnalysisResponse {
    return {
      technicalIndicators: Array.isArray(object?.technicalIndicators)
        ? object.technicalIndicators.map((e: any) =>
            GetTechAnalysisResponse_TechAnalysisItem.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetTechAnalysisResponse): unknown {
    const obj: any = {};
    if (message.technicalIndicators) {
      obj.technicalIndicators = message.technicalIndicators.map((e) =>
        e ? GetTechAnalysisResponse_TechAnalysisItem.toJSON(e) : undefined
      );
    } else {
      obj.technicalIndicators = [];
    }
    return obj;
  },
};

function createBaseGetTechAnalysisResponse_TechAnalysisItem(): GetTechAnalysisResponse_TechAnalysisItem {
  return {
    timestamp: undefined,
    middleBand: undefined,
    upperBand: undefined,
    lowerBand: undefined,
    signal: undefined,
    macd: undefined,
  };
}

export const GetTechAnalysisResponse_TechAnalysisItem = {
  encode(
    message: GetTechAnalysisResponse_TechAnalysisItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.middleBand !== undefined) {
      Quotation.encode(message.middleBand, writer.uint32(18).fork()).ldelim();
    }
    if (message.upperBand !== undefined) {
      Quotation.encode(message.upperBand, writer.uint32(26).fork()).ldelim();
    }
    if (message.lowerBand !== undefined) {
      Quotation.encode(message.lowerBand, writer.uint32(34).fork()).ldelim();
    }
    if (message.signal !== undefined) {
      Quotation.encode(message.signal, writer.uint32(42).fork()).ldelim();
    }
    if (message.macd !== undefined) {
      Quotation.encode(message.macd, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTechAnalysisResponse_TechAnalysisItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTechAnalysisResponse_TechAnalysisItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.middleBand = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.upperBand = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.lowerBand = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.signal = Quotation.decode(reader, reader.uint32());
          break;
        case 6:
          message.macd = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTechAnalysisResponse_TechAnalysisItem {
    return {
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      middleBand: isSet(object.middleBand)
        ? Quotation.fromJSON(object.middleBand)
        : undefined,
      upperBand: isSet(object.upperBand)
        ? Quotation.fromJSON(object.upperBand)
        : undefined,
      lowerBand: isSet(object.lowerBand)
        ? Quotation.fromJSON(object.lowerBand)
        : undefined,
      signal: isSet(object.signal)
        ? Quotation.fromJSON(object.signal)
        : undefined,
      macd: isSet(object.macd) ? Quotation.fromJSON(object.macd) : undefined,
    };
  },

  toJSON(message: GetTechAnalysisResponse_TechAnalysisItem): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.middleBand !== undefined &&
      (obj.middleBand = message.middleBand
        ? Quotation.toJSON(message.middleBand)
        : undefined);
    message.upperBand !== undefined &&
      (obj.upperBand = message.upperBand
        ? Quotation.toJSON(message.upperBand)
        : undefined);
    message.lowerBand !== undefined &&
      (obj.lowerBand = message.lowerBand
        ? Quotation.toJSON(message.lowerBand)
        : undefined);
    message.signal !== undefined &&
      (obj.signal = message.signal
        ? Quotation.toJSON(message.signal)
        : undefined);
    message.macd !== undefined &&
      (obj.macd = message.macd ? Quotation.toJSON(message.macd) : undefined);
    return obj;
  },
};

/** Сервис для получения биржевой информации:</br> 1. Свечи.</br> 2. Стаканы.</br> 3. Торговые статусы.</br> 4. Лента сделок. */
export type MarketDataServiceDefinition = typeof MarketDataServiceDefinition;
export const MarketDataServiceDefinition = {
  name: "MarketDataService",
  fullName: "tinkoff.public.invest.api.contract.v1.MarketDataService",
  methods: {
    /** Запросить исторические свечи по инструменту. */
    getCandles: {
      name: "GetCandles",
      requestType: GetCandlesRequest,
      requestStream: false,
      responseType: GetCandlesResponse,
      responseStream: false,
      options: {},
    },
    /** Запросить цены последних сделок по инструментам. */
    getLastPrices: {
      name: "GetLastPrices",
      requestType: GetLastPricesRequest,
      requestStream: false,
      responseType: GetLastPricesResponse,
      responseStream: false,
      options: {},
    },
    /** Получить стакан по инструменту. */
    getOrderBook: {
      name: "GetOrderBook",
      requestType: GetOrderBookRequest,
      requestStream: false,
      responseType: GetOrderBookResponse,
      responseStream: false,
      options: {},
    },
    /** Запросить статус торгов по инструментам. */
    getTradingStatus: {
      name: "GetTradingStatus",
      requestType: GetTradingStatusRequest,
      requestStream: false,
      responseType: GetTradingStatusResponse,
      responseStream: false,
      options: {},
    },
    /** Запросить статус торгов по инструментам. */
    getTradingStatuses: {
      name: "GetTradingStatuses",
      requestType: GetTradingStatusesRequest,
      requestStream: false,
      responseType: GetTradingStatusesResponse,
      responseStream: false,
      options: {},
    },
    /** Запросить обезличенные сделки за последний час. */
    getLastTrades: {
      name: "GetLastTrades",
      requestType: GetLastTradesRequest,
      requestStream: false,
      responseType: GetLastTradesResponse,
      responseStream: false,
      options: {},
    },
    /** Запросить цены закрытия торговой сессии по инструментам. */
    getClosePrices: {
      name: "GetClosePrices",
      requestType: GetClosePricesRequest,
      requestStream: false,
      responseType: GetClosePricesResponse,
      responseStream: false,
      options: {},
    },
    /** Получить технические индикаторы по инструменту. */
    getTechAnalysis: {
      name: "GetTechAnalysis",
      requestType: GetTechAnalysisRequest,
      requestStream: false,
      responseType: GetTechAnalysisResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface MarketDataServiceServiceImplementation<CallContextExt = {}> {
  /** Запросить исторические свечи по инструменту. */
  getCandles(
    request: GetCandlesRequest,
    context: CallContext & CallContextExt
  ): Promise<GetCandlesResponse>;
  /** Запросить цены последних сделок по инструментам. */
  getLastPrices(
    request: GetLastPricesRequest,
    context: CallContext & CallContextExt
  ): Promise<GetLastPricesResponse>;
  /** Получить стакан по инструменту. */
  getOrderBook(
    request: GetOrderBookRequest,
    context: CallContext & CallContextExt
  ): Promise<GetOrderBookResponse>;
  /** Запросить статус торгов по инструментам. */
  getTradingStatus(
    request: GetTradingStatusRequest,
    context: CallContext & CallContextExt
  ): Promise<GetTradingStatusResponse>;
  /** Запросить статус торгов по инструментам. */
  getTradingStatuses(
    request: GetTradingStatusesRequest,
    context: CallContext & CallContextExt
  ): Promise<GetTradingStatusesResponse>;
  /** Запросить обезличенные сделки за последний час. */
  getLastTrades(
    request: GetLastTradesRequest,
    context: CallContext & CallContextExt
  ): Promise<GetLastTradesResponse>;
  /** Запросить цены закрытия торговой сессии по инструментам. */
  getClosePrices(
    request: GetClosePricesRequest,
    context: CallContext & CallContextExt
  ): Promise<GetClosePricesResponse>;
  /** Получить технические индикаторы по инструменту. */
  getTechAnalysis(
    request: GetTechAnalysisRequest,
    context: CallContext & CallContextExt
  ): Promise<GetTechAnalysisResponse>;
}

export interface MarketDataServiceClient<CallOptionsExt = {}> {
  /** Запросить исторические свечи по инструменту. */
  getCandles(
    request: GetCandlesRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetCandlesResponse>;
  /** Запросить цены последних сделок по инструментам. */
  getLastPrices(
    request: GetLastPricesRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetLastPricesResponse>;
  /** Получить стакан по инструменту. */
  getOrderBook(
    request: GetOrderBookRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetOrderBookResponse>;
  /** Запросить статус торгов по инструментам. */
  getTradingStatus(
    request: GetTradingStatusRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetTradingStatusResponse>;
  /** Запросить статус торгов по инструментам. */
  getTradingStatuses(
    request: GetTradingStatusesRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetTradingStatusesResponse>;
  /** Запросить обезличенные сделки за последний час. */
  getLastTrades(
    request: GetLastTradesRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetLastTradesResponse>;
  /** Запросить цены закрытия торговой сессии по инструментам. */
  getClosePrices(
    request: GetClosePricesRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetClosePricesResponse>;
  /** Получить технические индикаторы по инструменту. */
  getTechAnalysis(
    request: GetTechAnalysisRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetTechAnalysisResponse>;
}

export type MarketDataStreamServiceDefinition =
  typeof MarketDataStreamServiceDefinition;
export const MarketDataStreamServiceDefinition = {
  name: "MarketDataStreamService",
  fullName: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService",
  methods: {
    /** Bidirectional-стрим предоставления биржевой информации. */
    marketDataStream: {
      name: "MarketDataStream",
      requestType: MarketDataRequest,
      requestStream: true,
      responseType: MarketDataResponse,
      responseStream: true,
      options: {},
    },
    /** Server-side стрим предоставления биржевой информации. */
    marketDataServerSideStream: {
      name: "MarketDataServerSideStream",
      requestType: MarketDataServerSideStreamRequest,
      requestStream: false,
      responseType: MarketDataResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface MarketDataStreamServiceServiceImplementation<
  CallContextExt = {}
> {
  /** Bidirectional-стрим предоставления биржевой информации. */
  marketDataStream(
    request: AsyncIterable<MarketDataRequest>,
    context: CallContext & CallContextExt
  ): ServerStreamingMethodResult<MarketDataResponse>;
  /** Server-side стрим предоставления биржевой информации. */
  marketDataServerSideStream(
    request: MarketDataServerSideStreamRequest,
    context: CallContext & CallContextExt
  ): ServerStreamingMethodResult<MarketDataResponse>;
}

export interface MarketDataStreamServiceClient<CallOptionsExt = {}> {
  /** Bidirectional-стрим предоставления биржевой информации. */
  marketDataStream(
    request: AsyncIterable<MarketDataRequest>,
    options?: CallOptions & CallOptionsExt
  ): AsyncIterable<MarketDataResponse>;
  /** Server-side стрим предоставления биржевой информации. */
  marketDataServerSideStream(
    request: MarketDataServerSideStreamRequest,
    options?: CallOptions & CallOptionsExt
  ): AsyncIterable<MarketDataResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = {
  [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
