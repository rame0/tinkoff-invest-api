import {BaseStream} from "./base";
import {PositionsStreamRequest, PositionsStreamResponse} from "../generated/operations";

export class PositionsStream extends BaseStream<PositionsStreamRequest, PositionsStreamResponse> {
  /**
   * Подписаться на обновления.
   */
  watch(request: PositionsStreamRequest) {
    // тут работает немного по-другому, т.к. request не AsyncIterable
    const call = this.api.operationsStream.positionsStream(request);
    this.waitEvents(call);
  }

  // todo: cancel() - тут отмена работает по-другому, т.к. req не AsyncIterable
}
