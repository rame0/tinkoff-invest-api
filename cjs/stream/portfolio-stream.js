"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioStream = void 0;
const base_1 = require("./base");
class PortfolioStream extends base_1.BaseStream {
    /**
     * Подписаться на обновления.
     */
    watch(request) {
        // тут работает немного по-другому, т.к. request не AsyncIterable
        const call = this.api.operationsStream.portfolioStream(request);
        this.waitEvents(call);
    }
}
exports.PortfolioStream = PortfolioStream;
//# sourceMappingURL=portfolio-stream.js.map