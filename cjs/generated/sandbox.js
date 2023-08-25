"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxServiceDefinition = exports.SandboxPayInResponse = exports.SandboxPayInRequest = exports.CloseSandboxAccountResponse = exports.CloseSandboxAccountRequest = exports.OpenSandboxAccountResponse = exports.OpenSandboxAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const common_js_1 = require("./common.js");
const users_js_1 = require("./users.js");
const orders_js_1 = require("./orders.js");
const operations_js_1 = require("./operations.js");
exports.protobufPackage = "tinkoff.public.invest.api.contract.v1";
function createBaseOpenSandboxAccountRequest() {
    return {};
}
exports.OpenSandboxAccountRequest = {
    encode(_, writer = minimal_js_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOpenSandboxAccountRequest();
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
function createBaseOpenSandboxAccountResponse() {
    return { accountId: "" };
}
exports.OpenSandboxAccountResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOpenSandboxAccountResponse();
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
function createBaseCloseSandboxAccountRequest() {
    return { accountId: "" };
}
exports.CloseSandboxAccountRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCloseSandboxAccountRequest();
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
function createBaseCloseSandboxAccountResponse() {
    return {};
}
exports.CloseSandboxAccountResponse = {
    encode(_, writer = minimal_js_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCloseSandboxAccountResponse();
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
function createBaseSandboxPayInRequest() {
    return { accountId: "", amount: undefined };
}
exports.SandboxPayInRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.amount !== undefined) {
            common_js_1.MoneyValue.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSandboxPayInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.amount = common_js_1.MoneyValue.decode(reader, reader.uint32());
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
            amount: isSet(object.amount)
                ? common_js_1.MoneyValue.fromJSON(object.amount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.amount !== undefined &&
            (obj.amount = message.amount
                ? common_js_1.MoneyValue.toJSON(message.amount)
                : undefined);
        return obj;
    },
};
function createBaseSandboxPayInResponse() {
    return { balance: undefined };
}
exports.SandboxPayInResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.balance !== undefined) {
            common_js_1.MoneyValue.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSandboxPayInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = common_js_1.MoneyValue.decode(reader, reader.uint32());
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
            balance: isSet(object.balance)
                ? common_js_1.MoneyValue.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? common_js_1.MoneyValue.toJSON(message.balance)
                : undefined);
        return obj;
    },
};
exports.SandboxServiceDefinition = {
    name: "SandboxService",
    fullName: "tinkoff.public.invest.api.contract.v1.SandboxService",
    methods: {
        /** Метод регистрации счёта в песочнице. */
        openSandboxAccount: {
            name: "OpenSandboxAccount",
            requestType: exports.OpenSandboxAccountRequest,
            requestStream: false,
            responseType: exports.OpenSandboxAccountResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения счетов в песочнице. */
        getSandboxAccounts: {
            name: "GetSandboxAccounts",
            requestType: users_js_1.GetAccountsRequest,
            requestStream: false,
            responseType: users_js_1.GetAccountsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод закрытия счёта в песочнице. */
        closeSandboxAccount: {
            name: "CloseSandboxAccount",
            requestType: exports.CloseSandboxAccountRequest,
            requestStream: false,
            responseType: exports.CloseSandboxAccountResponse,
            responseStream: false,
            options: {},
        },
        /** Метод выставления торгового поручения в песочнице. */
        postSandboxOrder: {
            name: "PostSandboxOrder",
            requestType: orders_js_1.PostOrderRequest,
            requestStream: false,
            responseType: orders_js_1.PostOrderResponse,
            responseStream: false,
            options: {},
        },
        /** Метод изменения выставленной заявки. */
        replaceSandboxOrder: {
            name: "ReplaceSandboxOrder",
            requestType: orders_js_1.ReplaceOrderRequest,
            requestStream: false,
            responseType: orders_js_1.PostOrderResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения списка активных заявок по счёту в песочнице. */
        getSandboxOrders: {
            name: "GetSandboxOrders",
            requestType: orders_js_1.GetOrdersRequest,
            requestStream: false,
            responseType: orders_js_1.GetOrdersResponse,
            responseStream: false,
            options: {},
        },
        /** Метод отмены торгового поручения в песочнице. */
        cancelSandboxOrder: {
            name: "CancelSandboxOrder",
            requestType: orders_js_1.CancelOrderRequest,
            requestStream: false,
            responseType: orders_js_1.CancelOrderResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
        getSandboxOrderState: {
            name: "GetSandboxOrderState",
            requestType: orders_js_1.GetOrderStateRequest,
            requestStream: false,
            responseType: orders_js_1.OrderState,
            responseStream: false,
            options: {},
        },
        /** Метод получения позиций по виртуальному счёту песочницы. */
        getSandboxPositions: {
            name: "GetSandboxPositions",
            requestType: operations_js_1.PositionsRequest,
            requestStream: false,
            responseType: operations_js_1.PositionsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения операций в песочнице по номеру счёта. */
        getSandboxOperations: {
            name: "GetSandboxOperations",
            requestType: operations_js_1.OperationsRequest,
            requestStream: false,
            responseType: operations_js_1.OperationsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения операций в песочнице по номеру счета с пагинацией. */
        getSandboxOperationsByCursor: {
            name: "GetSandboxOperationsByCursor",
            requestType: operations_js_1.GetOperationsByCursorRequest,
            requestStream: false,
            responseType: operations_js_1.GetOperationsByCursorResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения портфолио в песочнице. */
        getSandboxPortfolio: {
            name: "GetSandboxPortfolio",
            requestType: operations_js_1.PortfolioRequest,
            requestStream: false,
            responseType: operations_js_1.PortfolioResponse,
            responseStream: false,
            options: {},
        },
        /** Метод пополнения счёта в песочнице. */
        sandboxPayIn: {
            name: "SandboxPayIn",
            requestType: exports.SandboxPayInRequest,
            requestStream: false,
            responseType: exports.SandboxPayInResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения доступного остатка для вывода средств в песочнице. */
        getSandboxWithdrawLimits: {
            name: "GetSandboxWithdrawLimits",
            requestType: operations_js_1.WithdrawLimitsRequest,
            requestStream: false,
            responseType: operations_js_1.WithdrawLimitsResponse,
            responseStream: false,
            options: {},
        },
    },
};
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=sandbox.js.map