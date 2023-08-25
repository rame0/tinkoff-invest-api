import _m0 from "protobufjs/minimal.js";
import { MoneyValue, SecurityTradingStatus, Quotation, InstrumentType } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Тип купонов. */
export declare enum CouponType {
    /** COUPON_TYPE_UNSPECIFIED - Неопределенное значение */
    COUPON_TYPE_UNSPECIFIED = 0,
    /** COUPON_TYPE_CONSTANT - Постоянный */
    COUPON_TYPE_CONSTANT = 1,
    /** COUPON_TYPE_FLOATING - Плавающий */
    COUPON_TYPE_FLOATING = 2,
    /** COUPON_TYPE_DISCOUNT - Дисконт */
    COUPON_TYPE_DISCOUNT = 3,
    /** COUPON_TYPE_MORTGAGE - Ипотечный */
    COUPON_TYPE_MORTGAGE = 4,
    /** COUPON_TYPE_FIX - Фиксированный */
    COUPON_TYPE_FIX = 5,
    /** COUPON_TYPE_VARIABLE - Переменный */
    COUPON_TYPE_VARIABLE = 6,
    /** COUPON_TYPE_OTHER - Прочее */
    COUPON_TYPE_OTHER = 7,
    UNRECOGNIZED = -1
}
export declare function couponTypeFromJSON(object: any): CouponType;
export declare function couponTypeToJSON(object: CouponType): string;
/** Тип опциона по направлению сделки. */
export declare enum OptionDirection {
    /** OPTION_DIRECTION_UNSPECIFIED - Тип не определен. */
    OPTION_DIRECTION_UNSPECIFIED = 0,
    /** OPTION_DIRECTION_PUT - Опцион на продажу. */
    OPTION_DIRECTION_PUT = 1,
    /** OPTION_DIRECTION_CALL - Опцион на покупку. */
    OPTION_DIRECTION_CALL = 2,
    UNRECOGNIZED = -1
}
export declare function optionDirectionFromJSON(object: any): OptionDirection;
export declare function optionDirectionToJSON(object: OptionDirection): string;
/** Тип расчетов по опциону. */
export declare enum OptionPaymentType {
    /** OPTION_PAYMENT_TYPE_UNSPECIFIED - Тип не определен. */
    OPTION_PAYMENT_TYPE_UNSPECIFIED = 0,
    /** OPTION_PAYMENT_TYPE_PREMIUM - Опционы с использованием премии в расчетах. */
    OPTION_PAYMENT_TYPE_PREMIUM = 1,
    /** OPTION_PAYMENT_TYPE_MARGINAL - Маржируемые опционы. */
    OPTION_PAYMENT_TYPE_MARGINAL = 2,
    UNRECOGNIZED = -1
}
export declare function optionPaymentTypeFromJSON(object: any): OptionPaymentType;
export declare function optionPaymentTypeToJSON(object: OptionPaymentType): string;
/** Тип опциона по стилю. */
export declare enum OptionStyle {
    /** OPTION_STYLE_UNSPECIFIED - Тип не определен. */
    OPTION_STYLE_UNSPECIFIED = 0,
    /** OPTION_STYLE_AMERICAN - Американский опцион. */
    OPTION_STYLE_AMERICAN = 1,
    /** OPTION_STYLE_EUROPEAN - Европейский опцион. */
    OPTION_STYLE_EUROPEAN = 2,
    UNRECOGNIZED = -1
}
export declare function optionStyleFromJSON(object: any): OptionStyle;
export declare function optionStyleToJSON(object: OptionStyle): string;
/** Тип опциона по способу исполнения. */
export declare enum OptionSettlementType {
    /** OPTION_EXECUTION_TYPE_UNSPECIFIED - Тип не определен. */
    OPTION_EXECUTION_TYPE_UNSPECIFIED = 0,
    /** OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY - Поставочный тип опциона. */
    OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = 1,
    /** OPTION_EXECUTION_TYPE_CASH_SETTLEMENT - Расчетный тип опциона. */
    OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = 2,
    UNRECOGNIZED = -1
}
export declare function optionSettlementTypeFromJSON(object: any): OptionSettlementType;
export declare function optionSettlementTypeToJSON(object: OptionSettlementType): string;
/** Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) */
export declare enum InstrumentIdType {
    /** INSTRUMENT_ID_UNSPECIFIED - Значение не определено. */
    INSTRUMENT_ID_UNSPECIFIED = 0,
    /** INSTRUMENT_ID_TYPE_FIGI - Figi. */
    INSTRUMENT_ID_TYPE_FIGI = 1,
    /** INSTRUMENT_ID_TYPE_TICKER - Ticker. */
    INSTRUMENT_ID_TYPE_TICKER = 2,
    /** INSTRUMENT_ID_TYPE_UID - Уникальный идентификатор. */
    INSTRUMENT_ID_TYPE_UID = 3,
    /** INSTRUMENT_ID_TYPE_POSITION_UID - Идентификатор позиции. */
    INSTRUMENT_ID_TYPE_POSITION_UID = 4,
    UNRECOGNIZED = -1
}
export declare function instrumentIdTypeFromJSON(object: any): InstrumentIdType;
export declare function instrumentIdTypeToJSON(object: InstrumentIdType): string;
/** Статус запрашиваемых инструментов. */
export declare enum InstrumentStatus {
    /** INSTRUMENT_STATUS_UNSPECIFIED - Значение не определено. */
    INSTRUMENT_STATUS_UNSPECIFIED = 0,
    /** INSTRUMENT_STATUS_BASE - Базовый список инструментов (по умолчанию). Инструменты доступные для торговли через TINKOFF INVEST API. Cейчас списки бумаг, доступных из api и других интерфейсах совпадают (за исключением внебиржевых бумаг), но в будущем возможны ситуации, когда списки инструментов будут отличаться */
    INSTRUMENT_STATUS_BASE = 1,
    /** INSTRUMENT_STATUS_ALL - Список всех инструментов. */
    INSTRUMENT_STATUS_ALL = 2,
    UNRECOGNIZED = -1
}
export declare function instrumentStatusFromJSON(object: any): InstrumentStatus;
export declare function instrumentStatusToJSON(object: InstrumentStatus): string;
/** Тип акций. */
export declare enum ShareType {
    /** SHARE_TYPE_UNSPECIFIED - Значение не определено. */
    SHARE_TYPE_UNSPECIFIED = 0,
    /** SHARE_TYPE_COMMON - Обыкновенная */
    SHARE_TYPE_COMMON = 1,
    /** SHARE_TYPE_PREFERRED - Привилегированная */
    SHARE_TYPE_PREFERRED = 2,
    /** SHARE_TYPE_ADR - Американские депозитарные расписки */
    SHARE_TYPE_ADR = 3,
    /** SHARE_TYPE_GDR - Глобальные депозитарные расписки */
    SHARE_TYPE_GDR = 4,
    /** SHARE_TYPE_MLP - Товарищество с ограниченной ответственностью */
    SHARE_TYPE_MLP = 5,
    /** SHARE_TYPE_NY_REG_SHRS - Акции из реестра Нью-Йорка */
    SHARE_TYPE_NY_REG_SHRS = 6,
    /** SHARE_TYPE_CLOSED_END_FUND - Закрытый инвестиционный фонд */
    SHARE_TYPE_CLOSED_END_FUND = 7,
    /** SHARE_TYPE_REIT - Траст недвижимости */
    SHARE_TYPE_REIT = 8,
    UNRECOGNIZED = -1
}
export declare function shareTypeFromJSON(object: any): ShareType;
export declare function shareTypeToJSON(object: ShareType): string;
/** Тип актива. */
export declare enum AssetType {
    /** ASSET_TYPE_UNSPECIFIED - Тип не определён. */
    ASSET_TYPE_UNSPECIFIED = 0,
    /** ASSET_TYPE_CURRENCY - Валюта. */
    ASSET_TYPE_CURRENCY = 1,
    /** ASSET_TYPE_COMMODITY - Товар. */
    ASSET_TYPE_COMMODITY = 2,
    /** ASSET_TYPE_INDEX - Индекс. */
    ASSET_TYPE_INDEX = 3,
    /** ASSET_TYPE_SECURITY - Ценная бумага. */
    ASSET_TYPE_SECURITY = 4,
    UNRECOGNIZED = -1
}
export declare function assetTypeFromJSON(object: any): AssetType;
export declare function assetTypeToJSON(object: AssetType): string;
/** Тип структурной ноты. */
export declare enum StructuredProductType {
    /** SP_TYPE_UNSPECIFIED - Тип не определён. */
    SP_TYPE_UNSPECIFIED = 0,
    /** SP_TYPE_DELIVERABLE - Поставочный. */
    SP_TYPE_DELIVERABLE = 1,
    /** SP_TYPE_NON_DELIVERABLE - Беспоставочный. */
    SP_TYPE_NON_DELIVERABLE = 2,
    UNRECOGNIZED = -1
}
export declare function structuredProductTypeFromJSON(object: any): StructuredProductType;
export declare function structuredProductTypeToJSON(object: StructuredProductType): string;
/** Тип действия со списком избранных инструментов. */
export declare enum EditFavoritesActionType {
    /** EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED - Тип не определён. */
    EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = 0,
    /** EDIT_FAVORITES_ACTION_TYPE_ADD - Добавить в список. */
    EDIT_FAVORITES_ACTION_TYPE_ADD = 1,
    /** EDIT_FAVORITES_ACTION_TYPE_DEL - Удалить из списка. */
    EDIT_FAVORITES_ACTION_TYPE_DEL = 2,
    UNRECOGNIZED = -1
}
export declare function editFavoritesActionTypeFromJSON(object: any): EditFavoritesActionType;
export declare function editFavoritesActionTypeToJSON(object: EditFavoritesActionType): string;
/** Реальная площадка исполнения расчётов. */
export declare enum RealExchange {
    /** REAL_EXCHANGE_UNSPECIFIED - Тип не определён. */
    REAL_EXCHANGE_UNSPECIFIED = 0,
    /** REAL_EXCHANGE_MOEX - Московская биржа. */
    REAL_EXCHANGE_MOEX = 1,
    /** REAL_EXCHANGE_RTS - Санкт-Петербургская биржа. */
    REAL_EXCHANGE_RTS = 2,
    /** REAL_EXCHANGE_OTC - Внебиржевой инструмент. */
    REAL_EXCHANGE_OTC = 3,
    UNRECOGNIZED = -1
}
export declare function realExchangeFromJSON(object: any): RealExchange;
export declare function realExchangeToJSON(object: RealExchange): string;
/** Уровень риска облигации. */
export declare enum RiskLevel {
    /** RISK_LEVEL_HIGH - Высокий уровень риска */
    RISK_LEVEL_HIGH = 0,
    /** RISK_LEVEL_MODERATE - Средний уровень риска */
    RISK_LEVEL_MODERATE = 1,
    /** RISK_LEVEL_LOW - Низкий уровень риска */
    RISK_LEVEL_LOW = 2,
    UNRECOGNIZED = -1
}
export declare function riskLevelFromJSON(object: any): RiskLevel;
export declare function riskLevelToJSON(object: RiskLevel): string;
/** Запрос расписания торгов. */
export interface TradingSchedulesRequest {
    /** Наименование биржи или расчетного календаря. </br>Если не передаётся, возвращается информация по всем доступным торговым площадкам. */
    exchange: string;
    /** Начало периода по часовому поясу UTC. */
    from?: Date;
    /** Окончание периода по часовому поясу UTC. */
    to?: Date;
}
/** Список торговых площадок. */
export interface TradingSchedulesResponse {
    /** Список торговых площадок и режимов торгов. */
    exchanges: TradingSchedule[];
}
/** Данные по торговой площадке. */
export interface TradingSchedule {
    /** Наименование торговой площадки. */
    exchange: string;
    /** Массив с торговыми и неторговыми днями. */
    days: TradingDay[];
}
/** Информация о времени торгов. */
export interface TradingDay {
    /** Дата. */
    date?: Date;
    /** Признак торгового дня на бирже. */
    isTradingDay: boolean;
    /** Время начала торгов по часовому поясу UTC. */
    startTime?: Date;
    /** Время окончания торгов по часовому поясу UTC. */
    endTime?: Date;
    /** Время начала аукциона открытия в часовом поясе UTC. */
    openingAuctionStartTime?: Date;
    /** Время окончания аукциона закрытия в часовом поясе UTC. */
    closingAuctionEndTime?: Date;
    /** Время начала аукциона открытия вечерней сессии в часовом поясе UTC. */
    eveningOpeningAuctionStartTime?: Date;
    /** Время начала вечерней сессии в часовом поясе UTC. */
    eveningStartTime?: Date;
    /** Время окончания вечерней сессии в часовом поясе UTC. */
    eveningEndTime?: Date;
    /** Время начала основного клиринга в часовом поясе UTC. */
    clearingStartTime?: Date;
    /** Время окончания основного клиринга в часовом поясе UTC. */
    clearingEndTime?: Date;
    /** Время начала премаркета в часовом поясе UTC. */
    premarketStartTime?: Date;
    /** Время окончания премаркета в часовом поясе UTC. */
    premarketEndTime?: Date;
    /** Время начала аукциона закрытия в часовом поясе UTC. */
    closingAuctionStartTime?: Date;
    /** Время окончания аукциона открытия в часовом поясе UTC. */
    openingAuctionEndTime?: Date;
}
/** Запрос получения инструмента по идентификатору. */
export interface InstrumentRequest {
    /** Тип идентификатора инструмента. Возможные значения: figi, ticker. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) */
    idType: InstrumentIdType;
    /** Идентификатор class_code. Обязателен при id_type = ticker. */
    classCode: string;
    /** Идентификатор запрашиваемого инструмента. */
    id: string;
}
/** Запрос получения инструментов. */
export interface InstrumentsRequest {
    /** Статус запрашиваемых инструментов. Возможные значения: [InstrumentStatus](#instrumentstatus) */
    instrumentStatus: InstrumentStatus;
}
/** Параметры фильтрации опционов */
export interface FilterOptionsRequest {
    /** Идентификатор базового актива опциона.  Обязательный параметр. */
    basicAssetUid: string;
    /** Идентификатор позиции базового актива опциона */
    basicAssetPositionUid: string;
}
/** Информация об облигации. */
export interface BondResponse {
    /** Информация об облигации. */
    instrument?: Bond;
}
/** Список облигаций. */
export interface BondsResponse {
    /** Массив облигаций. */
    instruments: Bond[];
}
/** Запрос купонов по облигации. */
export interface GetBondCouponsRequest {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Начало запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) */
    from?: Date;
    /** Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) */
    to?: Date;
}
/** Купоны по облигации. */
export interface GetBondCouponsResponse {
    events: Coupon[];
}
/** Объект передачи информации о купоне облигации. */
export interface Coupon {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Дата выплаты купона. */
    couponDate?: Date;
    /** Номер купона. */
    couponNumber: number;
    /** (Опционально) Дата фиксации реестра для выплаты купона. */
    fixDate?: Date;
    /** Выплата на одну облигацию. */
    payOneBond?: MoneyValue;
    /** Тип купона. */
    couponType: CouponType;
    /** Начало купонного периода. */
    couponStartDate?: Date;
    /** Окончание купонного периода. */
    couponEndDate?: Date;
    /** Купонный период в днях. */
    couponPeriod: number;
}
/** Данные по валюте. */
export interface CurrencyResponse {
    /** Информация о валюте. */
    instrument?: Currency;
}
/** Данные по валютам. */
export interface CurrenciesResponse {
    /** Массив валют. */
    instruments: Currency[];
}
/** Данные по фонду. */
export interface EtfResponse {
    /** Информация о фонде. */
    instrument?: Etf;
}
/** Данные по фондам. */
export interface EtfsResponse {
    /** Массив фондов. */
    instruments: Etf[];
}
/** Данные по фьючерсу. */
export interface FutureResponse {
    /** Информация о фьючерсу. */
    instrument?: Future;
}
/** Данные по фьючерсам. */
export interface FuturesResponse {
    /** Массив фьючерсов. */
    instruments: Future[];
}
/** Данные по опциону. */
export interface OptionResponse {
    /** Информация по опциону. */
    instrument?: Option;
}
/** Данные по опционам. */
export interface OptionsResponse {
    /** Массив данных по опциону. */
    instruments: Option[];
}
/** Опцион. */
export interface Option {
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Уникальный идентификатор позиции. */
    positionUid: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код. */
    classCode: string;
    /** Уникальный идентификатор позиции основного инструмента. */
    basicAssetPositionUid: string;
    /** Текущий режим торгов инструмента. */
    tradingStatus: SecurityTradingStatus;
    /** Реальная площадка исполнения расчётов (биржа). Допустимые значения: [REAL_EXCHANGE_MOEX, REAL_EXCHANGE_RTS] */
    realExchange: RealExchange;
    /** Направление опциона. */
    direction: OptionDirection;
    /** Тип расчетов по опциону. */
    paymentType: OptionPaymentType;
    /** Стиль опциона. */
    style: OptionStyle;
    /** Способ исполнения опциона. */
    settlementType: OptionSettlementType;
    /** Название инструмента. */
    name: string;
    /** Валюта. */
    currency: string;
    /** Валюта, в которой оценивается контракт. */
    settlementCurrency: string;
    /** Тип актива. */
    assetType: string;
    /** Основной актив. */
    basicAsset: string;
    /** Tорговая площадка (секция биржи). */
    exchange: string;
    /** Код страны рисков. */
    countryOfRisk: string;
    /** Наименование страны рисков. */
    countryOfRiskName: string;
    /** Сектор экономики. */
    sector: string;
    /** Количество бумаг в лоте. */
    lot: number;
    /** Размер основного актива. */
    basicAssetSize?: Quotation;
    /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    klong?: Quotation;
    /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    kshort?: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт.  Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт.  Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshortMin?: Quotation;
    /** Минимальный шаг цены. */
    minPriceIncrement?: Quotation;
    /** Цена страйка. */
    strikePrice?: MoneyValue;
    /** Дата истечения срока в формате UTC. */
    expirationDate?: Date;
    /** Дата начала обращения контракта в формате UTC. */
    firstTradeDate?: Date;
    /** Дата исполнения в формате UTC. */
    lastTradeDate?: Date;
    /** Дата первой минутной свечи в формате UTC. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи в формате UTC. */
    first1dayCandleDate?: Date;
    /** Признак доступности для операций шорт. */
    shortEnabledFlag: boolean;
    /** Возможность покупки/продажи на ИИС. */
    forIisFlag: boolean;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Признак доступности для покупки. */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи. */
    sellAvailableFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным. */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС. */
    blockedTcaFlag: boolean;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
}
/** Данные по акции. */
export interface ShareResponse {
    /** Информация об акции. */
    instrument?: Share;
}
/** Данные по акциям. */
export interface SharesResponse {
    /** Массив акций. */
    instruments: Share[];
}
/** Объект передачи информации об облигации. */
export interface Bond {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код (секция торгов). */
    classCode: string;
    /** Isin-идентификатор инструмента. */
    isin: string;
    /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
    lot: number;
    /** Валюта расчётов. */
    currency: string;
    /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    klong?: Quotation;
    /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    kshort?: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshortMin?: Quotation;
    /** Признак доступности для операций в шорт. */
    shortEnabledFlag: boolean;
    /** Название инструмента. */
    name: string;
    /** Tорговая площадка (секция биржи). */
    exchange: string;
    /** Количество выплат по купонам в год. */
    couponQuantityPerYear: number;
    /** Дата погашения облигации в часовом поясе UTC. */
    maturityDate?: Date;
    /** Номинал облигации. */
    nominal?: MoneyValue;
    /** Первоначальный номинал облигации. */
    initialNominal?: MoneyValue;
    /** Дата выпуска облигации в часовом поясе UTC. */
    stateRegDate?: Date;
    /** Дата размещения в часовом поясе UTC. */
    placementDate?: Date;
    /** Цена размещения. */
    placementPrice?: MoneyValue;
    /** Значение НКД (накопленного купонного дохода) на дату. */
    aciValue?: MoneyValue;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRiskName: string;
    /** Сектор экономики. */
    sector: string;
    /** Форма выпуска. Возможные значения: </br>**documentary** — документарная; </br>**non_documentary** — бездокументарная. */
    issueKind: string;
    /** Размер выпуска. */
    issueSize: number;
    /** Плановый размер выпуска. */
    issueSizePlan: number;
    /** Текущий режим торгов инструмента. */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Признак доступности для покупки. */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи. */
    sellAvailableFlag: boolean;
    /** Признак облигации с плавающим купоном. */
    floatingCouponFlag: boolean;
    /** Признак бессрочной облигации. */
    perpetualFlag: boolean;
    /** Признак облигации с амортизацией долга. */
    amortizationFlag: boolean;
    /** Шаг цены. */
    minPriceIncrement?: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Реальная площадка исполнения расчётов. (биржа) */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента. */
    positionUid: string;
    /** Признак доступности для ИИС. */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Признак субординированной облигации. */
    subordinatedFlag: boolean;
    /** Флаг достаточной ликвидности */
    liquidityFlag: boolean;
    /** Дата первой минутной свечи. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи. */
    first1dayCandleDate?: Date;
    /** Уровень риска. */
    riskLevel: RiskLevel;
}
/** Объект передачи информации о валюте. */
export interface Currency {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код (секция торгов). */
    classCode: string;
    /** Isin-идентификатор инструмента. */
    isin: string;
    /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
    lot: number;
    /** Валюта расчётов. */
    currency: string;
    /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    klong?: Quotation;
    /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    kshort?: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshortMin?: Quotation;
    /** Признак доступности для операций в шорт. */
    shortEnabledFlag: boolean;
    /** Название инструмента. */
    name: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /** Номинал. */
    nominal?: MoneyValue;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRiskName: string;
    /** Текущий режим торгов инструмента. */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Признак доступности для покупки. */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи. */
    sellAvailableFlag: boolean;
    /** Строковый ISO-код валюты. */
    isoCurrencyName: string;
    /** Шаг цены. */
    minPriceIncrement?: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа). */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента. */
    positionUid: string;
    /** Признак доступности для ИИС. */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным. */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС. */
    blockedTcaFlag: boolean;
    /** Дата первой минутной свечи. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи. */
    first1dayCandleDate?: Date;
}
/** Объект передачи информации об инвестиционном фонде. */
export interface Etf {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код (секция торгов). */
    classCode: string;
    /** Isin-идентификатор инструмента. */
    isin: string;
    /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
    lot: number;
    /** Валюта расчётов. */
    currency: string;
    /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    klong?: Quotation;
    /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    kshort?: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshortMin?: Quotation;
    /** Признак доступности для операций в шорт. */
    shortEnabledFlag: boolean;
    /** Название инструмента. */
    name: string;
    /** Tорговая площадка (секция биржи). */
    exchange: string;
    /** Размер фиксированной комиссии фонда. */
    fixedCommission?: Quotation;
    /** Возможные значения: </br>**equity** — акции;</br>**fixed_income** — облигации;</br>**mixed_allocation** — смешанный;</br>**money_market** — денежный рынок;</br>**real_estate** — недвижимость;</br>**commodity** — товары;</br>**specialty** — специальный;</br>**private_equity** — private equity;</br>**alternative_investment** — альтернативные инвестиции. */
    focusType: string;
    /** Дата выпуска в часовом поясе UTC. */
    releasedDate?: Date;
    /** Количество акций фонда в обращении. */
    numShares?: Quotation;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRiskName: string;
    /** Сектор экономики. */
    sector: string;
    /** Частота ребалансировки. */
    rebalancingFreq: string;
    /** Текущий режим торгов инструмента. */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Признак доступности для покупки. */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи. */
    sellAvailableFlag: boolean;
    /** Шаг цены. */
    minPriceIncrement?: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа). */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента. */
    positionUid: string;
    /** Признак доступности для ИИС. */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным. */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС. */
    blockedTcaFlag: boolean;
    /** Флаг достаточной ликвидности */
    liquidityFlag: boolean;
    /** Дата первой минутной свечи. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи. */
    first1dayCandleDate?: Date;
}
/** Объект передачи информации о фьючерсе. */
export interface Future {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код (секция торгов). */
    classCode: string;
    /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
    lot: number;
    /** Валюта расчётов. */
    currency: string;
    /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    klong?: Quotation;
    /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    kshort?: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshortMin?: Quotation;
    /** Признак доступности для операций шорт. */
    shortEnabledFlag: boolean;
    /** Название инструмента. */
    name: string;
    /** Tорговая площадка (секция биржи). */
    exchange: string;
    /** Дата начала обращения контракта в часовом поясе UTC. */
    firstTradeDate?: Date;
    /** Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом. */
    lastTradeDate?: Date;
    /** Тип фьючерса. Возможные значения: </br>**physical_delivery** — физические поставки; </br>**cash_settlement** — денежный эквивалент. */
    futuresType: string;
    /** Тип актива. Возможные значения: </br>**commodity** — товар; </br>**currency** — валюта; </br>**security** — ценная бумага; </br>**index** — индекс. */
    assetType: string;
    /** Основной актив. */
    basicAsset: string;
    /** Размер основного актива. */
    basicAssetSize?: Quotation;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRiskName: string;
    /** Сектор экономики. */
    sector: string;
    /** Дата истечения срока в часов поясе UTC. */
    expirationDate?: Date;
    /** Текущий режим торгов инструмента. */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Признак доступности для покупки. */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи. */
    sellAvailableFlag: boolean;
    /** Шаг цены. */
    minPriceIncrement?: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа). */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента. */
    positionUid: string;
    /** Уникальный идентификатор позиции основного инструмента. */
    basicAssetPositionUid: string;
    /** Признак доступности для ИИС. */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным. */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС. */
    blockedTcaFlag: boolean;
    /** Дата первой минутной свечи. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи. */
    first1dayCandleDate?: Date;
}
/** Объект передачи информации об акции. */
export interface Share {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код (секция торгов). */
    classCode: string;
    /** Isin-идентификатор инструмента. */
    isin: string;
    /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
    lot: number;
    /** Валюта расчётов. */
    currency: string;
    /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    klong?: Quotation;
    /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    kshort?: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshortMin?: Quotation;
    /** Признак доступности для операций в шорт. */
    shortEnabledFlag: boolean;
    /** Название инструмента. */
    name: string;
    /** Tорговая площадка (секция биржи). */
    exchange: string;
    /** Дата IPO акции в часовом поясе UTC. */
    ipoDate?: Date;
    /** Размер выпуска. */
    issueSize: number;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRiskName: string;
    /** Сектор экономики. */
    sector: string;
    /** Плановый размер выпуска. */
    issueSizePlan: number;
    /** Номинал. */
    nominal?: MoneyValue;
    /** Текущий режим торгов инструмента. */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Признак доступности для покупки. */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи. */
    sellAvailableFlag: boolean;
    /** Признак наличия дивидендной доходности. */
    divYieldFlag: boolean;
    /** Тип акции. Возможные значения: [ShareType](https://tinkoff.github.io/investAPI/instruments#sharetype) */
    shareType: ShareType;
    /** Шаг цены. */
    minPriceIncrement?: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа). */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента. */
    positionUid: string;
    /** Признак доступности для ИИС. */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Флаг достаточной ликвидности */
    liquidityFlag: boolean;
    /** Дата первой минутной свечи. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи. */
    first1dayCandleDate?: Date;
}
/** Запрос НКД по облигации */
export interface GetAccruedInterestsRequest {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Начало запрашиваемого периода в часовом поясе UTC. */
    from?: Date;
    /** Окончание запрашиваемого периода в часовом поясе UTC. */
    to?: Date;
}
/** НКД облигации */
export interface GetAccruedInterestsResponse {
    /** Массив операций начисления купонов. */
    accruedInterests: AccruedInterest[];
}
/** Операция начисления купонов. */
export interface AccruedInterest {
    /** Дата и время выплаты в часовом поясе UTC. */
    date?: Date;
    /** Величина выплаты. */
    value?: Quotation;
    /** Величина выплаты в процентах от номинала. */
    valuePercent?: Quotation;
    /** Номинал облигации. */
    nominal?: Quotation;
}
/** Запрос информации о фьючерсе */
export interface GetFuturesMarginRequest {
    /** Идентификатор инструмента. */
    figi: string;
}
/** Данные по фьючерсу */
export interface GetFuturesMarginResponse {
    /** Гарантийное обеспечение при покупке. */
    initialMarginOnBuy?: MoneyValue;
    /** Гарантийное обеспечение при продаже. */
    initialMarginOnSell?: MoneyValue;
    /** Шаг цены. */
    minPriceIncrement?: Quotation;
    /** Стоимость шага цены. */
    minPriceIncrementAmount?: Quotation;
}
/** Данные по инструменту. */
export interface InstrumentResponse {
    /** Основная информация об инструменте. */
    instrument?: Instrument;
}
/** Объект передачи основной информации об инструменте. */
export interface Instrument {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код инструмента. */
    classCode: string;
    /** Isin-идентификатор инструмента. */
    isin: string;
    /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
    lot: number;
    /** Валюта расчётов. */
    currency: string;
    /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    klong?: Quotation;
    /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
    kshort?: Quotation;
    /** ССтавка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
    dshortMin?: Quotation;
    /** Признак доступности для операций в шорт. */
    shortEnabledFlag: boolean;
    /** Название инструмента. */
    name: string;
    /** Tорговая площадка (секция биржи). */
    exchange: string;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
    countryOfRiskName: string;
    /** Тип инструмента. */
    instrumentType: string;
    /** Текущий режим торгов инструмента. */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Признак доступности для покупки. */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи. */
    sellAvailableFlag: boolean;
    /** Шаг цены. */
    minPriceIncrement?: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа). */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента. */
    positionUid: string;
    /** Признак доступности для ИИС. */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Тип инструмента. */
    instrumentKind: InstrumentType;
    /** Дата первой минутной свечи. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи. */
    first1dayCandleDate?: Date;
}
/** Запрос дивидендов. */
export interface GetDividendsRequest {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Начало запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). */
    from?: Date;
    /** Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). */
    to?: Date;
}
/** Дивиденды. */
export interface GetDividendsResponse {
    dividends: Dividend[];
}
/** Информация о выплате. */
export interface Dividend {
    /** Величина дивиденда на 1 ценную бумагу (включая валюту). */
    dividendNet?: MoneyValue;
    /** Дата фактических выплат в часовом поясе UTC. */
    paymentDate?: Date;
    /** Дата объявления дивидендов в часовом поясе UTC. */
    declaredDate?: Date;
    /** Последний день (включительно) покупки для получения выплаты в часовом поясе UTC. */
    lastBuyDate?: Date;
    /** Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат. */
    dividendType: string;
    /** Дата фиксации реестра в часовом поясе UTC. */
    recordDate?: Date;
    /** Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат. */
    regularity: string;
    /** Цена закрытия инструмента на момент ex_dividend_date. */
    closePrice?: MoneyValue;
    /** Величина доходности. */
    yieldValue?: Quotation;
    /** Дата и время создания записи в часовом поясе UTC. */
    createdAt?: Date;
}
/** Запрос актива по идентификатору. */
export interface AssetRequest {
    /** uid-идентификатор актива. */
    id: string;
}
/** Данные по активу. */
export interface AssetResponse {
    /** Актив. */
    asset?: AssetFull;
}
/** Запрос списка активов. */
export interface AssetsRequest {
    instrumentType: InstrumentType;
}
/** Список активов. */
export interface AssetsResponse {
    /** Активы. */
    assets: Asset[];
}
export interface AssetFull {
    /** Уникальный идентификатор актива. */
    uid: string;
    /** Тип актива. */
    type: AssetType;
    /** Наименование актива. */
    name: string;
    /** Короткое наименование актива. */
    nameBrief: string;
    /** Описание актива. */
    description: string;
    /** Дата и время удаления актива. */
    deletedAt?: Date;
    /** Тестирование клиентов. */
    requiredTests: string[];
    /** Валюта. Обязательно и заполняется только для type = "ASSET_TYPE_CURRENCY". */
    currency?: AssetCurrency | undefined;
    /** Ценная бумага. Обязательно и заполняется только для type = "ASSET_TYPE_SECURITY". */
    security?: AssetSecurity | undefined;
    /** Номер государственной регистрации. */
    gosRegCode: string;
    /** Код CFI. */
    cfi: string;
    /** Код НРД инструмента. */
    codeNsd: string;
    /** Статус актива. */
    status: string;
    /** Бренд. */
    brand?: Brand;
    /** Дата и время последнего обновления записи. */
    updatedAt?: Date;
    /** Код типа ц.б. по классификации Банка России. */
    brCode: string;
    /** Наименование кода типа ц.б. по классификации Банка России. */
    brCodeName: string;
    /** Массив идентификаторов инструментов. */
    instruments: AssetInstrument[];
}
/** Информация об активе. */
export interface Asset {
    /** Уникальный идентификатор актива. */
    uid: string;
    /** Тип актива. */
    type: AssetType;
    /** Наименование актива. */
    name: string;
    /** Массив идентификаторов инструментов. */
    instruments: AssetInstrument[];
}
/** Валюта. */
export interface AssetCurrency {
    /** ISO-код валюты. */
    baseCurrency: string;
}
/** Ценная бумага. */
export interface AssetSecurity {
    /** ISIN-идентификатор ценной бумаги. */
    isin: string;
    /** Тип ценной бумаги. */
    type: string;
    /** Тип инструмента. */
    instrumentKind: InstrumentType;
    /** Акция. Заполняется только для акций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = share). */
    share?: AssetShare | undefined;
    /** Облигация. Заполняется только для облигаций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = bond). */
    bond?: AssetBond | undefined;
    /** Структурная нота. Заполняется только для структурных продуктов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = sp). */
    sp?: AssetStructuredProduct | undefined;
    /** Фонд. Заполняется только для фондов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = etf). */
    etf?: AssetEtf | undefined;
    /** Клиринговый сертификат участия. Заполняется только для клиринговых сертификатов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = clearing_certificate). */
    clearingCertificate?: AssetClearingCertificate | undefined;
}
/** Акция. */
export interface AssetShare {
    /** Тип акции. */
    type: ShareType;
    /** Объем выпуска (шт.). */
    issueSize?: Quotation;
    /** Номинал. */
    nominal?: Quotation;
    /** Валюта номинала. */
    nominalCurrency: string;
    /** Индекс (Bloomberg). */
    primaryIndex: string;
    /** Ставка дивиденда (для привилегированных акций). */
    dividendRate?: Quotation;
    /** Тип привилегированных акций. */
    preferredShareType: string;
    /** Дата IPO. */
    ipoDate?: Date;
    /** Дата регистрации. */
    registryDate?: Date;
    /** Признак наличия дивидендной доходности. */
    divYieldFlag: boolean;
    /** Форма выпуска ФИ. */
    issueKind: string;
    /** Дата размещения акции. */
    placementDate?: Date;
    /** ISIN базового актива. */
    represIsin: string;
    /** Объявленное количество шт. */
    issueSizePlan?: Quotation;
    /** Количество акций в свободном обращении. */
    totalFloat?: Quotation;
}
/** Облигация. */
export interface AssetBond {
    /** Текущий номинал. */
    currentNominal?: Quotation;
    /** Наименование заемщика. */
    borrowName: string;
    /** Объем эмиссии облигации (стоимость). */
    issueSize?: Quotation;
    /** Номинал облигации. */
    nominal?: Quotation;
    /** Валюта номинала. */
    nominalCurrency: string;
    /** Форма выпуска облигации. */
    issueKind: string;
    /** Форма дохода облигации. */
    interestKind: string;
    /** Количество выплат в год. */
    couponQuantityPerYear: number;
    /** Признак облигации с индексируемым номиналом. */
    indexedNominalFlag: boolean;
    /** Признак субординированной облигации. */
    subordinatedFlag: boolean;
    /** Признак обеспеченной облигации. */
    collateralFlag: boolean;
    /** Признак показывает, что купоны облигации не облагаются налогом (для mass market). */
    taxFreeFlag: boolean;
    /** Признак облигации с амортизацией долга. */
    amortizationFlag: boolean;
    /** Признак облигации с плавающим купоном. */
    floatingCouponFlag: boolean;
    /** Признак бессрочной облигации. */
    perpetualFlag: boolean;
    /** Дата погашения облигации. */
    maturityDate?: Date;
    /** Описание и условия получения дополнительного дохода. */
    returnCondition: string;
    /** Дата выпуска облигации. */
    stateRegDate?: Date;
    /** Дата размещения облигации. */
    placementDate?: Date;
    /** Цена размещения облигации. */
    placementPrice?: Quotation;
    /** Объявленное количество шт. */
    issueSizePlan?: Quotation;
}
/** Структурная нота. */
export interface AssetStructuredProduct {
    /** Наименование заемщика. */
    borrowName: string;
    /** Номинал. */
    nominal?: Quotation;
    /** Валюта номинала. */
    nominalCurrency: string;
    /** Тип структурной ноты. */
    type: StructuredProductType;
    /** Стратегия портфеля. */
    logicPortfolio: string;
    /** Тип базового актива. */
    assetType: AssetType;
    /** Вид базового актива в зависимости от типа базового актива. */
    basicAsset: string;
    /** Барьер сохранности (в процентах). */
    safetyBarrier?: Quotation;
    /** Дата погашения. */
    maturityDate?: Date;
    /** Объявленное количество шт. */
    issueSizePlan?: Quotation;
    /** Объем размещения. */
    issueSize?: Quotation;
    /** Дата размещения ноты. */
    placementDate?: Date;
    /** Форма выпуска. */
    issueKind: string;
}
/** Фонд. */
export interface AssetEtf {
    /** Суммарные расходы фонда (в %). */
    totalExpense?: Quotation;
    /** Барьерная ставка доходности после которой фонд имеет право на perfomance fee (в процентах). */
    hurdleRate?: Quotation;
    /** Комиссия за успешные результаты фонда (в процентах). */
    performanceFee?: Quotation;
    /** Фиксированная комиссия за управление (в процентах). */
    fixedCommission?: Quotation;
    /** Тип распределения доходов от выплат по бумагам. */
    paymentType: string;
    /** Признак необходимости выхода фонда в плюс для получения комиссии. */
    watermarkFlag: boolean;
    /** Премия (надбавка к цене) при покупке доли в фонде (в процентах). */
    buyPremium?: Quotation;
    /** Ставка дисконта (вычет из цены) при продаже доли в фонде (в процентах). */
    sellDiscount?: Quotation;
    /** Признак ребалансируемости портфеля фонда. */
    rebalancingFlag: boolean;
    /** Периодичность ребалансировки. */
    rebalancingFreq: string;
    /** Тип управления. */
    managementType: string;
    /** Индекс, который реплицирует (старается копировать) фонд. */
    primaryIndex: string;
    /** База ETF. */
    focusType: string;
    /** Признак использования заемных активов (плечо). */
    leveragedFlag: boolean;
    /** Количество акций в обращении. */
    numShare?: Quotation;
    /** Признак обязательства по отчетности перед регулятором. */
    ucitsFlag: boolean;
    /** Дата выпуска. */
    releasedDate?: Date;
    /** Описание фонда. */
    description: string;
    /** Описание индекса, за которым следует фонд. */
    primaryIndexDescription: string;
    /** Основные компании, в которые вкладывается фонд. */
    primaryIndexCompany: string;
    /** Срок восстановления индекса (после просадки). */
    indexRecoveryPeriod?: Quotation;
    /** IVAV-код. */
    inavCode: string;
    /** Признак наличия дивидендной доходности. */
    divYieldFlag: boolean;
    /** Комиссия на покрытие расходов фонда (в процентах). */
    expenseCommission?: Quotation;
    /** Ошибка следования за индексом (в процентах). */
    primaryIndexTrackingError?: Quotation;
    /** Плановая ребалансировка портфеля. */
    rebalancingPlan: string;
    /** Ставки налогообложения дивидендов и купонов. */
    taxRate: string;
    /** Даты ребалансировок. */
    rebalancingDates: Date[];
    /** Форма выпуска. */
    issueKind: string;
    /** Номинал. */
    nominal?: Quotation;
    /** Валюта номинала. */
    nominalCurrency: string;
}
/** Клиринговый сертификат участия. */
export interface AssetClearingCertificate {
    /** Номинал. */
    nominal?: Quotation;
    /** Валюта номинала. */
    nominalCurrency: string;
}
/** Бренд. */
export interface Brand {
    /** uid идентификатор бренда. */
    uid: string;
    /** Наименование бренда. */
    name: string;
    /** Описание. */
    description: string;
    /** Информация о бренде. */
    info: string;
    /** Компания. */
    company: string;
    /** Сектор. */
    sector: string;
    /** Код страны риска. */
    countryOfRisk: string;
    /** Наименование страны риска. */
    countryOfRiskName: string;
}
/** Идентификаторы инструмента. */
export interface AssetInstrument {
    /** uid идентификатор инструмента. */
    uid: string;
    /** figi идентификатор инструмента. */
    figi: string;
    /** Тип инструмента. */
    instrumentType: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код (секция торгов). */
    classCode: string;
    /** Массив связанных инструментов. */
    links: InstrumentLink[];
    /** Тип инструмента. */
    instrumentKind: InstrumentType;
    /** id позиции. */
    positionUid: string;
}
/** Связь с другим инструментом. */
export interface InstrumentLink {
    /** Тип связи. */
    type: string;
    /** uid идентификатор связанного инструмента. */
    instrumentUid: string;
}
/** Запрос списка избранных инструментов, входные параметры не требуются. */
export interface GetFavoritesRequest {
}
/** В ответ передаётся список избранных инструментов в качестве массива. */
export interface GetFavoritesResponse {
    /** Массив инструментов */
    favoriteInstruments: FavoriteInstrument[];
}
/** Массив избранных инструментов. */
export interface FavoriteInstrument {
    /** Figi-идентификатор инструмента. */
    figi: string;
    /** Тикер инструмента. */
    ticker: string;
    /** Класс-код инструмента. */
    classCode: string;
    /** Isin-идентификатор инструмента. */
    isin: string;
    /** Тип инструмента. */
    instrumentType: string;
    /** Признак внебиржевой ценной бумаги. */
    otcFlag: boolean;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Тип инструмента. */
    instrumentKind: InstrumentType;
}
/** Запрос редактирования списка избранных инструментов. */
export interface EditFavoritesRequest {
    /** Массив инструментов. */
    instruments: EditFavoritesRequestInstrument[];
    /** Тип действия со списком. */
    actionType: EditFavoritesActionType;
}
/** Массив инструментов для редактирования списка избранных инструментов. */
export interface EditFavoritesRequestInstrument {
    /** Figi-идентификатор инструмента. */
    figi: string;
}
/** Результат редактирования списка избранных инструментов. */
export interface EditFavoritesResponse {
    /** Массив инструментов */
    favoriteInstruments: FavoriteInstrument[];
}
/** Запрос справочника стран. */
export interface GetCountriesRequest {
}
/** Справочник стран. */
export interface GetCountriesResponse {
    /** Массив стран. */
    countries: CountryResponse[];
}
/** Данные о стране. */
export interface CountryResponse {
    /** Двухбуквенный код страны. */
    alfaTwo: string;
    /** Трёхбуквенный код страны. */
    alfaThree: string;
    /** Наименование страны. */
    name: string;
    /** Краткое наименование страны. */
    nameBrief: string;
}
/** Запрос на поиск инструментов. */
export interface FindInstrumentRequest {
    /** Строка поиска. */
    query: string;
    /** Фильтр по типу инструмента. */
    instrumentKind: InstrumentType;
    /** Фильтр для отображения только торговых инструментов. */
    apiTradeAvailableFlag: boolean;
}
/** Результат поиска инструментов. */
export interface FindInstrumentResponse {
    /** Массив инструментов, удовлетворяющих условиям поиска. */
    instruments: InstrumentShort[];
}
/** Краткая информация об инструменте. */
export interface InstrumentShort {
    /** Isin инструмента. */
    isin: string;
    /** Figi инструмента. */
    figi: string;
    /** Ticker инструмента. */
    ticker: string;
    /** ClassCode инструмента. */
    classCode: string;
    /** Тип инструмента. */
    instrumentType: string;
    /** Название инструмента. */
    name: string;
    /** Уникальный идентификатор инструмента. */
    uid: string;
    /** Уникальный идентификатор позиции инструмента. */
    positionUid: string;
    /** Тип инструмента. */
    instrumentKind: InstrumentType;
    /** Параметр указывает на возможность торговать инструментом через API. */
    apiTradeAvailableFlag: boolean;
    /** Признак доступности для ИИС. */
    forIisFlag: boolean;
    /** Дата первой минутной свечи. */
    first1minCandleDate?: Date;
    /** Дата первой дневной свечи. */
    first1dayCandleDate?: Date;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
}
/** Запрос списка брендов. */
export interface GetBrandsRequest {
}
/** Запрос бренда. */
export interface GetBrandRequest {
    /** Uid-идентификатор бренда. */
    id: string;
}
/** Список брендов. */
export interface GetBrandsResponse {
    /** Массив брендов. */
    brands: Brand[];
}
export declare const TradingSchedulesRequest: {
    encode(message: TradingSchedulesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedulesRequest;
    fromJSON(object: any): TradingSchedulesRequest;
    toJSON(message: TradingSchedulesRequest): unknown;
};
export declare const TradingSchedulesResponse: {
    encode(message: TradingSchedulesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedulesResponse;
    fromJSON(object: any): TradingSchedulesResponse;
    toJSON(message: TradingSchedulesResponse): unknown;
};
export declare const TradingSchedule: {
    encode(message: TradingSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedule;
    fromJSON(object: any): TradingSchedule;
    toJSON(message: TradingSchedule): unknown;
};
export declare const TradingDay: {
    encode(message: TradingDay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingDay;
    fromJSON(object: any): TradingDay;
    toJSON(message: TradingDay): unknown;
};
export declare const InstrumentRequest: {
    encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
    fromJSON(object: any): InstrumentRequest;
    toJSON(message: InstrumentRequest): unknown;
};
export declare const InstrumentsRequest: {
    encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest;
    fromJSON(object: any): InstrumentsRequest;
    toJSON(message: InstrumentsRequest): unknown;
};
export declare const FilterOptionsRequest: {
    encode(message: FilterOptionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FilterOptionsRequest;
    fromJSON(object: any): FilterOptionsRequest;
    toJSON(message: FilterOptionsRequest): unknown;
};
export declare const BondResponse: {
    encode(message: BondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondResponse;
    fromJSON(object: any): BondResponse;
    toJSON(message: BondResponse): unknown;
};
export declare const BondsResponse: {
    encode(message: BondsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondsResponse;
    fromJSON(object: any): BondsResponse;
    toJSON(message: BondsResponse): unknown;
};
export declare const GetBondCouponsRequest: {
    encode(message: GetBondCouponsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBondCouponsRequest;
    fromJSON(object: any): GetBondCouponsRequest;
    toJSON(message: GetBondCouponsRequest): unknown;
};
export declare const GetBondCouponsResponse: {
    encode(message: GetBondCouponsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBondCouponsResponse;
    fromJSON(object: any): GetBondCouponsResponse;
    toJSON(message: GetBondCouponsResponse): unknown;
};
export declare const Coupon: {
    encode(message: Coupon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coupon;
    fromJSON(object: any): Coupon;
    toJSON(message: Coupon): unknown;
};
export declare const CurrencyResponse: {
    encode(message: CurrencyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyResponse;
    fromJSON(object: any): CurrencyResponse;
    toJSON(message: CurrencyResponse): unknown;
};
export declare const CurrenciesResponse: {
    encode(message: CurrenciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CurrenciesResponse;
    fromJSON(object: any): CurrenciesResponse;
    toJSON(message: CurrenciesResponse): unknown;
};
export declare const EtfResponse: {
    encode(message: EtfResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EtfResponse;
    fromJSON(object: any): EtfResponse;
    toJSON(message: EtfResponse): unknown;
};
export declare const EtfsResponse: {
    encode(message: EtfsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EtfsResponse;
    fromJSON(object: any): EtfsResponse;
    toJSON(message: EtfsResponse): unknown;
};
export declare const FutureResponse: {
    encode(message: FutureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FutureResponse;
    fromJSON(object: any): FutureResponse;
    toJSON(message: FutureResponse): unknown;
};
export declare const FuturesResponse: {
    encode(message: FuturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FuturesResponse;
    fromJSON(object: any): FuturesResponse;
    toJSON(message: FuturesResponse): unknown;
};
export declare const OptionResponse: {
    encode(message: OptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OptionResponse;
    fromJSON(object: any): OptionResponse;
    toJSON(message: OptionResponse): unknown;
};
export declare const OptionsResponse: {
    encode(message: OptionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OptionsResponse;
    fromJSON(object: any): OptionsResponse;
    toJSON(message: OptionsResponse): unknown;
};
export declare const Option: {
    encode(message: Option, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Option;
    fromJSON(object: any): Option;
    toJSON(message: Option): unknown;
};
export declare const ShareResponse: {
    encode(message: ShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShareResponse;
    fromJSON(object: any): ShareResponse;
    toJSON(message: ShareResponse): unknown;
};
export declare const SharesResponse: {
    encode(message: SharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SharesResponse;
    fromJSON(object: any): SharesResponse;
    toJSON(message: SharesResponse): unknown;
};
export declare const Bond: {
    encode(message: Bond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bond;
    fromJSON(object: any): Bond;
    toJSON(message: Bond): unknown;
};
export declare const Currency: {
    encode(message: Currency, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Currency;
    fromJSON(object: any): Currency;
    toJSON(message: Currency): unknown;
};
export declare const Etf: {
    encode(message: Etf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Etf;
    fromJSON(object: any): Etf;
    toJSON(message: Etf): unknown;
};
export declare const Future: {
    encode(message: Future, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Future;
    fromJSON(object: any): Future;
    toJSON(message: Future): unknown;
};
export declare const Share: {
    encode(message: Share, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Share;
    fromJSON(object: any): Share;
    toJSON(message: Share): unknown;
};
export declare const GetAccruedInterestsRequest: {
    encode(message: GetAccruedInterestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAccruedInterestsRequest;
    fromJSON(object: any): GetAccruedInterestsRequest;
    toJSON(message: GetAccruedInterestsRequest): unknown;
};
export declare const GetAccruedInterestsResponse: {
    encode(message: GetAccruedInterestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAccruedInterestsResponse;
    fromJSON(object: any): GetAccruedInterestsResponse;
    toJSON(message: GetAccruedInterestsResponse): unknown;
};
export declare const AccruedInterest: {
    encode(message: AccruedInterest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccruedInterest;
    fromJSON(object: any): AccruedInterest;
    toJSON(message: AccruedInterest): unknown;
};
export declare const GetFuturesMarginRequest: {
    encode(message: GetFuturesMarginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFuturesMarginRequest;
    fromJSON(object: any): GetFuturesMarginRequest;
    toJSON(message: GetFuturesMarginRequest): unknown;
};
export declare const GetFuturesMarginResponse: {
    encode(message: GetFuturesMarginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFuturesMarginResponse;
    fromJSON(object: any): GetFuturesMarginResponse;
    toJSON(message: GetFuturesMarginResponse): unknown;
};
export declare const InstrumentResponse: {
    encode(message: InstrumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentResponse;
    fromJSON(object: any): InstrumentResponse;
    toJSON(message: InstrumentResponse): unknown;
};
export declare const Instrument: {
    encode(message: Instrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Instrument;
    fromJSON(object: any): Instrument;
    toJSON(message: Instrument): unknown;
};
export declare const GetDividendsRequest: {
    encode(message: GetDividendsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsRequest;
    fromJSON(object: any): GetDividendsRequest;
    toJSON(message: GetDividendsRequest): unknown;
};
export declare const GetDividendsResponse: {
    encode(message: GetDividendsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsResponse;
    fromJSON(object: any): GetDividendsResponse;
    toJSON(message: GetDividendsResponse): unknown;
};
export declare const Dividend: {
    encode(message: Dividend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Dividend;
    fromJSON(object: any): Dividend;
    toJSON(message: Dividend): unknown;
};
export declare const AssetRequest: {
    encode(message: AssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetRequest;
    fromJSON(object: any): AssetRequest;
    toJSON(message: AssetRequest): unknown;
};
export declare const AssetResponse: {
    encode(message: AssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetResponse;
    fromJSON(object: any): AssetResponse;
    toJSON(message: AssetResponse): unknown;
};
export declare const AssetsRequest: {
    encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest;
    fromJSON(object: any): AssetsRequest;
    toJSON(message: AssetsRequest): unknown;
};
export declare const AssetsResponse: {
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse;
    fromJSON(object: any): AssetsResponse;
    toJSON(message: AssetsResponse): unknown;
};
export declare const AssetFull: {
    encode(message: AssetFull, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetFull;
    fromJSON(object: any): AssetFull;
    toJSON(message: AssetFull): unknown;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
};
export declare const AssetCurrency: {
    encode(message: AssetCurrency, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetCurrency;
    fromJSON(object: any): AssetCurrency;
    toJSON(message: AssetCurrency): unknown;
};
export declare const AssetSecurity: {
    encode(message: AssetSecurity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetSecurity;
    fromJSON(object: any): AssetSecurity;
    toJSON(message: AssetSecurity): unknown;
};
export declare const AssetShare: {
    encode(message: AssetShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetShare;
    fromJSON(object: any): AssetShare;
    toJSON(message: AssetShare): unknown;
};
export declare const AssetBond: {
    encode(message: AssetBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetBond;
    fromJSON(object: any): AssetBond;
    toJSON(message: AssetBond): unknown;
};
export declare const AssetStructuredProduct: {
    encode(message: AssetStructuredProduct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetStructuredProduct;
    fromJSON(object: any): AssetStructuredProduct;
    toJSON(message: AssetStructuredProduct): unknown;
};
export declare const AssetEtf: {
    encode(message: AssetEtf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetEtf;
    fromJSON(object: any): AssetEtf;
    toJSON(message: AssetEtf): unknown;
};
export declare const AssetClearingCertificate: {
    encode(message: AssetClearingCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetClearingCertificate;
    fromJSON(object: any): AssetClearingCertificate;
    toJSON(message: AssetClearingCertificate): unknown;
};
export declare const Brand: {
    encode(message: Brand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Brand;
    fromJSON(object: any): Brand;
    toJSON(message: Brand): unknown;
};
export declare const AssetInstrument: {
    encode(message: AssetInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetInstrument;
    fromJSON(object: any): AssetInstrument;
    toJSON(message: AssetInstrument): unknown;
};
export declare const InstrumentLink: {
    encode(message: InstrumentLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentLink;
    fromJSON(object: any): InstrumentLink;
    toJSON(message: InstrumentLink): unknown;
};
export declare const GetFavoritesRequest: {
    encode(_: GetFavoritesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFavoritesRequest;
    fromJSON(_: any): GetFavoritesRequest;
    toJSON(_: GetFavoritesRequest): unknown;
};
export declare const GetFavoritesResponse: {
    encode(message: GetFavoritesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFavoritesResponse;
    fromJSON(object: any): GetFavoritesResponse;
    toJSON(message: GetFavoritesResponse): unknown;
};
export declare const FavoriteInstrument: {
    encode(message: FavoriteInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FavoriteInstrument;
    fromJSON(object: any): FavoriteInstrument;
    toJSON(message: FavoriteInstrument): unknown;
};
export declare const EditFavoritesRequest: {
    encode(message: EditFavoritesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesRequest;
    fromJSON(object: any): EditFavoritesRequest;
    toJSON(message: EditFavoritesRequest): unknown;
};
export declare const EditFavoritesRequestInstrument: {
    encode(message: EditFavoritesRequestInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesRequestInstrument;
    fromJSON(object: any): EditFavoritesRequestInstrument;
    toJSON(message: EditFavoritesRequestInstrument): unknown;
};
export declare const EditFavoritesResponse: {
    encode(message: EditFavoritesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesResponse;
    fromJSON(object: any): EditFavoritesResponse;
    toJSON(message: EditFavoritesResponse): unknown;
};
export declare const GetCountriesRequest: {
    encode(_: GetCountriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCountriesRequest;
    fromJSON(_: any): GetCountriesRequest;
    toJSON(_: GetCountriesRequest): unknown;
};
export declare const GetCountriesResponse: {
    encode(message: GetCountriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCountriesResponse;
    fromJSON(object: any): GetCountriesResponse;
    toJSON(message: GetCountriesResponse): unknown;
};
export declare const CountryResponse: {
    encode(message: CountryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountryResponse;
    fromJSON(object: any): CountryResponse;
    toJSON(message: CountryResponse): unknown;
};
export declare const FindInstrumentRequest: {
    encode(message: FindInstrumentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FindInstrumentRequest;
    fromJSON(object: any): FindInstrumentRequest;
    toJSON(message: FindInstrumentRequest): unknown;
};
export declare const FindInstrumentResponse: {
    encode(message: FindInstrumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FindInstrumentResponse;
    fromJSON(object: any): FindInstrumentResponse;
    toJSON(message: FindInstrumentResponse): unknown;
};
export declare const InstrumentShort: {
    encode(message: InstrumentShort, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentShort;
    fromJSON(object: any): InstrumentShort;
    toJSON(message: InstrumentShort): unknown;
};
export declare const GetBrandsRequest: {
    encode(_: GetBrandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandsRequest;
    fromJSON(_: any): GetBrandsRequest;
    toJSON(_: GetBrandsRequest): unknown;
};
export declare const GetBrandRequest: {
    encode(message: GetBrandRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandRequest;
    fromJSON(object: any): GetBrandRequest;
    toJSON(message: GetBrandRequest): unknown;
};
export declare const GetBrandsResponse: {
    encode(message: GetBrandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandsResponse;
    fromJSON(object: any): GetBrandsResponse;
    toJSON(message: GetBrandsResponse): unknown;
};
/**
 * Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
 * расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
 * размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
 */
export declare type InstrumentsServiceDefinition = typeof InstrumentsServiceDefinition;
export declare const InstrumentsServiceDefinition: {
    readonly name: "InstrumentsService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.InstrumentsService";
    readonly methods: {
        /** Метод получения расписания торгов торговых площадок. */
        readonly tradingSchedules: {
            readonly name: "TradingSchedules";
            readonly requestType: {
                encode(message: TradingSchedulesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedulesRequest;
                fromJSON(object: any): TradingSchedulesRequest;
                toJSON(message: TradingSchedulesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: TradingSchedulesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedulesResponse;
                fromJSON(object: any): TradingSchedulesResponse;
                toJSON(message: TradingSchedulesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения облигации по её идентификатору. */
        readonly bondBy: {
            readonly name: "BondBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BondResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BondResponse;
                fromJSON(object: any): BondResponse;
                toJSON(message: BondResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка облигаций. */
        readonly bonds: {
            readonly name: "Bonds";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BondsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BondsResponse;
                fromJSON(object: any): BondsResponse;
                toJSON(message: BondsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения графика выплат купонов по облигации. */
        readonly getBondCoupons: {
            readonly name: "GetBondCoupons";
            readonly requestType: {
                encode(message: GetBondCouponsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBondCouponsRequest;
                fromJSON(object: any): GetBondCouponsRequest;
                toJSON(message: GetBondCouponsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetBondCouponsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBondCouponsResponse;
                fromJSON(object: any): GetBondCouponsResponse;
                toJSON(message: GetBondCouponsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения валюты по её идентификатору. */
        readonly currencyBy: {
            readonly name: "CurrencyBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CurrencyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyResponse;
                fromJSON(object: any): CurrencyResponse;
                toJSON(message: CurrencyResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка валют. */
        readonly currencies: {
            readonly name: "Currencies";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CurrenciesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CurrenciesResponse;
                fromJSON(object: any): CurrenciesResponse;
                toJSON(message: CurrenciesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения инвестиционного фонда по его идентификатору. */
        readonly etfBy: {
            readonly name: "EtfBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EtfResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): EtfResponse;
                fromJSON(object: any): EtfResponse;
                toJSON(message: EtfResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка инвестиционных фондов. */
        readonly etfs: {
            readonly name: "Etfs";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EtfsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): EtfsResponse;
                fromJSON(object: any): EtfsResponse;
                toJSON(message: EtfsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения фьючерса по его идентификатору. */
        readonly futureBy: {
            readonly name: "FutureBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: FutureResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): FutureResponse;
                fromJSON(object: any): FutureResponse;
                toJSON(message: FutureResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка фьючерсов. */
        readonly futures: {
            readonly name: "Futures";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: FuturesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): FuturesResponse;
                fromJSON(object: any): FuturesResponse;
                toJSON(message: FuturesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения опциона по его идентификатору. */
        readonly optionBy: {
            readonly name: "OptionBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OptionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): OptionResponse;
                fromJSON(object: any): OptionResponse;
                toJSON(message: OptionResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Deprecated Метод получения списка опционов.
         *
         * @deprecated
         */
        readonly options: {
            readonly name: "Options";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OptionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): OptionsResponse;
                fromJSON(object: any): OptionsResponse;
                toJSON(message: OptionsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка опционов. */
        readonly optionsBy: {
            readonly name: "OptionsBy";
            readonly requestType: {
                encode(message: FilterOptionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): FilterOptionsRequest;
                fromJSON(object: any): FilterOptionsRequest;
                toJSON(message: FilterOptionsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OptionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): OptionsResponse;
                fromJSON(object: any): OptionsResponse;
                toJSON(message: OptionsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения акции по её идентификатору. */
        readonly shareBy: {
            readonly name: "ShareBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ShareResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ShareResponse;
                fromJSON(object: any): ShareResponse;
                toJSON(message: ShareResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка акций. */
        readonly shares: {
            readonly name: "Shares";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SharesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SharesResponse;
                fromJSON(object: any): SharesResponse;
                toJSON(message: SharesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения накопленного купонного дохода по облигации. */
        readonly getAccruedInterests: {
            readonly name: "GetAccruedInterests";
            readonly requestType: {
                encode(message: GetAccruedInterestsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAccruedInterestsRequest;
                fromJSON(object: any): GetAccruedInterestsRequest;
                toJSON(message: GetAccruedInterestsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAccruedInterestsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAccruedInterestsResponse;
                fromJSON(object: any): GetAccruedInterestsResponse;
                toJSON(message: GetAccruedInterestsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения размера гарантийного обеспечения по фьючерсам. */
        readonly getFuturesMargin: {
            readonly name: "GetFuturesMargin";
            readonly requestType: {
                encode(message: GetFuturesMarginRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFuturesMarginRequest;
                fromJSON(object: any): GetFuturesMarginRequest;
                toJSON(message: GetFuturesMarginRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetFuturesMarginResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFuturesMarginResponse;
                fromJSON(object: any): GetFuturesMarginResponse;
                toJSON(message: GetFuturesMarginResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения основной информации об инструменте. */
        readonly getInstrumentBy: {
            readonly name: "GetInstrumentBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: InstrumentResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentResponse;
                fromJSON(object: any): InstrumentResponse;
                toJSON(message: InstrumentResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод для получения событий выплаты дивидендов по инструменту. */
        readonly getDividends: {
            readonly name: "GetDividends";
            readonly requestType: {
                encode(message: GetDividendsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsRequest;
                fromJSON(object: any): GetDividendsRequest;
                toJSON(message: GetDividendsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDividendsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsResponse;
                fromJSON(object: any): GetDividendsResponse;
                toJSON(message: GetDividendsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения актива по его идентификатору. */
        readonly getAssetBy: {
            readonly name: "GetAssetBy";
            readonly requestType: {
                encode(message: AssetRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AssetRequest;
                fromJSON(object: any): AssetRequest;
                toJSON(message: AssetRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AssetResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AssetResponse;
                fromJSON(object: any): AssetResponse;
                toJSON(message: AssetResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка активов. Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов. */
        readonly getAssets: {
            readonly name: "GetAssets";
            readonly requestType: {
                encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest;
                fromJSON(object: any): AssetsRequest;
                toJSON(message: AssetsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse;
                fromJSON(object: any): AssetsResponse;
                toJSON(message: AssetsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка избранных инструментов. */
        readonly getFavorites: {
            readonly name: "GetFavorites";
            readonly requestType: {
                encode(_: GetFavoritesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFavoritesRequest;
                fromJSON(_: any): GetFavoritesRequest;
                toJSON(_: GetFavoritesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetFavoritesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFavoritesResponse;
                fromJSON(object: any): GetFavoritesResponse;
                toJSON(message: GetFavoritesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод редактирования списка избранных инструментов. */
        readonly editFavorites: {
            readonly name: "EditFavorites";
            readonly requestType: {
                encode(message: EditFavoritesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesRequest;
                fromJSON(object: any): EditFavoritesRequest;
                toJSON(message: EditFavoritesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EditFavoritesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesResponse;
                fromJSON(object: any): EditFavoritesResponse;
                toJSON(message: EditFavoritesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка стран. */
        readonly getCountries: {
            readonly name: "GetCountries";
            readonly requestType: {
                encode(_: GetCountriesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCountriesRequest;
                fromJSON(_: any): GetCountriesRequest;
                toJSON(_: GetCountriesRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCountriesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCountriesResponse;
                fromJSON(object: any): GetCountriesResponse;
                toJSON(message: GetCountriesResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод поиска инструмента. */
        readonly findInstrument: {
            readonly name: "FindInstrument";
            readonly requestType: {
                encode(message: FindInstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): FindInstrumentRequest;
                fromJSON(object: any): FindInstrumentRequest;
                toJSON(message: FindInstrumentRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: FindInstrumentResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): FindInstrumentResponse;
                fromJSON(object: any): FindInstrumentResponse;
                toJSON(message: FindInstrumentResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения списка брендов. */
        readonly getBrands: {
            readonly name: "GetBrands";
            readonly requestType: {
                encode(_: GetBrandsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandsRequest;
                fromJSON(_: any): GetBrandsRequest;
                toJSON(_: GetBrandsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetBrandsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandsResponse;
                fromJSON(object: any): GetBrandsResponse;
                toJSON(message: GetBrandsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /** Метод получения бренда по его идентификатору. */
        readonly getBrandBy: {
            readonly name: "GetBrandBy";
            readonly requestType: {
                encode(message: GetBrandRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandRequest;
                fromJSON(object: any): GetBrandRequest;
                toJSON(message: GetBrandRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Brand, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Brand;
                fromJSON(object: any): Brand;
                toJSON(message: Brand): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface InstrumentsServiceServiceImplementation<CallContextExt = {}> {
    /** Метод получения расписания торгов торговых площадок. */
    tradingSchedules(request: TradingSchedulesRequest, context: CallContext & CallContextExt): Promise<TradingSchedulesResponse>;
    /** Метод получения облигации по её идентификатору. */
    bondBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<BondResponse>;
    /** Метод получения списка облигаций. */
    bonds(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<BondsResponse>;
    /** Метод получения графика выплат купонов по облигации. */
    getBondCoupons(request: GetBondCouponsRequest, context: CallContext & CallContextExt): Promise<GetBondCouponsResponse>;
    /** Метод получения валюты по её идентификатору. */
    currencyBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<CurrencyResponse>;
    /** Метод получения списка валют. */
    currencies(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<CurrenciesResponse>;
    /** Метод получения инвестиционного фонда по его идентификатору. */
    etfBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<EtfResponse>;
    /** Метод получения списка инвестиционных фондов. */
    etfs(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<EtfsResponse>;
    /** Метод получения фьючерса по его идентификатору. */
    futureBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<FutureResponse>;
    /** Метод получения списка фьючерсов. */
    futures(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<FuturesResponse>;
    /** Метод получения опциона по его идентификатору. */
    optionBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<OptionResponse>;
    /**
     * Deprecated Метод получения списка опционов.
     *
     * @deprecated
     */
    options(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<OptionsResponse>;
    /** Метод получения списка опционов. */
    optionsBy(request: FilterOptionsRequest, context: CallContext & CallContextExt): Promise<OptionsResponse>;
    /** Метод получения акции по её идентификатору. */
    shareBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<ShareResponse>;
    /** Метод получения списка акций. */
    shares(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<SharesResponse>;
    /** Метод получения накопленного купонного дохода по облигации. */
    getAccruedInterests(request: GetAccruedInterestsRequest, context: CallContext & CallContextExt): Promise<GetAccruedInterestsResponse>;
    /** Метод получения размера гарантийного обеспечения по фьючерсам. */
    getFuturesMargin(request: GetFuturesMarginRequest, context: CallContext & CallContextExt): Promise<GetFuturesMarginResponse>;
    /** Метод получения основной информации об инструменте. */
    getInstrumentBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<InstrumentResponse>;
    /** Метод для получения событий выплаты дивидендов по инструменту. */
    getDividends(request: GetDividendsRequest, context: CallContext & CallContextExt): Promise<GetDividendsResponse>;
    /** Метод получения актива по его идентификатору. */
    getAssetBy(request: AssetRequest, context: CallContext & CallContextExt): Promise<AssetResponse>;
    /** Метод получения списка активов. Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов. */
    getAssets(request: AssetsRequest, context: CallContext & CallContextExt): Promise<AssetsResponse>;
    /** Метод получения списка избранных инструментов. */
    getFavorites(request: GetFavoritesRequest, context: CallContext & CallContextExt): Promise<GetFavoritesResponse>;
    /** Метод редактирования списка избранных инструментов. */
    editFavorites(request: EditFavoritesRequest, context: CallContext & CallContextExt): Promise<EditFavoritesResponse>;
    /** Метод получения списка стран. */
    getCountries(request: GetCountriesRequest, context: CallContext & CallContextExt): Promise<GetCountriesResponse>;
    /** Метод поиска инструмента. */
    findInstrument(request: FindInstrumentRequest, context: CallContext & CallContextExt): Promise<FindInstrumentResponse>;
    /** Метод получения списка брендов. */
    getBrands(request: GetBrandsRequest, context: CallContext & CallContextExt): Promise<GetBrandsResponse>;
    /** Метод получения бренда по его идентификатору. */
    getBrandBy(request: GetBrandRequest, context: CallContext & CallContextExt): Promise<Brand>;
}
export interface InstrumentsServiceClient<CallOptionsExt = {}> {
    /** Метод получения расписания торгов торговых площадок. */
    tradingSchedules(request: TradingSchedulesRequest, options?: CallOptions & CallOptionsExt): Promise<TradingSchedulesResponse>;
    /** Метод получения облигации по её идентификатору. */
    bondBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<BondResponse>;
    /** Метод получения списка облигаций. */
    bonds(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<BondsResponse>;
    /** Метод получения графика выплат купонов по облигации. */
    getBondCoupons(request: GetBondCouponsRequest, options?: CallOptions & CallOptionsExt): Promise<GetBondCouponsResponse>;
    /** Метод получения валюты по её идентификатору. */
    currencyBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<CurrencyResponse>;
    /** Метод получения списка валют. */
    currencies(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<CurrenciesResponse>;
    /** Метод получения инвестиционного фонда по его идентификатору. */
    etfBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<EtfResponse>;
    /** Метод получения списка инвестиционных фондов. */
    etfs(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<EtfsResponse>;
    /** Метод получения фьючерса по его идентификатору. */
    futureBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<FutureResponse>;
    /** Метод получения списка фьючерсов. */
    futures(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<FuturesResponse>;
    /** Метод получения опциона по его идентификатору. */
    optionBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<OptionResponse>;
    /**
     * Deprecated Метод получения списка опционов.
     *
     * @deprecated
     */
    options(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<OptionsResponse>;
    /** Метод получения списка опционов. */
    optionsBy(request: FilterOptionsRequest, options?: CallOptions & CallOptionsExt): Promise<OptionsResponse>;
    /** Метод получения акции по её идентификатору. */
    shareBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<ShareResponse>;
    /** Метод получения списка акций. */
    shares(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<SharesResponse>;
    /** Метод получения накопленного купонного дохода по облигации. */
    getAccruedInterests(request: GetAccruedInterestsRequest, options?: CallOptions & CallOptionsExt): Promise<GetAccruedInterestsResponse>;
    /** Метод получения размера гарантийного обеспечения по фьючерсам. */
    getFuturesMargin(request: GetFuturesMarginRequest, options?: CallOptions & CallOptionsExt): Promise<GetFuturesMarginResponse>;
    /** Метод получения основной информации об инструменте. */
    getInstrumentBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<InstrumentResponse>;
    /** Метод для получения событий выплаты дивидендов по инструменту. */
    getDividends(request: GetDividendsRequest, options?: CallOptions & CallOptionsExt): Promise<GetDividendsResponse>;
    /** Метод получения актива по его идентификатору. */
    getAssetBy(request: AssetRequest, options?: CallOptions & CallOptionsExt): Promise<AssetResponse>;
    /** Метод получения списка активов. Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов. */
    getAssets(request: AssetsRequest, options?: CallOptions & CallOptionsExt): Promise<AssetsResponse>;
    /** Метод получения списка избранных инструментов. */
    getFavorites(request: GetFavoritesRequest, options?: CallOptions & CallOptionsExt): Promise<GetFavoritesResponse>;
    /** Метод редактирования списка избранных инструментов. */
    editFavorites(request: EditFavoritesRequest, options?: CallOptions & CallOptionsExt): Promise<EditFavoritesResponse>;
    /** Метод получения списка стран. */
    getCountries(request: GetCountriesRequest, options?: CallOptions & CallOptionsExt): Promise<GetCountriesResponse>;
    /** Метод поиска инструмента. */
    findInstrument(request: FindInstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<FindInstrumentResponse>;
    /** Метод получения списка брендов. */
    getBrands(request: GetBrandsRequest, options?: CallOptions & CallOptionsExt): Promise<GetBrandsResponse>;
    /** Метод получения бренда по его идентификатору. */
    getBrandBy(request: GetBrandRequest, options?: CallOptions & CallOptionsExt): Promise<Brand>;
}
//# sourceMappingURL=instruments.d.ts.map