import {BaseStream} from "./base";
import {PortfolioStreamRequest, PortfolioStreamResponse} from "../generated/operations";

export class PortfolioStream extends BaseStream<PortfolioStreamRequest, PortfolioStreamResponse> {
  /**
   * Подписаться на обновления.
   */
  watch(request: PortfolioStreamRequest) {
    // тут работает немного по-другому, т.к. request не AsyncIterable
    const call = this.api.operationsStream.portfolioStream(request);
    this.waitEvents(call);
  }

  // todo: cancel() - тут отмена работает по-другому, т.к. req не AsyncIterable
}
