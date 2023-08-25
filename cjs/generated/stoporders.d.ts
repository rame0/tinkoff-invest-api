import _m0 from "protobufjs/minimal.js";
import { Quotation, MoneyValue } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Направление сделки стоп-заявки. */
export declare enum StopOrderDirection {
    /** STOP_ORDER_DIRECTION_UNSPECIFIED - Значение не указано. */
    STOP_ORDER_DIRECTION_UNSPECIFIED = 0,
    /** STOP_ORDER_DIRECTION_BUY - Покупка. */
    STOP_ORDER_DIRECTION_BUY = 1,
    /** STOP_ORDER_DIRECTION_SELL - Продажа. */
    STOP_ORDER_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function stopOrderDirectionFromJSON(object: any): StopOrderDirection;
export declare function stopOrderDirectionToJSON(object: StopOrderDirection): string;
/** Тип экспирации стоп-заявке. */
export declare enum StopOrderExpirationType {
    /** STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED - Значение не указано. */
    STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED = 0,
    /** STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL - Действительно до отмены. */
    STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL = 1,
    /** STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE - Действительно до даты снятия. */
    STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE = 2,
    UNRECOGNIZED = -1
}
export declare function stopOrderExpirationTypeFromJSON(object: any): StopOrderExpirationType;
export declare function stopOrderExpirationTypeToJSON(object: StopOrderExpirationType): string;
/** Тип стоп-заявки. */
export declare enum StopOrderType {
    /** STOP_ORDER_TYPE_UNSPECIFIED - Значение не указано. */
    STOP_ORDER_TYPE_UNSPECIFIED = 0,
    /** STOP_ORDER_TYPE_TAKE_PROFIT - Take-profit заявка. */
    STOP_ORDER_TYPE_TAKE_PROFIT = 1,
    /** STOP_ORDER_TYPE_STOP_LOSS - Stop-loss заявка. */
    STOP_ORDER_TYPE_STOP_LOSS = 2,
    /** STOP_ORDER_TYPE_STOP_LIMIT - Stop-limit заявка. */
    STOP_ORDER_TYPE_STOP_LIMIT = 3,
    UNRECOGNIZED = -1
}
export declare function stopOrderTypeFromJSON(object: any): StopOrderType;
export declare function stopOrderTypeToJSON(object: StopOrderType): string;
/** Запрос выставления стоп-заявки. */
export interface PostStopOrderRequest {
    /**
     * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
     *
     * @deprecated
     */
    figi: string;
    /** Количество лотов. */
    quantity: number;
    /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
    price?: Quotation;
    /** Стоп-цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
    stopPrice?: Quotation;
    /** Направление операции. */
    direction: StopOrderDirection;
    /** Номер счёта. */
    accountId: string;
    /** Тип экспирации заявки. */
    expirationType: StopOrderExpirationType;
    /** Тип заявки. */
    stopOrderType: StopOrderType;
    /** Дата и время окончания действия стоп-заявки в часовом поясе UTC. **Для ExpirationType = GoodTillDate заполнение обязательно**. */
    expireDate?: Date;
    /** Идентификатор инструмента, принимает значения Figi или instrument_uid. */
    instrumentId: string;
}
/** Результат выставления стоп-заявки. */
export interface PostStopOrderResponse {
    /** Уникальный идентификатор стоп-заявки. */
    stopOrderId: string;
}
/** Запрос получения списка активных стоп-заявок. */
export interface GetStopOrdersRequest {
    /** Идентификатор счёта клиента. */
    accountId: string;
}
/** Список активных стоп-заявок. */
export interface GetStopOrdersResponse {
    /** Массив стоп-заявок по счёту. */
    stopOrders: StopOrder[];
}
/** Запрос отмены выставленной стоп-заявки. */
export interface CancelStopOrderRequest {
    /** Идентификатор счёта клиента. */
    accountId: string;
    /** Уникальный идентификатор стоп-заявки. */
    stopOrderId: string;
}
/** Результат отмены выставленной стоп-заявки. */
export interface CancelStopOrderResponse {
    /** Время отмены заявки в часовом поясе UTC. */
    time?: Date;
}
/** Информация о стоп-заявке. */
export interface StopOrder {
    /** Идентификатор-идентификатор стоп-заявки. */
    stopOrderId: string;
    /** Запрошено лотов. */
    lotsRequested: number;
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Направление операции. */
    direction: StopOrderDirection;
    /** Валюта стоп-заявки. */
    currency: string;
    /** Тип стоп-заявки. */
    orderType: StopOrderType;
    /** Дата и время выставления заявки в часовом поясе UTC. */
    createDate?: Date;
    /** Дата и время конвертации стоп-заявки в биржевую в часовом поясе UTC. */
    activationDateTime?: Date;
    /** Дата и время снятия заявки в часовом поясе UTC. */
    expirationTime?: Date;
    /** Цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
    price?: MoneyValue;
    /** Цена активации стоп-заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
    stopPrice?: MoneyValue;
    /** instrument_uid идентификатор инструмента. */
    instrumentUid: string;
}
export declare const PostStopOrderRequest: {
    encode(message: PostStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostStopOrderRequest;
    fromJSON(object: any): PostStopOrderRequest;
    toJSON(message: PostStopOrderRequest): unknown;
};
export declare const PostStopOrderResponse: {
    encode(message: PostStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostStopOrderResponse;
    fromJSON(object: any): PostStopOrderResponse;
    toJSON(message: PostStopOrderResponse): unknown;
};
export declare const GetStopOrdersRequest: {
    encode(message: GetStopOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStopOrdersRequest;
    fromJSON(object: any): GetStopOrdersRequest;
    toJSON(message: GetStopOrdersRequest): unknown;
};
export declare const GetStopOrdersResponse: {
    encode(message: GetStopOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStopOrdersResponse;
    fromJSON(object: any): GetStopOrdersResponse;
    toJSON(message: GetStopOrdersResponse): unknown;
};
export declare const CancelStopOrderRequest: {
    encode(message: CancelStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelStopOrderRequest;
    fromJSON(object: any): CancelStopOrderRequest;
    toJSON(message: CancelStopOrderRequest): unknown;
};
export declare const CancelStopOrderResponse: {
    encode(message: CancelStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelStopOrderResponse;
    fromJSON(object: any): CancelStopOrderResponse;
    toJSON(message: CancelStopOrderResponse): unknown;
};
export declare const StopOrder: {
    encode(message: StopOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopOrder;
    fromJSON(object: any): StopOrder;
    toJSON(message: StopOrder): unknown;
};
/**
 * Сервис предназначен для работы со стоп-заявками:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение списка стоп-заявок.
 */
export declare type StopOrdersServiceDefinition = typeof StopOrdersServiceDefinition;
export declare const StopOrdersServiceDefinition: {
    readonly name: "StopOrdersService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.StopOrdersService";
    readonly methods: {
        /** Метод выставления стоп-заявки. */
        readonly postStopOrder: {
            readonly name: "PostStopOrder";
            readonly requestType: {
                encode(message: PostStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PostStopOrderRequest;
                fromJSON(object: any): PostStopOrderRequest;
                toJSON(message: PostStopOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PostStopOrderResponse;
                fromJSON(object: any): PostStopOrderResponse;
                toJSON(message: PostStopOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка активных стоп заявок по счёту. */
        readonly getStopOrders: {
            readonly name: "GetStopOrders";
            readonly requestType: {
                encode(message: GetStopOrdersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetStopOrdersRequest;
                fromJSON(object: any): GetStopOrdersRequest;
                toJSON(message: GetStopOrdersRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetStopOrdersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetStopOrdersResponse;
                fromJSON(object: any): GetStopOrdersResponse;
                toJSON(message: GetStopOrdersResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод отмены стоп-заявки. */
        readonly cancelStopOrder: {
            readonly name: "CancelStopOrder";
            readonly requestType: {
                encode(message: CancelStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CancelStopOrderRequest;
                fromJSON(object: any): CancelStopOrderRequest;
                toJSON(message: CancelStopOrderRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CancelStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CancelStopOrderResponse;
                fromJSON(object: any): CancelStopOrderResponse;
                toJSON(message: CancelStopOrderResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface StopOrdersServiceServiceImplementation<CallContextExt = {}> {
    /** Метод выставления стоп-заявки. */
    postStopOrder(request: PostStopOrderRequest, context: CallContext & CallContextExt): Promise<PostStopOrderResponse>;
    /** Метод получения списка активных стоп заявок по счёту. */
    getStopOrders(request: GetStopOrdersRequest, context: CallContext & CallContextExt): Promise<GetStopOrdersResponse>;
    /** Метод отмены стоп-заявки. */
    cancelStopOrder(request: CancelStopOrderRequest, context: CallContext & CallContextExt): Promise<CancelStopOrderResponse>;
}
export interface StopOrdersServiceClient<CallOptionsExt = {}> {
    /** Метод выставления стоп-заявки. */
    postStopOrder(request: PostStopOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostStopOrderResponse>;
    /** Метод получения списка активных стоп заявок по счёту. */
    getStopOrders(request: GetStopOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetStopOrdersResponse>;
    /** Метод отмены стоп-заявки. */
    cancelStopOrder(request: CancelStopOrderRequest, options?: CallOptions & CallOptionsExt): Promise<CancelStopOrderResponse>;
}
//# sourceMappingURL=stoporders.d.ts.map