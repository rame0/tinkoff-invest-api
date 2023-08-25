import _m0 from "protobufjs/minimal.js";
import { Quotation, SecurityTradingStatus, Ping } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Тип операции со списком подписок. */
export declare enum SubscriptionAction {
    /** SUBSCRIPTION_ACTION_UNSPECIFIED - Статус подписки не определён. */
    SUBSCRIPTION_ACTION_UNSPECIFIED = 0,
    /** SUBSCRIPTION_ACTION_SUBSCRIBE - Подписаться. */
    SUBSCRIPTION_ACTION_SUBSCRIBE = 1,
    /** SUBSCRIPTION_ACTION_UNSUBSCRIBE - Отписаться. */
    SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2,
    UNRECOGNIZED = -1
}
export declare function subscriptionActionFromJSON(object: any): SubscriptionAction;
export declare function subscriptionActionToJSON(object: SubscriptionAction): string;
/** Интервал свечи. */
export declare enum SubscriptionInterval {
    /** SUBSCRIPTION_INTERVAL_UNSPECIFIED - Интервал свечи не определён. */
    SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0,
    /** SUBSCRIPTION_INTERVAL_ONE_MINUTE - Минутные свечи. */
    SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1,
    /** SUBSCRIPTION_INTERVAL_FIVE_MINUTES - Пятиминутные свечи. */
    SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2,
    UNRECOGNIZED = -1
}
export declare function subscriptionIntervalFromJSON(object: any): SubscriptionInterval;
export declare function subscriptionIntervalToJSON(object: SubscriptionInterval): string;
/** Результат подписки. */
export declare enum SubscriptionStatus {
    /** SUBSCRIPTION_STATUS_UNSPECIFIED - Статус подписки не определён. */
    SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
    /** SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
    SUBSCRIPTION_STATUS_SUCCESS = 1,
    /** SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND - Инструмент не найден. */
    SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2,
    /** SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID - Некорректный статус подписки, список возможных значений: [SubscriptionAction](https://tinkoff.github.io/investAPI/marketdata#subscriptionaction). */
    SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3,
    /** SUBSCRIPTION_STATUS_DEPTH_IS_INVALID - Некорректная глубина стакана, доступные значения: 1, 10, 20, 30, 40, 50. */
    SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4,
    /** SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID - Некорректный интервал свечей, список возможных значений: [SubscriptionInterval](https://tinkoff.github.io/investAPI/marketdata#subscriptioninterval). */
    SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5,
    /** SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED - Превышен лимит на общее количество подписок в рамках стрима, подробнее: [Лимитная политика](https://tinkoff.github.io/investAPI/limits/). */
    SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6,
    /** SUBSCRIPTION_STATUS_INTERNAL_ERROR - Внутренняя ошибка сервиса. */
    SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7,
    /** SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS - Превышен лимит на количество запросов на подписки в течение установленного отрезка времени */
    SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS = 8,
    /** SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND - Активная подписка не найдена. Ошибка может возникнуть только при отписке от не существующей отписки */
    SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND = 9,
    UNRECOGNIZED = -1
}
export declare function subscriptionStatusFromJSON(object: any): SubscriptionStatus;
export declare function subscriptionStatusToJSON(object: SubscriptionStatus): string;
/** Направление сделки. */
export declare enum TradeDirection {
    /** TRADE_DIRECTION_UNSPECIFIED - Направление сделки не определено. */
    TRADE_DIRECTION_UNSPECIFIED = 0,
    /** TRADE_DIRECTION_BUY - Покупка. */
    TRADE_DIRECTION_BUY = 1,
    /** TRADE_DIRECTION_SELL - Продажа. */
    TRADE_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function tradeDirectionFromJSON(object: any): TradeDirection;
export declare function tradeDirectionToJSON(object: TradeDirection): string;
/** Интервал свечей. */
export declare enum CandleInterval {
    /** CANDLE_INTERVAL_UNSPECIFIED - Интервал не определён. */
    CANDLE_INTERVAL_UNSPECIFIED = 0,
    /** CANDLE_INTERVAL_1_MIN - от 1 минуты до 1 дня. */
    CANDLE_INTERVAL_1_MIN = 1,
    /** CANDLE_INTERVAL_5_MIN - от 5 минут до 1 дня. */
    CANDLE_INTERVAL_5_MIN = 2,
    /** CANDLE_INTERVAL_15_MIN - от 15 минут до 1 дня. */
    CANDLE_INTERVAL_15_MIN = 3,
    /** CANDLE_INTERVAL_HOUR - от 1 часа до 1 недели. */
    CANDLE_INTERVAL_HOUR = 4,
    /** CANDLE_INTERVAL_DAY - от 1 дня до 1 года. */
    CANDLE_INTERVAL_DAY = 5,
    /** CANDLE_INTERVAL_2_MIN - от 2 минут до 1 дня. */
    CANDLE_INTERVAL_2_MIN = 6,
    /** CANDLE_INTERVAL_3_MIN - от 3 минут до 1 дня. */
    CANDLE_INTERVAL_3_MIN = 7,
    /** CANDLE_INTERVAL_10_MIN - от 10 минут до 1 дня. */
    CANDLE_INTERVAL_10_MIN = 8,
    /** CANDLE_INTERVAL_30_MIN - от 30 минут до 2 дней. */
    CANDLE_INTERVAL_30_MIN = 9,
    /** CANDLE_INTERVAL_2_HOUR - от 2 часов до 1 месяца. */
    CANDLE_INTERVAL_2_HOUR = 10,
    /** CANDLE_INTERVAL_4_HOUR - от 4 часов до 1 месяца. */
    CANDLE_INTERVAL_4_HOUR = 11,
    /** CANDLE_INTERVAL_WEEK - от 1 недели до 2 лет. */
    CANDLE_INTERVAL_WEEK = 12,
    /** CANDLE_INTERVAL_MONTH - от 1 месяца до 10 лет. */
    CANDLE_INTERVAL_MONTH = 13,
    UNRECOGNIZED = -1
}
export declare function candleIntervalFromJSON(object: any): CandleInterval;
export declare function candleIntervalToJSON(object: CandleInterval): string;
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
    /** Флаг ожидания закрытия временного интервала для отправки свечи, применяется только для минутных свечей. */
    waitingClose: boolean;
}
/** Запрос изменения статус подписки на свечи. */
export interface CandleInstrument {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Интервал свечей. */
    interval: SubscriptionInterval;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid */
    instrumentId: string;
}
/** Результат изменения статус подписки на свечи. */
export interface SubscribeCandlesResponse {
    /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
    trackingId: string;
    /** Массив статусов подписки на свечи. */
    candlesSubscriptions: CandleSubscription[];
}
/** Статус подписки на свечи. */
export interface CandleSubscription {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Интервал свечей. */
    interval: SubscriptionInterval;
    /** Статус подписки. */
    subscriptionStatus: SubscriptionStatus;
    /** Uid инструмента */
    instrumentUid: string;
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
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Глубина стакана. */
    depth: number;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid */
    instrumentId: string;
}
/** Результат изменения статуса подписки на стаканы. */
export interface SubscribeOrderBookResponse {
    /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
    trackingId: string;
    /** Массив статусов подписки на стаканы. */
    orderBookSubscriptions: OrderBookSubscription[];
}
/** Статус подписки. */
export interface OrderBookSubscription {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Глубина стакана. */
    depth: number;
    /** Статус подписки. */
    subscriptionStatus: SubscriptionStatus;
    /** Uid инструмента */
    instrumentUid: string;
}
/** Изменение статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesRequest {
    /** Изменение статуса подписки. */
    subscriptionAction: SubscriptionAction;
    /** Массив инструментов для подписки на поток обезличенных сделок. */
    instruments: TradeInstrument[];
}
/** Запрос подписки на поток обезличенных сделок. */
export interface TradeInstrument {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid */
    instrumentId: string;
}
/** Результат изменения статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesResponse {
    /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
    trackingId: string;
    /** Массив статусов подписки на поток сделок. */
    tradeSubscriptions: TradeSubscription[];
}
/** Статус подписки. */
export interface TradeSubscription {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Статус подписки. */
    subscriptionStatus: SubscriptionStatus;
    /** Uid инструмента */
    instrumentUid: string;
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
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid */
    instrumentId: string;
}
/** Результат изменения статуса подписки на торговый статус. */
export interface SubscribeInfoResponse {
    /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
    trackingId: string;
    /** Массив статусов подписки на торговый статус. */
    infoSubscriptions: InfoSubscription[];
}
/** Статус подписки. */
export interface InfoSubscription {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Статус подписки. */
    subscriptionStatus: SubscriptionStatus;
    /** Uid инструмента */
    instrumentUid: string;
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
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid */
    instrumentId: string;
}
/** Результат изменения статуса подписки на цену последней сделки. */
export interface SubscribeLastPriceResponse {
    /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
    trackingId: string;
    /** Массив статусов подписки на цену последней сделки. */
    lastPriceSubscriptions: LastPriceSubscription[];
}
/** Статус подписки на цену последней сделки. */
export interface LastPriceSubscription {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Статус подписки. */
    subscriptionStatus: SubscriptionStatus;
    /** Uid инструмента */
    instrumentUid: string;
}
/** Пакет свечей в рамках стрима. */
export interface Candle {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Интервал свечи. */
    interval: SubscriptionInterval;
    /** Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    open?: Quotation;
    /** Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    high?: Quotation;
    /** Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    low?: Quotation;
    /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    close?: Quotation;
    /** Объём сделок в лотах. */
    volume: number;
    /** Время начала интервала свечи в часовом поясе UTC. */
    time?: Date;
    /** Время последней сделки, вошедшей в свечу в часовом поясе UTC. */
    lastTradeTs?: Date;
    /** Uid инструмента */
    instrumentUid: string;
}
/** Пакет стаканов в рамках стрима. */
export interface OrderBook {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Глубина стакана. */
    depth: number;
    /** Флаг консистентности стакана. **false** значит не все заявки попали в стакан по причинам сетевых задержек или нарушения порядка доставки. */
    isConsistent: boolean;
    /** Массив предложений. */
    bids: Order[];
    /** Массив спроса. */
    asks: Order[];
    /** Время формирования стакана в часовом поясе UTC по времени биржи. */
    time?: Date;
    /** Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    limitUp?: Quotation;
    /** Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    limitDown?: Quotation;
    /** Uid инструмента */
    instrumentUid: string;
}
/** Массив предложений/спроса. */
export interface Order {
    /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    price?: Quotation;
    /** Количество в лотах. */
    quantity: number;
}
/** Информация о сделке. */
export interface Trade {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Направление сделки. */
    direction: TradeDirection;
    /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    price?: Quotation;
    /** Количество лотов. */
    quantity: number;
    /** Время сделки в часовом поясе UTC по времени биржи. */
    time?: Date;
    /** Uid инструмента */
    instrumentUid: string;
}
/** Пакет изменения торгового статуса. */
export interface TradingStatus {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Статус торговли инструментом. */
    tradingStatus: SecurityTradingStatus;
    /** Время изменения торгового статуса в часовом поясе UTC. */
    time?: Date;
    /** Признак доступности выставления лимитной заявки по инструменту. */
    limitOrderAvailableFlag: boolean;
    /** Признак доступности выставления рыночной заявки по инструменту. */
    marketOrderAvailableFlag: boolean;
    /** Uid инструмента */
    instrumentUid: string;
}
/** Запрос исторических свечей. */
export interface GetCandlesRequest {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Начало запрашиваемого периода в часовом поясе UTC. */
    from?: Date;
    /** Окончание запрашиваемого периода в часовом поясе UTC. */
    to?: Date;
    /** Интервал запрошенных свечей. */
    interval: CandleInterval;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
    instrumentId: string;
}
/** Список свечей. */
export interface GetCandlesResponse {
    /** Массив свечей. */
    candles: HistoricCandle[];
}
/** Информация о свече. */
export interface HistoricCandle {
    /** Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    open?: Quotation;
    /** Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    high?: Quotation;
    /** Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    low?: Quotation;
    /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    close?: Quotation;
    /** Объём торгов в лотах. */
    volume: number;
    /** Время свечи в часовом поясе UTC. */
    time?: Date;
    /** Признак завершённости свечи. **false** значит, свеча за текущие интервал ещё сформирована не полностью. */
    isComplete: boolean;
}
/** Запрос получения цен последних сделок. */
export interface GetLastPricesRequest {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string[];
    /** Массив идентификаторов инструмента, принимает значения figi или instrument_uid. */
    instrumentId: string[];
}
/** Список цен последних сделок. */
export interface GetLastPricesResponse {
    /** Массив цен последних сделок. */
    lastPrices: LastPrice[];
}
/** Информация о цене последней сделки. */
export interface LastPrice {
    /** Figi инструмента. */
    figi: string;
    /** Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    price?: Quotation;
    /** Время получения последней цены в часовом поясе UTC по времени биржи. */
    time?: Date;
    /** Uid инструмента */
    instrumentUid: string;
}
/** Запрос стакана. */
export interface GetOrderBookRequest {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Глубина стакана. */
    depth: number;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
    instrumentId: string;
}
/** Информация о стакане. */
export interface GetOrderBookResponse {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Глубина стакана. */
    depth: number;
    /** Множество пар значений на покупку. */
    bids: Order[];
    /** Множество пар значений на продажу. */
    asks: Order[];
    /** Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    lastPrice?: Quotation;
    /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    closePrice?: Quotation;
    /** Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    limitUp?: Quotation;
    /** Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
    limitDown?: Quotation;
    /** Время получения цены последней сделки. */
    lastPriceTs?: Date;
    /** Время получения цены закрытия. */
    closePriceTs?: Date;
    /** Время формирования стакана на бирже. */
    orderbookTs?: Date;
    /** Uid инструмента. */
    instrumentUid: string;
}
/** Запрос получения торгового статуса. */
export interface GetTradingStatusRequest {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
    instrumentId: string;
}
/** Запрос получения торгового статуса. */
export interface GetTradingStatusesRequest {
    /** Идентификатор инструмента, принимает значение figi или instrument_uid */
    instrumentId: string[];
}
/** Информация о торговом статусе. */
export interface GetTradingStatusesResponse {
    /** Массив информации о торговых статусах */
    tradingStatuses: GetTradingStatusResponse[];
}
/** Информация о торговом статусе. */
export interface GetTradingStatusResponse {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Статус торговли инструментом. */
    tradingStatus: SecurityTradingStatus;
    /** Признак доступности выставления лимитной заявки по инструменту. */
    limitOrderAvailableFlag: boolean;
    /** Признак доступности выставления рыночной заявки по инструменту. */
    marketOrderAvailableFlag: boolean;
    /** Признак доступности торгов через API. */
    apiTradeAvailableFlag: boolean;
    /** Uid инструмента. */
    instrumentUid: string;
}
/** Запрос обезличенных сделок за последний час. */
export interface GetLastTradesRequest {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Начало запрашиваемого периода в часовом поясе UTC. */
    from?: Date;
    /** Окончание запрашиваемого периода в часовом поясе UTC. */
    to?: Date;
    /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
    instrumentId: string;
}
/** Обезличенных сделок за последний час. */
export interface GetLastTradesResponse {
    /** Массив сделок. */
    trades: Trade[];
}
/** Запрос активных подписок. */
export interface GetMySubscriptions {
}
/** Запрос цен закрытия торговой сессии по инструментам. */
export interface GetClosePricesRequest {
    /** Массив по инструментам. */
    instruments: InstrumentClosePriceRequest[];
}
/** Запрос цен закрытия торговой сессии по инструменту. */
export interface InstrumentClosePriceRequest {
    /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
    instrumentId: string;
}
/** Цены закрытия торговой сессии по инструментам. */
export interface GetClosePricesResponse {
    /** Массив по инструментам. */
    closePrices: InstrumentClosePriceResponse[];
}
/** Цена закрытия торговой сессии по инструменту. */
export interface InstrumentClosePriceResponse {
    /** Figi инструмента. */
    figi: string;
    /** Uid инструмента. */
    instrumentUid: string;
    /** Цена закрытия торговой сессии. */
    price?: Quotation;
    /** Дата совершения торгов. */
    time?: Date;
}
export declare const MarketDataRequest: {
    encode(message: MarketDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataRequest;
    fromJSON(object: any): MarketDataRequest;
    toJSON(message: MarketDataRequest): unknown;
};
export declare const MarketDataServerSideStreamRequest: {
    encode(message: MarketDataServerSideStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataServerSideStreamRequest;
    fromJSON(object: any): MarketDataServerSideStreamRequest;
    toJSON(message: MarketDataServerSideStreamRequest): unknown;
};
export declare const MarketDataResponse: {
    encode(message: MarketDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataResponse;
    fromJSON(object: any): MarketDataResponse;
    toJSON(message: MarketDataResponse): unknown;
};
export declare const SubscribeCandlesRequest: {
    encode(message: SubscribeCandlesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeCandlesRequest;
    fromJSON(object: any): SubscribeCandlesRequest;
    toJSON(message: SubscribeCandlesRequest): unknown;
};
export declare const CandleInstrument: {
    encode(message: CandleInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CandleInstrument;
    fromJSON(object: any): CandleInstrument;
    toJSON(message: CandleInstrument): unknown;
};
export declare const SubscribeCandlesResponse: {
    encode(message: SubscribeCandlesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeCandlesResponse;
    fromJSON(object: any): SubscribeCandlesResponse;
    toJSON(message: SubscribeCandlesResponse): unknown;
};
export declare const CandleSubscription: {
    encode(message: CandleSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CandleSubscription;
    fromJSON(object: any): CandleSubscription;
    toJSON(message: CandleSubscription): unknown;
};
export declare const SubscribeOrderBookRequest: {
    encode(message: SubscribeOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOrderBookRequest;
    fromJSON(object: any): SubscribeOrderBookRequest;
    toJSON(message: SubscribeOrderBookRequest): unknown;
};
export declare const OrderBookInstrument: {
    encode(message: OrderBookInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookInstrument;
    fromJSON(object: any): OrderBookInstrument;
    toJSON(message: OrderBookInstrument): unknown;
};
export declare const SubscribeOrderBookResponse: {
    encode(message: SubscribeOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOrderBookResponse;
    fromJSON(object: any): SubscribeOrderBookResponse;
    toJSON(message: SubscribeOrderBookResponse): unknown;
};
export declare const OrderBookSubscription: {
    encode(message: OrderBookSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookSubscription;
    fromJSON(object: any): OrderBookSubscription;
    toJSON(message: OrderBookSubscription): unknown;
};
export declare const SubscribeTradesRequest: {
    encode(message: SubscribeTradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeTradesRequest;
    fromJSON(object: any): SubscribeTradesRequest;
    toJSON(message: SubscribeTradesRequest): unknown;
};
export declare const TradeInstrument: {
    encode(message: TradeInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeInstrument;
    fromJSON(object: any): TradeInstrument;
    toJSON(message: TradeInstrument): unknown;
};
export declare const SubscribeTradesResponse: {
    encode(message: SubscribeTradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeTradesResponse;
    fromJSON(object: any): SubscribeTradesResponse;
    toJSON(message: SubscribeTradesResponse): unknown;
};
export declare const TradeSubscription: {
    encode(message: TradeSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeSubscription;
    fromJSON(object: any): TradeSubscription;
    toJSON(message: TradeSubscription): unknown;
};
export declare const SubscribeInfoRequest: {
    encode(message: SubscribeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeInfoRequest;
    fromJSON(object: any): SubscribeInfoRequest;
    toJSON(message: SubscribeInfoRequest): unknown;
};
export declare const InfoInstrument: {
    encode(message: InfoInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InfoInstrument;
    fromJSON(object: any): InfoInstrument;
    toJSON(message: InfoInstrument): unknown;
};
export declare const SubscribeInfoResponse: {
    encode(message: SubscribeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeInfoResponse;
    fromJSON(object: any): SubscribeInfoResponse;
    toJSON(message: SubscribeInfoResponse): unknown;
};
export declare const InfoSubscription: {
    encode(message: InfoSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InfoSubscription;
    fromJSON(object: any): InfoSubscription;
    toJSON(message: InfoSubscription): unknown;
};
export declare const SubscribeLastPriceRequest: {
    encode(message: SubscribeLastPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeLastPriceRequest;
    fromJSON(object: any): SubscribeLastPriceRequest;
    toJSON(message: SubscribeLastPriceRequest): unknown;
};
export declare const LastPriceInstrument: {
    encode(message: LastPriceInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceInstrument;
    fromJSON(object: any): LastPriceInstrument;
    toJSON(message: LastPriceInstrument): unknown;
};
export declare const SubscribeLastPriceResponse: {
    encode(message: SubscribeLastPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeLastPriceResponse;
    fromJSON(object: any): SubscribeLastPriceResponse;
    toJSON(message: SubscribeLastPriceResponse): unknown;
};
export declare const LastPriceSubscription: {
    encode(message: LastPriceSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceSubscription;
    fromJSON(object: any): LastPriceSubscription;
    toJSON(message: LastPriceSubscription): unknown;
};
export declare const Candle: {
    encode(message: Candle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Candle;
    fromJSON(object: any): Candle;
    toJSON(message: Candle): unknown;
};
export declare const OrderBook: {
    encode(message: OrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBook;
    fromJSON(object: any): OrderBook;
    toJSON(message: OrderBook): unknown;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
};
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
};
export declare const TradingStatus: {
    encode(message: TradingStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingStatus;
    fromJSON(object: any): TradingStatus;
    toJSON(message: TradingStatus): unknown;
};
export declare const GetCandlesRequest: {
    encode(message: GetCandlesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesRequest;
    fromJSON(object: any): GetCandlesRequest;
    toJSON(message: GetCandlesRequest): unknown;
};
export declare const GetCandlesResponse: {
    encode(message: GetCandlesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesResponse;
    fromJSON(object: any): GetCandlesResponse;
    toJSON(message: GetCandlesResponse): unknown;
};
export declare const HistoricCandle: {
    encode(message: HistoricCandle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HistoricCandle;
    fromJSON(object: any): HistoricCandle;
    toJSON(message: HistoricCandle): unknown;
};
export declare const GetLastPricesRequest: {
    encode(message: GetLastPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesRequest;
    fromJSON(object: any): GetLastPricesRequest;
    toJSON(message: GetLastPricesRequest): unknown;
};
export declare const GetLastPricesResponse: {
    encode(message: GetLastPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesResponse;
    fromJSON(object: any): GetLastPricesResponse;
    toJSON(message: GetLastPricesResponse): unknown;
};
export declare const LastPrice: {
    encode(message: LastPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastPrice;
    fromJSON(object: any): LastPrice;
    toJSON(message: LastPrice): unknown;
};
export declare const GetOrderBookRequest: {
    encode(message: GetOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookRequest;
    fromJSON(object: any): GetOrderBookRequest;
    toJSON(message: GetOrderBookRequest): unknown;
};
export declare const GetOrderBookResponse: {
    encode(message: GetOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookResponse;
    fromJSON(object: any): GetOrderBookResponse;
    toJSON(message: GetOrderBookResponse): unknown;
};
export declare const GetTradingStatusRequest: {
    encode(message: GetTradingStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusRequest;
    fromJSON(object: any): GetTradingStatusRequest;
    toJSON(message: GetTradingStatusRequest): unknown;
};
export declare const GetTradingStatusesRequest: {
    encode(message: GetTradingStatusesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusesRequest;
    fromJSON(object: any): GetTradingStatusesRequest;
    toJSON(message: GetTradingStatusesRequest): unknown;
};
export declare const GetTradingStatusesResponse: {
    encode(message: GetTradingStatusesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusesResponse;
    fromJSON(object: any): GetTradingStatusesResponse;
    toJSON(message: GetTradingStatusesResponse): unknown;
};
export declare const GetTradingStatusResponse: {
    encode(message: GetTradingStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusResponse;
    fromJSON(object: any): GetTradingStatusResponse;
    toJSON(message: GetTradingStatusResponse): unknown;
};
export declare const GetLastTradesRequest: {
    encode(message: GetLastTradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesRequest;
    fromJSON(object: any): GetLastTradesRequest;
    toJSON(message: GetLastTradesRequest): unknown;
};
export declare const GetLastTradesResponse: {
    encode(message: GetLastTradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesResponse;
    fromJSON(object: any): GetLastTradesResponse;
    toJSON(message: GetLastTradesResponse): unknown;
};
export declare const GetMySubscriptions: {
    encode(_: GetMySubscriptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMySubscriptions;
    fromJSON(_: any): GetMySubscriptions;
    toJSON(_: GetMySubscriptions): unknown;
};
export declare const GetClosePricesRequest: {
    encode(message: GetClosePricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetClosePricesRequest;
    fromJSON(object: any): GetClosePricesRequest;
    toJSON(message: GetClosePricesRequest): unknown;
};
export declare const InstrumentClosePriceRequest: {
    encode(message: InstrumentClosePriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentClosePriceRequest;
    fromJSON(object: any): InstrumentClosePriceRequest;
    toJSON(message: InstrumentClosePriceRequest): unknown;
};
export declare const GetClosePricesResponse: {
    encode(message: GetClosePricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetClosePricesResponse;
    fromJSON(object: any): GetClosePricesResponse;
    toJSON(message: GetClosePricesResponse): unknown;
};
export declare const InstrumentClosePriceResponse: {
    encode(message: InstrumentClosePriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentClosePriceResponse;
    fromJSON(object: any): InstrumentClosePriceResponse;
    toJSON(message: InstrumentClosePriceResponse): unknown;
};
/** Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок. */
export declare type MarketDataServiceDefinition = typeof MarketDataServiceDefinition;
export declare const MarketDataServiceDefinition: {
    readonly name: "MarketDataService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataService";
    readonly methods: {
        /** Метод запроса исторических свечей по инструменту. */
        readonly getCandles: {
            readonly name: "GetCandles";
            readonly requestType: {
                encode(message: GetCandlesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesRequest;
                fromJSON(object: any): GetCandlesRequest;
                toJSON(message: GetCandlesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCandlesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesResponse;
                fromJSON(object: any): GetCandlesResponse;
                toJSON(message: GetCandlesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод запроса цен последних сделок по инструментам. */
        readonly getLastPrices: {
            readonly name: "GetLastPrices";
            readonly requestType: {
                encode(message: GetLastPricesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesRequest;
                fromJSON(object: any): GetLastPricesRequest;
                toJSON(message: GetLastPricesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLastPricesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesResponse;
                fromJSON(object: any): GetLastPricesResponse;
                toJSON(message: GetLastPricesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения стакана по инструменту. */
        readonly getOrderBook: {
            readonly name: "GetOrderBook";
            readonly requestType: {
                encode(message: GetOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookRequest;
                fromJSON(object: any): GetOrderBookRequest;
                toJSON(message: GetOrderBookRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookResponse;
                fromJSON(object: any): GetOrderBookResponse;
                toJSON(message: GetOrderBookResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод запроса статуса торгов по инструментам. */
        readonly getTradingStatus: {
            readonly name: "GetTradingStatus";
            readonly requestType: {
                encode(message: GetTradingStatusRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusRequest;
                fromJSON(object: any): GetTradingStatusRequest;
                toJSON(message: GetTradingStatusRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetTradingStatusResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusResponse;
                fromJSON(object: any): GetTradingStatusResponse;
                toJSON(message: GetTradingStatusResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод запроса статуса торгов по инструментам. */
        readonly getTradingStatuses: {
            readonly name: "GetTradingStatuses";
            readonly requestType: {
                encode(message: GetTradingStatusesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusesRequest;
                fromJSON(object: any): GetTradingStatusesRequest;
                toJSON(message: GetTradingStatusesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetTradingStatusesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusesResponse;
                fromJSON(object: any): GetTradingStatusesResponse;
                toJSON(message: GetTradingStatusesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод запроса обезличенных сделок за последний час. */
        readonly getLastTrades: {
            readonly name: "GetLastTrades";
            readonly requestType: {
                encode(message: GetLastTradesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesRequest;
                fromJSON(object: any): GetLastTradesRequest;
                toJSON(message: GetLastTradesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLastTradesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesResponse;
                fromJSON(object: any): GetLastTradesResponse;
                toJSON(message: GetLastTradesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод запроса цен закрытия торговой сессии по инструментам. */
        readonly getClosePrices: {
            readonly name: "GetClosePrices";
            readonly requestType: {
                encode(message: GetClosePricesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetClosePricesRequest;
                fromJSON(object: any): GetClosePricesRequest;
                toJSON(message: GetClosePricesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetClosePricesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetClosePricesResponse;
                fromJSON(object: any): GetClosePricesResponse;
                toJSON(message: GetClosePricesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface MarketDataServiceServiceImplementation<CallContextExt = {}> {
    /** Метод запроса исторических свечей по инструменту. */
    getCandles(request: GetCandlesRequest, context: CallContext & CallContextExt): Promise<GetCandlesResponse>;
    /** Метод запроса цен последних сделок по инструментам. */
    getLastPrices(request: GetLastPricesRequest, context: CallContext & CallContextExt): Promise<GetLastPricesResponse>;
    /** Метод получения стакана по инструменту. */
    getOrderBook(request: GetOrderBookRequest, context: CallContext & CallContextExt): Promise<GetOrderBookResponse>;
    /** Метод запроса статуса торгов по инструментам. */
    getTradingStatus(request: GetTradingStatusRequest, context: CallContext & CallContextExt): Promise<GetTradingStatusResponse>;
    /** Метод запроса статуса торгов по инструментам. */
    getTradingStatuses(request: GetTradingStatusesRequest, context: CallContext & CallContextExt): Promise<GetTradingStatusesResponse>;
    /** Метод запроса обезличенных сделок за последний час. */
    getLastTrades(request: GetLastTradesRequest, context: CallContext & CallContextExt): Promise<GetLastTradesResponse>;
    /** Метод запроса цен закрытия торговой сессии по инструментам. */
    getClosePrices(request: GetClosePricesRequest, context: CallContext & CallContextExt): Promise<GetClosePricesResponse>;
}
export interface MarketDataServiceClient<CallOptionsExt = {}> {
    /** Метод запроса исторических свечей по инструменту. */
    getCandles(request: GetCandlesRequest, options?: CallOptions & CallOptionsExt): Promise<GetCandlesResponse>;
    /** Метод запроса цен последних сделок по инструментам. */
    getLastPrices(request: GetLastPricesRequest, options?: CallOptions & CallOptionsExt): Promise<GetLastPricesResponse>;
    /** Метод получения стакана по инструменту. */
    getOrderBook(request: GetOrderBookRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrderBookResponse>;
    /** Метод запроса статуса торгов по инструментам. */
    getTradingStatus(request: GetTradingStatusRequest, options?: CallOptions & CallOptionsExt): Promise<GetTradingStatusResponse>;
    /** Метод запроса статуса торгов по инструментам. */
    getTradingStatuses(request: GetTradingStatusesRequest, options?: CallOptions & CallOptionsExt): Promise<GetTradingStatusesResponse>;
    /** Метод запроса обезличенных сделок за последний час. */
    getLastTrades(request: GetLastTradesRequest, options?: CallOptions & CallOptionsExt): Promise<GetLastTradesResponse>;
    /** Метод запроса цен закрытия торговой сессии по инструментам. */
    getClosePrices(request: GetClosePricesRequest, options?: CallOptions & CallOptionsExt): Promise<GetClosePricesResponse>;
}
export declare type MarketDataStreamServiceDefinition = typeof MarketDataStreamServiceDefinition;
export declare const MarketDataStreamServiceDefinition: {
    readonly name: "MarketDataStreamService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService";
    readonly methods: {
        /** Bi-directional стрим предоставления биржевой информации. */
        readonly marketDataStream: {
            readonly name: "MarketDataStream";
            readonly requestType: {
                encode(message: MarketDataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataRequest;
                fromJSON(object: any): MarketDataRequest;
                toJSON(message: MarketDataRequest): unknown;
            };
            readonly requestStream: true;
            readonly responseType: {
                encode(message: MarketDataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataResponse;
                fromJSON(object: any): MarketDataResponse;
                toJSON(message: MarketDataResponse): unknown;
            };
            readonly responseStream: true;
            readonly options: {};
        };
        /** Server-side стрим предоставления биржевой информации. */
        readonly marketDataServerSideStream: {
            readonly name: "MarketDataServerSideStream";
            readonly requestType: {
                encode(message: MarketDataServerSideStreamRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataServerSideStreamRequest;
                fromJSON(object: any): MarketDataServerSideStreamRequest;
                toJSON(message: MarketDataServerSideStreamRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: MarketDataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataResponse;
                fromJSON(object: any): MarketDataResponse;
                toJSON(message: MarketDataResponse): unknown;
            };
            readonly responseStream: true;
            readonly options: {};
        };
    };
};
export interface MarketDataStreamServiceServiceImplementation<CallContextExt = {}> {
    /** Bi-directional стрим предоставления биржевой информации. */
    marketDataStream(request: AsyncIterable<MarketDataRequest>, context: CallContext & CallContextExt): ServerStreamingMethodResult<MarketDataResponse>;
    /** Server-side стрим предоставления биржевой информации. */
    marketDataServerSideStream(request: MarketDataServerSideStreamRequest, context: CallContext & CallContextExt): ServerStreamingMethodResult<MarketDataResponse>;
}
export interface MarketDataStreamServiceClient<CallOptionsExt = {}> {
    /** Bi-directional стрим предоставления биржевой информации. */
    marketDataStream(request: AsyncIterable<MarketDataRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<MarketDataResponse>;
    /** Server-side стрим предоставления биржевой информации. */
    marketDataServerSideStream(request: MarketDataServerSideStreamRequest, options?: CallOptions & CallOptionsExt): AsyncIterable<MarketDataResponse>;
}
export declare type ServerStreamingMethodResult<Response> = {
    [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
//# sourceMappingURL=marketdata.d.ts.map