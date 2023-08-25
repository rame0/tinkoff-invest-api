import { BaseStream } from "./base";
export class PositionsStream extends BaseStream {
    /**
     * Подписаться на обновления.
     */
    watch(request) {
        // тут работает немного по-другому, т.к. request не AsyncIterable
        const call = this.api.operationsStream.positionsStream(request);
        this.waitEvents(call);
    }
}
//# sourceMappingURL=positions-stream.js.map