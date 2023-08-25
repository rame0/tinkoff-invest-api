"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionsStream = void 0;
const base_1 = require("./base");
class PositionsStream extends base_1.BaseStream {
    /**
     * Подписаться на обновления.
     */
    watch(request) {
        // тут работает немного по-другому, т.к. request не AsyncIterable
        const call = this.api.operationsStream.positionsStream(request);
        this.waitEvents(call);
    }
}
exports.PositionsStream = PositionsStream;
//# sourceMappingURL=positions-stream.js.map