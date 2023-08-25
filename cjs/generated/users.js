"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersServiceDefinition = exports.GetInfoResponse = exports.GetInfoRequest = exports.StreamLimit = exports.UnaryLimit = exports.GetUserTariffResponse = exports.GetUserTariffRequest = exports.GetMarginAttributesResponse = exports.GetMarginAttributesRequest = exports.Account = exports.GetAccountsResponse = exports.GetAccountsRequest = exports.accessLevelToJSON = exports.accessLevelFromJSON = exports.AccessLevel = exports.accountStatusToJSON = exports.accountStatusFromJSON = exports.AccountStatus = exports.accountTypeToJSON = exports.accountTypeFromJSON = exports.AccountType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const common_js_1 = require("./common.js");
const timestamp_js_1 = require("./google/protobuf/timestamp.js");
exports.protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Тип счёта. */
var AccountType;
(function (AccountType) {
    /** ACCOUNT_TYPE_UNSPECIFIED - Тип аккаунта не определён. */
    AccountType[AccountType["ACCOUNT_TYPE_UNSPECIFIED"] = 0] = "ACCOUNT_TYPE_UNSPECIFIED";
    /** ACCOUNT_TYPE_TINKOFF - Брокерский счёт Тинькофф. */
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF"] = 1] = "ACCOUNT_TYPE_TINKOFF";
    /** ACCOUNT_TYPE_TINKOFF_IIS - ИИС счёт. */
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF_IIS"] = 2] = "ACCOUNT_TYPE_TINKOFF_IIS";
    /** ACCOUNT_TYPE_INVEST_BOX - Инвесткопилка. */
    AccountType[AccountType["ACCOUNT_TYPE_INVEST_BOX"] = 3] = "ACCOUNT_TYPE_INVEST_BOX";
    AccountType[AccountType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
function accountTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCOUNT_TYPE_UNSPECIFIED":
            return AccountType.ACCOUNT_TYPE_UNSPECIFIED;
        case 1:
        case "ACCOUNT_TYPE_TINKOFF":
            return AccountType.ACCOUNT_TYPE_TINKOFF;
        case 2:
        case "ACCOUNT_TYPE_TINKOFF_IIS":
            return AccountType.ACCOUNT_TYPE_TINKOFF_IIS;
        case 3:
        case "ACCOUNT_TYPE_INVEST_BOX":
            return AccountType.ACCOUNT_TYPE_INVEST_BOX;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccountType.UNRECOGNIZED;
    }
}
exports.accountTypeFromJSON = accountTypeFromJSON;
function accountTypeToJSON(object) {
    switch (object) {
        case AccountType.ACCOUNT_TYPE_UNSPECIFIED:
            return "ACCOUNT_TYPE_UNSPECIFIED";
        case AccountType.ACCOUNT_TYPE_TINKOFF:
            return "ACCOUNT_TYPE_TINKOFF";
        case AccountType.ACCOUNT_TYPE_TINKOFF_IIS:
            return "ACCOUNT_TYPE_TINKOFF_IIS";
        case AccountType.ACCOUNT_TYPE_INVEST_BOX:
            return "ACCOUNT_TYPE_INVEST_BOX";
        case AccountType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accountTypeToJSON = accountTypeToJSON;
/** Статус счёта. */
var AccountStatus;
(function (AccountStatus) {
    /** ACCOUNT_STATUS_UNSPECIFIED - Статус счёта не определён. */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_UNSPECIFIED"] = 0] = "ACCOUNT_STATUS_UNSPECIFIED";
    /** ACCOUNT_STATUS_NEW - Новый, в процессе открытия. */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_NEW"] = 1] = "ACCOUNT_STATUS_NEW";
    /** ACCOUNT_STATUS_OPEN - Открытый и активный счёт. */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_OPEN"] = 2] = "ACCOUNT_STATUS_OPEN";
    /** ACCOUNT_STATUS_CLOSED - Закрытый счёт. */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_CLOSED"] = 3] = "ACCOUNT_STATUS_CLOSED";
    AccountStatus[AccountStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
function accountStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCOUNT_STATUS_UNSPECIFIED":
            return AccountStatus.ACCOUNT_STATUS_UNSPECIFIED;
        case 1:
        case "ACCOUNT_STATUS_NEW":
            return AccountStatus.ACCOUNT_STATUS_NEW;
        case 2:
        case "ACCOUNT_STATUS_OPEN":
            return AccountStatus.ACCOUNT_STATUS_OPEN;
        case 3:
        case "ACCOUNT_STATUS_CLOSED":
            return AccountStatus.ACCOUNT_STATUS_CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccountStatus.UNRECOGNIZED;
    }
}
exports.accountStatusFromJSON = accountStatusFromJSON;
function accountStatusToJSON(object) {
    switch (object) {
        case AccountStatus.ACCOUNT_STATUS_UNSPECIFIED:
            return "ACCOUNT_STATUS_UNSPECIFIED";
        case AccountStatus.ACCOUNT_STATUS_NEW:
            return "ACCOUNT_STATUS_NEW";
        case AccountStatus.ACCOUNT_STATUS_OPEN:
            return "ACCOUNT_STATUS_OPEN";
        case AccountStatus.ACCOUNT_STATUS_CLOSED:
            return "ACCOUNT_STATUS_CLOSED";
        case AccountStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accountStatusToJSON = accountStatusToJSON;
/** Уровень доступа к счёту. */
var AccessLevel;
(function (AccessLevel) {
    /** ACCOUNT_ACCESS_LEVEL_UNSPECIFIED - Уровень доступа не определён. */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_UNSPECIFIED"] = 0] = "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED";
    /** ACCOUNT_ACCESS_LEVEL_FULL_ACCESS - Полный доступ к счёту. */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_FULL_ACCESS"] = 1] = "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS";
    /** ACCOUNT_ACCESS_LEVEL_READ_ONLY - Доступ с уровнем прав "только чтение". */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_READ_ONLY"] = 2] = "ACCOUNT_ACCESS_LEVEL_READ_ONLY";
    /** ACCOUNT_ACCESS_LEVEL_NO_ACCESS - Доступ отсутствует. */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_NO_ACCESS"] = 3] = "ACCOUNT_ACCESS_LEVEL_NO_ACCESS";
    AccessLevel[AccessLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessLevel = exports.AccessLevel || (exports.AccessLevel = {}));
function accessLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED":
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED;
        case 1:
        case "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS":
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS;
        case 2:
        case "ACCOUNT_ACCESS_LEVEL_READ_ONLY":
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY;
        case 3:
        case "ACCOUNT_ACCESS_LEVEL_NO_ACCESS":
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessLevel.UNRECOGNIZED;
    }
}
exports.accessLevelFromJSON = accessLevelFromJSON;
function accessLevelToJSON(object) {
    switch (object) {
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED:
            return "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED";
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS:
            return "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS";
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY:
            return "ACCOUNT_ACCESS_LEVEL_READ_ONLY";
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS:
            return "ACCOUNT_ACCESS_LEVEL_NO_ACCESS";
        case AccessLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accessLevelToJSON = accessLevelToJSON;
function createBaseGetAccountsRequest() {
    return {};
}
exports.GetAccountsRequest = {
    encode(_, writer = minimal_js_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountsRequest();
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
function createBaseGetAccountsResponse() {
    return { accounts: [] };
}
exports.GetAccountsResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.accounts) {
            exports.Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.Account.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object?.accounts)
                ? object.accounts.map((e) => exports.Account.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? exports.Account.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
};
function createBaseAccount() {
    return {
        id: "",
        type: 0,
        name: "",
        status: 0,
        openedDate: undefined,
        closedDate: undefined,
        accessLevel: 0,
    };
}
exports.Account = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.openedDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.openedDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.closedDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.closedDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.accessLevel !== 0) {
            writer.uint32(56).int32(message.accessLevel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.openedDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.closedDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.accessLevel = reader.int32();
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
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            status: isSet(object.status) ? accountStatusFromJSON(object.status) : 0,
            openedDate: isSet(object.openedDate)
                ? fromJsonTimestamp(object.openedDate)
                : undefined,
            closedDate: isSet(object.closedDate)
                ? fromJsonTimestamp(object.closedDate)
                : undefined,
            accessLevel: isSet(object.accessLevel)
                ? accessLevelFromJSON(object.accessLevel)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = accountTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.status !== undefined &&
            (obj.status = accountStatusToJSON(message.status));
        message.openedDate !== undefined &&
            (obj.openedDate = message.openedDate.toISOString());
        message.closedDate !== undefined &&
            (obj.closedDate = message.closedDate.toISOString());
        message.accessLevel !== undefined &&
            (obj.accessLevel = accessLevelToJSON(message.accessLevel));
        return obj;
    },
};
function createBaseGetMarginAttributesRequest() {
    return { accountId: "" };
}
exports.GetMarginAttributesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarginAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
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
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
};
function createBaseGetMarginAttributesResponse() {
    return {
        liquidPortfolio: undefined,
        startingMargin: undefined,
        minimalMargin: undefined,
        fundsSufficiencyLevel: undefined,
        amountOfMissingFunds: undefined,
        correctedMargin: undefined,
    };
}
exports.GetMarginAttributesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.liquidPortfolio !== undefined) {
            common_js_1.MoneyValue.encode(message.liquidPortfolio, writer.uint32(10).fork()).ldelim();
        }
        if (message.startingMargin !== undefined) {
            common_js_1.MoneyValue.encode(message.startingMargin, writer.uint32(18).fork()).ldelim();
        }
        if (message.minimalMargin !== undefined) {
            common_js_1.MoneyValue.encode(message.minimalMargin, writer.uint32(26).fork()).ldelim();
        }
        if (message.fundsSufficiencyLevel !== undefined) {
            common_js_1.Quotation.encode(message.fundsSufficiencyLevel, writer.uint32(34).fork()).ldelim();
        }
        if (message.amountOfMissingFunds !== undefined) {
            common_js_1.MoneyValue.encode(message.amountOfMissingFunds, writer.uint32(42).fork()).ldelim();
        }
        if (message.correctedMargin !== undefined) {
            common_js_1.MoneyValue.encode(message.correctedMargin, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarginAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidPortfolio = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startingMargin = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minimalMargin = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fundsSufficiencyLevel = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.amountOfMissingFunds = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.correctedMargin = common_js_1.MoneyValue.decode(reader, reader.uint32());
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
            liquidPortfolio: isSet(object.liquidPortfolio)
                ? common_js_1.MoneyValue.fromJSON(object.liquidPortfolio)
                : undefined,
            startingMargin: isSet(object.startingMargin)
                ? common_js_1.MoneyValue.fromJSON(object.startingMargin)
                : undefined,
            minimalMargin: isSet(object.minimalMargin)
                ? common_js_1.MoneyValue.fromJSON(object.minimalMargin)
                : undefined,
            fundsSufficiencyLevel: isSet(object.fundsSufficiencyLevel)
                ? common_js_1.Quotation.fromJSON(object.fundsSufficiencyLevel)
                : undefined,
            amountOfMissingFunds: isSet(object.amountOfMissingFunds)
                ? common_js_1.MoneyValue.fromJSON(object.amountOfMissingFunds)
                : undefined,
            correctedMargin: isSet(object.correctedMargin)
                ? common_js_1.MoneyValue.fromJSON(object.correctedMargin)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.liquidPortfolio !== undefined &&
            (obj.liquidPortfolio = message.liquidPortfolio
                ? common_js_1.MoneyValue.toJSON(message.liquidPortfolio)
                : undefined);
        message.startingMargin !== undefined &&
            (obj.startingMargin = message.startingMargin
                ? common_js_1.MoneyValue.toJSON(message.startingMargin)
                : undefined);
        message.minimalMargin !== undefined &&
            (obj.minimalMargin = message.minimalMargin
                ? common_js_1.MoneyValue.toJSON(message.minimalMargin)
                : undefined);
        message.fundsSufficiencyLevel !== undefined &&
            (obj.fundsSufficiencyLevel = message.fundsSufficiencyLevel
                ? common_js_1.Quotation.toJSON(message.fundsSufficiencyLevel)
                : undefined);
        message.amountOfMissingFunds !== undefined &&
            (obj.amountOfMissingFunds = message.amountOfMissingFunds
                ? common_js_1.MoneyValue.toJSON(message.amountOfMissingFunds)
                : undefined);
        message.correctedMargin !== undefined &&
            (obj.correctedMargin = message.correctedMargin
                ? common_js_1.MoneyValue.toJSON(message.correctedMargin)
                : undefined);
        return obj;
    },
};
function createBaseGetUserTariffRequest() {
    return {};
}
exports.GetUserTariffRequest = {
    encode(_, writer = minimal_js_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserTariffRequest();
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
function createBaseGetUserTariffResponse() {
    return { unaryLimits: [], streamLimits: [] };
}
exports.GetUserTariffResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.unaryLimits) {
            exports.UnaryLimit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.streamLimits) {
            exports.StreamLimit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserTariffResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unaryLimits.push(exports.UnaryLimit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.streamLimits.push(exports.StreamLimit.decode(reader, reader.uint32()));
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
            unaryLimits: Array.isArray(object?.unaryLimits)
                ? object.unaryLimits.map((e) => exports.UnaryLimit.fromJSON(e))
                : [],
            streamLimits: Array.isArray(object?.streamLimits)
                ? object.streamLimits.map((e) => exports.StreamLimit.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unaryLimits) {
            obj.unaryLimits = message.unaryLimits.map((e) => e ? exports.UnaryLimit.toJSON(e) : undefined);
        }
        else {
            obj.unaryLimits = [];
        }
        if (message.streamLimits) {
            obj.streamLimits = message.streamLimits.map((e) => e ? exports.StreamLimit.toJSON(e) : undefined);
        }
        else {
            obj.streamLimits = [];
        }
        return obj;
    },
};
function createBaseUnaryLimit() {
    return { limitPerMinute: 0, methods: [] };
}
exports.UnaryLimit = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.limitPerMinute !== 0) {
            writer.uint32(8).int32(message.limitPerMinute);
        }
        for (const v of message.methods) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnaryLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitPerMinute = reader.int32();
                    break;
                case 2:
                    message.methods.push(reader.string());
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
            limitPerMinute: isSet(object.limitPerMinute)
                ? Number(object.limitPerMinute)
                : 0,
            methods: Array.isArray(object?.methods)
                ? object.methods.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.limitPerMinute !== undefined &&
            (obj.limitPerMinute = Math.round(message.limitPerMinute));
        if (message.methods) {
            obj.methods = message.methods.map((e) => e);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
};
function createBaseStreamLimit() {
    return { limit: 0, streams: [], open: 0 };
}
exports.StreamLimit = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).int32(message.limit);
        }
        for (const v of message.streams) {
            writer.uint32(18).string(v);
        }
        if (message.open !== 0) {
            writer.uint32(24).int32(message.open);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.int32();
                    break;
                case 2:
                    message.streams.push(reader.string());
                    break;
                case 3:
                    message.open = reader.int32();
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
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            streams: Array.isArray(object?.streams)
                ? object.streams.map((e) => String(e))
                : [],
            open: isSet(object.open) ? Number(object.open) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        if (message.streams) {
            obj.streams = message.streams.map((e) => e);
        }
        else {
            obj.streams = [];
        }
        message.open !== undefined && (obj.open = Math.round(message.open));
        return obj;
    },
};
function createBaseGetInfoRequest() {
    return {};
}
exports.GetInfoRequest = {
    encode(_, writer = minimal_js_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInfoRequest();
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
function createBaseGetInfoResponse() {
    return {
        premStatus: false,
        qualStatus: false,
        qualifiedForWorkWith: [],
        tariff: "",
    };
}
exports.GetInfoResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.premStatus === true) {
            writer.uint32(8).bool(message.premStatus);
        }
        if (message.qualStatus === true) {
            writer.uint32(16).bool(message.qualStatus);
        }
        for (const v of message.qualifiedForWorkWith) {
            writer.uint32(26).string(v);
        }
        if (message.tariff !== "") {
            writer.uint32(34).string(message.tariff);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.premStatus = reader.bool();
                    break;
                case 2:
                    message.qualStatus = reader.bool();
                    break;
                case 3:
                    message.qualifiedForWorkWith.push(reader.string());
                    break;
                case 4:
                    message.tariff = reader.string();
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
            premStatus: isSet(object.premStatus) ? Boolean(object.premStatus) : false,
            qualStatus: isSet(object.qualStatus) ? Boolean(object.qualStatus) : false,
            qualifiedForWorkWith: Array.isArray(object?.qualifiedForWorkWith)
                ? object.qualifiedForWorkWith.map((e) => String(e))
                : [],
            tariff: isSet(object.tariff) ? String(object.tariff) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.premStatus !== undefined && (obj.premStatus = message.premStatus);
        message.qualStatus !== undefined && (obj.qualStatus = message.qualStatus);
        if (message.qualifiedForWorkWith) {
            obj.qualifiedForWorkWith = message.qualifiedForWorkWith.map((e) => e);
        }
        else {
            obj.qualifiedForWorkWith = [];
        }
        message.tariff !== undefined && (obj.tariff = message.tariff);
        return obj;
    },
};
exports.UsersServiceDefinition = {
    name: "UsersService",
    fullName: "tinkoff.public.invest.api.contract.v1.UsersService",
    methods: {
        /** Метод получения счетов пользователя. */
        getAccounts: {
            name: "GetAccounts",
            requestType: exports.GetAccountsRequest,
            requestStream: false,
            responseType: exports.GetAccountsResponse,
            responseStream: false,
            options: {},
        },
        /** Расчёт маржинальных показателей по счёту. */
        getMarginAttributes: {
            name: "GetMarginAttributes",
            requestType: exports.GetMarginAttributesRequest,
            requestStream: false,
            responseType: exports.GetMarginAttributesResponse,
            responseStream: false,
            options: {},
        },
        /** Запрос тарифа пользователя. */
        getUserTariff: {
            name: "GetUserTariff",
            requestType: exports.GetUserTariffRequest,
            requestStream: false,
            responseType: exports.GetUserTariffResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения информации о пользователе. */
        getInfo: {
            name: "GetInfo",
            requestType: exports.GetInfoRequest,
            requestStream: false,
            responseType: exports.GetInfoResponse,
            responseStream: false,
            options: {},
        },
    },
};
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
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=users.js.map