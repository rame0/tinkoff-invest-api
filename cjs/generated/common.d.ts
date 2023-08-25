import _m0 from "protobufjs/minimal.js";
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Тип инструмента. */
export declare enum InstrumentType {
    INSTRUMENT_TYPE_UNSPECIFIED = 0,
    /** INSTRUMENT_TYPE_BOND - Облигация. */
    INSTRUMENT_TYPE_BOND = 1,
    /** INSTRUMENT_TYPE_SHARE - Акция. */
    INSTRUMENT_TYPE_SHARE = 2,
    /** INSTRUMENT_TYPE_CURRENCY - Валюта. */
    INSTRUMENT_TYPE_CURRENCY = 3,
    /** INSTRUMENT_TYPE_ETF - Exchange-traded fund. Фонд. */
    INSTRUMENT_TYPE_ETF = 4,
    /** INSTRUMENT_TYPE_FUTURES - Фьючерс. */
    INSTRUMENT_TYPE_FUTURES = 5,
    /** INSTRUMENT_TYPE_SP - Структурная нота. */
    INSTRUMENT_TYPE_SP = 6,
    /** INSTRUMENT_TYPE_OPTION - Опцион. */
    INSTRUMENT_TYPE_OPTION = 7,
    /** INSTRUMENT_TYPE_CLEARING_CERTIFICATE - Clearing certificate. */
    INSTRUMENT_TYPE_CLEARING_CERTIFICATE = 8,
    UNRECOGNIZED = -1
}
export declare function instrumentTypeFromJSON(object: any): InstrumentType;
export declare function instrumentTypeToJSON(object: InstrumentType): string;
/** Режим торгов инструмента */
export declare enum SecurityTradingStatus {
    /** SECURITY_TRADING_STATUS_UNSPECIFIED - Торговый статус не определён */
    SECURITY_TRADING_STATUS_UNSPECIFIED = 0,
    /** SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING - Недоступен для торгов */
    SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1,
    /** SECURITY_TRADING_STATUS_OPENING_PERIOD - Период открытия торгов */
    SECURITY_TRADING_STATUS_OPENING_PERIOD = 2,
    /** SECURITY_TRADING_STATUS_CLOSING_PERIOD - Период закрытия торгов */
    SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3,
    /** SECURITY_TRADING_STATUS_BREAK_IN_TRADING - Перерыв в торговле */
    SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4,
    /** SECURITY_TRADING_STATUS_NORMAL_TRADING - Нормальная торговля */
    SECURITY_TRADING_STATUS_NORMAL_TRADING = 5,
    /** SECURITY_TRADING_STATUS_CLOSING_AUCTION - Аукцион закрытия */
    SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6,
    /** SECURITY_TRADING_STATUS_DARK_POOL_AUCTION - Аукцион крупных пакетов */
    SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7,
    /** SECURITY_TRADING_STATUS_DISCRETE_AUCTION - Дискретный аукцион */
    SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8,
    /** SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD - Аукцион открытия */
    SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9,
    /** SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE - Период торгов по цене аукциона закрытия */
    SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10,
    /** SECURITY_TRADING_STATUS_SESSION_ASSIGNED - Сессия назначена */
    SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11,
    /** SECURITY_TRADING_STATUS_SESSION_CLOSE - Сессия закрыта */
    SECURITY_TRADING_STATUS_SESSION_CLOSE = 12,
    /** SECURITY_TRADING_STATUS_SESSION_OPEN - Сессия открыта */
    SECURITY_TRADING_STATUS_SESSION_OPEN = 13,
    /** SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING - Доступна торговля в режиме внутренней ликвидности брокера */
    SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14,
    /** SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING - Перерыв торговли в режиме внутренней ликвидности брокера */
    SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15,
    /** SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING - Недоступна торговля в режиме внутренней ликвидности брокера */
    SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = 16,
    UNRECOGNIZED = -1
}
export declare function securityTradingStatusFromJSON(object: any): SecurityTradingStatus;
export declare function securityTradingStatusToJSON(object: SecurityTradingStatus): string;
/** Денежная сумма в определенной валюте */
export interface MoneyValue {
    /** строковый ISO-код валюты */
    currency: string;
    /** целая часть суммы, может быть отрицательным числом */
    units: number;
    /** дробная часть суммы, может быть отрицательным числом */
    nano: number;
}
/** Котировка — денежная сумма без указания валюты */
export interface Quotation {
    /** целая часть суммы, может быть отрицательным числом */
    units: number;
    /** дробная часть суммы, может быть отрицательным числом */
    nano: number;
}
/** Проверка активности стрима. */
export interface Ping {
    /** Время проверки. */
    time?: Date;
}
export declare const MoneyValue: {
    encode(message: MoneyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MoneyValue;
    fromJSON(object: any): MoneyValue;
    toJSON(message: MoneyValue): unknown;
};
export declare const Quotation: {
    encode(message: Quotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Quotation;
    fromJSON(object: any): Quotation;
    toJSON(message: Quotation): unknown;
};
export declare const Ping: {
    encode(message: Ping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ping;
    fromJSON(object: any): Ping;
    toJSON(message: Ping): unknown;
};
//# sourceMappingURL=common.d.ts.map