"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastPrice = exports.GetLastPricesResponse = exports.GetLastPricesRequest = exports.HistoricCandle = exports.GetCandlesResponse = exports.GetCandlesRequest = exports.TradingStatus = exports.Trade = exports.Order = exports.OrderBook = exports.Candle = exports.LastPriceSubscription = exports.SubscribeLastPriceResponse = exports.LastPriceInstrument = exports.SubscribeLastPriceRequest = exports.InfoSubscription = exports.SubscribeInfoResponse = exports.InfoInstrument = exports.SubscribeInfoRequest = exports.TradeSubscription = exports.SubscribeTradesResponse = exports.TradeInstrument = exports.SubscribeTradesRequest = exports.OrderBookSubscription = exports.SubscribeOrderBookResponse = exports.OrderBookInstrument = exports.SubscribeOrderBookRequest = exports.CandleSubscription = exports.SubscribeCandlesResponse = exports.CandleInstrument = exports.SubscribeCandlesRequest = exports.MarketDataResponse = exports.MarketDataServerSideStreamRequest = exports.MarketDataRequest = exports.candleIntervalToJSON = exports.candleIntervalFromJSON = exports.CandleInterval = exports.tradeDirectionToJSON = exports.tradeDirectionFromJSON = exports.TradeDirection = exports.subscriptionStatusToJSON = exports.subscriptionStatusFromJSON = exports.SubscriptionStatus = exports.subscriptionIntervalToJSON = exports.subscriptionIntervalFromJSON = exports.SubscriptionInterval = exports.subscriptionActionToJSON = exports.subscriptionActionFromJSON = exports.SubscriptionAction = exports.protobufPackage = void 0;
exports.MarketDataStreamServiceDefinition = exports.MarketDataServiceDefinition = exports.InstrumentClosePriceResponse = exports.GetClosePricesResponse = exports.InstrumentClosePriceRequest = exports.GetClosePricesRequest = exports.GetMySubscriptions = exports.GetLastTradesResponse = exports.GetLastTradesRequest = exports.GetTradingStatusResponse = exports.GetTradingStatusesResponse = exports.GetTradingStatusesRequest = exports.GetTradingStatusRequest = exports.GetOrderBookResponse = exports.GetOrderBookRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const common_js_1 = require("./common.js");
const timestamp_js_1 = require("./google/protobuf/timestamp.js");
exports.protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Тип операции со списком подписок. */
var SubscriptionAction;
(function (SubscriptionAction) {
    /** SUBSCRIPTION_ACTION_UNSPECIFIED - Статус подписки не определён. */
    SubscriptionAction[SubscriptionAction["SUBSCRIPTION_ACTION_UNSPECIFIED"] = 0] = "SUBSCRIPTION_ACTION_UNSPECIFIED";
    /** SUBSCRIPTION_ACTION_SUBSCRIBE - Подписаться. */
    SubscriptionAction[SubscriptionAction["SUBSCRIPTION_ACTION_SUBSCRIBE"] = 1] = "SUBSCRIPTION_ACTION_SUBSCRIBE";
    /** SUBSCRIPTION_ACTION_UNSUBSCRIBE - Отписаться. */
    SubscriptionAction[SubscriptionAction["SUBSCRIPTION_ACTION_UNSUBSCRIBE"] = 2] = "SUBSCRIPTION_ACTION_UNSUBSCRIBE";
    SubscriptionAction[SubscriptionAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionAction = exports.SubscriptionAction || (exports.SubscriptionAction = {}));
function subscriptionActionFromJSON(object) {
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
exports.subscriptionActionFromJSON = subscriptionActionFromJSON;
function subscriptionActionToJSON(object) {
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
exports.subscriptionActionToJSON = subscriptionActionToJSON;
/** Интервал свечи. */
var SubscriptionInterval;
(function (SubscriptionInterval) {
    /** SUBSCRIPTION_INTERVAL_UNSPECIFIED - Интервал свечи не определён. */
    SubscriptionInterval[SubscriptionInterval["SUBSCRIPTION_INTERVAL_UNSPECIFIED"] = 0] = "SUBSCRIPTION_INTERVAL_UNSPECIFIED";
    /** SUBSCRIPTION_INTERVAL_ONE_MINUTE - Минутные свечи. */
    SubscriptionInterval[SubscriptionInterval["SUBSCRIPTION_INTERVAL_ONE_MINUTE"] = 1] = "SUBSCRIPTION_INTERVAL_ONE_MINUTE";
    /** SUBSCRIPTION_INTERVAL_FIVE_MINUTES - Пятиминутные свечи. */
    SubscriptionInterval[SubscriptionInterval["SUBSCRIPTION_INTERVAL_FIVE_MINUTES"] = 2] = "SUBSCRIPTION_INTERVAL_FIVE_MINUTES";
    SubscriptionInterval[SubscriptionInterval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionInterval = exports.SubscriptionInterval || (exports.SubscriptionInterval = {}));
function subscriptionIntervalFromJSON(object) {
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
        case -1:
        case "UNRECOGNIZED":
        default:
            return SubscriptionInterval.UNRECOGNIZED;
    }
}
exports.subscriptionIntervalFromJSON = subscriptionIntervalFromJSON;
function subscriptionIntervalToJSON(object) {
    switch (object) {
        case SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED:
            return "SUBSCRIPTION_INTERVAL_UNSPECIFIED";
        case SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE:
            return "SUBSCRIPTION_INTERVAL_ONE_MINUTE";
        case SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES:
            return "SUBSCRIPTION_INTERVAL_FIVE_MINUTES";
        case SubscriptionInterval.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.subscriptionIntervalToJSON = subscriptionIntervalToJSON;
/** Результат подписки. */
var SubscriptionStatus;
(function (SubscriptionStatus) {
    /** SUBSCRIPTION_STATUS_UNSPECIFIED - Статус подписки не определён. */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_UNSPECIFIED"] = 0] = "SUBSCRIPTION_STATUS_UNSPECIFIED";
    /** SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_SUCCESS"] = 1] = "SUBSCRIPTION_STATUS_SUCCESS";
    /** SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND - Инструмент не найден. */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND"] = 2] = "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND";
    /** SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID - Некорректный статус подписки, список возможных значений: [SubscriptionAction](https://tinkoff.github.io/investAPI/marketdata#subscriptionaction). */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID"] = 3] = "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID";
    /** SUBSCRIPTION_STATUS_DEPTH_IS_INVALID - Некорректная глубина стакана, доступные значения: 1, 10, 20, 30, 40, 50. */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_DEPTH_IS_INVALID"] = 4] = "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID";
    /** SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID - Некорректный интервал свечей, список возможных значений: [SubscriptionInterval](https://tinkoff.github.io/investAPI/marketdata#subscriptioninterval). */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID"] = 5] = "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID";
    /** SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED - Превышен лимит на общее количество подписок в рамках стрима, подробнее: [Лимитная политика](https://tinkoff.github.io/investAPI/limits/). */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED"] = 6] = "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED";
    /** SUBSCRIPTION_STATUS_INTERNAL_ERROR - Внутренняя ошибка сервиса. */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INTERNAL_ERROR"] = 7] = "SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    /** SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS - Превышен лимит на количество запросов на подписки в течение установленного отрезка времени */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS"] = 8] = "SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS";
    /** SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND - Активная подписка не найдена. Ошибка может возникнуть только при отписке от не существующей отписки */
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND"] = 9] = "SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND";
    SubscriptionStatus[SubscriptionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
function subscriptionStatusFromJSON(object) {
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
        case -1:
        case "UNRECOGNIZED":
        default:
            return SubscriptionStatus.UNRECOGNIZED;
    }
}
exports.subscriptionStatusFromJSON = subscriptionStatusFromJSON;
function subscriptionStatusToJSON(object) {
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
        case SubscriptionStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.subscriptionStatusToJSON = subscriptionStatusToJSON;
/** Направление сделки. */
var TradeDirection;
(function (TradeDirection) {
    /** TRADE_DIRECTION_UNSPECIFIED - Направление сделки не определено. */
    TradeDirection[TradeDirection["TRADE_DIRECTION_UNSPECIFIED"] = 0] = "TRADE_DIRECTION_UNSPECIFIED";
    /** TRADE_DIRECTION_BUY - Покупка. */
    TradeDirection[TradeDirection["TRADE_DIRECTION_BUY"] = 1] = "TRADE_DIRECTION_BUY";
    /** TRADE_DIRECTION_SELL - Продажа. */
    TradeDirection[TradeDirection["TRADE_DIRECTION_SELL"] = 2] = "TRADE_DIRECTION_SELL";
    TradeDirection[TradeDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TradeDirection = exports.TradeDirection || (exports.TradeDirection = {}));
function tradeDirectionFromJSON(object) {
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
exports.tradeDirectionFromJSON = tradeDirectionFromJSON;
function tradeDirectionToJSON(object) {
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
exports.tradeDirectionToJSON = tradeDirectionToJSON;
/** Интервал свечей. */
var CandleInterval;
(function (CandleInterval) {
    /** CANDLE_INTERVAL_UNSPECIFIED - Интервал не определён. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_UNSPECIFIED"] = 0] = "CANDLE_INTERVAL_UNSPECIFIED";
    /** CANDLE_INTERVAL_1_MIN - от 1 минуты до 1 дня. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_1_MIN"] = 1] = "CANDLE_INTERVAL_1_MIN";
    /** CANDLE_INTERVAL_5_MIN - от 5 минут до 1 дня. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_5_MIN"] = 2] = "CANDLE_INTERVAL_5_MIN";
    /** CANDLE_INTERVAL_15_MIN - от 15 минут до 1 дня. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_15_MIN"] = 3] = "CANDLE_INTERVAL_15_MIN";
    /** CANDLE_INTERVAL_HOUR - от 1 часа до 1 недели. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_HOUR"] = 4] = "CANDLE_INTERVAL_HOUR";
    /** CANDLE_INTERVAL_DAY - от 1 дня до 1 года. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_DAY"] = 5] = "CANDLE_INTERVAL_DAY";
    /** CANDLE_INTERVAL_2_MIN - от 2 минут до 1 дня. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_2_MIN"] = 6] = "CANDLE_INTERVAL_2_MIN";
    /** CANDLE_INTERVAL_3_MIN - от 3 минут до 1 дня. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_3_MIN"] = 7] = "CANDLE_INTERVAL_3_MIN";
    /** CANDLE_INTERVAL_10_MIN - от 10 минут до 1 дня. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_10_MIN"] = 8] = "CANDLE_INTERVAL_10_MIN";
    /** CANDLE_INTERVAL_30_MIN - от 30 минут до 2 дней. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_30_MIN"] = 9] = "CANDLE_INTERVAL_30_MIN";
    /** CANDLE_INTERVAL_2_HOUR - от 2 часов до 1 месяца. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_2_HOUR"] = 10] = "CANDLE_INTERVAL_2_HOUR";
    /** CANDLE_INTERVAL_4_HOUR - от 4 часов до 1 месяца. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_4_HOUR"] = 11] = "CANDLE_INTERVAL_4_HOUR";
    /** CANDLE_INTERVAL_WEEK - от 1 недели до 2 лет. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_WEEK"] = 12] = "CANDLE_INTERVAL_WEEK";
    /** CANDLE_INTERVAL_MONTH - от 1 месяца до 10 лет. */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_MONTH"] = 13] = "CANDLE_INTERVAL_MONTH";
    CandleInterval[CandleInterval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CandleInterval = exports.CandleInterval || (exports.CandleInterval = {}));
function candleIntervalFromJSON(object) {
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
exports.candleIntervalFromJSON = candleIntervalFromJSON;
function candleIntervalToJSON(object) {
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
exports.candleIntervalToJSON = candleIntervalToJSON;
function createBaseMarketDataRequest() {
    return {
        subscribeCandlesRequest: undefined,
        subscribeOrderBookRequest: undefined,
        subscribeTradesRequest: undefined,
        subscribeInfoRequest: undefined,
        subscribeLastPriceRequest: undefined,
        getMySubscriptions: undefined,
    };
}
exports.MarketDataRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscribeCandlesRequest !== undefined) {
            exports.SubscribeCandlesRequest.encode(message.subscribeCandlesRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.subscribeOrderBookRequest !== undefined) {
            exports.SubscribeOrderBookRequest.encode(message.subscribeOrderBookRequest, writer.uint32(18).fork()).ldelim();
        }
        if (message.subscribeTradesRequest !== undefined) {
            exports.SubscribeTradesRequest.encode(message.subscribeTradesRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.subscribeInfoRequest !== undefined) {
            exports.SubscribeInfoRequest.encode(message.subscribeInfoRequest, writer.uint32(34).fork()).ldelim();
        }
        if (message.subscribeLastPriceRequest !== undefined) {
            exports.SubscribeLastPriceRequest.encode(message.subscribeLastPriceRequest, writer.uint32(42).fork()).ldelim();
        }
        if (message.getMySubscriptions !== undefined) {
            exports.GetMySubscriptions.encode(message.getMySubscriptions, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscribeCandlesRequest = exports.SubscribeCandlesRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscribeOrderBookRequest = exports.SubscribeOrderBookRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subscribeTradesRequest = exports.SubscribeTradesRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subscribeInfoRequest = exports.SubscribeInfoRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.subscribeLastPriceRequest = exports.SubscribeLastPriceRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.getMySubscriptions = exports.GetMySubscriptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
                ? exports.SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
                : undefined,
            subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
                ? exports.SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
                : undefined,
            subscribeTradesRequest: isSet(object.subscribeTradesRequest)
                ? exports.SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
                : undefined,
            subscribeInfoRequest: isSet(object.subscribeInfoRequest)
                ? exports.SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
                : undefined,
            subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
                ? exports.SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
                : undefined,
            getMySubscriptions: isSet(object.getMySubscriptions)
                ? exports.GetMySubscriptions.fromJSON(object.getMySubscriptions)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscribeCandlesRequest !== undefined &&
            (obj.subscribeCandlesRequest = message.subscribeCandlesRequest
                ? exports.SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest)
                : undefined);
        message.subscribeOrderBookRequest !== undefined &&
            (obj.subscribeOrderBookRequest = message.subscribeOrderBookRequest
                ? exports.SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest)
                : undefined);
        message.subscribeTradesRequest !== undefined &&
            (obj.subscribeTradesRequest = message.subscribeTradesRequest
                ? exports.SubscribeTradesRequest.toJSON(message.subscribeTradesRequest)
                : undefined);
        message.subscribeInfoRequest !== undefined &&
            (obj.subscribeInfoRequest = message.subscribeInfoRequest
                ? exports.SubscribeInfoRequest.toJSON(message.subscribeInfoRequest)
                : undefined);
        message.subscribeLastPriceRequest !== undefined &&
            (obj.subscribeLastPriceRequest = message.subscribeLastPriceRequest
                ? exports.SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest)
                : undefined);
        message.getMySubscriptions !== undefined &&
            (obj.getMySubscriptions = message.getMySubscriptions
                ? exports.GetMySubscriptions.toJSON(message.getMySubscriptions)
                : undefined);
        return obj;
    },
};
function createBaseMarketDataServerSideStreamRequest() {
    return {
        subscribeCandlesRequest: undefined,
        subscribeOrderBookRequest: undefined,
        subscribeTradesRequest: undefined,
        subscribeInfoRequest: undefined,
        subscribeLastPriceRequest: undefined,
    };
}
exports.MarketDataServerSideStreamRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscribeCandlesRequest !== undefined) {
            exports.SubscribeCandlesRequest.encode(message.subscribeCandlesRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.subscribeOrderBookRequest !== undefined) {
            exports.SubscribeOrderBookRequest.encode(message.subscribeOrderBookRequest, writer.uint32(18).fork()).ldelim();
        }
        if (message.subscribeTradesRequest !== undefined) {
            exports.SubscribeTradesRequest.encode(message.subscribeTradesRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.subscribeInfoRequest !== undefined) {
            exports.SubscribeInfoRequest.encode(message.subscribeInfoRequest, writer.uint32(34).fork()).ldelim();
        }
        if (message.subscribeLastPriceRequest !== undefined) {
            exports.SubscribeLastPriceRequest.encode(message.subscribeLastPriceRequest, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketDataServerSideStreamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscribeCandlesRequest = exports.SubscribeCandlesRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscribeOrderBookRequest = exports.SubscribeOrderBookRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subscribeTradesRequest = exports.SubscribeTradesRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subscribeInfoRequest = exports.SubscribeInfoRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.subscribeLastPriceRequest = exports.SubscribeLastPriceRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
                ? exports.SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
                : undefined,
            subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
                ? exports.SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
                : undefined,
            subscribeTradesRequest: isSet(object.subscribeTradesRequest)
                ? exports.SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
                : undefined,
            subscribeInfoRequest: isSet(object.subscribeInfoRequest)
                ? exports.SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
                : undefined,
            subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
                ? exports.SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscribeCandlesRequest !== undefined &&
            (obj.subscribeCandlesRequest = message.subscribeCandlesRequest
                ? exports.SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest)
                : undefined);
        message.subscribeOrderBookRequest !== undefined &&
            (obj.subscribeOrderBookRequest = message.subscribeOrderBookRequest
                ? exports.SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest)
                : undefined);
        message.subscribeTradesRequest !== undefined &&
            (obj.subscribeTradesRequest = message.subscribeTradesRequest
                ? exports.SubscribeTradesRequest.toJSON(message.subscribeTradesRequest)
                : undefined);
        message.subscribeInfoRequest !== undefined &&
            (obj.subscribeInfoRequest = message.subscribeInfoRequest
                ? exports.SubscribeInfoRequest.toJSON(message.subscribeInfoRequest)
                : undefined);
        message.subscribeLastPriceRequest !== undefined &&
            (obj.subscribeLastPriceRequest = message.subscribeLastPriceRequest
                ? exports.SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest)
                : undefined);
        return obj;
    },
};
function createBaseMarketDataResponse() {
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
exports.MarketDataResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscribeCandlesResponse !== undefined) {
            exports.SubscribeCandlesResponse.encode(message.subscribeCandlesResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.subscribeOrderBookResponse !== undefined) {
            exports.SubscribeOrderBookResponse.encode(message.subscribeOrderBookResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.subscribeTradesResponse !== undefined) {
            exports.SubscribeTradesResponse.encode(message.subscribeTradesResponse, writer.uint32(26).fork()).ldelim();
        }
        if (message.subscribeInfoResponse !== undefined) {
            exports.SubscribeInfoResponse.encode(message.subscribeInfoResponse, writer.uint32(34).fork()).ldelim();
        }
        if (message.candle !== undefined) {
            exports.Candle.encode(message.candle, writer.uint32(42).fork()).ldelim();
        }
        if (message.trade !== undefined) {
            exports.Trade.encode(message.trade, writer.uint32(50).fork()).ldelim();
        }
        if (message.orderbook !== undefined) {
            exports.OrderBook.encode(message.orderbook, writer.uint32(58).fork()).ldelim();
        }
        if (message.tradingStatus !== undefined) {
            exports.TradingStatus.encode(message.tradingStatus, writer.uint32(66).fork()).ldelim();
        }
        if (message.ping !== undefined) {
            common_js_1.Ping.encode(message.ping, writer.uint32(74).fork()).ldelim();
        }
        if (message.subscribeLastPriceResponse !== undefined) {
            exports.SubscribeLastPriceResponse.encode(message.subscribeLastPriceResponse, writer.uint32(82).fork()).ldelim();
        }
        if (message.lastPrice !== undefined) {
            exports.LastPrice.encode(message.lastPrice, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscribeCandlesResponse = exports.SubscribeCandlesResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscribeOrderBookResponse =
                        exports.SubscribeOrderBookResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subscribeTradesResponse = exports.SubscribeTradesResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subscribeInfoResponse = exports.SubscribeInfoResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.candle = exports.Candle.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.trade = exports.Trade.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.orderbook = exports.OrderBook.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.tradingStatus = exports.TradingStatus.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.ping = common_js_1.Ping.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.subscribeLastPriceResponse =
                        exports.SubscribeLastPriceResponse.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.lastPrice = exports.LastPrice.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscribeCandlesResponse: isSet(object.subscribeCandlesResponse)
                ? exports.SubscribeCandlesResponse.fromJSON(object.subscribeCandlesResponse)
                : undefined,
            subscribeOrderBookResponse: isSet(object.subscribeOrderBookResponse)
                ? exports.SubscribeOrderBookResponse.fromJSON(object.subscribeOrderBookResponse)
                : undefined,
            subscribeTradesResponse: isSet(object.subscribeTradesResponse)
                ? exports.SubscribeTradesResponse.fromJSON(object.subscribeTradesResponse)
                : undefined,
            subscribeInfoResponse: isSet(object.subscribeInfoResponse)
                ? exports.SubscribeInfoResponse.fromJSON(object.subscribeInfoResponse)
                : undefined,
            candle: isSet(object.candle) ? exports.Candle.fromJSON(object.candle) : undefined,
            trade: isSet(object.trade) ? exports.Trade.fromJSON(object.trade) : undefined,
            orderbook: isSet(object.orderbook)
                ? exports.OrderBook.fromJSON(object.orderbook)
                : undefined,
            tradingStatus: isSet(object.tradingStatus)
                ? exports.TradingStatus.fromJSON(object.tradingStatus)
                : undefined,
            ping: isSet(object.ping) ? common_js_1.Ping.fromJSON(object.ping) : undefined,
            subscribeLastPriceResponse: isSet(object.subscribeLastPriceResponse)
                ? exports.SubscribeLastPriceResponse.fromJSON(object.subscribeLastPriceResponse)
                : undefined,
            lastPrice: isSet(object.lastPrice)
                ? exports.LastPrice.fromJSON(object.lastPrice)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscribeCandlesResponse !== undefined &&
            (obj.subscribeCandlesResponse = message.subscribeCandlesResponse
                ? exports.SubscribeCandlesResponse.toJSON(message.subscribeCandlesResponse)
                : undefined);
        message.subscribeOrderBookResponse !== undefined &&
            (obj.subscribeOrderBookResponse = message.subscribeOrderBookResponse
                ? exports.SubscribeOrderBookResponse.toJSON(message.subscribeOrderBookResponse)
                : undefined);
        message.subscribeTradesResponse !== undefined &&
            (obj.subscribeTradesResponse = message.subscribeTradesResponse
                ? exports.SubscribeTradesResponse.toJSON(message.subscribeTradesResponse)
                : undefined);
        message.subscribeInfoResponse !== undefined &&
            (obj.subscribeInfoResponse = message.subscribeInfoResponse
                ? exports.SubscribeInfoResponse.toJSON(message.subscribeInfoResponse)
                : undefined);
        message.candle !== undefined &&
            (obj.candle = message.candle ? exports.Candle.toJSON(message.candle) : undefined);
        message.trade !== undefined &&
            (obj.trade = message.trade ? exports.Trade.toJSON(message.trade) : undefined);
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook
                ? exports.OrderBook.toJSON(message.orderbook)
                : undefined);
        message.tradingStatus !== undefined &&
            (obj.tradingStatus = message.tradingStatus
                ? exports.TradingStatus.toJSON(message.tradingStatus)
                : undefined);
        message.ping !== undefined &&
            (obj.ping = message.ping ? common_js_1.Ping.toJSON(message.ping) : undefined);
        message.subscribeLastPriceResponse !== undefined &&
            (obj.subscribeLastPriceResponse = message.subscribeLastPriceResponse
                ? exports.SubscribeLastPriceResponse.toJSON(message.subscribeLastPriceResponse)
                : undefined);
        message.lastPrice !== undefined &&
            (obj.lastPrice = message.lastPrice
                ? exports.LastPrice.toJSON(message.lastPrice)
                : undefined);
        return obj;
    },
};
function createBaseSubscribeCandlesRequest() {
    return { subscriptionAction: 0, instruments: [], waitingClose: false };
}
exports.SubscribeCandlesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.CandleInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.waitingClose === true) {
            writer.uint32(24).bool(message.waitingClose);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeCandlesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.CandleInstrument.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.waitingClose = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction)
                ? subscriptionActionFromJSON(object.subscriptionAction)
                : 0,
            instruments: Array.isArray(object?.instruments)
                ? object.instruments.map((e) => exports.CandleInstrument.fromJSON(e))
                : [],
            waitingClose: isSet(object.waitingClose)
                ? Boolean(object.waitingClose)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map((e) => e ? exports.CandleInstrument.toJSON(e) : undefined);
        }
        else {
            obj.instruments = [];
        }
        message.waitingClose !== undefined &&
            (obj.waitingClose = message.waitingClose);
        return obj;
    },
};
function createBaseCandleInstrument() {
    return { figi: "", interval: 0, instrumentId: "" };
}
exports.CandleInstrument = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCandleInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.interval = reader.int32();
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.interval !== undefined &&
            (obj.interval = subscriptionIntervalToJSON(message.interval));
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseSubscribeCandlesResponse() {
    return { trackingId: "", candlesSubscriptions: [] };
}
exports.SubscribeCandlesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.trackingId !== "") {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.candlesSubscriptions) {
            exports.CandleSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeCandlesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.candlesSubscriptions.push(exports.CandleSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
            candlesSubscriptions: Array.isArray(object?.candlesSubscriptions)
                ? object.candlesSubscriptions.map((e) => exports.CandleSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.candlesSubscriptions) {
            obj.candlesSubscriptions = message.candlesSubscriptions.map((e) => e ? exports.CandleSubscription.toJSON(e) : undefined);
        }
        else {
            obj.candlesSubscriptions = [];
        }
        return obj;
    },
};
function createBaseCandleSubscription() {
    return { figi: "", interval: 0, subscriptionStatus: 0, instrumentUid: "" };
}
exports.CandleSubscription = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCandleSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.interval = reader.int32();
                    break;
                case 3:
                    message.subscriptionStatus = reader.int32();
                    break;
                case 4:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.interval !== undefined &&
            (obj.interval = subscriptionIntervalToJSON(message.interval));
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseSubscribeOrderBookRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeOrderBookRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.OrderBookInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeOrderBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.OrderBookInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction)
                ? subscriptionActionFromJSON(object.subscriptionAction)
                : 0,
            instruments: Array.isArray(object?.instruments)
                ? object.instruments.map((e) => exports.OrderBookInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map((e) => e ? exports.OrderBookInstrument.toJSON(e) : undefined);
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
};
function createBaseOrderBookInstrument() {
    return { figi: "", depth: 0, instrumentId: "" };
}
exports.OrderBookInstrument = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        if (message.instrumentId !== "") {
            writer.uint32(26).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseSubscribeOrderBookResponse() {
    return { trackingId: "", orderBookSubscriptions: [] };
}
exports.SubscribeOrderBookResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.trackingId !== "") {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.orderBookSubscriptions) {
            exports.OrderBookSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.orderBookSubscriptions.push(exports.OrderBookSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
            orderBookSubscriptions: Array.isArray(object?.orderBookSubscriptions)
                ? object.orderBookSubscriptions.map((e) => exports.OrderBookSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.orderBookSubscriptions) {
            obj.orderBookSubscriptions = message.orderBookSubscriptions.map((e) => e ? exports.OrderBookSubscription.toJSON(e) : undefined);
        }
        else {
            obj.orderBookSubscriptions = [];
        }
        return obj;
    },
};
function createBaseOrderBookSubscription() {
    return { figi: "", depth: 0, subscriptionStatus: 0, instrumentUid: "" };
}
exports.OrderBookSubscription = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
                    message.subscriptionStatus = reader.int32();
                    break;
                case 4:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            subscriptionStatus: isSet(object.subscriptionStatus)
                ? subscriptionStatusFromJSON(object.subscriptionStatus)
                : 0,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseSubscribeTradesRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeTradesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.TradeInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeTradesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.TradeInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction)
                ? subscriptionActionFromJSON(object.subscriptionAction)
                : 0,
            instruments: Array.isArray(object?.instruments)
                ? object.instruments.map((e) => exports.TradeInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map((e) => e ? exports.TradeInstrument.toJSON(e) : undefined);
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
};
function createBaseTradeInstrument() {
    return { figi: "", instrumentId: "" };
}
exports.TradeInstrument = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.instrumentId !== "") {
            writer.uint32(18).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseSubscribeTradesResponse() {
    return { trackingId: "", tradeSubscriptions: [] };
}
exports.SubscribeTradesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.trackingId !== "") {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.tradeSubscriptions) {
            exports.TradeSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.tradeSubscriptions.push(exports.TradeSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
            tradeSubscriptions: Array.isArray(object?.tradeSubscriptions)
                ? object.tradeSubscriptions.map((e) => exports.TradeSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.tradeSubscriptions) {
            obj.tradeSubscriptions = message.tradeSubscriptions.map((e) => e ? exports.TradeSubscription.toJSON(e) : undefined);
        }
        else {
            obj.tradeSubscriptions = [];
        }
        return obj;
    },
};
function createBaseTradeSubscription() {
    return { figi: "", subscriptionStatus: 0, instrumentUid: "" };
}
exports.TradeSubscription = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(16).int32(message.subscriptionStatus);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(26).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.subscriptionStatus = reader.int32();
                    break;
                case 3:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            subscriptionStatus: isSet(object.subscriptionStatus)
                ? subscriptionStatusFromJSON(object.subscriptionStatus)
                : 0,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseSubscribeInfoRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeInfoRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.InfoInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.InfoInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction)
                ? subscriptionActionFromJSON(object.subscriptionAction)
                : 0,
            instruments: Array.isArray(object?.instruments)
                ? object.instruments.map((e) => exports.InfoInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map((e) => e ? exports.InfoInstrument.toJSON(e) : undefined);
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
};
function createBaseInfoInstrument() {
    return { figi: "", instrumentId: "" };
}
exports.InfoInstrument = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.instrumentId !== "") {
            writer.uint32(18).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseSubscribeInfoResponse() {
    return { trackingId: "", infoSubscriptions: [] };
}
exports.SubscribeInfoResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.trackingId !== "") {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.infoSubscriptions) {
            exports.InfoSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.infoSubscriptions.push(exports.InfoSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
            infoSubscriptions: Array.isArray(object?.infoSubscriptions)
                ? object.infoSubscriptions.map((e) => exports.InfoSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.infoSubscriptions) {
            obj.infoSubscriptions = message.infoSubscriptions.map((e) => e ? exports.InfoSubscription.toJSON(e) : undefined);
        }
        else {
            obj.infoSubscriptions = [];
        }
        return obj;
    },
};
function createBaseInfoSubscription() {
    return { figi: "", subscriptionStatus: 0, instrumentUid: "" };
}
exports.InfoSubscription = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(16).int32(message.subscriptionStatus);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(26).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.subscriptionStatus = reader.int32();
                    break;
                case 3:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            subscriptionStatus: isSet(object.subscriptionStatus)
                ? subscriptionStatusFromJSON(object.subscriptionStatus)
                : 0,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseSubscribeLastPriceRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeLastPriceRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.LastPriceInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeLastPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.LastPriceInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction)
                ? subscriptionActionFromJSON(object.subscriptionAction)
                : 0,
            instruments: Array.isArray(object?.instruments)
                ? object.instruments.map((e) => exports.LastPriceInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map((e) => e ? exports.LastPriceInstrument.toJSON(e) : undefined);
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
};
function createBaseLastPriceInstrument() {
    return { figi: "", instrumentId: "" };
}
exports.LastPriceInstrument = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.instrumentId !== "") {
            writer.uint32(18).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseSubscribeLastPriceResponse() {
    return { trackingId: "", lastPriceSubscriptions: [] };
}
exports.SubscribeLastPriceResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.trackingId !== "") {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.lastPriceSubscriptions) {
            exports.LastPriceSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeLastPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.lastPriceSubscriptions.push(exports.LastPriceSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : "",
            lastPriceSubscriptions: Array.isArray(object?.lastPriceSubscriptions)
                ? object.lastPriceSubscriptions.map((e) => exports.LastPriceSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.lastPriceSubscriptions) {
            obj.lastPriceSubscriptions = message.lastPriceSubscriptions.map((e) => e ? exports.LastPriceSubscription.toJSON(e) : undefined);
        }
        else {
            obj.lastPriceSubscriptions = [];
        }
        return obj;
    },
};
function createBaseLastPriceSubscription() {
    return { figi: "", subscriptionStatus: 0, instrumentUid: "" };
}
exports.LastPriceSubscription = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(16).int32(message.subscriptionStatus);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(26).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastPriceSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.subscriptionStatus = reader.int32();
                    break;
                case 3:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            subscriptionStatus: isSet(object.subscriptionStatus)
                ? subscriptionStatusFromJSON(object.subscriptionStatus)
                : 0,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseCandle() {
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
    };
}
exports.Candle = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.interval !== 0) {
            writer.uint32(16).int32(message.interval);
        }
        if (message.open !== undefined) {
            common_js_1.Quotation.encode(message.open, writer.uint32(26).fork()).ldelim();
        }
        if (message.high !== undefined) {
            common_js_1.Quotation.encode(message.high, writer.uint32(34).fork()).ldelim();
        }
        if (message.low !== undefined) {
            common_js_1.Quotation.encode(message.low, writer.uint32(42).fork()).ldelim();
        }
        if (message.close !== undefined) {
            common_js_1.Quotation.encode(message.close, writer.uint32(50).fork()).ldelim();
        }
        if (message.volume !== 0) {
            writer.uint32(56).int64(message.volume);
        }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(66).fork()).ldelim();
        }
        if (message.lastTradeTs !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.lastTradeTs), writer.uint32(74).fork()).ldelim();
        }
        if (message.instrumentUid !== "") {
            writer.uint32(82).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCandle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.interval = reader.int32();
                    break;
                case 3:
                    message.open = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.high = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.low = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.close = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.volume = longToNumber(reader.int64());
                    break;
                case 8:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.lastTradeTs = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            interval: isSet(object.interval)
                ? subscriptionIntervalFromJSON(object.interval)
                : 0,
            open: isSet(object.open) ? common_js_1.Quotation.fromJSON(object.open) : undefined,
            high: isSet(object.high) ? common_js_1.Quotation.fromJSON(object.high) : undefined,
            low: isSet(object.low) ? common_js_1.Quotation.fromJSON(object.low) : undefined,
            close: isSet(object.close) ? common_js_1.Quotation.fromJSON(object.close) : undefined,
            volume: isSet(object.volume) ? Number(object.volume) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            lastTradeTs: isSet(object.lastTradeTs)
                ? fromJsonTimestamp(object.lastTradeTs)
                : undefined,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.interval !== undefined &&
            (obj.interval = subscriptionIntervalToJSON(message.interval));
        message.open !== undefined &&
            (obj.open = message.open ? common_js_1.Quotation.toJSON(message.open) : undefined);
        message.high !== undefined &&
            (obj.high = message.high ? common_js_1.Quotation.toJSON(message.high) : undefined);
        message.low !== undefined &&
            (obj.low = message.low ? common_js_1.Quotation.toJSON(message.low) : undefined);
        message.close !== undefined &&
            (obj.close = message.close ? common_js_1.Quotation.toJSON(message.close) : undefined);
        message.volume !== undefined && (obj.volume = Math.round(message.volume));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.lastTradeTs !== undefined &&
            (obj.lastTradeTs = message.lastTradeTs.toISOString());
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseOrderBook() {
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
    };
}
exports.OrderBook = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
            exports.Order.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.asks) {
            exports.Order.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.limitUp !== undefined) {
            common_js_1.Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
        }
        if (message.limitDown !== undefined) {
            common_js_1.Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
        }
        if (message.instrumentUid !== "") {
            writer.uint32(74).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
                    message.bids.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.asks.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.limitUp = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.limitDown = common_js_1.Quotation.decode(reader, reader.uint32());
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            isConsistent: isSet(object.isConsistent)
                ? Boolean(object.isConsistent)
                : false,
            bids: Array.isArray(object?.bids)
                ? object.bids.map((e) => exports.Order.fromJSON(e))
                : [],
            asks: Array.isArray(object?.asks)
                ? object.asks.map((e) => exports.Order.fromJSON(e))
                : [],
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            limitUp: isSet(object.limitUp)
                ? common_js_1.Quotation.fromJSON(object.limitUp)
                : undefined,
            limitDown: isSet(object.limitDown)
                ? common_js_1.Quotation.fromJSON(object.limitDown)
                : undefined,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        message.isConsistent !== undefined &&
            (obj.isConsistent = message.isConsistent);
        if (message.bids) {
            obj.bids = message.bids.map((e) => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.bids = [];
        }
        if (message.asks) {
            obj.asks = message.asks.map((e) => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.asks = [];
        }
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.limitUp !== undefined &&
            (obj.limitUp = message.limitUp
                ? common_js_1.Quotation.toJSON(message.limitUp)
                : undefined);
        message.limitDown !== undefined &&
            (obj.limitDown = message.limitDown
                ? common_js_1.Quotation.toJSON(message.limitDown)
                : undefined);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseOrder() {
    return { price: undefined, quantity: 0 };
}
exports.Order = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.price !== undefined) {
            common_js_1.Quotation.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int64(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quantity = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            price: isSet(object.price) ? common_js_1.Quotation.fromJSON(object.price) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined &&
            (obj.price = message.price ? common_js_1.Quotation.toJSON(message.price) : undefined);
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        return obj;
    },
};
function createBaseTrade() {
    return {
        figi: "",
        direction: 0,
        price: undefined,
        quantity: 0,
        time: undefined,
        instrumentUid: "",
    };
}
exports.Trade = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.direction !== 0) {
            writer.uint32(16).int32(message.direction);
        }
        if (message.price !== undefined) {
            common_js_1.Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(32).int64(message.quantity);
        }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
        }
        if (message.instrumentUid !== "") {
            writer.uint32(50).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.direction = reader.int32();
                    break;
                case 3:
                    message.price = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 5:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            direction: isSet(object.direction)
                ? tradeDirectionFromJSON(object.direction)
                : 0,
            price: isSet(object.price) ? common_js_1.Quotation.fromJSON(object.price) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.direction !== undefined &&
            (obj.direction = tradeDirectionToJSON(message.direction));
        message.price !== undefined &&
            (obj.price = message.price ? common_js_1.Quotation.toJSON(message.price) : undefined);
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseTradingStatus() {
    return {
        figi: "",
        tradingStatus: 0,
        time: undefined,
        limitOrderAvailableFlag: false,
        marketOrderAvailableFlag: false,
        instrumentUid: "",
    };
}
exports.TradingStatus = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(16).int32(message.tradingStatus);
        }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.tradingStatus = reader.int32();
                    break;
                case 3:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            tradingStatus: isSet(object.tradingStatus)
                ? (0, common_js_1.securityTradingStatusFromJSON)(object.tradingStatus)
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
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.tradingStatus !== undefined &&
            (obj.tradingStatus = (0, common_js_1.securityTradingStatusToJSON)(message.tradingStatus));
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
function createBaseGetCandlesRequest() {
    return {
        figi: "",
        from: undefined,
        to: undefined,
        interval: 0,
        instrumentId: "",
    };
}
exports.GetCandlesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.from !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        if (message.interval !== 0) {
            writer.uint32(32).int32(message.interval);
        }
        if (message.instrumentId !== "") {
            writer.uint32(42).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCandlesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.interval = reader.int32();
                    break;
                case 5:
                    message.instrumentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
            interval: isSet(object.interval)
                ? candleIntervalFromJSON(object.interval)
                : 0,
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        message.interval !== undefined &&
            (obj.interval = candleIntervalToJSON(message.interval));
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseGetCandlesResponse() {
    return { candles: [] };
}
exports.GetCandlesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.candles) {
            exports.HistoricCandle.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCandlesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.candles.push(exports.HistoricCandle.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            candles: Array.isArray(object?.candles)
                ? object.candles.map((e) => exports.HistoricCandle.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.candles) {
            obj.candles = message.candles.map((e) => e ? exports.HistoricCandle.toJSON(e) : undefined);
        }
        else {
            obj.candles = [];
        }
        return obj;
    },
};
function createBaseHistoricCandle() {
    return {
        open: undefined,
        high: undefined,
        low: undefined,
        close: undefined,
        volume: 0,
        time: undefined,
        isComplete: false,
    };
}
exports.HistoricCandle = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.open !== undefined) {
            common_js_1.Quotation.encode(message.open, writer.uint32(10).fork()).ldelim();
        }
        if (message.high !== undefined) {
            common_js_1.Quotation.encode(message.high, writer.uint32(18).fork()).ldelim();
        }
        if (message.low !== undefined) {
            common_js_1.Quotation.encode(message.low, writer.uint32(26).fork()).ldelim();
        }
        if (message.close !== undefined) {
            common_js_1.Quotation.encode(message.close, writer.uint32(34).fork()).ldelim();
        }
        if (message.volume !== 0) {
            writer.uint32(40).int64(message.volume);
        }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.isComplete === true) {
            writer.uint32(56).bool(message.isComplete);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricCandle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.open = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.high = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.low = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.close = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.volume = longToNumber(reader.int64());
                    break;
                case 6:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.isComplete = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            open: isSet(object.open) ? common_js_1.Quotation.fromJSON(object.open) : undefined,
            high: isSet(object.high) ? common_js_1.Quotation.fromJSON(object.high) : undefined,
            low: isSet(object.low) ? common_js_1.Quotation.fromJSON(object.low) : undefined,
            close: isSet(object.close) ? common_js_1.Quotation.fromJSON(object.close) : undefined,
            volume: isSet(object.volume) ? Number(object.volume) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            isComplete: isSet(object.isComplete) ? Boolean(object.isComplete) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.open !== undefined &&
            (obj.open = message.open ? common_js_1.Quotation.toJSON(message.open) : undefined);
        message.high !== undefined &&
            (obj.high = message.high ? common_js_1.Quotation.toJSON(message.high) : undefined);
        message.low !== undefined &&
            (obj.low = message.low ? common_js_1.Quotation.toJSON(message.low) : undefined);
        message.close !== undefined &&
            (obj.close = message.close ? common_js_1.Quotation.toJSON(message.close) : undefined);
        message.volume !== undefined && (obj.volume = Math.round(message.volume));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.isComplete !== undefined && (obj.isComplete = message.isComplete);
        return obj;
    },
};
function createBaseGetLastPricesRequest() {
    return { figi: [], instrumentId: [] };
}
exports.GetLastPricesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.figi) {
            writer.uint32(10).string(v);
        }
        for (const v of message.instrumentId) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: Array.isArray(object?.figi)
                ? object.figi.map((e) => String(e))
                : [],
            instrumentId: Array.isArray(object?.instrumentId)
                ? object.instrumentId.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.figi) {
            obj.figi = message.figi.map((e) => e);
        }
        else {
            obj.figi = [];
        }
        if (message.instrumentId) {
            obj.instrumentId = message.instrumentId.map((e) => e);
        }
        else {
            obj.instrumentId = [];
        }
        return obj;
    },
};
function createBaseGetLastPricesResponse() {
    return { lastPrices: [] };
}
exports.GetLastPricesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.lastPrices) {
            exports.LastPrice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLastPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastPrices.push(exports.LastPrice.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            lastPrices: Array.isArray(object?.lastPrices)
                ? object.lastPrices.map((e) => exports.LastPrice.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lastPrices) {
            obj.lastPrices = message.lastPrices.map((e) => e ? exports.LastPrice.toJSON(e) : undefined);
        }
        else {
            obj.lastPrices = [];
        }
        return obj;
    },
};
function createBaseLastPrice() {
    return { figi: "", price: undefined, time: undefined, instrumentUid: "" };
}
exports.LastPrice = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.price !== undefined) {
            common_js_1.Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
        }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
        }
        if (message.instrumentUid !== "") {
            writer.uint32(90).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.price = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            price: isSet(object.price) ? common_js_1.Quotation.fromJSON(object.price) : undefined,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.price !== undefined &&
            (obj.price = message.price ? common_js_1.Quotation.toJSON(message.price) : undefined);
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseGetOrderBookRequest() {
    return { figi: "", depth: 0, instrumentId: "" };
}
exports.GetOrderBookRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        if (message.instrumentId !== "") {
            writer.uint32(26).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseGetOrderBookResponse() {
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
exports.GetOrderBookResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        for (const v of message.bids) {
            exports.Order.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.asks) {
            exports.Order.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.lastPrice !== undefined) {
            common_js_1.Quotation.encode(message.lastPrice, writer.uint32(42).fork()).ldelim();
        }
        if (message.closePrice !== undefined) {
            common_js_1.Quotation.encode(message.closePrice, writer.uint32(50).fork()).ldelim();
        }
        if (message.limitUp !== undefined) {
            common_js_1.Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
        }
        if (message.limitDown !== undefined) {
            common_js_1.Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
        }
        if (message.lastPriceTs !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.lastPriceTs), writer.uint32(170).fork()).ldelim();
        }
        if (message.closePriceTs !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.closePriceTs), writer.uint32(178).fork()).ldelim();
        }
        if (message.orderbookTs !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.orderbookTs), writer.uint32(186).fork()).ldelim();
        }
        if (message.instrumentUid !== "") {
            writer.uint32(74).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
                    message.bids.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.asks.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastPrice = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.closePrice = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.limitUp = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.limitDown = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.lastPriceTs = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.closePriceTs = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.orderbookTs = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            bids: Array.isArray(object?.bids)
                ? object.bids.map((e) => exports.Order.fromJSON(e))
                : [],
            asks: Array.isArray(object?.asks)
                ? object.asks.map((e) => exports.Order.fromJSON(e))
                : [],
            lastPrice: isSet(object.lastPrice)
                ? common_js_1.Quotation.fromJSON(object.lastPrice)
                : undefined,
            closePrice: isSet(object.closePrice)
                ? common_js_1.Quotation.fromJSON(object.closePrice)
                : undefined,
            limitUp: isSet(object.limitUp)
                ? common_js_1.Quotation.fromJSON(object.limitUp)
                : undefined,
            limitDown: isSet(object.limitDown)
                ? common_js_1.Quotation.fromJSON(object.limitDown)
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
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        if (message.bids) {
            obj.bids = message.bids.map((e) => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.bids = [];
        }
        if (message.asks) {
            obj.asks = message.asks.map((e) => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.asks = [];
        }
        message.lastPrice !== undefined &&
            (obj.lastPrice = message.lastPrice
                ? common_js_1.Quotation.toJSON(message.lastPrice)
                : undefined);
        message.closePrice !== undefined &&
            (obj.closePrice = message.closePrice
                ? common_js_1.Quotation.toJSON(message.closePrice)
                : undefined);
        message.limitUp !== undefined &&
            (obj.limitUp = message.limitUp
                ? common_js_1.Quotation.toJSON(message.limitUp)
                : undefined);
        message.limitDown !== undefined &&
            (obj.limitDown = message.limitDown
                ? common_js_1.Quotation.toJSON(message.limitDown)
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
function createBaseGetTradingStatusRequest() {
    return { figi: "", instrumentId: "" };
}
exports.GetTradingStatusRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.instrumentId !== "") {
            writer.uint32(18).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseGetTradingStatusesRequest() {
    return { instrumentId: [] };
}
exports.GetTradingStatusesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.instrumentId) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            instrumentId: Array.isArray(object?.instrumentId)
                ? object.instrumentId.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instrumentId) {
            obj.instrumentId = message.instrumentId.map((e) => e);
        }
        else {
            obj.instrumentId = [];
        }
        return obj;
    },
};
function createBaseGetTradingStatusesResponse() {
    return { tradingStatuses: [] };
}
exports.GetTradingStatusesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.tradingStatuses) {
            exports.GetTradingStatusResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTradingStatusesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradingStatuses.push(exports.GetTradingStatusResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tradingStatuses: Array.isArray(object?.tradingStatuses)
                ? object.tradingStatuses.map((e) => exports.GetTradingStatusResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tradingStatuses) {
            obj.tradingStatuses = message.tradingStatuses.map((e) => e ? exports.GetTradingStatusResponse.toJSON(e) : undefined);
        }
        else {
            obj.tradingStatuses = [];
        }
        return obj;
    },
};
function createBaseGetTradingStatusResponse() {
    return {
        figi: "",
        tradingStatus: 0,
        limitOrderAvailableFlag: false,
        marketOrderAvailableFlag: false,
        apiTradeAvailableFlag: false,
        instrumentUid: "",
    };
}
exports.GetTradingStatusResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTradingStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.tradingStatus = reader.int32();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            tradingStatus: isSet(object.tradingStatus)
                ? (0, common_js_1.securityTradingStatusFromJSON)(object.tradingStatus)
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.tradingStatus !== undefined &&
            (obj.tradingStatus = (0, common_js_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.limitOrderAvailableFlag !== undefined &&
            (obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag);
        message.marketOrderAvailableFlag !== undefined &&
            (obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag);
        message.apiTradeAvailableFlag !== undefined &&
            (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseGetLastTradesRequest() {
    return { figi: "", from: undefined, to: undefined, instrumentId: "" };
}
exports.GetLastTradesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.from !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        if (message.instrumentId !== "") {
            writer.uint32(34).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLastTradesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.instrumentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseGetLastTradesResponse() {
    return { trades: [] };
}
exports.GetLastTradesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.trades) {
            exports.Trade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLastTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.Trade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trades: Array.isArray(object?.trades)
                ? object.trades.map((e) => exports.Trade.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map((e) => (e ? exports.Trade.toJSON(e) : undefined));
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
};
function createBaseGetMySubscriptions() {
    return {};
}
exports.GetMySubscriptions = {
    encode(_, writer = minimal_js_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
};
function createBaseGetClosePricesRequest() {
    return { instruments: [] };
}
exports.GetClosePricesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.instruments) {
            exports.InstrumentClosePriceRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetClosePricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instruments.push(exports.InstrumentClosePriceRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            instruments: Array.isArray(object?.instruments)
                ? object.instruments.map((e) => exports.InstrumentClosePriceRequest.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instruments) {
            obj.instruments = message.instruments.map((e) => e ? exports.InstrumentClosePriceRequest.toJSON(e) : undefined);
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
};
function createBaseInstrumentClosePriceRequest() {
    return { instrumentId: "" };
}
exports.InstrumentClosePriceRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.instrumentId !== "") {
            writer.uint32(10).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBaseGetClosePricesResponse() {
    return { closePrices: [] };
}
exports.GetClosePricesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.closePrices) {
            exports.InstrumentClosePriceResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetClosePricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.closePrices.push(exports.InstrumentClosePriceResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            closePrices: Array.isArray(object?.closePrices)
                ? object.closePrices.map((e) => exports.InstrumentClosePriceResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.closePrices) {
            obj.closePrices = message.closePrices.map((e) => e ? exports.InstrumentClosePriceResponse.toJSON(e) : undefined);
        }
        else {
            obj.closePrices = [];
        }
        return obj;
    },
};
function createBaseInstrumentClosePriceResponse() {
    return { figi: "", instrumentUid: "", price: undefined, time: undefined };
}
exports.InstrumentClosePriceResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(18).string(message.instrumentUid);
        }
        if (message.price !== undefined) {
            common_js_1.Quotation.encode(message.price, writer.uint32(90).fork()).ldelim();
        }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
                    message.price = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
            price: isSet(object.price) ? common_js_1.Quotation.fromJSON(object.price) : undefined,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        message.price !== undefined &&
            (obj.price = message.price ? common_js_1.Quotation.toJSON(message.price) : undefined);
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },
};
exports.MarketDataServiceDefinition = {
    name: "MarketDataService",
    fullName: "tinkoff.public.invest.api.contract.v1.MarketDataService",
    methods: {
        /** Метод запроса исторических свечей по инструменту. */
        getCandles: {
            name: "GetCandles",
            requestType: exports.GetCandlesRequest,
            requestStream: false,
            responseType: exports.GetCandlesResponse,
            responseStream: false,
            options: {},
        },
        /** Метод запроса цен последних сделок по инструментам. */
        getLastPrices: {
            name: "GetLastPrices",
            requestType: exports.GetLastPricesRequest,
            requestStream: false,
            responseType: exports.GetLastPricesResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения стакана по инструменту. */
        getOrderBook: {
            name: "GetOrderBook",
            requestType: exports.GetOrderBookRequest,
            requestStream: false,
            responseType: exports.GetOrderBookResponse,
            responseStream: false,
            options: {},
        },
        /** Метод запроса статуса торгов по инструментам. */
        getTradingStatus: {
            name: "GetTradingStatus",
            requestType: exports.GetTradingStatusRequest,
            requestStream: false,
            responseType: exports.GetTradingStatusResponse,
            responseStream: false,
            options: {},
        },
        /** Метод запроса статуса торгов по инструментам. */
        getTradingStatuses: {
            name: "GetTradingStatuses",
            requestType: exports.GetTradingStatusesRequest,
            requestStream: false,
            responseType: exports.GetTradingStatusesResponse,
            responseStream: false,
            options: {},
        },
        /** Метод запроса обезличенных сделок за последний час. */
        getLastTrades: {
            name: "GetLastTrades",
            requestType: exports.GetLastTradesRequest,
            requestStream: false,
            responseType: exports.GetLastTradesResponse,
            responseStream: false,
            options: {},
        },
        /** Метод запроса цен закрытия торговой сессии по инструментам. */
        getClosePrices: {
            name: "GetClosePrices",
            requestType: exports.GetClosePricesRequest,
            requestStream: false,
            responseType: exports.GetClosePricesResponse,
            responseStream: false,
            options: {},
        },
    },
};
exports.MarketDataStreamServiceDefinition = {
    name: "MarketDataStreamService",
    fullName: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService",
    methods: {
        /** Bi-directional стрим предоставления биржевой информации. */
        marketDataStream: {
            name: "MarketDataStream",
            requestType: exports.MarketDataRequest,
            requestStream: true,
            responseType: exports.MarketDataResponse,
            responseStream: true,
            options: {},
        },
        /** Server-side стрим предоставления биржевой информации. */
        marketDataServerSideStream: {
            name: "MarketDataServerSideStream",
            requestType: exports.MarketDataServerSideStreamRequest,
            requestStream: false,
            responseType: exports.MarketDataResponse,
            responseStream: true,
            options: {},
        },
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=marketdata.js.map