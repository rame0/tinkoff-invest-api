"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = exports.Quotation = exports.MoneyValue = exports.securityTradingStatusToJSON = exports.securityTradingStatusFromJSON = exports.SecurityTradingStatus = exports.instrumentTypeToJSON = exports.instrumentTypeFromJSON = exports.InstrumentType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const timestamp_js_1 = require("./google/protobuf/timestamp.js");
exports.protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Тип инструмента. */
var InstrumentType;
(function (InstrumentType) {
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_UNSPECIFIED"] = 0] = "INSTRUMENT_TYPE_UNSPECIFIED";
    /** INSTRUMENT_TYPE_BOND - Облигация. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_BOND"] = 1] = "INSTRUMENT_TYPE_BOND";
    /** INSTRUMENT_TYPE_SHARE - Акция. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_SHARE"] = 2] = "INSTRUMENT_TYPE_SHARE";
    /** INSTRUMENT_TYPE_CURRENCY - Валюта. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_CURRENCY"] = 3] = "INSTRUMENT_TYPE_CURRENCY";
    /** INSTRUMENT_TYPE_ETF - Exchange-traded fund. Фонд. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_ETF"] = 4] = "INSTRUMENT_TYPE_ETF";
    /** INSTRUMENT_TYPE_FUTURES - Фьючерс. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_FUTURES"] = 5] = "INSTRUMENT_TYPE_FUTURES";
    /** INSTRUMENT_TYPE_SP - Структурная нота. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_SP"] = 6] = "INSTRUMENT_TYPE_SP";
    /** INSTRUMENT_TYPE_OPTION - Опцион. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_OPTION"] = 7] = "INSTRUMENT_TYPE_OPTION";
    /** INSTRUMENT_TYPE_CLEARING_CERTIFICATE - Clearing certificate. */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_CLEARING_CERTIFICATE"] = 8] = "INSTRUMENT_TYPE_CLEARING_CERTIFICATE";
    InstrumentType[InstrumentType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstrumentType = exports.InstrumentType || (exports.InstrumentType = {}));
function instrumentTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "INSTRUMENT_TYPE_UNSPECIFIED":
            return InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED;
        case 1:
        case "INSTRUMENT_TYPE_BOND":
            return InstrumentType.INSTRUMENT_TYPE_BOND;
        case 2:
        case "INSTRUMENT_TYPE_SHARE":
            return InstrumentType.INSTRUMENT_TYPE_SHARE;
        case 3:
        case "INSTRUMENT_TYPE_CURRENCY":
            return InstrumentType.INSTRUMENT_TYPE_CURRENCY;
        case 4:
        case "INSTRUMENT_TYPE_ETF":
            return InstrumentType.INSTRUMENT_TYPE_ETF;
        case 5:
        case "INSTRUMENT_TYPE_FUTURES":
            return InstrumentType.INSTRUMENT_TYPE_FUTURES;
        case 6:
        case "INSTRUMENT_TYPE_SP":
            return InstrumentType.INSTRUMENT_TYPE_SP;
        case 7:
        case "INSTRUMENT_TYPE_OPTION":
            return InstrumentType.INSTRUMENT_TYPE_OPTION;
        case 8:
        case "INSTRUMENT_TYPE_CLEARING_CERTIFICATE":
            return InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstrumentType.UNRECOGNIZED;
    }
}
exports.instrumentTypeFromJSON = instrumentTypeFromJSON;
function instrumentTypeToJSON(object) {
    switch (object) {
        case InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED:
            return "INSTRUMENT_TYPE_UNSPECIFIED";
        case InstrumentType.INSTRUMENT_TYPE_BOND:
            return "INSTRUMENT_TYPE_BOND";
        case InstrumentType.INSTRUMENT_TYPE_SHARE:
            return "INSTRUMENT_TYPE_SHARE";
        case InstrumentType.INSTRUMENT_TYPE_CURRENCY:
            return "INSTRUMENT_TYPE_CURRENCY";
        case InstrumentType.INSTRUMENT_TYPE_ETF:
            return "INSTRUMENT_TYPE_ETF";
        case InstrumentType.INSTRUMENT_TYPE_FUTURES:
            return "INSTRUMENT_TYPE_FUTURES";
        case InstrumentType.INSTRUMENT_TYPE_SP:
            return "INSTRUMENT_TYPE_SP";
        case InstrumentType.INSTRUMENT_TYPE_OPTION:
            return "INSTRUMENT_TYPE_OPTION";
        case InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE:
            return "INSTRUMENT_TYPE_CLEARING_CERTIFICATE";
        case InstrumentType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.instrumentTypeToJSON = instrumentTypeToJSON;
/** Режим торгов инструмента */
var SecurityTradingStatus;
(function (SecurityTradingStatus) {
    /** SECURITY_TRADING_STATUS_UNSPECIFIED - Торговый статус не определён */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_UNSPECIFIED"] = 0] = "SECURITY_TRADING_STATUS_UNSPECIFIED";
    /** SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING - Недоступен для торгов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING"] = 1] = "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING";
    /** SECURITY_TRADING_STATUS_OPENING_PERIOD - Период открытия торгов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_PERIOD"] = 2] = "SECURITY_TRADING_STATUS_OPENING_PERIOD";
    /** SECURITY_TRADING_STATUS_CLOSING_PERIOD - Период закрытия торгов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_PERIOD"] = 3] = "SECURITY_TRADING_STATUS_CLOSING_PERIOD";
    /** SECURITY_TRADING_STATUS_BREAK_IN_TRADING - Перерыв в торговле */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_BREAK_IN_TRADING"] = 4] = "SECURITY_TRADING_STATUS_BREAK_IN_TRADING";
    /** SECURITY_TRADING_STATUS_NORMAL_TRADING - Нормальная торговля */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NORMAL_TRADING"] = 5] = "SECURITY_TRADING_STATUS_NORMAL_TRADING";
    /** SECURITY_TRADING_STATUS_CLOSING_AUCTION - Аукцион закрытия */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_AUCTION"] = 6] = "SECURITY_TRADING_STATUS_CLOSING_AUCTION";
    /** SECURITY_TRADING_STATUS_DARK_POOL_AUCTION - Аукцион крупных пакетов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DARK_POOL_AUCTION"] = 7] = "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION";
    /** SECURITY_TRADING_STATUS_DISCRETE_AUCTION - Дискретный аукцион */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DISCRETE_AUCTION"] = 8] = "SECURITY_TRADING_STATUS_DISCRETE_AUCTION";
    /** SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD - Аукцион открытия */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD"] = 9] = "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD";
    /** SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE - Период торгов по цене аукциона закрытия */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE"] = 10] = "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE";
    /** SECURITY_TRADING_STATUS_SESSION_ASSIGNED - Сессия назначена */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_ASSIGNED"] = 11] = "SECURITY_TRADING_STATUS_SESSION_ASSIGNED";
    /** SECURITY_TRADING_STATUS_SESSION_CLOSE - Сессия закрыта */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_CLOSE"] = 12] = "SECURITY_TRADING_STATUS_SESSION_CLOSE";
    /** SECURITY_TRADING_STATUS_SESSION_OPEN - Сессия открыта */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_OPEN"] = 13] = "SECURITY_TRADING_STATUS_SESSION_OPEN";
    /** SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING - Доступна торговля в режиме внутренней ликвидности брокера */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING"] = 14] = "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING";
    /** SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING - Перерыв торговли в режиме внутренней ликвидности брокера */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING"] = 15] = "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING";
    /** SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING - Недоступна торговля в режиме внутренней ликвидности брокера */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING"] = 16] = "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityTradingStatus = exports.SecurityTradingStatus || (exports.SecurityTradingStatus = {}));
function securityTradingStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "SECURITY_TRADING_STATUS_UNSPECIFIED":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_UNSPECIFIED;
        case 1:
        case "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING;
        case 2:
        case "SECURITY_TRADING_STATUS_OPENING_PERIOD":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_PERIOD;
        case 3:
        case "SECURITY_TRADING_STATUS_CLOSING_PERIOD":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_PERIOD;
        case 4:
        case "SECURITY_TRADING_STATUS_BREAK_IN_TRADING":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_BREAK_IN_TRADING;
        case 5:
        case "SECURITY_TRADING_STATUS_NORMAL_TRADING":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING;
        case 6:
        case "SECURITY_TRADING_STATUS_CLOSING_AUCTION":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_AUCTION;
        case 7:
        case "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DARK_POOL_AUCTION;
        case 8:
        case "SECURITY_TRADING_STATUS_DISCRETE_AUCTION":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DISCRETE_AUCTION;
        case 9:
        case "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD;
        case 10:
        case "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE;
        case 11:
        case "SECURITY_TRADING_STATUS_SESSION_ASSIGNED":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_ASSIGNED;
        case 12:
        case "SECURITY_TRADING_STATUS_SESSION_CLOSE":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_CLOSE;
        case 13:
        case "SECURITY_TRADING_STATUS_SESSION_OPEN":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_OPEN;
        case 14:
        case "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING;
        case 15:
        case "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING;
        case 16:
        case "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING":
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityTradingStatus.UNRECOGNIZED;
    }
}
exports.securityTradingStatusFromJSON = securityTradingStatusFromJSON;
function securityTradingStatusToJSON(object) {
    switch (object) {
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_UNSPECIFIED:
            return "SECURITY_TRADING_STATUS_UNSPECIFIED";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING:
            return "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_PERIOD:
            return "SECURITY_TRADING_STATUS_OPENING_PERIOD";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_PERIOD:
            return "SECURITY_TRADING_STATUS_CLOSING_PERIOD";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_BREAK_IN_TRADING:
            return "SECURITY_TRADING_STATUS_BREAK_IN_TRADING";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING:
            return "SECURITY_TRADING_STATUS_NORMAL_TRADING";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_AUCTION:
            return "SECURITY_TRADING_STATUS_CLOSING_AUCTION";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DARK_POOL_AUCTION:
            return "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DISCRETE_AUCTION:
            return "SECURITY_TRADING_STATUS_DISCRETE_AUCTION";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD:
            return "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE:
            return "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_ASSIGNED:
            return "SECURITY_TRADING_STATUS_SESSION_ASSIGNED";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_CLOSE:
            return "SECURITY_TRADING_STATUS_SESSION_CLOSE";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_OPEN:
            return "SECURITY_TRADING_STATUS_SESSION_OPEN";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING:
            return "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING:
            return "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING";
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING:
            return "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING";
        case SecurityTradingStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.securityTradingStatusToJSON = securityTradingStatusToJSON;
function createBaseMoneyValue() {
    return { currency: "", units: 0, nano: 0 };
}
exports.MoneyValue = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.currency !== "") {
            writer.uint32(10).string(message.currency);
        }
        if (message.units !== 0) {
            writer.uint32(16).int64(message.units);
        }
        if (message.nano !== 0) {
            writer.uint32(24).int32(message.nano);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMoneyValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.string();
                    break;
                case 2:
                    message.units = longToNumber(reader.int64());
                    break;
                case 3:
                    message.nano = reader.int32();
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
            currency: isSet(object.currency) ? String(object.currency) : "",
            units: isSet(object.units) ? Number(object.units) : 0,
            nano: isSet(object.nano) ? Number(object.nano) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.currency !== undefined && (obj.currency = message.currency);
        message.units !== undefined && (obj.units = Math.round(message.units));
        message.nano !== undefined && (obj.nano = Math.round(message.nano));
        return obj;
    },
};
function createBaseQuotation() {
    return { units: 0, nano: 0 };
}
exports.Quotation = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.units !== 0) {
            writer.uint32(8).int64(message.units);
        }
        if (message.nano !== 0) {
            writer.uint32(16).int32(message.nano);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.units = longToNumber(reader.int64());
                    break;
                case 2:
                    message.nano = reader.int32();
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
            units: isSet(object.units) ? Number(object.units) : 0,
            nano: isSet(object.nano) ? Number(object.nano) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.units !== undefined && (obj.units = Math.round(message.units));
        message.nano !== undefined && (obj.nano = Math.round(message.nano));
        return obj;
    },
};
function createBasePing() {
    return { time: undefined };
}
exports.Ping = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
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
//# sourceMappingURL=common.js.map