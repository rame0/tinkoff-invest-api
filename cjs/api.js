"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinkoffInvestApi = exports.TinkoffApiError = void 0;
/**
 * Tinkoff Invest API.
 */
const nice_grpc_1 = require("nice-grpc");
const api_error_js_1 = require("./api-error.js");
Object.defineProperty(exports, "TinkoffApiError", { enumerable: true, get: function () { return api_error_js_1.TinkoffApiError; } });
const helpers_js_1 = require("./helpers.js");
const market_js_1 = require("./stream/market.js");
const instruments_js_1 = require("./generated/instruments.js");
const marketdata_js_1 = require("./generated/marketdata.js");
const operations_js_1 = require("./generated/operations.js");
const orders_js_1 = require("./generated/orders.js");
const sandbox_js_1 = require("./generated/sandbox.js");
const stoporders_js_1 = require("./generated/stoporders.js");
const users_js_1 = require("./generated/users.js");
const trades_js_1 = require("./stream/trades.js");
const portfolio_stream_js_1 = require("./stream/portfolio-stream.js");
const positions_stream_js_1 = require("./stream/positions-stream.js");
const defaults = {
    endpoint: 'invest-public-api.tinkoff.ru:443',
    appName: '',
};
class TinkoffInvestApi {
    constructor(options) {
        this.clients = new Map();
        this.helpers = helpers_js_1.Helpers;
        this.isBacktest = false;
        this.options = Object.assign({}, defaults, options);
        this.channel = this.createChannel();
        this.metadata = this.createDefaultMetadata();
    }
    get instruments() { return this.getOrCreateClient(instruments_js_1.InstrumentsServiceDefinition); }
    get marketdata() { return this.getOrCreateClient(marketdata_js_1.MarketDataServiceDefinition); }
    get marketdataStream() { return this.getOrCreateClient(marketdata_js_1.MarketDataStreamServiceDefinition); }
    get operations() { return this.getOrCreateClient(operations_js_1.OperationsServiceDefinition); }
    get orders() { return this.getOrCreateClient(orders_js_1.OrdersServiceDefinition); }
    get ordersStream() { return this.getOrCreateClient(orders_js_1.OrdersStreamServiceDefinition); }
    get operationsStream() { return this.getOrCreateClient(operations_js_1.OperationsStreamServiceDefinition); }
    get sandbox() { return this.getOrCreateClient(sandbox_js_1.SandboxServiceDefinition); }
    get stoporders() { return this.getOrCreateClient(stoporders_js_1.StopOrdersServiceDefinition); }
    get users() { return this.getOrCreateClient(users_js_1.UsersServiceDefinition); }
    get stream() { return this.getOrCreateStream(); }
    createChannel() {
        const { endpoint } = this.options;
        const credentials = /^localhost/i.test(endpoint)
            ? nice_grpc_1.ChannelCredentials.createInsecure()
            : nice_grpc_1.ChannelCredentials.createSsl();
        return (0, nice_grpc_1.createChannel)(endpoint, credentials);
    }
    getOrCreateClient(service) {
        let client = this.clients.get(service);
        if (!client) {
            const defaultCallOptions = { '*': { metadata: this.metadata } };
            client = (0, nice_grpc_1.createClientFactory)().use(api_error_js_1.errorMiddleware).create(service, this.channel, defaultCallOptions);
            this.clients.set(service, client);
        }
        return client;
    }
    getOrCreateStream() {
        if (!this.streamClients) {
            this.streamClients = {
                market: new market_js_1.MarketStream(this),
                trades: new trades_js_1.TradesStream(this),
                positions: new positions_stream_js_1.PositionsStream(this),
                portfolio: new portfolio_stream_js_1.PortfolioStream(this),
            };
        }
        return this.streamClients;
    }
    createDefaultMetadata() {
        return new nice_grpc_1.Metadata({
            'Authorization': `Bearer ${this.options.token}`,
            'x-app-name': this.options.appName,
        });
    }
}
exports.TinkoffInvestApi = TinkoffInvestApi;
//# sourceMappingURL=api.js.map