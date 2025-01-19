/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Quotation, PageResponse, Page } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Тип стратегии. */
export enum StrategyType {
  /** STRATEGY_TYPE_UNSPECIFIED - Не определен. */
  STRATEGY_TYPE_UNSPECIFIED = 0,
  /** STRATEGY_TYPE_TECHNICAL - Техническая стратегия. */
  STRATEGY_TYPE_TECHNICAL = 1,
  /** STRATEGY_TYPE_FUNDAMENTAL - Фундаментальная стратегия. */
  STRATEGY_TYPE_FUNDAMENTAL = 2,
  UNRECOGNIZED = -1,
}

export function strategyTypeFromJSON(object: any): StrategyType {
  switch (object) {
    case 0:
    case "STRATEGY_TYPE_UNSPECIFIED":
      return StrategyType.STRATEGY_TYPE_UNSPECIFIED;
    case 1:
    case "STRATEGY_TYPE_TECHNICAL":
      return StrategyType.STRATEGY_TYPE_TECHNICAL;
    case 2:
    case "STRATEGY_TYPE_FUNDAMENTAL":
      return StrategyType.STRATEGY_TYPE_FUNDAMENTAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StrategyType.UNRECOGNIZED;
  }
}

export function strategyTypeToJSON(object: StrategyType): string {
  switch (object) {
    case StrategyType.STRATEGY_TYPE_UNSPECIFIED:
      return "STRATEGY_TYPE_UNSPECIFIED";
    case StrategyType.STRATEGY_TYPE_TECHNICAL:
      return "STRATEGY_TYPE_TECHNICAL";
    case StrategyType.STRATEGY_TYPE_FUNDAMENTAL:
      return "STRATEGY_TYPE_FUNDAMENTAL";
    case StrategyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Направление сигнала. */
export enum SignalDirection {
  /** SIGNAL_DIRECTION_UNSPECIFIED - Не определен. */
  SIGNAL_DIRECTION_UNSPECIFIED = 0,
  /** SIGNAL_DIRECTION_BUY - Покупка. */
  SIGNAL_DIRECTION_BUY = 1,
  /** SIGNAL_DIRECTION_SELL - Продажа. */
  SIGNAL_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function signalDirectionFromJSON(object: any): SignalDirection {
  switch (object) {
    case 0:
    case "SIGNAL_DIRECTION_UNSPECIFIED":
      return SignalDirection.SIGNAL_DIRECTION_UNSPECIFIED;
    case 1:
    case "SIGNAL_DIRECTION_BUY":
      return SignalDirection.SIGNAL_DIRECTION_BUY;
    case 2:
    case "SIGNAL_DIRECTION_SELL":
      return SignalDirection.SIGNAL_DIRECTION_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignalDirection.UNRECOGNIZED;
  }
}

export function signalDirectionToJSON(object: SignalDirection): string {
  switch (object) {
    case SignalDirection.SIGNAL_DIRECTION_UNSPECIFIED:
      return "SIGNAL_DIRECTION_UNSPECIFIED";
    case SignalDirection.SIGNAL_DIRECTION_BUY:
      return "SIGNAL_DIRECTION_BUY";
    case SignalDirection.SIGNAL_DIRECTION_SELL:
      return "SIGNAL_DIRECTION_SELL";
    case SignalDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Статус сигнала. */
export enum SignalState {
  /** SIGNAL_STATE_UNSPECIFIED - Не определен. */
  SIGNAL_STATE_UNSPECIFIED = 0,
  /** SIGNAL_STATE_ACTIVE - Активный сигнал. */
  SIGNAL_STATE_ACTIVE = 1,
  /** SIGNAL_STATE_CLOSED - Закрытый сигнал. */
  SIGNAL_STATE_CLOSED = 2,
  /** SIGNAL_STATE_ALL - Все состояния. */
  SIGNAL_STATE_ALL = 3,
  UNRECOGNIZED = -1,
}

export function signalStateFromJSON(object: any): SignalState {
  switch (object) {
    case 0:
    case "SIGNAL_STATE_UNSPECIFIED":
      return SignalState.SIGNAL_STATE_UNSPECIFIED;
    case 1:
    case "SIGNAL_STATE_ACTIVE":
      return SignalState.SIGNAL_STATE_ACTIVE;
    case 2:
    case "SIGNAL_STATE_CLOSED":
      return SignalState.SIGNAL_STATE_CLOSED;
    case 3:
    case "SIGNAL_STATE_ALL":
      return SignalState.SIGNAL_STATE_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignalState.UNRECOGNIZED;
  }
}

export function signalStateToJSON(object: SignalState): string {
  switch (object) {
    case SignalState.SIGNAL_STATE_UNSPECIFIED:
      return "SIGNAL_STATE_UNSPECIFIED";
    case SignalState.SIGNAL_STATE_ACTIVE:
      return "SIGNAL_STATE_ACTIVE";
    case SignalState.SIGNAL_STATE_CLOSED:
      return "SIGNAL_STATE_CLOSED";
    case SignalState.SIGNAL_STATE_ALL:
      return "SIGNAL_STATE_ALL";
    case SignalState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос стратегий. */
export interface GetStrategiesRequest {
  /** Идентификатор стратегии */
  strategyId?: string | undefined;
}

/** Стратегии */
export interface GetStrategiesResponse {
  strategies: Strategy[];
}

/** Стратегия */
export interface Strategy {
  /** Идентификатор стратегии. */
  strategyId: string;
  /** Название стратегии. */
  strategyName: string;
  /** Описание стратегии. */
  strategyDescription?: string | undefined;
  /** Ссылка на страницу с описанием стратегии. */
  strategyUrl?: string | undefined;
  /** Тип стратегии. */
  strategyType: StrategyType;
  /** Количество активных сигналов. */
  activeSignals: number;
  /** Общее количество сигналов. */
  totalSignals: number;
  /** Среднее время нахождения сигнала в позиции. */
  timeInPosition: number;
  /** Средняя доходность сигнала в стратегии. */
  averageSignalYield?: Quotation;
  /** Средняя доходность сигналов в стратегии за последний год. */
  averageSignalYieldYear?: Quotation;
  /** Доходность стратегии. */
  yield?: Quotation;
  /** Доходность стратегии за последний год. */
  yieldYear?: Quotation;
}

/** Запрос сигналов. */
export interface GetSignalsRequest {
  /** Идентификатор сигнала. */
  signalId?: string | undefined;
  /** Идентификатор стратегии. */
  strategyId?: string | undefined;
  /** Тип стратегии. */
  strategyType?: StrategyType | undefined;
  /** Идентификатор бумаги */
  instrumentUid?: string | undefined;
  /** Дата начала запрашиваемого интервала в часовом поясе UTC. */
  from?: Date | undefined;
  /** Дата конца запрашиваемого интервала  в часовом поясе UTC. */
  to?: Date | undefined;
  /** Направление сигнала. */
  direction?: SignalDirection | undefined;
  /** Состояние сигнала. */
  active?: SignalState | undefined;
  /** Настройки пагинации. */
  paging?: Page | undefined;
}

/** Сигналы. */
export interface GetSignalsResponse {
  /** Массив сигналов. */
  signals: Signal[];
  /** Данные по пагинации. */
  paging?: PageResponse;
}

/** Сигнал. */
export interface Signal {
  /** Идентификатор сигнала. */
  signalId: string;
  /** Идентификатор стратегии. */
  strategyId: string;
  /** Название стратегии. */
  strategyName: string;
  /** Идентификатор бумаги. */
  instrumentUid: string;
  /** Дата и время создания сигнала  в часовом поясе UTC. */
  createDt?: Date;
  /** Направление сигнала */
  direction: SignalDirection;
  /** Цена бумаги на момент формирования сигнала */
  initialPrice?: Quotation;
  /** Дополнительная информация о сигнале. */
  info?: string | undefined;
  /** Название сигнала. */
  name: string;
  /** Целевая цена. */
  targetPrice?: Quotation;
  /** Дата и время дедлайна сигнала в часовом поясе UTC. */
  endDt?: Date;
  /** Вероятность сигнала. */
  probability?: number | undefined;
  /** Порог закрытия сигнала по стоплосс. */
  stoploss?: Quotation | undefined;
  /** Цена закрытия сигнала. */
  closePrice?: Quotation | undefined;
  /** Дата и время закрытия сигнала в часовом поясе UTC. */
  closeDt?: Date | undefined;
}

function createBaseGetStrategiesRequest(): GetStrategiesRequest {
  return { strategyId: undefined };
}

export const GetStrategiesRequest = {
  encode(
    message: GetStrategiesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.strategyId !== undefined) {
      writer.uint32(10).string(message.strategyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStrategiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStrategiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strategyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStrategiesRequest {
    return {
      strategyId: isSet(object.strategyId)
        ? String(object.strategyId)
        : undefined,
    };
  },

  toJSON(message: GetStrategiesRequest): unknown {
    const obj: any = {};
    message.strategyId !== undefined && (obj.strategyId = message.strategyId);
    return obj;
  },
};

function createBaseGetStrategiesResponse(): GetStrategiesResponse {
  return { strategies: [] };
}

export const GetStrategiesResponse = {
  encode(
    message: GetStrategiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.strategies) {
      Strategy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStrategiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStrategiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strategies.push(Strategy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStrategiesResponse {
    return {
      strategies: Array.isArray(object?.strategies)
        ? object.strategies.map((e: any) => Strategy.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetStrategiesResponse): unknown {
    const obj: any = {};
    if (message.strategies) {
      obj.strategies = message.strategies.map((e) =>
        e ? Strategy.toJSON(e) : undefined
      );
    } else {
      obj.strategies = [];
    }
    return obj;
  },
};

function createBaseStrategy(): Strategy {
  return {
    strategyId: "",
    strategyName: "",
    strategyDescription: undefined,
    strategyUrl: undefined,
    strategyType: 0,
    activeSignals: 0,
    totalSignals: 0,
    timeInPosition: 0,
    averageSignalYield: undefined,
    averageSignalYieldYear: undefined,
    yield: undefined,
    yieldYear: undefined,
  };
}

export const Strategy = {
  encode(
    message: Strategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.strategyId !== "") {
      writer.uint32(10).string(message.strategyId);
    }
    if (message.strategyName !== "") {
      writer.uint32(18).string(message.strategyName);
    }
    if (message.strategyDescription !== undefined) {
      writer.uint32(26).string(message.strategyDescription);
    }
    if (message.strategyUrl !== undefined) {
      writer.uint32(34).string(message.strategyUrl);
    }
    if (message.strategyType !== 0) {
      writer.uint32(40).int32(message.strategyType);
    }
    if (message.activeSignals !== 0) {
      writer.uint32(48).int32(message.activeSignals);
    }
    if (message.totalSignals !== 0) {
      writer.uint32(56).int32(message.totalSignals);
    }
    if (message.timeInPosition !== 0) {
      writer.uint32(64).int64(message.timeInPosition);
    }
    if (message.averageSignalYield !== undefined) {
      Quotation.encode(
        message.averageSignalYield,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.averageSignalYieldYear !== undefined) {
      Quotation.encode(
        message.averageSignalYieldYear,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.yield !== undefined) {
      Quotation.encode(message.yield, writer.uint32(90).fork()).ldelim();
    }
    if (message.yieldYear !== undefined) {
      Quotation.encode(message.yieldYear, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Strategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strategyId = reader.string();
          break;
        case 2:
          message.strategyName = reader.string();
          break;
        case 3:
          message.strategyDescription = reader.string();
          break;
        case 4:
          message.strategyUrl = reader.string();
          break;
        case 5:
          message.strategyType = reader.int32() as any;
          break;
        case 6:
          message.activeSignals = reader.int32();
          break;
        case 7:
          message.totalSignals = reader.int32();
          break;
        case 8:
          message.timeInPosition = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.averageSignalYield = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.averageSignalYieldYear = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.yield = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.yieldYear = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Strategy {
    return {
      strategyId: isSet(object.strategyId) ? String(object.strategyId) : "",
      strategyName: isSet(object.strategyName)
        ? String(object.strategyName)
        : "",
      strategyDescription: isSet(object.strategyDescription)
        ? String(object.strategyDescription)
        : undefined,
      strategyUrl: isSet(object.strategyUrl)
        ? String(object.strategyUrl)
        : undefined,
      strategyType: isSet(object.strategyType)
        ? strategyTypeFromJSON(object.strategyType)
        : 0,
      activeSignals: isSet(object.activeSignals)
        ? Number(object.activeSignals)
        : 0,
      totalSignals: isSet(object.totalSignals)
        ? Number(object.totalSignals)
        : 0,
      timeInPosition: isSet(object.timeInPosition)
        ? Number(object.timeInPosition)
        : 0,
      averageSignalYield: isSet(object.averageSignalYield)
        ? Quotation.fromJSON(object.averageSignalYield)
        : undefined,
      averageSignalYieldYear: isSet(object.averageSignalYieldYear)
        ? Quotation.fromJSON(object.averageSignalYieldYear)
        : undefined,
      yield: isSet(object.yield) ? Quotation.fromJSON(object.yield) : undefined,
      yieldYear: isSet(object.yieldYear)
        ? Quotation.fromJSON(object.yieldYear)
        : undefined,
    };
  },

  toJSON(message: Strategy): unknown {
    const obj: any = {};
    message.strategyId !== undefined && (obj.strategyId = message.strategyId);
    message.strategyName !== undefined &&
      (obj.strategyName = message.strategyName);
    message.strategyDescription !== undefined &&
      (obj.strategyDescription = message.strategyDescription);
    message.strategyUrl !== undefined &&
      (obj.strategyUrl = message.strategyUrl);
    message.strategyType !== undefined &&
      (obj.strategyType = strategyTypeToJSON(message.strategyType));
    message.activeSignals !== undefined &&
      (obj.activeSignals = Math.round(message.activeSignals));
    message.totalSignals !== undefined &&
      (obj.totalSignals = Math.round(message.totalSignals));
    message.timeInPosition !== undefined &&
      (obj.timeInPosition = Math.round(message.timeInPosition));
    message.averageSignalYield !== undefined &&
      (obj.averageSignalYield = message.averageSignalYield
        ? Quotation.toJSON(message.averageSignalYield)
        : undefined);
    message.averageSignalYieldYear !== undefined &&
      (obj.averageSignalYieldYear = message.averageSignalYieldYear
        ? Quotation.toJSON(message.averageSignalYieldYear)
        : undefined);
    message.yield !== undefined &&
      (obj.yield = message.yield ? Quotation.toJSON(message.yield) : undefined);
    message.yieldYear !== undefined &&
      (obj.yieldYear = message.yieldYear
        ? Quotation.toJSON(message.yieldYear)
        : undefined);
    return obj;
  },
};

function createBaseGetSignalsRequest(): GetSignalsRequest {
  return {
    signalId: undefined,
    strategyId: undefined,
    strategyType: undefined,
    instrumentUid: undefined,
    from: undefined,
    to: undefined,
    direction: undefined,
    active: undefined,
    paging: undefined,
  };
}

export const GetSignalsRequest = {
  encode(
    message: GetSignalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signalId !== undefined) {
      writer.uint32(10).string(message.signalId);
    }
    if (message.strategyId !== undefined) {
      writer.uint32(18).string(message.strategyId);
    }
    if (message.strategyType !== undefined) {
      writer.uint32(24).int32(message.strategyType);
    }
    if (message.instrumentUid !== undefined) {
      writer.uint32(34).string(message.instrumentUid);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.direction !== undefined) {
      writer.uint32(56).int32(message.direction);
    }
    if (message.active !== undefined) {
      writer.uint32(64).int32(message.active);
    }
    if (message.paging !== undefined) {
      Page.encode(message.paging, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSignalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSignalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalId = reader.string();
          break;
        case 2:
          message.strategyId = reader.string();
          break;
        case 3:
          message.strategyType = reader.int32() as any;
          break;
        case 4:
          message.instrumentUid = reader.string();
          break;
        case 5:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.direction = reader.int32() as any;
          break;
        case 8:
          message.active = reader.int32() as any;
          break;
        case 9:
          message.paging = Page.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSignalsRequest {
    return {
      signalId: isSet(object.signalId) ? String(object.signalId) : undefined,
      strategyId: isSet(object.strategyId)
        ? String(object.strategyId)
        : undefined,
      strategyType: isSet(object.strategyType)
        ? strategyTypeFromJSON(object.strategyType)
        : undefined,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : undefined,
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      direction: isSet(object.direction)
        ? signalDirectionFromJSON(object.direction)
        : undefined,
      active: isSet(object.active)
        ? signalStateFromJSON(object.active)
        : undefined,
      paging: isSet(object.paging) ? Page.fromJSON(object.paging) : undefined,
    };
  },

  toJSON(message: GetSignalsRequest): unknown {
    const obj: any = {};
    message.signalId !== undefined && (obj.signalId = message.signalId);
    message.strategyId !== undefined && (obj.strategyId = message.strategyId);
    message.strategyType !== undefined &&
      (obj.strategyType =
        message.strategyType !== undefined
          ? strategyTypeToJSON(message.strategyType)
          : undefined);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    message.direction !== undefined &&
      (obj.direction =
        message.direction !== undefined
          ? signalDirectionToJSON(message.direction)
          : undefined);
    message.active !== undefined &&
      (obj.active =
        message.active !== undefined
          ? signalStateToJSON(message.active)
          : undefined);
    message.paging !== undefined &&
      (obj.paging = message.paging ? Page.toJSON(message.paging) : undefined);
    return obj;
  },
};

function createBaseGetSignalsResponse(): GetSignalsResponse {
  return { signals: [], paging: undefined };
}

export const GetSignalsResponse = {
  encode(
    message: GetSignalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.signals) {
      Signal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.paging !== undefined) {
      PageResponse.encode(message.paging, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSignalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSignalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signals.push(Signal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.paging = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSignalsResponse {
    return {
      signals: Array.isArray(object?.signals)
        ? object.signals.map((e: any) => Signal.fromJSON(e))
        : [],
      paging: isSet(object.paging)
        ? PageResponse.fromJSON(object.paging)
        : undefined,
    };
  },

  toJSON(message: GetSignalsResponse): unknown {
    const obj: any = {};
    if (message.signals) {
      obj.signals = message.signals.map((e) =>
        e ? Signal.toJSON(e) : undefined
      );
    } else {
      obj.signals = [];
    }
    message.paging !== undefined &&
      (obj.paging = message.paging
        ? PageResponse.toJSON(message.paging)
        : undefined);
    return obj;
  },
};

function createBaseSignal(): Signal {
  return {
    signalId: "",
    strategyId: "",
    strategyName: "",
    instrumentUid: "",
    createDt: undefined,
    direction: 0,
    initialPrice: undefined,
    info: undefined,
    name: "",
    targetPrice: undefined,
    endDt: undefined,
    probability: undefined,
    stoploss: undefined,
    closePrice: undefined,
    closeDt: undefined,
  };
}

export const Signal = {
  encode(
    message: Signal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signalId !== "") {
      writer.uint32(10).string(message.signalId);
    }
    if (message.strategyId !== "") {
      writer.uint32(18).string(message.strategyId);
    }
    if (message.strategyName !== "") {
      writer.uint32(26).string(message.strategyName);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(34).string(message.instrumentUid);
    }
    if (message.createDt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createDt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(48).int32(message.direction);
    }
    if (message.initialPrice !== undefined) {
      Quotation.encode(message.initialPrice, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== undefined) {
      writer.uint32(66).string(message.info);
    }
    if (message.name !== "") {
      writer.uint32(74).string(message.name);
    }
    if (message.targetPrice !== undefined) {
      Quotation.encode(message.targetPrice, writer.uint32(82).fork()).ldelim();
    }
    if (message.endDt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.probability !== undefined) {
      writer.uint32(96).int32(message.probability);
    }
    if (message.stoploss !== undefined) {
      Quotation.encode(message.stoploss, writer.uint32(106).fork()).ldelim();
    }
    if (message.closePrice !== undefined) {
      Quotation.encode(message.closePrice, writer.uint32(114).fork()).ldelim();
    }
    if (message.closeDt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.closeDt),
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Signal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalId = reader.string();
          break;
        case 2:
          message.strategyId = reader.string();
          break;
        case 3:
          message.strategyName = reader.string();
          break;
        case 4:
          message.instrumentUid = reader.string();
          break;
        case 5:
          message.createDt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.direction = reader.int32() as any;
          break;
        case 7:
          message.initialPrice = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.targetPrice = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.endDt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.probability = reader.int32();
          break;
        case 13:
          message.stoploss = Quotation.decode(reader, reader.uint32());
          break;
        case 14:
          message.closePrice = Quotation.decode(reader, reader.uint32());
          break;
        case 15:
          message.closeDt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Signal {
    return {
      signalId: isSet(object.signalId) ? String(object.signalId) : "",
      strategyId: isSet(object.strategyId) ? String(object.strategyId) : "",
      strategyName: isSet(object.strategyName)
        ? String(object.strategyName)
        : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      createDt: isSet(object.createDt)
        ? fromJsonTimestamp(object.createDt)
        : undefined,
      direction: isSet(object.direction)
        ? signalDirectionFromJSON(object.direction)
        : 0,
      initialPrice: isSet(object.initialPrice)
        ? Quotation.fromJSON(object.initialPrice)
        : undefined,
      info: isSet(object.info) ? String(object.info) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      targetPrice: isSet(object.targetPrice)
        ? Quotation.fromJSON(object.targetPrice)
        : undefined,
      endDt: isSet(object.endDt) ? fromJsonTimestamp(object.endDt) : undefined,
      probability: isSet(object.probability)
        ? Number(object.probability)
        : undefined,
      stoploss: isSet(object.stoploss)
        ? Quotation.fromJSON(object.stoploss)
        : undefined,
      closePrice: isSet(object.closePrice)
        ? Quotation.fromJSON(object.closePrice)
        : undefined,
      closeDt: isSet(object.closeDt)
        ? fromJsonTimestamp(object.closeDt)
        : undefined,
    };
  },

  toJSON(message: Signal): unknown {
    const obj: any = {};
    message.signalId !== undefined && (obj.signalId = message.signalId);
    message.strategyId !== undefined && (obj.strategyId = message.strategyId);
    message.strategyName !== undefined &&
      (obj.strategyName = message.strategyName);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.createDt !== undefined &&
      (obj.createDt = message.createDt.toISOString());
    message.direction !== undefined &&
      (obj.direction = signalDirectionToJSON(message.direction));
    message.initialPrice !== undefined &&
      (obj.initialPrice = message.initialPrice
        ? Quotation.toJSON(message.initialPrice)
        : undefined);
    message.info !== undefined && (obj.info = message.info);
    message.name !== undefined && (obj.name = message.name);
    message.targetPrice !== undefined &&
      (obj.targetPrice = message.targetPrice
        ? Quotation.toJSON(message.targetPrice)
        : undefined);
    message.endDt !== undefined && (obj.endDt = message.endDt.toISOString());
    message.probability !== undefined &&
      (obj.probability = Math.round(message.probability));
    message.stoploss !== undefined &&
      (obj.stoploss = message.stoploss
        ? Quotation.toJSON(message.stoploss)
        : undefined);
    message.closePrice !== undefined &&
      (obj.closePrice = message.closePrice
        ? Quotation.toJSON(message.closePrice)
        : undefined);
    message.closeDt !== undefined &&
      (obj.closeDt = message.closeDt.toISOString());
    return obj;
  },
};

/** Сервис для получения технических сигналов и мнений аналитиков по инструментам */
export type SignalServiceDefinition = typeof SignalServiceDefinition;
export const SignalServiceDefinition = {
  name: "SignalService",
  fullName: "tinkoff.public.invest.api.contract.v1.SignalService",
  methods: {
    /** Запросить стратегии. */
    getStrategies: {
      name: "GetStrategies",
      requestType: GetStrategiesRequest,
      requestStream: false,
      responseType: GetStrategiesResponse,
      responseStream: false,
      options: {},
    },
    /** Запросить сигналы. */
    getSignals: {
      name: "GetSignals",
      requestType: GetSignalsRequest,
      requestStream: false,
      responseType: GetSignalsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface SignalServiceServiceImplementation<CallContextExt = {}> {
  /** Запросить стратегии. */
  getStrategies(
    request: GetStrategiesRequest,
    context: CallContext & CallContextExt
  ): Promise<GetStrategiesResponse>;
  /** Запросить сигналы. */
  getSignals(
    request: GetSignalsRequest,
    context: CallContext & CallContextExt
  ): Promise<GetSignalsResponse>;
}

export interface SignalServiceClient<CallOptionsExt = {}> {
  /** Запросить стратегии. */
  getStrategies(
    request: GetStrategiesRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetStrategiesResponse>;
  /** Запросить сигналы. */
  getSignals(
    request: GetSignalsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetSignalsResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
