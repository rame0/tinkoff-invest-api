/**
 * Tinkoff Invest API.
 */
import { Client, Channel, Metadata } from 'nice-grpc';
import { TinkoffApiError } from './api-error.js';
import { Helpers } from './helpers.js';
import { MarketStream } from './stream/market.js';
import { InstrumentsServiceDefinition } from './generated/instruments.js';
import { MarketDataServiceDefinition, MarketDataStreamServiceDefinition } from './generated/marketdata.js';
import { OperationsServiceDefinition } from './generated/operations.js';
import { OrdersServiceDefinition, OrdersStreamServiceDefinition } from './generated/orders.js';
import { SandboxServiceDefinition } from './generated/sandbox.js';
import { StopOrdersServiceDefinition } from './generated/stoporders.js';
import { UsersServiceDefinition } from './generated/users.js';
import { TradesStream } from './stream/trades.js';
export { TinkoffApiError };
export interface TinkoffInvestApiOptions {
    /** Токен доступа */
    token: string;
    /** Имя приложения */
    appName?: string;
    /** API endpoint */
    endpoint?: string;
}
declare type ServiceDefinition = typeof InstrumentsServiceDefinition | typeof MarketDataServiceDefinition | typeof MarketDataStreamServiceDefinition | typeof OperationsServiceDefinition | typeof OrdersServiceDefinition | typeof OrdersStreamServiceDefinition | typeof SandboxServiceDefinition | typeof StopOrdersServiceDefinition | typeof UsersServiceDefinition;
export declare class TinkoffInvestApi {
    options: Required<TinkoffInvestApiOptions>;
    protected channel: Channel;
    protected metadata: Metadata;
    protected clients: Map<ServiceDefinition, Client<ServiceDefinition>>;
    protected streamClients?: {
        market: MarketStream;
        trades: TradesStream;
    };
    constructor(options: TinkoffInvestApiOptions);
    helpers: typeof Helpers;
    get instruments(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "InstrumentsService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.InstrumentsService";
        readonly methods: {
            readonly tradingSchedules: {
                readonly name: "TradingSchedules";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").TradingSchedulesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").TradingSchedulesRequest;
                    fromJSON(object: any): import("./generated/instruments.js").TradingSchedulesRequest;
                    toJSON(message: import("./generated/instruments.js").TradingSchedulesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").TradingSchedulesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").TradingSchedulesResponse;
                    fromJSON(object: any): import("./generated/instruments.js").TradingSchedulesResponse;
                    toJSON(message: import("./generated/instruments.js").TradingSchedulesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly bondBy: {
                readonly name: "BondBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").BondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").BondResponse;
                    fromJSON(object: any): import("./generated/instruments.js").BondResponse;
                    toJSON(message: import("./generated/instruments.js").BondResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly bonds: {
                readonly name: "Bonds";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").BondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").BondsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").BondsResponse;
                    toJSON(message: import("./generated/instruments.js").BondsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getBondCoupons: {
                readonly name: "GetBondCoupons";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").GetBondCouponsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetBondCouponsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").GetBondCouponsRequest;
                    toJSON(message: import("./generated/instruments.js").GetBondCouponsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").GetBondCouponsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetBondCouponsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").GetBondCouponsResponse;
                    toJSON(message: import("./generated/instruments.js").GetBondCouponsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly currencyBy: {
                readonly name: "CurrencyBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").CurrencyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").CurrencyResponse;
                    fromJSON(object: any): import("./generated/instruments.js").CurrencyResponse;
                    toJSON(message: import("./generated/instruments.js").CurrencyResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly currencies: {
                readonly name: "Currencies";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").CurrenciesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").CurrenciesResponse;
                    fromJSON(object: any): import("./generated/instruments.js").CurrenciesResponse;
                    toJSON(message: import("./generated/instruments.js").CurrenciesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly etfBy: {
                readonly name: "EtfBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").EtfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").EtfResponse;
                    fromJSON(object: any): import("./generated/instruments.js").EtfResponse;
                    toJSON(message: import("./generated/instruments.js").EtfResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly etfs: {
                readonly name: "Etfs";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").EtfsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").EtfsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").EtfsResponse;
                    toJSON(message: import("./generated/instruments.js").EtfsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly futureBy: {
                readonly name: "FutureBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").FutureResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").FutureResponse;
                    fromJSON(object: any): import("./generated/instruments.js").FutureResponse;
                    toJSON(message: import("./generated/instruments.js").FutureResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly futures: {
                readonly name: "Futures";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").FuturesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").FuturesResponse;
                    fromJSON(object: any): import("./generated/instruments.js").FuturesResponse;
                    toJSON(message: import("./generated/instruments.js").FuturesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly optionBy: {
                readonly name: "OptionBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").OptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").OptionResponse;
                    fromJSON(object: any): import("./generated/instruments.js").OptionResponse;
                    toJSON(message: import("./generated/instruments.js").OptionResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly options: {
                readonly name: "Options";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").OptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").OptionsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").OptionsResponse;
                    toJSON(message: import("./generated/instruments.js").OptionsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly optionsBy: {
                readonly name: "OptionsBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").FilterOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").FilterOptionsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").FilterOptionsRequest;
                    toJSON(message: import("./generated/instruments.js").FilterOptionsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").OptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").OptionsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").OptionsResponse;
                    toJSON(message: import("./generated/instruments.js").OptionsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly shareBy: {
                readonly name: "ShareBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").ShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").ShareResponse;
                    fromJSON(object: any): import("./generated/instruments.js").ShareResponse;
                    toJSON(message: import("./generated/instruments.js").ShareResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly shares: {
                readonly name: "Shares";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").SharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").SharesResponse;
                    fromJSON(object: any): import("./generated/instruments.js").SharesResponse;
                    toJSON(message: import("./generated/instruments.js").SharesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getAccruedInterests: {
                readonly name: "GetAccruedInterests";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").GetAccruedInterestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetAccruedInterestsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").GetAccruedInterestsRequest;
                    toJSON(message: import("./generated/instruments.js").GetAccruedInterestsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").GetAccruedInterestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetAccruedInterestsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").GetAccruedInterestsResponse;
                    toJSON(message: import("./generated/instruments.js").GetAccruedInterestsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getFuturesMargin: {
                readonly name: "GetFuturesMargin";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").GetFuturesMarginRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetFuturesMarginRequest;
                    fromJSON(object: any): import("./generated/instruments.js").GetFuturesMarginRequest;
                    toJSON(message: import("./generated/instruments.js").GetFuturesMarginRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").GetFuturesMarginResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetFuturesMarginResponse;
                    fromJSON(object: any): import("./generated/instruments.js").GetFuturesMarginResponse;
                    toJSON(message: import("./generated/instruments.js").GetFuturesMarginResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getInstrumentBy: {
                readonly name: "GetInstrumentBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").InstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").InstrumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").InstrumentResponse;
                    fromJSON(object: any): import("./generated/instruments.js").InstrumentResponse;
                    toJSON(message: import("./generated/instruments.js").InstrumentResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getDividends: {
                readonly name: "GetDividends";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").GetDividendsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetDividendsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").GetDividendsRequest;
                    toJSON(message: import("./generated/instruments.js").GetDividendsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").GetDividendsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetDividendsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").GetDividendsResponse;
                    toJSON(message: import("./generated/instruments.js").GetDividendsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getAssetBy: {
                readonly name: "GetAssetBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").AssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").AssetRequest;
                    fromJSON(object: any): import("./generated/instruments.js").AssetRequest;
                    toJSON(message: import("./generated/instruments.js").AssetRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").AssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").AssetResponse;
                    fromJSON(object: any): import("./generated/instruments.js").AssetResponse;
                    toJSON(message: import("./generated/instruments.js").AssetResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getAssets: {
                readonly name: "GetAssets";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").AssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").AssetsRequest;
                    fromJSON(object: any): import("./generated/instruments.js").AssetsRequest;
                    toJSON(message: import("./generated/instruments.js").AssetsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").AssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").AssetsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").AssetsResponse;
                    toJSON(message: import("./generated/instruments.js").AssetsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getFavorites: {
                readonly name: "GetFavorites";
                readonly requestType: {
                    encode(_: import("./generated/instruments.js").GetFavoritesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetFavoritesRequest;
                    fromJSON(_: any): import("./generated/instruments.js").GetFavoritesRequest;
                    toJSON(_: import("./generated/instruments.js").GetFavoritesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").GetFavoritesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetFavoritesResponse;
                    fromJSON(object: any): import("./generated/instruments.js").GetFavoritesResponse;
                    toJSON(message: import("./generated/instruments.js").GetFavoritesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly editFavorites: {
                readonly name: "EditFavorites";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").EditFavoritesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").EditFavoritesRequest;
                    fromJSON(object: any): import("./generated/instruments.js").EditFavoritesRequest;
                    toJSON(message: import("./generated/instruments.js").EditFavoritesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").EditFavoritesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").EditFavoritesResponse;
                    fromJSON(object: any): import("./generated/instruments.js").EditFavoritesResponse;
                    toJSON(message: import("./generated/instruments.js").EditFavoritesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getCountries: {
                readonly name: "GetCountries";
                readonly requestType: {
                    encode(_: import("./generated/instruments.js").GetCountriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetCountriesRequest;
                    fromJSON(_: any): import("./generated/instruments.js").GetCountriesRequest;
                    toJSON(_: import("./generated/instruments.js").GetCountriesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").GetCountriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetCountriesResponse;
                    fromJSON(object: any): import("./generated/instruments.js").GetCountriesResponse;
                    toJSON(message: import("./generated/instruments.js").GetCountriesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly findInstrument: {
                readonly name: "FindInstrument";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").FindInstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").FindInstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments.js").FindInstrumentRequest;
                    toJSON(message: import("./generated/instruments.js").FindInstrumentRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").FindInstrumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").FindInstrumentResponse;
                    fromJSON(object: any): import("./generated/instruments.js").FindInstrumentResponse;
                    toJSON(message: import("./generated/instruments.js").FindInstrumentResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getBrands: {
                readonly name: "GetBrands";
                readonly requestType: {
                    encode(_: import("./generated/instruments.js").GetBrandsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetBrandsRequest;
                    fromJSON(_: any): import("./generated/instruments.js").GetBrandsRequest;
                    toJSON(_: import("./generated/instruments.js").GetBrandsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").GetBrandsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetBrandsResponse;
                    fromJSON(object: any): import("./generated/instruments.js").GetBrandsResponse;
                    toJSON(message: import("./generated/instruments.js").GetBrandsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getBrandBy: {
                readonly name: "GetBrandBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments.js").GetBrandRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").GetBrandRequest;
                    fromJSON(object: any): import("./generated/instruments.js").GetBrandRequest;
                    toJSON(message: import("./generated/instruments.js").GetBrandRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments.js").Brand, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments.js").Brand;
                    fromJSON(object: any): import("./generated/instruments.js").Brand;
                    toJSON(message: import("./generated/instruments.js").Brand): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    get marketdata(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "MarketDataService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataService";
        readonly methods: {
            readonly getCandles: {
                readonly name: "GetCandles";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").GetCandlesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetCandlesRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").GetCandlesRequest;
                    toJSON(message: import("./generated/marketdata.js").GetCandlesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").GetCandlesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetCandlesResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").GetCandlesResponse;
                    toJSON(message: import("./generated/marketdata.js").GetCandlesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getLastPrices: {
                readonly name: "GetLastPrices";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").GetLastPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetLastPricesRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").GetLastPricesRequest;
                    toJSON(message: import("./generated/marketdata.js").GetLastPricesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").GetLastPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetLastPricesResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").GetLastPricesResponse;
                    toJSON(message: import("./generated/marketdata.js").GetLastPricesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getOrderBook: {
                readonly name: "GetOrderBook";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").GetOrderBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetOrderBookRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").GetOrderBookRequest;
                    toJSON(message: import("./generated/marketdata.js").GetOrderBookRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").GetOrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetOrderBookResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").GetOrderBookResponse;
                    toJSON(message: import("./generated/marketdata.js").GetOrderBookResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getTradingStatus: {
                readonly name: "GetTradingStatus";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").GetTradingStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetTradingStatusRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").GetTradingStatusRequest;
                    toJSON(message: import("./generated/marketdata.js").GetTradingStatusRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").GetTradingStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetTradingStatusResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").GetTradingStatusResponse;
                    toJSON(message: import("./generated/marketdata.js").GetTradingStatusResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getTradingStatuses: {
                readonly name: "GetTradingStatuses";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").GetTradingStatusesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetTradingStatusesRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").GetTradingStatusesRequest;
                    toJSON(message: import("./generated/marketdata.js").GetTradingStatusesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").GetTradingStatusesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetTradingStatusesResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").GetTradingStatusesResponse;
                    toJSON(message: import("./generated/marketdata.js").GetTradingStatusesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getLastTrades: {
                readonly name: "GetLastTrades";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").GetLastTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetLastTradesRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").GetLastTradesRequest;
                    toJSON(message: import("./generated/marketdata.js").GetLastTradesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").GetLastTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetLastTradesResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").GetLastTradesResponse;
                    toJSON(message: import("./generated/marketdata.js").GetLastTradesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getClosePrices: {
                readonly name: "GetClosePrices";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").GetClosePricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetClosePricesRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").GetClosePricesRequest;
                    toJSON(message: import("./generated/marketdata.js").GetClosePricesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").GetClosePricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").GetClosePricesResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").GetClosePricesResponse;
                    toJSON(message: import("./generated/marketdata.js").GetClosePricesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    get marketdataStream(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "MarketDataStreamService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService";
        readonly methods: {
            readonly marketDataStream: {
                readonly name: "MarketDataStream";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").MarketDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").MarketDataRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").MarketDataRequest;
                    toJSON(message: import("./generated/marketdata.js").MarketDataRequest): unknown;
                };
                readonly requestStream: true;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").MarketDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").MarketDataResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").MarketDataResponse;
                    toJSON(message: import("./generated/marketdata.js").MarketDataResponse): unknown;
                };
                readonly responseStream: true;
                readonly options: {};
            };
            readonly marketDataServerSideStream: {
                readonly name: "MarketDataServerSideStream";
                readonly requestType: {
                    encode(message: import("./generated/marketdata.js").MarketDataServerSideStreamRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").MarketDataServerSideStreamRequest;
                    fromJSON(object: any): import("./generated/marketdata.js").MarketDataServerSideStreamRequest;
                    toJSON(message: import("./generated/marketdata.js").MarketDataServerSideStreamRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata.js").MarketDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata.js").MarketDataResponse;
                    fromJSON(object: any): import("./generated/marketdata.js").MarketDataResponse;
                    toJSON(message: import("./generated/marketdata.js").MarketDataResponse): unknown;
                };
                readonly responseStream: true;
                readonly options: {};
            };
        };
    }>, {}>;
    get operations(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "OperationsService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.OperationsService";
        readonly methods: {
            readonly getOperations: {
                readonly name: "GetOperations";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").OperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").OperationsRequest;
                    fromJSON(object: any): import("./generated/operations.js").OperationsRequest;
                    toJSON(message: import("./generated/operations.js").OperationsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").OperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").OperationsResponse;
                    fromJSON(object: any): import("./generated/operations.js").OperationsResponse;
                    toJSON(message: import("./generated/operations.js").OperationsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getPortfolio: {
                readonly name: "GetPortfolio";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").PortfolioRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PortfolioRequest;
                    fromJSON(object: any): import("./generated/operations.js").PortfolioRequest;
                    toJSON(message: import("./generated/operations.js").PortfolioRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").PortfolioResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PortfolioResponse;
                    fromJSON(object: any): import("./generated/operations.js").PortfolioResponse;
                    toJSON(message: import("./generated/operations.js").PortfolioResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getPositions: {
                readonly name: "GetPositions";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").PositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PositionsRequest;
                    fromJSON(object: any): import("./generated/operations.js").PositionsRequest;
                    toJSON(message: import("./generated/operations.js").PositionsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").PositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PositionsResponse;
                    fromJSON(object: any): import("./generated/operations.js").PositionsResponse;
                    toJSON(message: import("./generated/operations.js").PositionsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getWithdrawLimits: {
                readonly name: "GetWithdrawLimits";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").WithdrawLimitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").WithdrawLimitsRequest;
                    fromJSON(object: any): import("./generated/operations.js").WithdrawLimitsRequest;
                    toJSON(message: import("./generated/operations.js").WithdrawLimitsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").WithdrawLimitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").WithdrawLimitsResponse;
                    fromJSON(object: any): import("./generated/operations.js").WithdrawLimitsResponse;
                    toJSON(message: import("./generated/operations.js").WithdrawLimitsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getBrokerReport: {
                readonly name: "GetBrokerReport";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").BrokerReportRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").BrokerReportRequest;
                    fromJSON(object: any): import("./generated/operations.js").BrokerReportRequest;
                    toJSON(message: import("./generated/operations.js").BrokerReportRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").BrokerReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").BrokerReportResponse;
                    fromJSON(object: any): import("./generated/operations.js").BrokerReportResponse;
                    toJSON(message: import("./generated/operations.js").BrokerReportResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getDividendsForeignIssuer: {
                readonly name: "GetDividendsForeignIssuer";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").GetDividendsForeignIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").GetDividendsForeignIssuerRequest;
                    fromJSON(object: any): import("./generated/operations.js").GetDividendsForeignIssuerRequest;
                    toJSON(message: import("./generated/operations.js").GetDividendsForeignIssuerRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").GetDividendsForeignIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").GetDividendsForeignIssuerResponse;
                    fromJSON(object: any): import("./generated/operations.js").GetDividendsForeignIssuerResponse;
                    toJSON(message: import("./generated/operations.js").GetDividendsForeignIssuerResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getOperationsByCursor: {
                readonly name: "GetOperationsByCursor";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").GetOperationsByCursorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").GetOperationsByCursorRequest;
                    fromJSON(object: any): import("./generated/operations.js").GetOperationsByCursorRequest;
                    toJSON(message: import("./generated/operations.js").GetOperationsByCursorRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").GetOperationsByCursorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").GetOperationsByCursorResponse;
                    fromJSON(object: any): import("./generated/operations.js").GetOperationsByCursorResponse;
                    toJSON(message: import("./generated/operations.js").GetOperationsByCursorResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    get orders(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "OrdersService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersService";
        readonly methods: {
            readonly postOrder: {
                readonly name: "PostOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").PostOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").PostOrderRequest;
                    fromJSON(object: any): import("./generated/orders.js").PostOrderRequest;
                    toJSON(message: import("./generated/orders.js").PostOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").PostOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").PostOrderResponse;
                    fromJSON(object: any): import("./generated/orders.js").PostOrderResponse;
                    toJSON(message: import("./generated/orders.js").PostOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly cancelOrder: {
                readonly name: "CancelOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").CancelOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").CancelOrderRequest;
                    fromJSON(object: any): import("./generated/orders.js").CancelOrderRequest;
                    toJSON(message: import("./generated/orders.js").CancelOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").CancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").CancelOrderResponse;
                    fromJSON(object: any): import("./generated/orders.js").CancelOrderResponse;
                    toJSON(message: import("./generated/orders.js").CancelOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getOrderState: {
                readonly name: "GetOrderState";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").GetOrderStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").GetOrderStateRequest;
                    fromJSON(object: any): import("./generated/orders.js").GetOrderStateRequest;
                    toJSON(message: import("./generated/orders.js").GetOrderStateRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").OrderState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").OrderState;
                    fromJSON(object: any): import("./generated/orders.js").OrderState;
                    toJSON(message: import("./generated/orders.js").OrderState): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getOrders: {
                readonly name: "GetOrders";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").GetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").GetOrdersRequest;
                    fromJSON(object: any): import("./generated/orders.js").GetOrdersRequest;
                    toJSON(message: import("./generated/orders.js").GetOrdersRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").GetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").GetOrdersResponse;
                    fromJSON(object: any): import("./generated/orders.js").GetOrdersResponse;
                    toJSON(message: import("./generated/orders.js").GetOrdersResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly replaceOrder: {
                readonly name: "ReplaceOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").ReplaceOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").ReplaceOrderRequest;
                    fromJSON(object: any): import("./generated/orders.js").ReplaceOrderRequest;
                    toJSON(message: import("./generated/orders.js").ReplaceOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").PostOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").PostOrderResponse;
                    fromJSON(object: any): import("./generated/orders.js").PostOrderResponse;
                    toJSON(message: import("./generated/orders.js").PostOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    get ordersStream(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "OrdersStreamService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersStreamService";
        readonly methods: {
            readonly tradesStream: {
                readonly name: "TradesStream";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").TradesStreamRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").TradesStreamRequest;
                    fromJSON(object: any): import("./generated/orders.js").TradesStreamRequest;
                    toJSON(message: import("./generated/orders.js").TradesStreamRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").TradesStreamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").TradesStreamResponse;
                    fromJSON(object: any): import("./generated/orders.js").TradesStreamResponse;
                    toJSON(message: import("./generated/orders.js").TradesStreamResponse): unknown;
                };
                readonly responseStream: true;
                readonly options: {};
            };
        };
    }>, {}>;
    get sandbox(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "SandboxService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.SandboxService";
        readonly methods: {
            readonly openSandboxAccount: {
                readonly name: "OpenSandboxAccount";
                readonly requestType: {
                    encode(_: import("./generated/sandbox.js").OpenSandboxAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox.js").OpenSandboxAccountRequest;
                    fromJSON(_: any): import("./generated/sandbox.js").OpenSandboxAccountRequest;
                    toJSON(_: import("./generated/sandbox.js").OpenSandboxAccountRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/sandbox.js").OpenSandboxAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox.js").OpenSandboxAccountResponse;
                    fromJSON(object: any): import("./generated/sandbox.js").OpenSandboxAccountResponse;
                    toJSON(message: import("./generated/sandbox.js").OpenSandboxAccountResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxAccounts: {
                readonly name: "GetSandboxAccounts";
                readonly requestType: {
                    encode(_: import("./generated/users.js").GetAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetAccountsRequest;
                    fromJSON(_: any): import("./generated/users.js").GetAccountsRequest;
                    toJSON(_: import("./generated/users.js").GetAccountsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users.js").GetAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetAccountsResponse;
                    fromJSON(object: any): import("./generated/users.js").GetAccountsResponse;
                    toJSON(message: import("./generated/users.js").GetAccountsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly closeSandboxAccount: {
                readonly name: "CloseSandboxAccount";
                readonly requestType: {
                    encode(message: import("./generated/sandbox.js").CloseSandboxAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox.js").CloseSandboxAccountRequest;
                    fromJSON(object: any): import("./generated/sandbox.js").CloseSandboxAccountRequest;
                    toJSON(message: import("./generated/sandbox.js").CloseSandboxAccountRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(_: import("./generated/sandbox.js").CloseSandboxAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox.js").CloseSandboxAccountResponse;
                    fromJSON(_: any): import("./generated/sandbox.js").CloseSandboxAccountResponse;
                    toJSON(_: import("./generated/sandbox.js").CloseSandboxAccountResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly postSandboxOrder: {
                readonly name: "PostSandboxOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").PostOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").PostOrderRequest;
                    fromJSON(object: any): import("./generated/orders.js").PostOrderRequest;
                    toJSON(message: import("./generated/orders.js").PostOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").PostOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").PostOrderResponse;
                    fromJSON(object: any): import("./generated/orders.js").PostOrderResponse;
                    toJSON(message: import("./generated/orders.js").PostOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly replaceSandboxOrder: {
                readonly name: "ReplaceSandboxOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").ReplaceOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").ReplaceOrderRequest;
                    fromJSON(object: any): import("./generated/orders.js").ReplaceOrderRequest;
                    toJSON(message: import("./generated/orders.js").ReplaceOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").PostOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").PostOrderResponse;
                    fromJSON(object: any): import("./generated/orders.js").PostOrderResponse;
                    toJSON(message: import("./generated/orders.js").PostOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxOrders: {
                readonly name: "GetSandboxOrders";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").GetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").GetOrdersRequest;
                    fromJSON(object: any): import("./generated/orders.js").GetOrdersRequest;
                    toJSON(message: import("./generated/orders.js").GetOrdersRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").GetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").GetOrdersResponse;
                    fromJSON(object: any): import("./generated/orders.js").GetOrdersResponse;
                    toJSON(message: import("./generated/orders.js").GetOrdersResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly cancelSandboxOrder: {
                readonly name: "CancelSandboxOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").CancelOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").CancelOrderRequest;
                    fromJSON(object: any): import("./generated/orders.js").CancelOrderRequest;
                    toJSON(message: import("./generated/orders.js").CancelOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").CancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").CancelOrderResponse;
                    fromJSON(object: any): import("./generated/orders.js").CancelOrderResponse;
                    toJSON(message: import("./generated/orders.js").CancelOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxOrderState: {
                readonly name: "GetSandboxOrderState";
                readonly requestType: {
                    encode(message: import("./generated/orders.js").GetOrderStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").GetOrderStateRequest;
                    fromJSON(object: any): import("./generated/orders.js").GetOrderStateRequest;
                    toJSON(message: import("./generated/orders.js").GetOrderStateRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders.js").OrderState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders.js").OrderState;
                    fromJSON(object: any): import("./generated/orders.js").OrderState;
                    toJSON(message: import("./generated/orders.js").OrderState): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxPositions: {
                readonly name: "GetSandboxPositions";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").PositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PositionsRequest;
                    fromJSON(object: any): import("./generated/operations.js").PositionsRequest;
                    toJSON(message: import("./generated/operations.js").PositionsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").PositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PositionsResponse;
                    fromJSON(object: any): import("./generated/operations.js").PositionsResponse;
                    toJSON(message: import("./generated/operations.js").PositionsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxOperations: {
                readonly name: "GetSandboxOperations";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").OperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").OperationsRequest;
                    fromJSON(object: any): import("./generated/operations.js").OperationsRequest;
                    toJSON(message: import("./generated/operations.js").OperationsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").OperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").OperationsResponse;
                    fromJSON(object: any): import("./generated/operations.js").OperationsResponse;
                    toJSON(message: import("./generated/operations.js").OperationsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxOperationsByCursor: {
                readonly name: "GetSandboxOperationsByCursor";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").GetOperationsByCursorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").GetOperationsByCursorRequest;
                    fromJSON(object: any): import("./generated/operations.js").GetOperationsByCursorRequest;
                    toJSON(message: import("./generated/operations.js").GetOperationsByCursorRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").GetOperationsByCursorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").GetOperationsByCursorResponse;
                    fromJSON(object: any): import("./generated/operations.js").GetOperationsByCursorResponse;
                    toJSON(message: import("./generated/operations.js").GetOperationsByCursorResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxPortfolio: {
                readonly name: "GetSandboxPortfolio";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").PortfolioRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PortfolioRequest;
                    fromJSON(object: any): import("./generated/operations.js").PortfolioRequest;
                    toJSON(message: import("./generated/operations.js").PortfolioRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").PortfolioResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").PortfolioResponse;
                    fromJSON(object: any): import("./generated/operations.js").PortfolioResponse;
                    toJSON(message: import("./generated/operations.js").PortfolioResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly sandboxPayIn: {
                readonly name: "SandboxPayIn";
                readonly requestType: {
                    encode(message: import("./generated/sandbox.js").SandboxPayInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox.js").SandboxPayInRequest;
                    fromJSON(object: any): import("./generated/sandbox.js").SandboxPayInRequest;
                    toJSON(message: import("./generated/sandbox.js").SandboxPayInRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/sandbox.js").SandboxPayInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox.js").SandboxPayInResponse;
                    fromJSON(object: any): import("./generated/sandbox.js").SandboxPayInResponse;
                    toJSON(message: import("./generated/sandbox.js").SandboxPayInResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxWithdrawLimits: {
                readonly name: "GetSandboxWithdrawLimits";
                readonly requestType: {
                    encode(message: import("./generated/operations.js").WithdrawLimitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").WithdrawLimitsRequest;
                    fromJSON(object: any): import("./generated/operations.js").WithdrawLimitsRequest;
                    toJSON(message: import("./generated/operations.js").WithdrawLimitsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations.js").WithdrawLimitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations.js").WithdrawLimitsResponse;
                    fromJSON(object: any): import("./generated/operations.js").WithdrawLimitsResponse;
                    toJSON(message: import("./generated/operations.js").WithdrawLimitsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    get stoporders(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "StopOrdersService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.StopOrdersService";
        readonly methods: {
            readonly postStopOrder: {
                readonly name: "PostStopOrder";
                readonly requestType: {
                    encode(message: import("./generated/stoporders.js").PostStopOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders.js").PostStopOrderRequest;
                    fromJSON(object: any): import("./generated/stoporders.js").PostStopOrderRequest;
                    toJSON(message: import("./generated/stoporders.js").PostStopOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/stoporders.js").PostStopOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders.js").PostStopOrderResponse;
                    fromJSON(object: any): import("./generated/stoporders.js").PostStopOrderResponse;
                    toJSON(message: import("./generated/stoporders.js").PostStopOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getStopOrders: {
                readonly name: "GetStopOrders";
                readonly requestType: {
                    encode(message: import("./generated/stoporders.js").GetStopOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders.js").GetStopOrdersRequest;
                    fromJSON(object: any): import("./generated/stoporders.js").GetStopOrdersRequest;
                    toJSON(message: import("./generated/stoporders.js").GetStopOrdersRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/stoporders.js").GetStopOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders.js").GetStopOrdersResponse;
                    fromJSON(object: any): import("./generated/stoporders.js").GetStopOrdersResponse;
                    toJSON(message: import("./generated/stoporders.js").GetStopOrdersResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly cancelStopOrder: {
                readonly name: "CancelStopOrder";
                readonly requestType: {
                    encode(message: import("./generated/stoporders.js").CancelStopOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders.js").CancelStopOrderRequest;
                    fromJSON(object: any): import("./generated/stoporders.js").CancelStopOrderRequest;
                    toJSON(message: import("./generated/stoporders.js").CancelStopOrderRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/stoporders.js").CancelStopOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders.js").CancelStopOrderResponse;
                    fromJSON(object: any): import("./generated/stoporders.js").CancelStopOrderResponse;
                    toJSON(message: import("./generated/stoporders.js").CancelStopOrderResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    get users(): import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto.js").FromTsProtoServiceDefinition<{
        readonly name: "UsersService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.UsersService";
        readonly methods: {
            readonly getAccounts: {
                readonly name: "GetAccounts";
                readonly requestType: {
                    encode(_: import("./generated/users.js").GetAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetAccountsRequest;
                    fromJSON(_: any): import("./generated/users.js").GetAccountsRequest;
                    toJSON(_: import("./generated/users.js").GetAccountsRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users.js").GetAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetAccountsResponse;
                    fromJSON(object: any): import("./generated/users.js").GetAccountsResponse;
                    toJSON(message: import("./generated/users.js").GetAccountsResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getMarginAttributes: {
                readonly name: "GetMarginAttributes";
                readonly requestType: {
                    encode(message: import("./generated/users.js").GetMarginAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetMarginAttributesRequest;
                    fromJSON(object: any): import("./generated/users.js").GetMarginAttributesRequest;
                    toJSON(message: import("./generated/users.js").GetMarginAttributesRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users.js").GetMarginAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetMarginAttributesResponse;
                    fromJSON(object: any): import("./generated/users.js").GetMarginAttributesResponse;
                    toJSON(message: import("./generated/users.js").GetMarginAttributesResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getUserTariff: {
                readonly name: "GetUserTariff";
                readonly requestType: {
                    encode(_: import("./generated/users.js").GetUserTariffRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetUserTariffRequest;
                    fromJSON(_: any): import("./generated/users.js").GetUserTariffRequest;
                    toJSON(_: import("./generated/users.js").GetUserTariffRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users.js").GetUserTariffResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetUserTariffResponse;
                    fromJSON(object: any): import("./generated/users.js").GetUserTariffResponse;
                    toJSON(message: import("./generated/users.js").GetUserTariffResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getInfo: {
                readonly name: "GetInfo";
                readonly requestType: {
                    encode(_: import("./generated/users.js").GetInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetInfoRequest;
                    fromJSON(_: any): import("./generated/users.js").GetInfoRequest;
                    toJSON(_: import("./generated/users.js").GetInfoRequest): unknown;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users.js").GetInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users.js").GetInfoResponse;
                    fromJSON(object: any): import("./generated/users.js").GetInfoResponse;
                    toJSON(message: import("./generated/users.js").GetInfoResponse): unknown;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    get stream(): {
        market: MarketStream;
        trades: TradesStream;
    };
    isBacktest: boolean;
    private createChannel;
    private getOrCreateClient;
    private getOrCreateStream;
    private createDefaultMetadata;
}
//# sourceMappingURL=api.d.ts.map