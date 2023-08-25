import _m0 from "protobufjs/minimal.js";
import { MoneyValue } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
import { GetAccountsRequest, GetAccountsResponse } from "./users.js";
import { PostOrderRequest, PostOrderResponse, ReplaceOrderRequest, GetOrdersRequest, GetOrdersResponse, CancelOrderRequest, CancelOrderResponse, GetOrderStateRequest, OrderState } from "./orders.js";
import { PositionsRequest, PositionsResponse, OperationsRequest, OperationsResponse, GetOperationsByCursorRequest, GetOperationsByCursorResponse, PortfolioRequest, PortfolioResponse, WithdrawLimitsRequest, WithdrawLimitsResponse } from "./operations.js";
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Запрос открытия счёта в песочнице. */
export interface OpenSandboxAccountRequest {
}
/** Номер открытого счёта в песочнице. */
export interface OpenSandboxAccountResponse {
    /** Номер счёта */
    accountId: string;
}
/** Запрос закрытия счёта в песочнице. */
export interface CloseSandboxAccountRequest {
    /** Номер счёта */
    accountId: string;
}
/** Результат закрытия счёта в песочнице. */
export interface CloseSandboxAccountResponse {
}
/** Запрос пополнения счёта в песочнице. */
export interface SandboxPayInRequest {
    /** Номер счёта */
    accountId: string;
    /** Сумма пополнения счёта в рублях */
    amount?: MoneyValue;
}
/** Результат пополнения счёта, текущий баланс. */
export interface SandboxPayInResponse {
    /** Текущий баланс счёта */
    balance?: MoneyValue;
}
export declare const OpenSandboxAccountRequest: {
    encode(_: OpenSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSandboxAccountRequest;
    fromJSON(_: any): OpenSandboxAccountRequest;
    toJSON(_: OpenSandboxAccountRequest): unknown;
};
export declare const OpenSandboxAccountResponse: {
    encode(message: OpenSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSandboxAccountResponse;
    fromJSON(object: any): OpenSandboxAccountResponse;
    toJSON(message: OpenSandboxAccountResponse): unknown;
};
export declare const CloseSandboxAccountRequest: {
    encode(message: CloseSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CloseSandboxAccountRequest;
    fromJSON(object: any): CloseSandboxAccountRequest;
    toJSON(message: CloseSandboxAccountRequest): unknown;
};
export declare const CloseSandboxAccountResponse: {
    encode(_: CloseSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CloseSandboxAccountResponse;
    fromJSON(_: any): CloseSandboxAccountResponse;
    toJSON(_: CloseSandboxAccountResponse): unknown;
};
export declare const SandboxPayInRequest: {
    encode(message: SandboxPayInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInRequest;
    fromJSON(object: any): SandboxPayInRequest;
    toJSON(message: SandboxPayInRequest): unknown;
};
export declare const SandboxPayInResponse: {
    encode(message: SandboxPayInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInResponse;
    fromJSON(object: any): SandboxPayInResponse;
    toJSON(message: SandboxPayInResponse): unknown;
};
/** Сервис для работы с песочницей TINKOFF INVEST API */
export declare type SandboxServiceDefinition = typeof SandboxServiceDefinition;
export declare const SandboxServiceDefinition: {
    readonly name: "SandboxService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.SandboxService";
    readonly methods: {
        /** Метод регистрации счёта в песочнице. */
        readonly openSandboxAccount: {
            readonly name: "OpenSandboxAccount";
            readonly requestType: {
                encode(_: OpenSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): OpenSandboxAccountRequest;
                fromJSON(_: any): OpenSandboxAccountRequest;
                toJSON(_: OpenSandboxAccountRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OpenSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): OpenSandboxAccountResponse;
                fromJSON(object: any): OpenSandboxAccountResponse;
                toJSON(message: OpenSandboxAccountResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения счетов в песочнице. */
        readonly getSandboxAccounts: {
            readonly name: "GetSandboxAccounts";
            readonly requestType: {
                encode(_: GetAccountsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetAccountsRequest;
                fromJSON(_: any): GetAccountsRequest;
                toJSON(_: GetAccountsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAccountsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetAccountsResponse;
                fromJSON(object: any): GetAccountsResponse;
                toJSON(message: GetAccountsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод закрытия счёта в песочнице. */
        readonly closeSandboxAccount: {
            readonly name: "CloseSandboxAccount";
            readonly requestType: {
                encode(message: CloseSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CloseSandboxAccountRequest;
                fromJSON(object: any): CloseSandboxAccountRequest;
                toJSON(message: CloseSandboxAccountRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: CloseSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CloseSandboxAccountResponse;
                fromJSON(_: any): CloseSandboxAccountResponse;
                toJSON(_: CloseSandboxAccountResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод выставления торгового поручения в песочнице. */
        readonly postSandboxOrder: {
            readonly name: "PostSandboxOrder";
            readonly requestType: {
                encode(message: PostOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PostOrderRequest;
                fromJSON(object: any): PostOrderRequest;
                toJSON(message: PostOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PostOrderResponse;
                fromJSON(object: any): PostOrderResponse;
                toJSON(message: PostOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод изменения выставленной заявки. */
        readonly replaceSandboxOrder: {
            readonly name: "ReplaceSandboxOrder";
            readonly requestType: {
                encode(message: ReplaceOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): ReplaceOrderRequest;
                fromJSON(object: any): ReplaceOrderRequest;
                toJSON(message: ReplaceOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PostOrderResponse;
                fromJSON(object: any): PostOrderResponse;
                toJSON(message: PostOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка активных заявок по счёту в песочнице. */
        readonly getSandboxOrders: {
            readonly name: "GetSandboxOrders";
            readonly requestType: {
                encode(message: GetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOrdersRequest;
                fromJSON(object: any): GetOrdersRequest;
                toJSON(message: GetOrdersRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOrdersResponse;
                fromJSON(object: any): GetOrdersResponse;
                toJSON(message: GetOrdersResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод отмены торгового поручения в песочнице. */
        readonly cancelSandboxOrder: {
            readonly name: "CancelSandboxOrder";
            readonly requestType: {
                encode(message: CancelOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): CancelOrderRequest;
                fromJSON(object: any): CancelOrderRequest;
                toJSON(message: CancelOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): CancelOrderResponse;
                fromJSON(object: any): CancelOrderResponse;
                toJSON(message: CancelOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
        readonly getSandboxOrderState: {
            readonly name: "GetSandboxOrderState";
            readonly requestType: {
                encode(message: GetOrderStateRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOrderStateRequest;
                fromJSON(object: any): GetOrderStateRequest;
                toJSON(message: GetOrderStateRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OrderState, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): OrderState;
                fromJSON(object: any): OrderState;
                toJSON(message: OrderState): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения позиций по виртуальному счёту песочницы. */
        readonly getSandboxPositions: {
            readonly name: "GetSandboxPositions";
            readonly requestType: {
                encode(message: PositionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PositionsRequest;
                fromJSON(object: any): PositionsRequest;
                toJSON(message: PositionsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PositionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PositionsResponse;
                fromJSON(object: any): PositionsResponse;
                toJSON(message: PositionsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения операций в песочнице по номеру счёта. */
        readonly getSandboxOperations: {
            readonly name: "GetSandboxOperations";
            readonly requestType: {
                encode(message: OperationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): OperationsRequest;
                fromJSON(object: any): OperationsRequest;
                toJSON(message: OperationsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OperationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): OperationsResponse;
                fromJSON(object: any): OperationsResponse;
                toJSON(message: OperationsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения операций в песочнице по номеру счета с пагинацией. */
        readonly getSandboxOperationsByCursor: {
            readonly name: "GetSandboxOperationsByCursor";
            readonly requestType: {
                encode(message: GetOperationsByCursorRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOperationsByCursorRequest;
                fromJSON(object: any): GetOperationsByCursorRequest;
                toJSON(message: GetOperationsByCursorRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOperationsByCursorResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOperationsByCursorResponse;
                fromJSON(object: any): GetOperationsByCursorResponse;
                toJSON(message: GetOperationsByCursorResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения портфолио в песочнице. */
        readonly getSandboxPortfolio: {
            readonly name: "GetSandboxPortfolio";
            readonly requestType: {
                encode(message: PortfolioRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PortfolioRequest;
                fromJSON(object: any): PortfolioRequest;
                toJSON(message: PortfolioRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PortfolioResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PortfolioResponse;
                fromJSON(object: any): PortfolioResponse;
                toJSON(message: PortfolioResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод пополнения счёта в песочнице. */
        readonly sandboxPayIn: {
            readonly name: "SandboxPayIn";
            readonly requestType: {
                encode(message: SandboxPayInRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInRequest;
                fromJSON(object: any): SandboxPayInRequest;
                toJSON(message: SandboxPayInRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SandboxPayInResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInResponse;
                fromJSON(object: any): SandboxPayInResponse;
                toJSON(message: SandboxPayInResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения доступного остатка для вывода средств в песочнице. */
        readonly getSandboxWithdrawLimits: {
            readonly name: "GetSandboxWithdrawLimits";
            readonly requestType: {
                encode(message: WithdrawLimitsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): WithdrawLimitsRequest;
                fromJSON(object: any): WithdrawLimitsRequest;
                toJSON(message: WithdrawLimitsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: WithdrawLimitsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): WithdrawLimitsResponse;
                fromJSON(object: any): WithdrawLimitsResponse;
                toJSON(message: WithdrawLimitsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface SandboxServiceServiceImplementation<CallContextExt = {}> {
    /** Метод регистрации счёта в песочнице. */
    openSandboxAccount(request: OpenSandboxAccountRequest, context: CallContext & CallContextExt): Promise<OpenSandboxAccountResponse>;
    /** Метод получения счетов в песочнице. */
    getSandboxAccounts(request: GetAccountsRequest, context: CallContext & CallContextExt): Promise<GetAccountsResponse>;
    /** Метод закрытия счёта в песочнице. */
    closeSandboxAccount(request: CloseSandboxAccountRequest, context: CallContext & CallContextExt): Promise<CloseSandboxAccountResponse>;
    /** Метод выставления торгового поручения в песочнице. */
    postSandboxOrder(request: PostOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
    /** Метод изменения выставленной заявки. */
    replaceSandboxOrder(request: ReplaceOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
    /** Метод получения списка активных заявок по счёту в песочнице. */
    getSandboxOrders(request: GetOrdersRequest, context: CallContext & CallContextExt): Promise<GetOrdersResponse>;
    /** Метод отмены торгового поручения в песочнице. */
    cancelSandboxOrder(request: CancelOrderRequest, context: CallContext & CallContextExt): Promise<CancelOrderResponse>;
    /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
    getSandboxOrderState(request: GetOrderStateRequest, context: CallContext & CallContextExt): Promise<OrderState>;
    /** Метод получения позиций по виртуальному счёту песочницы. */
    getSandboxPositions(request: PositionsRequest, context: CallContext & CallContextExt): Promise<PositionsResponse>;
    /** Метод получения операций в песочнице по номеру счёта. */
    getSandboxOperations(request: OperationsRequest, context: CallContext & CallContextExt): Promise<OperationsResponse>;
    /** Метод получения операций в песочнице по номеру счета с пагинацией. */
    getSandboxOperationsByCursor(request: GetOperationsByCursorRequest, context: CallContext & CallContextExt): Promise<GetOperationsByCursorResponse>;
    /** Метод получения портфолио в песочнице. */
    getSandboxPortfolio(request: PortfolioRequest, context: CallContext & CallContextExt): Promise<PortfolioResponse>;
    /** Метод пополнения счёта в песочнице. */
    sandboxPayIn(request: SandboxPayInRequest, context: CallContext & CallContextExt): Promise<SandboxPayInResponse>;
    /** Метод получения доступного остатка для вывода средств в песочнице. */
    getSandboxWithdrawLimits(request: WithdrawLimitsRequest, context: CallContext & CallContextExt): Promise<WithdrawLimitsResponse>;
}
export interface SandboxServiceClient<CallOptionsExt = {}> {
    /** Метод регистрации счёта в песочнице. */
    openSandboxAccount(request: OpenSandboxAccountRequest, options?: CallOptions & CallOptionsExt): Promise<OpenSandboxAccountResponse>;
    /** Метод получения счетов в песочнице. */
    getSandboxAccounts(request: GetAccountsRequest, options?: CallOptions & CallOptionsExt): Promise<GetAccountsResponse>;
    /** Метод закрытия счёта в песочнице. */
    closeSandboxAccount(request: CloseSandboxAccountRequest, options?: CallOptions & CallOptionsExt): Promise<CloseSandboxAccountResponse>;
    /** Метод выставления торгового поручения в песочнице. */
    postSandboxOrder(request: PostOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
    /** Метод изменения выставленной заявки. */
    replaceSandboxOrder(request: ReplaceOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
    /** Метод получения списка активных заявок по счёту в песочнице. */
    getSandboxOrders(request: GetOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrdersResponse>;
    /** Метод отмены торгового поручения в песочнице. */
    cancelSandboxOrder(request: CancelOrderRequest, options?: CallOptions & CallOptionsExt): Promise<CancelOrderResponse>;
    /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
    getSandboxOrderState(request: GetOrderStateRequest, options?: CallOptions & CallOptionsExt): Promise<OrderState>;
    /** Метод получения позиций по виртуальному счёту песочницы. */
    getSandboxPositions(request: PositionsRequest, options?: CallOptions & CallOptionsExt): Promise<PositionsResponse>;
    /** Метод получения операций в песочнице по номеру счёта. */
    getSandboxOperations(request: OperationsRequest, options?: CallOptions & CallOptionsExt): Promise<OperationsResponse>;
    /** Метод получения операций в песочнице по номеру счета с пагинацией. */
    getSandboxOperationsByCursor(request: GetOperationsByCursorRequest, options?: CallOptions & CallOptionsExt): Promise<GetOperationsByCursorResponse>;
    /** Метод получения портфолио в песочнице. */
    getSandboxPortfolio(request: PortfolioRequest, options?: CallOptions & CallOptionsExt): Promise<PortfolioResponse>;
    /** Метод пополнения счёта в песочнице. */
    sandboxPayIn(request: SandboxPayInRequest, options?: CallOptions & CallOptionsExt): Promise<SandboxPayInResponse>;
    /** Метод получения доступного остатка для вывода средств в песочнице. */
    getSandboxWithdrawLimits(request: WithdrawLimitsRequest, options?: CallOptions & CallOptionsExt): Promise<WithdrawLimitsResponse>;
}
//# sourceMappingURL=sandbox.d.ts.map