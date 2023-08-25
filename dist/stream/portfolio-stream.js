import { BaseStream } from "./base";
export class PortfolioStream extends BaseStream {
    /**
     * Подписаться на обновления.
     */
    watch(request) {
        // тут работает немного по-другому, т.к. request не AsyncIterable
        const call = this.api.operationsStream.portfolioStream(request);
        this.waitEvents(call);
    }
}
//# sourceMappingURL=portfolio-stream.js.map