import { BaseStream } from "./base";
import { PortfolioStreamRequest, PortfolioStreamResponse } from "../generated/operations";
export declare class PortfolioStream extends BaseStream<PortfolioStreamRequest, PortfolioStreamResponse> {
    /**
     * Подписаться на обновления.
     */
    watch(request: PortfolioStreamRequest): void;
}
//# sourceMappingURL=portfolio-stream.d.ts.map