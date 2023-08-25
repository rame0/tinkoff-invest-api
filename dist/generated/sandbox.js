/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue } from "./common.js";
import { GetAccountsRequest, GetAccountsResponse } from "./users.js";
import { PostOrderRequest, PostOrderResponse, ReplaceOrderRequest, GetOrdersRequest, GetOrdersResponse, CancelOrderRequest, CancelOrderResponse, GetOrderStateRequest, OrderState, } from "./orders.js";
import { PositionsRequest, PositionsResponse, OperationsRequest, OperationsResponse, GetOperationsByCursorRequest, GetOperationsByCursorResponse, PortfolioRequest, PortfolioResponse, WithdrawLimitsRequest, WithdrawLimitsResponse, } from "./operations.js";
export const protobufPackage = "tinkoff.public.invest.api.contract.v1";
function createBaseOpenSandboxAccountRequest() {
    return {};
}
export const OpenSandboxAccountRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const OpenSandboxAccountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const CloseSandboxAccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const CloseSandboxAccountResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const SandboxPayInRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.amount !== undefined) {
            MoneyValue.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSandboxPayInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.amount = MoneyValue.decode(reader, reader.uint32());
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
                ? MoneyValue.fromJSON(object.amount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.amount !== undefined &&
            (obj.amount = message.amount
                ? MoneyValue.toJSON(message.amount)
                : undefined);
        return obj;
    },
};
function createBaseSandboxPayInResponse() {
    return { balance: undefined };
}
export const SandboxPayInResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.balance !== undefined) {
            MoneyValue.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSandboxPayInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = MoneyValue.decode(reader, reader.uint32());
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
                ? MoneyValue.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? MoneyValue.toJSON(message.balance)
                : undefined);
        return obj;
    },
};
export const SandboxServiceDefinition = {
    name: "SandboxService",
    fullName: "tinkoff.public.invest.api.contract.v1.SandboxService",
    methods: {
        /** Метод регистрации счёта в песочнице. */
        openSandboxAccount: {
            name: "OpenSandboxAccount",
            requestType: OpenSandboxAccountRequest,
            requestStream: false,
            responseType: OpenSandboxAccountResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения счетов в песочнице. */
        getSandboxAccounts: {
            name: "GetSandboxAccounts",
            requestType: GetAccountsRequest,
            requestStream: false,
            responseType: GetAccountsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод закрытия счёта в песочнице. */
        closeSandboxAccount: {
            name: "CloseSandboxAccount",
            requestType: CloseSandboxAccountRequest,
            requestStream: false,
            responseType: CloseSandboxAccountResponse,
            responseStream: false,
            options: {},
        },
        /** Метод выставления торгового поручения в песочнице. */
        postSandboxOrder: {
            name: "PostSandboxOrder",
            requestType: PostOrderRequest,
            requestStream: false,
            responseType: PostOrderResponse,
            responseStream: false,
            options: {},
        },
        /** Метод изменения выставленной заявки. */
        replaceSandboxOrder: {
            name: "ReplaceSandboxOrder",
            requestType: ReplaceOrderRequest,
            requestStream: false,
            responseType: PostOrderResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения списка активных заявок по счёту в песочнице. */
        getSandboxOrders: {
            name: "GetSandboxOrders",
            requestType: GetOrdersRequest,
            requestStream: false,
            responseType: GetOrdersResponse,
            responseStream: false,
            options: {},
        },
        /** Метод отмены торгового поручения в песочнице. */
        cancelSandboxOrder: {
            name: "CancelSandboxOrder",
            requestType: CancelOrderRequest,
            requestStream: false,
            responseType: CancelOrderResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
        getSandboxOrderState: {
            name: "GetSandboxOrderState",
            requestType: GetOrderStateRequest,
            requestStream: false,
            responseType: OrderState,
            responseStream: false,
            options: {},
        },
        /** Метод получения позиций по виртуальному счёту песочницы. */
        getSandboxPositions: {
            name: "GetSandboxPositions",
            requestType: PositionsRequest,
            requestStream: false,
            responseType: PositionsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения операций в песочнице по номеру счёта. */
        getSandboxOperations: {
            name: "GetSandboxOperations",
            requestType: OperationsRequest,
            requestStream: false,
            responseType: OperationsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения операций в песочнице по номеру счета с пагинацией. */
        getSandboxOperationsByCursor: {
            name: "GetSandboxOperationsByCursor",
            requestType: GetOperationsByCursorRequest,
            requestStream: false,
            responseType: GetOperationsByCursorResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения портфолио в песочнице. */
        getSandboxPortfolio: {
            name: "GetSandboxPortfolio",
            requestType: PortfolioRequest,
            requestStream: false,
            responseType: PortfolioResponse,
            responseStream: false,
            options: {},
        },
        /** Метод пополнения счёта в песочнице. */
        sandboxPayIn: {
            name: "SandboxPayIn",
            requestType: SandboxPayInRequest,
            requestStream: false,
            responseType: SandboxPayInResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения доступного остатка для вывода средств в песочнице. */
        getSandboxWithdrawLimits: {
            name: "GetSandboxWithdrawLimits",
            requestType: WithdrawLimitsRequest,
            requestStream: false,
            responseType: WithdrawLimitsResponse,
            responseStream: false,
            options: {},
        },
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=sandbox.js.map