import { BaseStream } from "./base";
import { PositionsStreamRequest, PositionsStreamResponse } from "../generated/operations";
export declare class PositionsStream extends BaseStream<PositionsStreamRequest, PositionsStreamResponse> {
    /**
     * Подписаться на обновления.
     */
    watch(request: PositionsStreamRequest): void;
}
//# sourceMappingURL=positions-stream.d.ts.map