"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOperationsByCursorRequest = exports.AccountSubscriptionStatus = exports.PortfolioSubscriptionResult = exports.PortfolioStreamResponse = exports.PortfolioStreamRequest = exports.DividendsForeignIssuerReport = exports.GetDividendsForeignIssuerReportResponse = exports.GenerateDividendsForeignIssuerReportResponse = exports.GetDividendsForeignIssuerReportRequest = exports.GenerateDividendsForeignIssuerReportRequest = exports.GetDividendsForeignIssuerResponse = exports.GetDividendsForeignIssuerRequest = exports.BrokerReport = exports.GetBrokerReportResponse = exports.GetBrokerReportRequest = exports.GenerateBrokerReportResponse = exports.GenerateBrokerReportRequest = exports.BrokerReportResponse = exports.BrokerReportRequest = exports.PositionsOptions = exports.PositionsFutures = exports.PositionsSecurities = exports.VirtualPortfolioPosition = exports.PortfolioPosition = exports.WithdrawLimitsResponse = exports.WithdrawLimitsRequest = exports.PositionsResponse = exports.PositionsRequest = exports.PortfolioResponse = exports.PortfolioRequest = exports.OperationTrade = exports.Operation = exports.OperationsResponse = exports.OperationsRequest = exports.portfolioRequest_CurrencyRequestToJSON = exports.portfolioRequest_CurrencyRequestFromJSON = exports.PortfolioRequest_CurrencyRequest = exports.positionsAccountSubscriptionStatusToJSON = exports.positionsAccountSubscriptionStatusFromJSON = exports.PositionsAccountSubscriptionStatus = exports.portfolioSubscriptionStatusToJSON = exports.portfolioSubscriptionStatusFromJSON = exports.PortfolioSubscriptionStatus = exports.operationTypeToJSON = exports.operationTypeFromJSON = exports.OperationType = exports.operationStateToJSON = exports.operationStateFromJSON = exports.OperationState = exports.protobufPackage = void 0;
exports.OperationsStreamServiceDefinition = exports.OperationsServiceDefinition = exports.PositionsMoney = exports.PositionData = exports.PositionsSubscriptionStatus = exports.PositionsSubscriptionResult = exports.PositionsStreamResponse = exports.PositionsStreamRequest = exports.OperationItemTrade = exports.OperationItemTrades = exports.OperationItem = exports.GetOperationsByCursorResponse = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const common_js_1 = require("./common.js");
const timestamp_js_1 = require("./google/protobuf/timestamp.js");
exports.protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Статус запрашиваемых операций. */
var OperationState;
(function (OperationState) {
    /** OPERATION_STATE_UNSPECIFIED - Статус операции не определён */
    OperationState[OperationState["OPERATION_STATE_UNSPECIFIED"] = 0] = "OPERATION_STATE_UNSPECIFIED";
    /** OPERATION_STATE_EXECUTED - Исполнена. */
    OperationState[OperationState["OPERATION_STATE_EXECUTED"] = 1] = "OPERATION_STATE_EXECUTED";
    /** OPERATION_STATE_CANCELED - Отменена. */
    OperationState[OperationState["OPERATION_STATE_CANCELED"] = 2] = "OPERATION_STATE_CANCELED";
    /** OPERATION_STATE_PROGRESS - Исполняется. */
    OperationState[OperationState["OPERATION_STATE_PROGRESS"] = 3] = "OPERATION_STATE_PROGRESS";
    OperationState[OperationState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OperationState = exports.OperationState || (exports.OperationState = {}));
function operationStateFromJSON(object) {
    switch (object) {
        case 0:
        case "OPERATION_STATE_UNSPECIFIED":
            return OperationState.OPERATION_STATE_UNSPECIFIED;
        case 1:
        case "OPERATION_STATE_EXECUTED":
            return OperationState.OPERATION_STATE_EXECUTED;
        case 2:
        case "OPERATION_STATE_CANCELED":
            return OperationState.OPERATION_STATE_CANCELED;
        case 3:
        case "OPERATION_STATE_PROGRESS":
            return OperationState.OPERATION_STATE_PROGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OperationState.UNRECOGNIZED;
    }
}
exports.operationStateFromJSON = operationStateFromJSON;
function operationStateToJSON(object) {
    switch (object) {
        case OperationState.OPERATION_STATE_UNSPECIFIED:
            return "OPERATION_STATE_UNSPECIFIED";
        case OperationState.OPERATION_STATE_EXECUTED:
            return "OPERATION_STATE_EXECUTED";
        case OperationState.OPERATION_STATE_CANCELED:
            return "OPERATION_STATE_CANCELED";
        case OperationState.OPERATION_STATE_PROGRESS:
            return "OPERATION_STATE_PROGRESS";
        case OperationState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.operationStateToJSON = operationStateToJSON;
/** Тип операции. */
var OperationType;
(function (OperationType) {
    /** OPERATION_TYPE_UNSPECIFIED - Тип операции не определён. */
    OperationType[OperationType["OPERATION_TYPE_UNSPECIFIED"] = 0] = "OPERATION_TYPE_UNSPECIFIED";
    /** OPERATION_TYPE_INPUT - Пополнение брокерского счёта. */
    OperationType[OperationType["OPERATION_TYPE_INPUT"] = 1] = "OPERATION_TYPE_INPUT";
    /** OPERATION_TYPE_BOND_TAX - Удержание НДФЛ по купонам. */
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX"] = 2] = "OPERATION_TYPE_BOND_TAX";
    /** OPERATION_TYPE_OUTPUT_SECURITIES - Вывод ЦБ. */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_SECURITIES"] = 3] = "OPERATION_TYPE_OUTPUT_SECURITIES";
    /** OPERATION_TYPE_OVERNIGHT - Доход по сделке РЕПО овернайт. */
    OperationType[OperationType["OPERATION_TYPE_OVERNIGHT"] = 4] = "OPERATION_TYPE_OVERNIGHT";
    /** OPERATION_TYPE_TAX - Удержание налога. */
    OperationType[OperationType["OPERATION_TYPE_TAX"] = 5] = "OPERATION_TYPE_TAX";
    /** OPERATION_TYPE_BOND_REPAYMENT_FULL - Полное погашение облигаций. */
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT_FULL"] = 6] = "OPERATION_TYPE_BOND_REPAYMENT_FULL";
    /** OPERATION_TYPE_SELL_CARD - Продажа ЦБ с карты. */
    OperationType[OperationType["OPERATION_TYPE_SELL_CARD"] = 7] = "OPERATION_TYPE_SELL_CARD";
    /** OPERATION_TYPE_DIVIDEND_TAX - Удержание налога по дивидендам. */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX"] = 8] = "OPERATION_TYPE_DIVIDEND_TAX";
    /** OPERATION_TYPE_OUTPUT - Вывод денежных средств. */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT"] = 9] = "OPERATION_TYPE_OUTPUT";
    /** OPERATION_TYPE_BOND_REPAYMENT - Частичное погашение облигаций. */
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT"] = 10] = "OPERATION_TYPE_BOND_REPAYMENT";
    /** OPERATION_TYPE_TAX_CORRECTION - Корректировка налога. */
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION"] = 11] = "OPERATION_TYPE_TAX_CORRECTION";
    /** OPERATION_TYPE_SERVICE_FEE - Удержание комиссии за обслуживание брокерского счёта. */
    OperationType[OperationType["OPERATION_TYPE_SERVICE_FEE"] = 12] = "OPERATION_TYPE_SERVICE_FEE";
    /** OPERATION_TYPE_BENEFIT_TAX - Удержание налога за материальную выгоду. */
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX"] = 13] = "OPERATION_TYPE_BENEFIT_TAX";
    /** OPERATION_TYPE_MARGIN_FEE - Удержание комиссии за непокрытую позицию. */
    OperationType[OperationType["OPERATION_TYPE_MARGIN_FEE"] = 14] = "OPERATION_TYPE_MARGIN_FEE";
    /** OPERATION_TYPE_BUY - Покупка ЦБ. */
    OperationType[OperationType["OPERATION_TYPE_BUY"] = 15] = "OPERATION_TYPE_BUY";
    /** OPERATION_TYPE_BUY_CARD - Покупка ЦБ с карты. */
    OperationType[OperationType["OPERATION_TYPE_BUY_CARD"] = 16] = "OPERATION_TYPE_BUY_CARD";
    /** OPERATION_TYPE_INPUT_SECURITIES - Перевод ценных бумаг из другого депозитария. */
    OperationType[OperationType["OPERATION_TYPE_INPUT_SECURITIES"] = 17] = "OPERATION_TYPE_INPUT_SECURITIES";
    /** OPERATION_TYPE_SELL_MARGIN - Продажа в результате Margin-call. */
    OperationType[OperationType["OPERATION_TYPE_SELL_MARGIN"] = 18] = "OPERATION_TYPE_SELL_MARGIN";
    /** OPERATION_TYPE_BROKER_FEE - Удержание комиссии за операцию. */
    OperationType[OperationType["OPERATION_TYPE_BROKER_FEE"] = 19] = "OPERATION_TYPE_BROKER_FEE";
    /** OPERATION_TYPE_BUY_MARGIN - Покупка в результате Margin-call. */
    OperationType[OperationType["OPERATION_TYPE_BUY_MARGIN"] = 20] = "OPERATION_TYPE_BUY_MARGIN";
    /** OPERATION_TYPE_DIVIDEND - Выплата дивидендов. */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND"] = 21] = "OPERATION_TYPE_DIVIDEND";
    /** OPERATION_TYPE_SELL - Продажа ЦБ. */
    OperationType[OperationType["OPERATION_TYPE_SELL"] = 22] = "OPERATION_TYPE_SELL";
    /** OPERATION_TYPE_COUPON - Выплата купонов. */
    OperationType[OperationType["OPERATION_TYPE_COUPON"] = 23] = "OPERATION_TYPE_COUPON";
    /** OPERATION_TYPE_SUCCESS_FEE - Удержание комиссии SuccessFee. */
    OperationType[OperationType["OPERATION_TYPE_SUCCESS_FEE"] = 24] = "OPERATION_TYPE_SUCCESS_FEE";
    /** OPERATION_TYPE_DIVIDEND_TRANSFER - Передача дивидендного дохода. */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TRANSFER"] = 25] = "OPERATION_TYPE_DIVIDEND_TRANSFER";
    /** OPERATION_TYPE_ACCRUING_VARMARGIN - Зачисление вариационной маржи. */
    OperationType[OperationType["OPERATION_TYPE_ACCRUING_VARMARGIN"] = 26] = "OPERATION_TYPE_ACCRUING_VARMARGIN";
    /** OPERATION_TYPE_WRITING_OFF_VARMARGIN - Списание вариационной маржи. */
    OperationType[OperationType["OPERATION_TYPE_WRITING_OFF_VARMARGIN"] = 27] = "OPERATION_TYPE_WRITING_OFF_VARMARGIN";
    /** OPERATION_TYPE_DELIVERY_BUY - Покупка в рамках экспирации фьючерсного контракта. */
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_BUY"] = 28] = "OPERATION_TYPE_DELIVERY_BUY";
    /** OPERATION_TYPE_DELIVERY_SELL - Продажа в рамках экспирации фьючерсного контракта. */
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_SELL"] = 29] = "OPERATION_TYPE_DELIVERY_SELL";
    /** OPERATION_TYPE_TRACK_MFEE - Комиссия за управление по счёту автоследования. */
    OperationType[OperationType["OPERATION_TYPE_TRACK_MFEE"] = 30] = "OPERATION_TYPE_TRACK_MFEE";
    /** OPERATION_TYPE_TRACK_PFEE - Комиссия за результат по счёту автоследования. */
    OperationType[OperationType["OPERATION_TYPE_TRACK_PFEE"] = 31] = "OPERATION_TYPE_TRACK_PFEE";
    /** OPERATION_TYPE_TAX_PROGRESSIVE - Удержание налога по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_TAX_PROGRESSIVE"] = 32] = "OPERATION_TYPE_TAX_PROGRESSIVE";
    /** OPERATION_TYPE_BOND_TAX_PROGRESSIVE - Удержание налога по купонам по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX_PROGRESSIVE"] = 33] = "OPERATION_TYPE_BOND_TAX_PROGRESSIVE";
    /** OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE - Удержание налога по дивидендам по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE"] = 34] = "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE";
    /** OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE - Удержание налога за материальную выгоду по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE"] = 35] = "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE";
    /** OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE - Корректировка налога по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE"] = 36] = "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE";
    /** OPERATION_TYPE_TAX_REPO_PROGRESSIVE - Удержание налога за возмещение по сделкам РЕПО по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_PROGRESSIVE"] = 37] = "OPERATION_TYPE_TAX_REPO_PROGRESSIVE";
    /** OPERATION_TYPE_TAX_REPO - Удержание налога за возмещение по сделкам РЕПО. */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO"] = 38] = "OPERATION_TYPE_TAX_REPO";
    /** OPERATION_TYPE_TAX_REPO_HOLD - Удержание налога по сделкам РЕПО. */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD"] = 39] = "OPERATION_TYPE_TAX_REPO_HOLD";
    /** OPERATION_TYPE_TAX_REPO_REFUND - Возврат налога по сделкам РЕПО. */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND"] = 40] = "OPERATION_TYPE_TAX_REPO_REFUND";
    /** OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE - Удержание налога по сделкам РЕПО по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE"] = 41] = "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE";
    /** OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE - Возврат налога по сделкам РЕПО по ставке 15%. */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE"] = 42] = "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE";
    /** OPERATION_TYPE_DIV_EXT - Выплата дивидендов на карту. */
    OperationType[OperationType["OPERATION_TYPE_DIV_EXT"] = 43] = "OPERATION_TYPE_DIV_EXT";
    /** OPERATION_TYPE_TAX_CORRECTION_COUPON - Корректировка налога по купонам. */
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_COUPON"] = 44] = "OPERATION_TYPE_TAX_CORRECTION_COUPON";
    /** OPERATION_TYPE_CASH_FEE - Комиссия за валютный остаток. */
    OperationType[OperationType["OPERATION_TYPE_CASH_FEE"] = 45] = "OPERATION_TYPE_CASH_FEE";
    /** OPERATION_TYPE_OUT_FEE - Комиссия за вывод валюты с брокерского счета. */
    OperationType[OperationType["OPERATION_TYPE_OUT_FEE"] = 46] = "OPERATION_TYPE_OUT_FEE";
    /** OPERATION_TYPE_OUT_STAMP_DUTY - Гербовый сбор. */
    OperationType[OperationType["OPERATION_TYPE_OUT_STAMP_DUTY"] = 47] = "OPERATION_TYPE_OUT_STAMP_DUTY";
    /** OPERATION_TYPE_OUTPUT_SWIFT - SWIFT-перевод */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_SWIFT"] = 50] = "OPERATION_TYPE_OUTPUT_SWIFT";
    /** OPERATION_TYPE_INPUT_SWIFT - SWIFT-перевод */
    OperationType[OperationType["OPERATION_TYPE_INPUT_SWIFT"] = 51] = "OPERATION_TYPE_INPUT_SWIFT";
    /** OPERATION_TYPE_OUTPUT_ACQUIRING - Перевод на карту */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_ACQUIRING"] = 53] = "OPERATION_TYPE_OUTPUT_ACQUIRING";
    /** OPERATION_TYPE_INPUT_ACQUIRING - Перевод с карты */
    OperationType[OperationType["OPERATION_TYPE_INPUT_ACQUIRING"] = 54] = "OPERATION_TYPE_INPUT_ACQUIRING";
    /** OPERATION_TYPE_OUTPUT_PENALTY - Комиссия за вывод средств */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_PENALTY"] = 55] = "OPERATION_TYPE_OUTPUT_PENALTY";
    /** OPERATION_TYPE_ADVICE_FEE - Списание оплаты за сервис Советов */
    OperationType[OperationType["OPERATION_TYPE_ADVICE_FEE"] = 56] = "OPERATION_TYPE_ADVICE_FEE";
    /** OPERATION_TYPE_TRANS_IIS_BS - Перевод ценных бумаг с ИИС на Брокерский счет */
    OperationType[OperationType["OPERATION_TYPE_TRANS_IIS_BS"] = 57] = "OPERATION_TYPE_TRANS_IIS_BS";
    /** OPERATION_TYPE_TRANS_BS_BS - Перевод ценных бумаг с одного брокерского счета на другой */
    OperationType[OperationType["OPERATION_TYPE_TRANS_BS_BS"] = 58] = "OPERATION_TYPE_TRANS_BS_BS";
    /** OPERATION_TYPE_OUT_MULTI - Вывод денежных средств со счета */
    OperationType[OperationType["OPERATION_TYPE_OUT_MULTI"] = 59] = "OPERATION_TYPE_OUT_MULTI";
    /** OPERATION_TYPE_INP_MULTI - Пополнение денежных средств со счета */
    OperationType[OperationType["OPERATION_TYPE_INP_MULTI"] = 60] = "OPERATION_TYPE_INP_MULTI";
    /** OPERATION_TYPE_OVER_PLACEMENT - Размещение биржевого овернайта */
    OperationType[OperationType["OPERATION_TYPE_OVER_PLACEMENT"] = 61] = "OPERATION_TYPE_OVER_PLACEMENT";
    /** OPERATION_TYPE_OVER_COM - Списание комиссии */
    OperationType[OperationType["OPERATION_TYPE_OVER_COM"] = 62] = "OPERATION_TYPE_OVER_COM";
    /** OPERATION_TYPE_OVER_INCOME - Доход от оверанайта */
    OperationType[OperationType["OPERATION_TYPE_OVER_INCOME"] = 63] = "OPERATION_TYPE_OVER_INCOME";
    /** OPERATION_TYPE_OPTION_EXPIRATION - Экспирация */
    OperationType[OperationType["OPERATION_TYPE_OPTION_EXPIRATION"] = 64] = "OPERATION_TYPE_OPTION_EXPIRATION";
    OperationType[OperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
function operationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OPERATION_TYPE_UNSPECIFIED":
            return OperationType.OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "OPERATION_TYPE_INPUT":
            return OperationType.OPERATION_TYPE_INPUT;
        case 2:
        case "OPERATION_TYPE_BOND_TAX":
            return OperationType.OPERATION_TYPE_BOND_TAX;
        case 3:
        case "OPERATION_TYPE_OUTPUT_SECURITIES":
            return OperationType.OPERATION_TYPE_OUTPUT_SECURITIES;
        case 4:
        case "OPERATION_TYPE_OVERNIGHT":
            return OperationType.OPERATION_TYPE_OVERNIGHT;
        case 5:
        case "OPERATION_TYPE_TAX":
            return OperationType.OPERATION_TYPE_TAX;
        case 6:
        case "OPERATION_TYPE_BOND_REPAYMENT_FULL":
            return OperationType.OPERATION_TYPE_BOND_REPAYMENT_FULL;
        case 7:
        case "OPERATION_TYPE_SELL_CARD":
            return OperationType.OPERATION_TYPE_SELL_CARD;
        case 8:
        case "OPERATION_TYPE_DIVIDEND_TAX":
            return OperationType.OPERATION_TYPE_DIVIDEND_TAX;
        case 9:
        case "OPERATION_TYPE_OUTPUT":
            return OperationType.OPERATION_TYPE_OUTPUT;
        case 10:
        case "OPERATION_TYPE_BOND_REPAYMENT":
            return OperationType.OPERATION_TYPE_BOND_REPAYMENT;
        case 11:
        case "OPERATION_TYPE_TAX_CORRECTION":
            return OperationType.OPERATION_TYPE_TAX_CORRECTION;
        case 12:
        case "OPERATION_TYPE_SERVICE_FEE":
            return OperationType.OPERATION_TYPE_SERVICE_FEE;
        case 13:
        case "OPERATION_TYPE_BENEFIT_TAX":
            return OperationType.OPERATION_TYPE_BENEFIT_TAX;
        case 14:
        case "OPERATION_TYPE_MARGIN_FEE":
            return OperationType.OPERATION_TYPE_MARGIN_FEE;
        case 15:
        case "OPERATION_TYPE_BUY":
            return OperationType.OPERATION_TYPE_BUY;
        case 16:
        case "OPERATION_TYPE_BUY_CARD":
            return OperationType.OPERATION_TYPE_BUY_CARD;
        case 17:
        case "OPERATION_TYPE_INPUT_SECURITIES":
            return OperationType.OPERATION_TYPE_INPUT_SECURITIES;
        case 18:
        case "OPERATION_TYPE_SELL_MARGIN":
            return OperationType.OPERATION_TYPE_SELL_MARGIN;
        case 19:
        case "OPERATION_TYPE_BROKER_FEE":
            return OperationType.OPERATION_TYPE_BROKER_FEE;
        case 20:
        case "OPERATION_TYPE_BUY_MARGIN":
            return OperationType.OPERATION_TYPE_BUY_MARGIN;
        case 21:
        case "OPERATION_TYPE_DIVIDEND":
            return OperationType.OPERATION_TYPE_DIVIDEND;
        case 22:
        case "OPERATION_TYPE_SELL":
            return OperationType.OPERATION_TYPE_SELL;
        case 23:
        case "OPERATION_TYPE_COUPON":
            return OperationType.OPERATION_TYPE_COUPON;
        case 24:
        case "OPERATION_TYPE_SUCCESS_FEE":
            return OperationType.OPERATION_TYPE_SUCCESS_FEE;
        case 25:
        case "OPERATION_TYPE_DIVIDEND_TRANSFER":
            return OperationType.OPERATION_TYPE_DIVIDEND_TRANSFER;
        case 26:
        case "OPERATION_TYPE_ACCRUING_VARMARGIN":
            return OperationType.OPERATION_TYPE_ACCRUING_VARMARGIN;
        case 27:
        case "OPERATION_TYPE_WRITING_OFF_VARMARGIN":
            return OperationType.OPERATION_TYPE_WRITING_OFF_VARMARGIN;
        case 28:
        case "OPERATION_TYPE_DELIVERY_BUY":
            return OperationType.OPERATION_TYPE_DELIVERY_BUY;
        case 29:
        case "OPERATION_TYPE_DELIVERY_SELL":
            return OperationType.OPERATION_TYPE_DELIVERY_SELL;
        case 30:
        case "OPERATION_TYPE_TRACK_MFEE":
            return OperationType.OPERATION_TYPE_TRACK_MFEE;
        case 31:
        case "OPERATION_TYPE_TRACK_PFEE":
            return OperationType.OPERATION_TYPE_TRACK_PFEE;
        case 32:
        case "OPERATION_TYPE_TAX_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_TAX_PROGRESSIVE;
        case 33:
        case "OPERATION_TYPE_BOND_TAX_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_BOND_TAX_PROGRESSIVE;
        case 34:
        case "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE;
        case 35:
        case "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE;
        case 36:
        case "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE;
        case 37:
        case "OPERATION_TYPE_TAX_REPO_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_TAX_REPO_PROGRESSIVE;
        case 38:
        case "OPERATION_TYPE_TAX_REPO":
            return OperationType.OPERATION_TYPE_TAX_REPO;
        case 39:
        case "OPERATION_TYPE_TAX_REPO_HOLD":
            return OperationType.OPERATION_TYPE_TAX_REPO_HOLD;
        case 40:
        case "OPERATION_TYPE_TAX_REPO_REFUND":
            return OperationType.OPERATION_TYPE_TAX_REPO_REFUND;
        case 41:
        case "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE;
        case 42:
        case "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE":
            return OperationType.OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE;
        case 43:
        case "OPERATION_TYPE_DIV_EXT":
            return OperationType.OPERATION_TYPE_DIV_EXT;
        case 44:
        case "OPERATION_TYPE_TAX_CORRECTION_COUPON":
            return OperationType.OPERATION_TYPE_TAX_CORRECTION_COUPON;
        case 45:
        case "OPERATION_TYPE_CASH_FEE":
            return OperationType.OPERATION_TYPE_CASH_FEE;
        case 46:
        case "OPERATION_TYPE_OUT_FEE":
            return OperationType.OPERATION_TYPE_OUT_FEE;
        case 47:
        case "OPERATION_TYPE_OUT_STAMP_DUTY":
            return OperationType.OPERATION_TYPE_OUT_STAMP_DUTY;
        case 50:
        case "OPERATION_TYPE_OUTPUT_SWIFT":
            return OperationType.OPERATION_TYPE_OUTPUT_SWIFT;
        case 51:
        case "OPERATION_TYPE_INPUT_SWIFT":
            return OperationType.OPERATION_TYPE_INPUT_SWIFT;
        case 53:
        case "OPERATION_TYPE_OUTPUT_ACQUIRING":
            return OperationType.OPERATION_TYPE_OUTPUT_ACQUIRING;
        case 54:
        case "OPERATION_TYPE_INPUT_ACQUIRING":
            return OperationType.OPERATION_TYPE_INPUT_ACQUIRING;
        case 55:
        case "OPERATION_TYPE_OUTPUT_PENALTY":
            return OperationType.OPERATION_TYPE_OUTPUT_PENALTY;
        case 56:
        case "OPERATION_TYPE_ADVICE_FEE":
            return OperationType.OPERATION_TYPE_ADVICE_FEE;
        case 57:
        case "OPERATION_TYPE_TRANS_IIS_BS":
            return OperationType.OPERATION_TYPE_TRANS_IIS_BS;
        case 58:
        case "OPERATION_TYPE_TRANS_BS_BS":
            return OperationType.OPERATION_TYPE_TRANS_BS_BS;
        case 59:
        case "OPERATION_TYPE_OUT_MULTI":
            return OperationType.OPERATION_TYPE_OUT_MULTI;
        case 60:
        case "OPERATION_TYPE_INP_MULTI":
            return OperationType.OPERATION_TYPE_INP_MULTI;
        case 61:
        case "OPERATION_TYPE_OVER_PLACEMENT":
            return OperationType.OPERATION_TYPE_OVER_PLACEMENT;
        case 62:
        case "OPERATION_TYPE_OVER_COM":
            return OperationType.OPERATION_TYPE_OVER_COM;
        case 63:
        case "OPERATION_TYPE_OVER_INCOME":
            return OperationType.OPERATION_TYPE_OVER_INCOME;
        case 64:
        case "OPERATION_TYPE_OPTION_EXPIRATION":
            return OperationType.OPERATION_TYPE_OPTION_EXPIRATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OperationType.UNRECOGNIZED;
    }
}
exports.operationTypeFromJSON = operationTypeFromJSON;
function operationTypeToJSON(object) {
    switch (object) {
        case OperationType.OPERATION_TYPE_UNSPECIFIED:
            return "OPERATION_TYPE_UNSPECIFIED";
        case OperationType.OPERATION_TYPE_INPUT:
            return "OPERATION_TYPE_INPUT";
        case OperationType.OPERATION_TYPE_BOND_TAX:
            return "OPERATION_TYPE_BOND_TAX";
        case OperationType.OPERATION_TYPE_OUTPUT_SECURITIES:
            return "OPERATION_TYPE_OUTPUT_SECURITIES";
        case OperationType.OPERATION_TYPE_OVERNIGHT:
            return "OPERATION_TYPE_OVERNIGHT";
        case OperationType.OPERATION_TYPE_TAX:
            return "OPERATION_TYPE_TAX";
        case OperationType.OPERATION_TYPE_BOND_REPAYMENT_FULL:
            return "OPERATION_TYPE_BOND_REPAYMENT_FULL";
        case OperationType.OPERATION_TYPE_SELL_CARD:
            return "OPERATION_TYPE_SELL_CARD";
        case OperationType.OPERATION_TYPE_DIVIDEND_TAX:
            return "OPERATION_TYPE_DIVIDEND_TAX";
        case OperationType.OPERATION_TYPE_OUTPUT:
            return "OPERATION_TYPE_OUTPUT";
        case OperationType.OPERATION_TYPE_BOND_REPAYMENT:
            return "OPERATION_TYPE_BOND_REPAYMENT";
        case OperationType.OPERATION_TYPE_TAX_CORRECTION:
            return "OPERATION_TYPE_TAX_CORRECTION";
        case OperationType.OPERATION_TYPE_SERVICE_FEE:
            return "OPERATION_TYPE_SERVICE_FEE";
        case OperationType.OPERATION_TYPE_BENEFIT_TAX:
            return "OPERATION_TYPE_BENEFIT_TAX";
        case OperationType.OPERATION_TYPE_MARGIN_FEE:
            return "OPERATION_TYPE_MARGIN_FEE";
        case OperationType.OPERATION_TYPE_BUY:
            return "OPERATION_TYPE_BUY";
        case OperationType.OPERATION_TYPE_BUY_CARD:
            return "OPERATION_TYPE_BUY_CARD";
        case OperationType.OPERATION_TYPE_INPUT_SECURITIES:
            return "OPERATION_TYPE_INPUT_SECURITIES";
        case OperationType.OPERATION_TYPE_SELL_MARGIN:
            return "OPERATION_TYPE_SELL_MARGIN";
        case OperationType.OPERATION_TYPE_BROKER_FEE:
            return "OPERATION_TYPE_BROKER_FEE";
        case OperationType.OPERATION_TYPE_BUY_MARGIN:
            return "OPERATION_TYPE_BUY_MARGIN";
        case OperationType.OPERATION_TYPE_DIVIDEND:
            return "OPERATION_TYPE_DIVIDEND";
        case OperationType.OPERATION_TYPE_SELL:
            return "OPERATION_TYPE_SELL";
        case OperationType.OPERATION_TYPE_COUPON:
            return "OPERATION_TYPE_COUPON";
        case OperationType.OPERATION_TYPE_SUCCESS_FEE:
            return "OPERATION_TYPE_SUCCESS_FEE";
        case OperationType.OPERATION_TYPE_DIVIDEND_TRANSFER:
            return "OPERATION_TYPE_DIVIDEND_TRANSFER";
        case OperationType.OPERATION_TYPE_ACCRUING_VARMARGIN:
            return "OPERATION_TYPE_ACCRUING_VARMARGIN";
        case OperationType.OPERATION_TYPE_WRITING_OFF_VARMARGIN:
            return "OPERATION_TYPE_WRITING_OFF_VARMARGIN";
        case OperationType.OPERATION_TYPE_DELIVERY_BUY:
            return "OPERATION_TYPE_DELIVERY_BUY";
        case OperationType.OPERATION_TYPE_DELIVERY_SELL:
            return "OPERATION_TYPE_DELIVERY_SELL";
        case OperationType.OPERATION_TYPE_TRACK_MFEE:
            return "OPERATION_TYPE_TRACK_MFEE";
        case OperationType.OPERATION_TYPE_TRACK_PFEE:
            return "OPERATION_TYPE_TRACK_PFEE";
        case OperationType.OPERATION_TYPE_TAX_PROGRESSIVE:
            return "OPERATION_TYPE_TAX_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_BOND_TAX_PROGRESSIVE:
            return "OPERATION_TYPE_BOND_TAX_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE:
            return "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE:
            return "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE:
            return "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_TAX_REPO_PROGRESSIVE:
            return "OPERATION_TYPE_TAX_REPO_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_TAX_REPO:
            return "OPERATION_TYPE_TAX_REPO";
        case OperationType.OPERATION_TYPE_TAX_REPO_HOLD:
            return "OPERATION_TYPE_TAX_REPO_HOLD";
        case OperationType.OPERATION_TYPE_TAX_REPO_REFUND:
            return "OPERATION_TYPE_TAX_REPO_REFUND";
        case OperationType.OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE:
            return "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE:
            return "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE";
        case OperationType.OPERATION_TYPE_DIV_EXT:
            return "OPERATION_TYPE_DIV_EXT";
        case OperationType.OPERATION_TYPE_TAX_CORRECTION_COUPON:
            return "OPERATION_TYPE_TAX_CORRECTION_COUPON";
        case OperationType.OPERATION_TYPE_CASH_FEE:
            return "OPERATION_TYPE_CASH_FEE";
        case OperationType.OPERATION_TYPE_OUT_FEE:
            return "OPERATION_TYPE_OUT_FEE";
        case OperationType.OPERATION_TYPE_OUT_STAMP_DUTY:
            return "OPERATION_TYPE_OUT_STAMP_DUTY";
        case OperationType.OPERATION_TYPE_OUTPUT_SWIFT:
            return "OPERATION_TYPE_OUTPUT_SWIFT";
        case OperationType.OPERATION_TYPE_INPUT_SWIFT:
            return "OPERATION_TYPE_INPUT_SWIFT";
        case OperationType.OPERATION_TYPE_OUTPUT_ACQUIRING:
            return "OPERATION_TYPE_OUTPUT_ACQUIRING";
        case OperationType.OPERATION_TYPE_INPUT_ACQUIRING:
            return "OPERATION_TYPE_INPUT_ACQUIRING";
        case OperationType.OPERATION_TYPE_OUTPUT_PENALTY:
            return "OPERATION_TYPE_OUTPUT_PENALTY";
        case OperationType.OPERATION_TYPE_ADVICE_FEE:
            return "OPERATION_TYPE_ADVICE_FEE";
        case OperationType.OPERATION_TYPE_TRANS_IIS_BS:
            return "OPERATION_TYPE_TRANS_IIS_BS";
        case OperationType.OPERATION_TYPE_TRANS_BS_BS:
            return "OPERATION_TYPE_TRANS_BS_BS";
        case OperationType.OPERATION_TYPE_OUT_MULTI:
            return "OPERATION_TYPE_OUT_MULTI";
        case OperationType.OPERATION_TYPE_INP_MULTI:
            return "OPERATION_TYPE_INP_MULTI";
        case OperationType.OPERATION_TYPE_OVER_PLACEMENT:
            return "OPERATION_TYPE_OVER_PLACEMENT";
        case OperationType.OPERATION_TYPE_OVER_COM:
            return "OPERATION_TYPE_OVER_COM";
        case OperationType.OPERATION_TYPE_OVER_INCOME:
            return "OPERATION_TYPE_OVER_INCOME";
        case OperationType.OPERATION_TYPE_OPTION_EXPIRATION:
            return "OPERATION_TYPE_OPTION_EXPIRATION";
        case OperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.operationTypeToJSON = operationTypeToJSON;
/** Результат подписки. */
var PortfolioSubscriptionStatus;
(function (PortfolioSubscriptionStatus) {
    /** PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED - Тип не определён. */
    PortfolioSubscriptionStatus[PortfolioSubscriptionStatus["PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED"] = 0] = "PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED";
    /** PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
    PortfolioSubscriptionStatus[PortfolioSubscriptionStatus["PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS"] = 1] = "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS";
    /** PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND - Счёт не найден или недостаточно прав. */
    PortfolioSubscriptionStatus[PortfolioSubscriptionStatus["PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND"] = 2] = "PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND";
    /** PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR - Произошла ошибка. */
    PortfolioSubscriptionStatus[PortfolioSubscriptionStatus["PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR"] = 3] = "PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    PortfolioSubscriptionStatus[PortfolioSubscriptionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PortfolioSubscriptionStatus = exports.PortfolioSubscriptionStatus || (exports.PortfolioSubscriptionStatus = {}));
function portfolioSubscriptionStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED":
            return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED;
        case 1:
        case "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS":
            return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS;
        case 2:
        case "PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND":
            return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND;
        case 3:
        case "PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR":
            return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PortfolioSubscriptionStatus.UNRECOGNIZED;
    }
}
exports.portfolioSubscriptionStatusFromJSON = portfolioSubscriptionStatusFromJSON;
function portfolioSubscriptionStatusToJSON(object) {
    switch (object) {
        case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED:
            return "PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED";
        case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS:
            return "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS";
        case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND:
            return "PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND";
        case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR:
            return "PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR";
        case PortfolioSubscriptionStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.portfolioSubscriptionStatusToJSON = portfolioSubscriptionStatusToJSON;
/** Результат подписки. */
var PositionsAccountSubscriptionStatus;
(function (PositionsAccountSubscriptionStatus) {
    /** POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED - Тип не определён. */
    PositionsAccountSubscriptionStatus[PositionsAccountSubscriptionStatus["POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED"] = 0] = "POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED";
    /** POSITIONS_SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
    PositionsAccountSubscriptionStatus[PositionsAccountSubscriptionStatus["POSITIONS_SUBSCRIPTION_STATUS_SUCCESS"] = 1] = "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS";
    /** POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND - Счёт не найден или недостаточно прав. */
    PositionsAccountSubscriptionStatus[PositionsAccountSubscriptionStatus["POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND"] = 2] = "POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND";
    /** POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR - Произошла ошибка. */
    PositionsAccountSubscriptionStatus[PositionsAccountSubscriptionStatus["POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR"] = 3] = "POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    PositionsAccountSubscriptionStatus[PositionsAccountSubscriptionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PositionsAccountSubscriptionStatus = exports.PositionsAccountSubscriptionStatus || (exports.PositionsAccountSubscriptionStatus = {}));
function positionsAccountSubscriptionStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED":
            return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED;
        case 1:
        case "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS":
            return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_SUCCESS;
        case 2:
        case "POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND":
            return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND;
        case 3:
        case "POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR":
            return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PositionsAccountSubscriptionStatus.UNRECOGNIZED;
    }
}
exports.positionsAccountSubscriptionStatusFromJSON = positionsAccountSubscriptionStatusFromJSON;
function positionsAccountSubscriptionStatusToJSON(object) {
    switch (object) {
        case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED:
            return "POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED";
        case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_SUCCESS:
            return "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS";
        case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND:
            return "POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND";
        case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR:
            return "POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR";
        case PositionsAccountSubscriptionStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.positionsAccountSubscriptionStatusToJSON = positionsAccountSubscriptionStatusToJSON;
var PortfolioRequest_CurrencyRequest;
(function (PortfolioRequest_CurrencyRequest) {
    /** RUB - Рубли */
    PortfolioRequest_CurrencyRequest[PortfolioRequest_CurrencyRequest["RUB"] = 0] = "RUB";
    /** USD - Доллары */
    PortfolioRequest_CurrencyRequest[PortfolioRequest_CurrencyRequest["USD"] = 1] = "USD";
    /** EUR - Евро */
    PortfolioRequest_CurrencyRequest[PortfolioRequest_CurrencyRequest["EUR"] = 2] = "EUR";
    PortfolioRequest_CurrencyRequest[PortfolioRequest_CurrencyRequest["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PortfolioRequest_CurrencyRequest = exports.PortfolioRequest_CurrencyRequest || (exports.PortfolioRequest_CurrencyRequest = {}));
function portfolioRequest_CurrencyRequestFromJSON(object) {
    switch (object) {
        case 0:
        case "RUB":
            return PortfolioRequest_CurrencyRequest.RUB;
        case 1:
        case "USD":
            return PortfolioRequest_CurrencyRequest.USD;
        case 2:
        case "EUR":
            return PortfolioRequest_CurrencyRequest.EUR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PortfolioRequest_CurrencyRequest.UNRECOGNIZED;
    }
}
exports.portfolioRequest_CurrencyRequestFromJSON = portfolioRequest_CurrencyRequestFromJSON;
function portfolioRequest_CurrencyRequestToJSON(object) {
    switch (object) {
        case PortfolioRequest_CurrencyRequest.RUB:
            return "RUB";
        case PortfolioRequest_CurrencyRequest.USD:
            return "USD";
        case PortfolioRequest_CurrencyRequest.EUR:
            return "EUR";
        case PortfolioRequest_CurrencyRequest.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.portfolioRequest_CurrencyRequestToJSON = portfolioRequest_CurrencyRequestToJSON;
function createBaseOperationsRequest() {
    return { accountId: "", from: undefined, to: undefined, state: 0, figi: "" };
}
exports.OperationsRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.from !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.figi !== "") {
            writer.uint32(42).string(message.figi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.figi = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
            state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
            figi: isSet(object.figi) ? String(object.figi) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        message.state !== undefined &&
            (obj.state = operationStateToJSON(message.state));
        message.figi !== undefined && (obj.figi = message.figi);
        return obj;
    },
};
function createBaseOperationsResponse() {
    return { operations: [] };
}
exports.OperationsResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.operations) {
            exports.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(exports.Operation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            operations: Array.isArray(object?.operations)
                ? object.operations.map((e) => exports.Operation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? exports.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        return obj;
    },
};
function createBaseOperation() {
    return {
        id: "",
        parentOperationId: "",
        currency: "",
        payment: undefined,
        price: undefined,
        state: 0,
        quantity: 0,
        quantityRest: 0,
        figi: "",
        instrumentType: "",
        date: undefined,
        type: "",
        operationType: 0,
        trades: [],
        assetUid: "",
        positionUid: "",
        instrumentUid: "",
    };
}
exports.Operation = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.parentOperationId !== "") {
            writer.uint32(18).string(message.parentOperationId);
        }
        if (message.currency !== "") {
            writer.uint32(26).string(message.currency);
        }
        if (message.payment !== undefined) {
            common_js_1.MoneyValue.encode(message.payment, writer.uint32(34).fork()).ldelim();
        }
        if (message.price !== undefined) {
            common_js_1.MoneyValue.encode(message.price, writer.uint32(42).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(48).int32(message.state);
        }
        if (message.quantity !== 0) {
            writer.uint32(56).int64(message.quantity);
        }
        if (message.quantityRest !== 0) {
            writer.uint32(64).int64(message.quantityRest);
        }
        if (message.figi !== "") {
            writer.uint32(74).string(message.figi);
        }
        if (message.instrumentType !== "") {
            writer.uint32(82).string(message.instrumentType);
        }
        if (message.date !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(90).fork()).ldelim();
        }
        if (message.type !== "") {
            writer.uint32(98).string(message.type);
        }
        if (message.operationType !== 0) {
            writer.uint32(104).int32(message.operationType);
        }
        for (const v of message.trades) {
            exports.OperationTrade.encode(v, writer.uint32(114).fork()).ldelim();
        }
        if (message.assetUid !== "") {
            writer.uint32(130).string(message.assetUid);
        }
        if (message.positionUid !== "") {
            writer.uint32(138).string(message.positionUid);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(146).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.parentOperationId = reader.string();
                    break;
                case 3:
                    message.currency = reader.string();
                    break;
                case 4:
                    message.payment = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.price = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.state = reader.int32();
                    break;
                case 7:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 8:
                    message.quantityRest = longToNumber(reader.int64());
                    break;
                case 9:
                    message.figi = reader.string();
                    break;
                case 10:
                    message.instrumentType = reader.string();
                    break;
                case 11:
                    message.date = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.type = reader.string();
                    break;
                case 13:
                    message.operationType = reader.int32();
                    break;
                case 14:
                    message.trades.push(exports.OperationTrade.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.assetUid = reader.string();
                    break;
                case 17:
                    message.positionUid = reader.string();
                    break;
                case 18:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            parentOperationId: isSet(object.parentOperationId)
                ? String(object.parentOperationId)
                : "",
            currency: isSet(object.currency) ? String(object.currency) : "",
            payment: isSet(object.payment)
                ? common_js_1.MoneyValue.fromJSON(object.payment)
                : undefined,
            price: isSet(object.price)
                ? common_js_1.MoneyValue.fromJSON(object.price)
                : undefined,
            state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            quantityRest: isSet(object.quantityRest)
                ? Number(object.quantityRest)
                : 0,
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentType: isSet(object.instrumentType)
                ? String(object.instrumentType)
                : "",
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
            type: isSet(object.type) ? String(object.type) : "",
            operationType: isSet(object.operationType)
                ? operationTypeFromJSON(object.operationType)
                : 0,
            trades: Array.isArray(object?.trades)
                ? object.trades.map((e) => exports.OperationTrade.fromJSON(e))
                : [],
            assetUid: isSet(object.assetUid) ? String(object.assetUid) : "",
            positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.parentOperationId !== undefined &&
            (obj.parentOperationId = message.parentOperationId);
        message.currency !== undefined && (obj.currency = message.currency);
        message.payment !== undefined &&
            (obj.payment = message.payment
                ? common_js_1.MoneyValue.toJSON(message.payment)
                : undefined);
        message.price !== undefined &&
            (obj.price = message.price
                ? common_js_1.MoneyValue.toJSON(message.price)
                : undefined);
        message.state !== undefined &&
            (obj.state = operationStateToJSON(message.state));
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.quantityRest !== undefined &&
            (obj.quantityRest = Math.round(message.quantityRest));
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentType !== undefined &&
            (obj.instrumentType = message.instrumentType);
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.type !== undefined && (obj.type = message.type);
        message.operationType !== undefined &&
            (obj.operationType = operationTypeToJSON(message.operationType));
        if (message.trades) {
            obj.trades = message.trades.map((e) => e ? exports.OperationTrade.toJSON(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        message.assetUid !== undefined && (obj.assetUid = message.assetUid);
        message.positionUid !== undefined &&
            (obj.positionUid = message.positionUid);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBaseOperationTrade() {
    return { tradeId: "", dateTime: undefined, quantity: 0, price: undefined };
}
exports.OperationTrade = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.tradeId !== "") {
            writer.uint32(10).string(message.tradeId);
        }
        if (message.dateTime !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.dateTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(24).int64(message.quantity);
        }
        if (message.price !== undefined) {
            common_js_1.MoneyValue.encode(message.price, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeId = reader.string();
                    break;
                case 2:
                    message.dateTime = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 4:
                    message.price = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
            dateTime: isSet(object.dateTime)
                ? fromJsonTimestamp(object.dateTime)
                : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            price: isSet(object.price)
                ? common_js_1.MoneyValue.fromJSON(object.price)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.dateTime !== undefined &&
            (obj.dateTime = message.dateTime.toISOString());
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.price !== undefined &&
            (obj.price = message.price
                ? common_js_1.MoneyValue.toJSON(message.price)
                : undefined);
        return obj;
    },
};
function createBasePortfolioRequest() {
    return { accountId: "", currency: 0 };
}
exports.PortfolioRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.currency !== 0) {
            writer.uint32(16).int32(message.currency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.currency = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            currency: isSet(object.currency)
                ? portfolioRequest_CurrencyRequestFromJSON(object.currency)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.currency !== undefined &&
            (obj.currency = portfolioRequest_CurrencyRequestToJSON(message.currency));
        return obj;
    },
};
function createBasePortfolioResponse() {
    return {
        totalAmountShares: undefined,
        totalAmountBonds: undefined,
        totalAmountEtf: undefined,
        totalAmountCurrencies: undefined,
        totalAmountFutures: undefined,
        expectedYield: undefined,
        positions: [],
        accountId: "",
        totalAmountOptions: undefined,
        totalAmountSp: undefined,
        totalAmountPortfolio: undefined,
        virtualPositions: [],
    };
}
exports.PortfolioResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.totalAmountShares !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountShares, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalAmountBonds !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountBonds, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalAmountEtf !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountEtf, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalAmountCurrencies !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountCurrencies, writer.uint32(34).fork()).ldelim();
        }
        if (message.totalAmountFutures !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountFutures, writer.uint32(42).fork()).ldelim();
        }
        if (message.expectedYield !== undefined) {
            common_js_1.Quotation.encode(message.expectedYield, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.positions) {
            exports.PortfolioPosition.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.accountId !== "") {
            writer.uint32(66).string(message.accountId);
        }
        if (message.totalAmountOptions !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountOptions, writer.uint32(74).fork()).ldelim();
        }
        if (message.totalAmountSp !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountSp, writer.uint32(82).fork()).ldelim();
        }
        if (message.totalAmountPortfolio !== undefined) {
            common_js_1.MoneyValue.encode(message.totalAmountPortfolio, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.virtualPositions) {
            exports.VirtualPortfolioPosition.encode(v, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalAmountShares = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalAmountBonds = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalAmountEtf = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.totalAmountCurrencies = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.totalAmountFutures = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.expectedYield = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.positions.push(exports.PortfolioPosition.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.accountId = reader.string();
                    break;
                case 9:
                    message.totalAmountOptions = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.totalAmountSp = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.totalAmountPortfolio = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.virtualPositions.push(exports.VirtualPortfolioPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            totalAmountShares: isSet(object.totalAmountShares)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountShares)
                : undefined,
            totalAmountBonds: isSet(object.totalAmountBonds)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountBonds)
                : undefined,
            totalAmountEtf: isSet(object.totalAmountEtf)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountEtf)
                : undefined,
            totalAmountCurrencies: isSet(object.totalAmountCurrencies)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountCurrencies)
                : undefined,
            totalAmountFutures: isSet(object.totalAmountFutures)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountFutures)
                : undefined,
            expectedYield: isSet(object.expectedYield)
                ? common_js_1.Quotation.fromJSON(object.expectedYield)
                : undefined,
            positions: Array.isArray(object?.positions)
                ? object.positions.map((e) => exports.PortfolioPosition.fromJSON(e))
                : [],
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            totalAmountOptions: isSet(object.totalAmountOptions)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountOptions)
                : undefined,
            totalAmountSp: isSet(object.totalAmountSp)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountSp)
                : undefined,
            totalAmountPortfolio: isSet(object.totalAmountPortfolio)
                ? common_js_1.MoneyValue.fromJSON(object.totalAmountPortfolio)
                : undefined,
            virtualPositions: Array.isArray(object?.virtualPositions)
                ? object.virtualPositions.map((e) => exports.VirtualPortfolioPosition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalAmountShares !== undefined &&
            (obj.totalAmountShares = message.totalAmountShares
                ? common_js_1.MoneyValue.toJSON(message.totalAmountShares)
                : undefined);
        message.totalAmountBonds !== undefined &&
            (obj.totalAmountBonds = message.totalAmountBonds
                ? common_js_1.MoneyValue.toJSON(message.totalAmountBonds)
                : undefined);
        message.totalAmountEtf !== undefined &&
            (obj.totalAmountEtf = message.totalAmountEtf
                ? common_js_1.MoneyValue.toJSON(message.totalAmountEtf)
                : undefined);
        message.totalAmountCurrencies !== undefined &&
            (obj.totalAmountCurrencies = message.totalAmountCurrencies
                ? common_js_1.MoneyValue.toJSON(message.totalAmountCurrencies)
                : undefined);
        message.totalAmountFutures !== undefined &&
            (obj.totalAmountFutures = message.totalAmountFutures
                ? common_js_1.MoneyValue.toJSON(message.totalAmountFutures)
                : undefined);
        message.expectedYield !== undefined &&
            (obj.expectedYield = message.expectedYield
                ? common_js_1.Quotation.toJSON(message.expectedYield)
                : undefined);
        if (message.positions) {
            obj.positions = message.positions.map((e) => e ? exports.PortfolioPosition.toJSON(e) : undefined);
        }
        else {
            obj.positions = [];
        }
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.totalAmountOptions !== undefined &&
            (obj.totalAmountOptions = message.totalAmountOptions
                ? common_js_1.MoneyValue.toJSON(message.totalAmountOptions)
                : undefined);
        message.totalAmountSp !== undefined &&
            (obj.totalAmountSp = message.totalAmountSp
                ? common_js_1.MoneyValue.toJSON(message.totalAmountSp)
                : undefined);
        message.totalAmountPortfolio !== undefined &&
            (obj.totalAmountPortfolio = message.totalAmountPortfolio
                ? common_js_1.MoneyValue.toJSON(message.totalAmountPortfolio)
                : undefined);
        if (message.virtualPositions) {
            obj.virtualPositions = message.virtualPositions.map((e) => e ? exports.VirtualPortfolioPosition.toJSON(e) : undefined);
        }
        else {
            obj.virtualPositions = [];
        }
        return obj;
    },
};
function createBasePositionsRequest() {
    return { accountId: "" };
}
exports.PositionsRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
};
function createBasePositionsResponse() {
    return {
        money: [],
        blocked: [],
        securities: [],
        limitsLoadingInProgress: false,
        futures: [],
        options: [],
    };
}
exports.PositionsResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.money) {
            common_js_1.MoneyValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.blocked) {
            common_js_1.MoneyValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.securities) {
            exports.PositionsSecurities.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.limitsLoadingInProgress === true) {
            writer.uint32(32).bool(message.limitsLoadingInProgress);
        }
        for (const v of message.futures) {
            exports.PositionsFutures.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.options) {
            exports.PositionsOptions.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.money.push(common_js_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.blocked.push(common_js_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.securities.push(exports.PositionsSecurities.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.limitsLoadingInProgress = reader.bool();
                    break;
                case 5:
                    message.futures.push(exports.PositionsFutures.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.options.push(exports.PositionsOptions.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            money: Array.isArray(object?.money)
                ? object.money.map((e) => common_js_1.MoneyValue.fromJSON(e))
                : [],
            blocked: Array.isArray(object?.blocked)
                ? object.blocked.map((e) => common_js_1.MoneyValue.fromJSON(e))
                : [],
            securities: Array.isArray(object?.securities)
                ? object.securities.map((e) => exports.PositionsSecurities.fromJSON(e))
                : [],
            limitsLoadingInProgress: isSet(object.limitsLoadingInProgress)
                ? Boolean(object.limitsLoadingInProgress)
                : false,
            futures: Array.isArray(object?.futures)
                ? object.futures.map((e) => exports.PositionsFutures.fromJSON(e))
                : [],
            options: Array.isArray(object?.options)
                ? object.options.map((e) => exports.PositionsOptions.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.money) {
            obj.money = message.money.map((e) => e ? common_js_1.MoneyValue.toJSON(e) : undefined);
        }
        else {
            obj.money = [];
        }
        if (message.blocked) {
            obj.blocked = message.blocked.map((e) => e ? common_js_1.MoneyValue.toJSON(e) : undefined);
        }
        else {
            obj.blocked = [];
        }
        if (message.securities) {
            obj.securities = message.securities.map((e) => e ? exports.PositionsSecurities.toJSON(e) : undefined);
        }
        else {
            obj.securities = [];
        }
        message.limitsLoadingInProgress !== undefined &&
            (obj.limitsLoadingInProgress = message.limitsLoadingInProgress);
        if (message.futures) {
            obj.futures = message.futures.map((e) => e ? exports.PositionsFutures.toJSON(e) : undefined);
        }
        else {
            obj.futures = [];
        }
        if (message.options) {
            obj.options = message.options.map((e) => e ? exports.PositionsOptions.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
};
function createBaseWithdrawLimitsRequest() {
    return { accountId: "" };
}
exports.WithdrawLimitsRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawLimitsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
};
function createBaseWithdrawLimitsResponse() {
    return { money: [], blocked: [], blockedGuarantee: [] };
}
exports.WithdrawLimitsResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.money) {
            common_js_1.MoneyValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.blocked) {
            common_js_1.MoneyValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.blockedGuarantee) {
            common_js_1.MoneyValue.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawLimitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.money.push(common_js_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.blocked.push(common_js_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.blockedGuarantee.push(common_js_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            money: Array.isArray(object?.money)
                ? object.money.map((e) => common_js_1.MoneyValue.fromJSON(e))
                : [],
            blocked: Array.isArray(object?.blocked)
                ? object.blocked.map((e) => common_js_1.MoneyValue.fromJSON(e))
                : [],
            blockedGuarantee: Array.isArray(object?.blockedGuarantee)
                ? object.blockedGuarantee.map((e) => common_js_1.MoneyValue.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.money) {
            obj.money = message.money.map((e) => e ? common_js_1.MoneyValue.toJSON(e) : undefined);
        }
        else {
            obj.money = [];
        }
        if (message.blocked) {
            obj.blocked = message.blocked.map((e) => e ? common_js_1.MoneyValue.toJSON(e) : undefined);
        }
        else {
            obj.blocked = [];
        }
        if (message.blockedGuarantee) {
            obj.blockedGuarantee = message.blockedGuarantee.map((e) => e ? common_js_1.MoneyValue.toJSON(e) : undefined);
        }
        else {
            obj.blockedGuarantee = [];
        }
        return obj;
    },
};
function createBasePortfolioPosition() {
    return {
        figi: "",
        instrumentType: "",
        quantity: undefined,
        averagePositionPrice: undefined,
        expectedYield: undefined,
        currentNkd: undefined,
        averagePositionPricePt: undefined,
        currentPrice: undefined,
        averagePositionPriceFifo: undefined,
        quantityLots: undefined,
        blocked: false,
        blockedLots: undefined,
        positionUid: "",
        instrumentUid: "",
        varMargin: undefined,
        expectedYieldFifo: undefined,
    };
}
exports.PortfolioPosition = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.instrumentType !== "") {
            writer.uint32(18).string(message.instrumentType);
        }
        if (message.quantity !== undefined) {
            common_js_1.Quotation.encode(message.quantity, writer.uint32(26).fork()).ldelim();
        }
        if (message.averagePositionPrice !== undefined) {
            common_js_1.MoneyValue.encode(message.averagePositionPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.expectedYield !== undefined) {
            common_js_1.Quotation.encode(message.expectedYield, writer.uint32(42).fork()).ldelim();
        }
        if (message.currentNkd !== undefined) {
            common_js_1.MoneyValue.encode(message.currentNkd, writer.uint32(50).fork()).ldelim();
        }
        if (message.averagePositionPricePt !== undefined) {
            common_js_1.Quotation.encode(message.averagePositionPricePt, writer.uint32(58).fork()).ldelim();
        }
        if (message.currentPrice !== undefined) {
            common_js_1.MoneyValue.encode(message.currentPrice, writer.uint32(66).fork()).ldelim();
        }
        if (message.averagePositionPriceFifo !== undefined) {
            common_js_1.MoneyValue.encode(message.averagePositionPriceFifo, writer.uint32(74).fork()).ldelim();
        }
        if (message.quantityLots !== undefined) {
            common_js_1.Quotation.encode(message.quantityLots, writer.uint32(82).fork()).ldelim();
        }
        if (message.blocked === true) {
            writer.uint32(168).bool(message.blocked);
        }
        if (message.blockedLots !== undefined) {
            common_js_1.Quotation.encode(message.blockedLots, writer.uint32(178).fork()).ldelim();
        }
        if (message.positionUid !== "") {
            writer.uint32(194).string(message.positionUid);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(202).string(message.instrumentUid);
        }
        if (message.varMargin !== undefined) {
            common_js_1.MoneyValue.encode(message.varMargin, writer.uint32(210).fork()).ldelim();
        }
        if (message.expectedYieldFifo !== undefined) {
            common_js_1.Quotation.encode(message.expectedYieldFifo, writer.uint32(218).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.instrumentType = reader.string();
                    break;
                case 3:
                    message.quantity = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.averagePositionPrice = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.expectedYield = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.currentNkd = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.averagePositionPricePt = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.currentPrice = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.averagePositionPriceFifo = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.quantityLots = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.blocked = reader.bool();
                    break;
                case 22:
                    message.blockedLots = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.positionUid = reader.string();
                    break;
                case 25:
                    message.instrumentUid = reader.string();
                    break;
                case 26:
                    message.varMargin = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.expectedYieldFifo = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentType: isSet(object.instrumentType)
                ? String(object.instrumentType)
                : "",
            quantity: isSet(object.quantity)
                ? common_js_1.Quotation.fromJSON(object.quantity)
                : undefined,
            averagePositionPrice: isSet(object.averagePositionPrice)
                ? common_js_1.MoneyValue.fromJSON(object.averagePositionPrice)
                : undefined,
            expectedYield: isSet(object.expectedYield)
                ? common_js_1.Quotation.fromJSON(object.expectedYield)
                : undefined,
            currentNkd: isSet(object.currentNkd)
                ? common_js_1.MoneyValue.fromJSON(object.currentNkd)
                : undefined,
            averagePositionPricePt: isSet(object.averagePositionPricePt)
                ? common_js_1.Quotation.fromJSON(object.averagePositionPricePt)
                : undefined,
            currentPrice: isSet(object.currentPrice)
                ? common_js_1.MoneyValue.fromJSON(object.currentPrice)
                : undefined,
            averagePositionPriceFifo: isSet(object.averagePositionPriceFifo)
                ? common_js_1.MoneyValue.fromJSON(object.averagePositionPriceFifo)
                : undefined,
            quantityLots: isSet(object.quantityLots)
                ? common_js_1.Quotation.fromJSON(object.quantityLots)
                : undefined,
            blocked: isSet(object.blocked) ? Boolean(object.blocked) : false,
            blockedLots: isSet(object.blockedLots)
                ? common_js_1.Quotation.fromJSON(object.blockedLots)
                : undefined,
            positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
            varMargin: isSet(object.varMargin)
                ? common_js_1.MoneyValue.fromJSON(object.varMargin)
                : undefined,
            expectedYieldFifo: isSet(object.expectedYieldFifo)
                ? common_js_1.Quotation.fromJSON(object.expectedYieldFifo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentType !== undefined &&
            (obj.instrumentType = message.instrumentType);
        message.quantity !== undefined &&
            (obj.quantity = message.quantity
                ? common_js_1.Quotation.toJSON(message.quantity)
                : undefined);
        message.averagePositionPrice !== undefined &&
            (obj.averagePositionPrice = message.averagePositionPrice
                ? common_js_1.MoneyValue.toJSON(message.averagePositionPrice)
                : undefined);
        message.expectedYield !== undefined &&
            (obj.expectedYield = message.expectedYield
                ? common_js_1.Quotation.toJSON(message.expectedYield)
                : undefined);
        message.currentNkd !== undefined &&
            (obj.currentNkd = message.currentNkd
                ? common_js_1.MoneyValue.toJSON(message.currentNkd)
                : undefined);
        message.averagePositionPricePt !== undefined &&
            (obj.averagePositionPricePt = message.averagePositionPricePt
                ? common_js_1.Quotation.toJSON(message.averagePositionPricePt)
                : undefined);
        message.currentPrice !== undefined &&
            (obj.currentPrice = message.currentPrice
                ? common_js_1.MoneyValue.toJSON(message.currentPrice)
                : undefined);
        message.averagePositionPriceFifo !== undefined &&
            (obj.averagePositionPriceFifo = message.averagePositionPriceFifo
                ? common_js_1.MoneyValue.toJSON(message.averagePositionPriceFifo)
                : undefined);
        message.quantityLots !== undefined &&
            (obj.quantityLots = message.quantityLots
                ? common_js_1.Quotation.toJSON(message.quantityLots)
                : undefined);
        message.blocked !== undefined && (obj.blocked = message.blocked);
        message.blockedLots !== undefined &&
            (obj.blockedLots = message.blockedLots
                ? common_js_1.Quotation.toJSON(message.blockedLots)
                : undefined);
        message.positionUid !== undefined &&
            (obj.positionUid = message.positionUid);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        message.varMargin !== undefined &&
            (obj.varMargin = message.varMargin
                ? common_js_1.MoneyValue.toJSON(message.varMargin)
                : undefined);
        message.expectedYieldFifo !== undefined &&
            (obj.expectedYieldFifo = message.expectedYieldFifo
                ? common_js_1.Quotation.toJSON(message.expectedYieldFifo)
                : undefined);
        return obj;
    },
};
function createBaseVirtualPortfolioPosition() {
    return {
        positionUid: "",
        instrumentUid: "",
        figi: "",
        instrumentType: "",
        quantity: undefined,
        averagePositionPrice: undefined,
        expectedYield: undefined,
        expectedYieldFifo: undefined,
        expireDate: undefined,
        currentPrice: undefined,
        averagePositionPriceFifo: undefined,
    };
}
exports.VirtualPortfolioPosition = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.positionUid !== "") {
            writer.uint32(10).string(message.positionUid);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(18).string(message.instrumentUid);
        }
        if (message.figi !== "") {
            writer.uint32(26).string(message.figi);
        }
        if (message.instrumentType !== "") {
            writer.uint32(34).string(message.instrumentType);
        }
        if (message.quantity !== undefined) {
            common_js_1.Quotation.encode(message.quantity, writer.uint32(42).fork()).ldelim();
        }
        if (message.averagePositionPrice !== undefined) {
            common_js_1.MoneyValue.encode(message.averagePositionPrice, writer.uint32(50).fork()).ldelim();
        }
        if (message.expectedYield !== undefined) {
            common_js_1.Quotation.encode(message.expectedYield, writer.uint32(58).fork()).ldelim();
        }
        if (message.expectedYieldFifo !== undefined) {
            common_js_1.Quotation.encode(message.expectedYieldFifo, writer.uint32(66).fork()).ldelim();
        }
        if (message.expireDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expireDate), writer.uint32(74).fork()).ldelim();
        }
        if (message.currentPrice !== undefined) {
            common_js_1.MoneyValue.encode(message.currentPrice, writer.uint32(82).fork()).ldelim();
        }
        if (message.averagePositionPriceFifo !== undefined) {
            common_js_1.MoneyValue.encode(message.averagePositionPriceFifo, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVirtualPortfolioPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionUid = reader.string();
                    break;
                case 2:
                    message.instrumentUid = reader.string();
                    break;
                case 3:
                    message.figi = reader.string();
                    break;
                case 4:
                    message.instrumentType = reader.string();
                    break;
                case 5:
                    message.quantity = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.averagePositionPrice = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.expectedYield = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.expectedYieldFifo = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.expireDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.currentPrice = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.averagePositionPriceFifo = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentType: isSet(object.instrumentType)
                ? String(object.instrumentType)
                : "",
            quantity: isSet(object.quantity)
                ? common_js_1.Quotation.fromJSON(object.quantity)
                : undefined,
            averagePositionPrice: isSet(object.averagePositionPrice)
                ? common_js_1.MoneyValue.fromJSON(object.averagePositionPrice)
                : undefined,
            expectedYield: isSet(object.expectedYield)
                ? common_js_1.Quotation.fromJSON(object.expectedYield)
                : undefined,
            expectedYieldFifo: isSet(object.expectedYieldFifo)
                ? common_js_1.Quotation.fromJSON(object.expectedYieldFifo)
                : undefined,
            expireDate: isSet(object.expireDate)
                ? fromJsonTimestamp(object.expireDate)
                : undefined,
            currentPrice: isSet(object.currentPrice)
                ? common_js_1.MoneyValue.fromJSON(object.currentPrice)
                : undefined,
            averagePositionPriceFifo: isSet(object.averagePositionPriceFifo)
                ? common_js_1.MoneyValue.fromJSON(object.averagePositionPriceFifo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.positionUid !== undefined &&
            (obj.positionUid = message.positionUid);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentType !== undefined &&
            (obj.instrumentType = message.instrumentType);
        message.quantity !== undefined &&
            (obj.quantity = message.quantity
                ? common_js_1.Quotation.toJSON(message.quantity)
                : undefined);
        message.averagePositionPrice !== undefined &&
            (obj.averagePositionPrice = message.averagePositionPrice
                ? common_js_1.MoneyValue.toJSON(message.averagePositionPrice)
                : undefined);
        message.expectedYield !== undefined &&
            (obj.expectedYield = message.expectedYield
                ? common_js_1.Quotation.toJSON(message.expectedYield)
                : undefined);
        message.expectedYieldFifo !== undefined &&
            (obj.expectedYieldFifo = message.expectedYieldFifo
                ? common_js_1.Quotation.toJSON(message.expectedYieldFifo)
                : undefined);
        message.expireDate !== undefined &&
            (obj.expireDate = message.expireDate.toISOString());
        message.currentPrice !== undefined &&
            (obj.currentPrice = message.currentPrice
                ? common_js_1.MoneyValue.toJSON(message.currentPrice)
                : undefined);
        message.averagePositionPriceFifo !== undefined &&
            (obj.averagePositionPriceFifo = message.averagePositionPriceFifo
                ? common_js_1.MoneyValue.toJSON(message.averagePositionPriceFifo)
                : undefined);
        return obj;
    },
};
function createBasePositionsSecurities() {
    return {
        figi: "",
        blocked: 0,
        balance: 0,
        positionUid: "",
        instrumentUid: "",
        exchangeBlocked: false,
        instrumentType: "",
    };
}
exports.PositionsSecurities = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.blocked !== 0) {
            writer.uint32(16).int64(message.blocked);
        }
        if (message.balance !== 0) {
            writer.uint32(24).int64(message.balance);
        }
        if (message.positionUid !== "") {
            writer.uint32(34).string(message.positionUid);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(42).string(message.instrumentUid);
        }
        if (message.exchangeBlocked === true) {
            writer.uint32(88).bool(message.exchangeBlocked);
        }
        if (message.instrumentType !== "") {
            writer.uint32(130).string(message.instrumentType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsSecurities();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.blocked = longToNumber(reader.int64());
                    break;
                case 3:
                    message.balance = longToNumber(reader.int64());
                    break;
                case 4:
                    message.positionUid = reader.string();
                    break;
                case 5:
                    message.instrumentUid = reader.string();
                    break;
                case 11:
                    message.exchangeBlocked = reader.bool();
                    break;
                case 16:
                    message.instrumentType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
            balance: isSet(object.balance) ? Number(object.balance) : 0,
            positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
            exchangeBlocked: isSet(object.exchangeBlocked)
                ? Boolean(object.exchangeBlocked)
                : false,
            instrumentType: isSet(object.instrumentType)
                ? String(object.instrumentType)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.blocked !== undefined &&
            (obj.blocked = Math.round(message.blocked));
        message.balance !== undefined &&
            (obj.balance = Math.round(message.balance));
        message.positionUid !== undefined &&
            (obj.positionUid = message.positionUid);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        message.exchangeBlocked !== undefined &&
            (obj.exchangeBlocked = message.exchangeBlocked);
        message.instrumentType !== undefined &&
            (obj.instrumentType = message.instrumentType);
        return obj;
    },
};
function createBasePositionsFutures() {
    return {
        figi: "",
        blocked: 0,
        balance: 0,
        positionUid: "",
        instrumentUid: "",
    };
}
exports.PositionsFutures = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.blocked !== 0) {
            writer.uint32(16).int64(message.blocked);
        }
        if (message.balance !== 0) {
            writer.uint32(24).int64(message.balance);
        }
        if (message.positionUid !== "") {
            writer.uint32(34).string(message.positionUid);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(42).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsFutures();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.blocked = longToNumber(reader.int64());
                    break;
                case 3:
                    message.balance = longToNumber(reader.int64());
                    break;
                case 4:
                    message.positionUid = reader.string();
                    break;
                case 5:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
            balance: isSet(object.balance) ? Number(object.balance) : 0,
            positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.blocked !== undefined &&
            (obj.blocked = Math.round(message.blocked));
        message.balance !== undefined &&
            (obj.balance = Math.round(message.balance));
        message.positionUid !== undefined &&
            (obj.positionUid = message.positionUid);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
function createBasePositionsOptions() {
    return { positionUid: "", instrumentUid: "", blocked: 0, balance: 0 };
}
exports.PositionsOptions = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.positionUid !== "") {
            writer.uint32(10).string(message.positionUid);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(18).string(message.instrumentUid);
        }
        if (message.blocked !== 0) {
            writer.uint32(88).int64(message.blocked);
        }
        if (message.balance !== 0) {
            writer.uint32(168).int64(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionUid = reader.string();
                    break;
                case 2:
                    message.instrumentUid = reader.string();
                    break;
                case 11:
                    message.blocked = longToNumber(reader.int64());
                    break;
                case 21:
                    message.balance = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
            blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
            balance: isSet(object.balance) ? Number(object.balance) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.positionUid !== undefined &&
            (obj.positionUid = message.positionUid);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        message.blocked !== undefined &&
            (obj.blocked = Math.round(message.blocked));
        message.balance !== undefined &&
            (obj.balance = Math.round(message.balance));
        return obj;
    },
};
function createBaseBrokerReportRequest() {
    return {
        generateBrokerReportRequest: undefined,
        getBrokerReportRequest: undefined,
    };
}
exports.BrokerReportRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.generateBrokerReportRequest !== undefined) {
            exports.GenerateBrokerReportRequest.encode(message.generateBrokerReportRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.getBrokerReportRequest !== undefined) {
            exports.GetBrokerReportRequest.encode(message.getBrokerReportRequest, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrokerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateBrokerReportRequest =
                        exports.GenerateBrokerReportRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getBrokerReportRequest = exports.GetBrokerReportRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            generateBrokerReportRequest: isSet(object.generateBrokerReportRequest)
                ? exports.GenerateBrokerReportRequest.fromJSON(object.generateBrokerReportRequest)
                : undefined,
            getBrokerReportRequest: isSet(object.getBrokerReportRequest)
                ? exports.GetBrokerReportRequest.fromJSON(object.getBrokerReportRequest)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateBrokerReportRequest !== undefined &&
            (obj.generateBrokerReportRequest = message.generateBrokerReportRequest
                ? exports.GenerateBrokerReportRequest.toJSON(message.generateBrokerReportRequest)
                : undefined);
        message.getBrokerReportRequest !== undefined &&
            (obj.getBrokerReportRequest = message.getBrokerReportRequest
                ? exports.GetBrokerReportRequest.toJSON(message.getBrokerReportRequest)
                : undefined);
        return obj;
    },
};
function createBaseBrokerReportResponse() {
    return {
        generateBrokerReportResponse: undefined,
        getBrokerReportResponse: undefined,
    };
}
exports.BrokerReportResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.generateBrokerReportResponse !== undefined) {
            exports.GenerateBrokerReportResponse.encode(message.generateBrokerReportResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.getBrokerReportResponse !== undefined) {
            exports.GetBrokerReportResponse.encode(message.getBrokerReportResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrokerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateBrokerReportResponse =
                        exports.GenerateBrokerReportResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getBrokerReportResponse = exports.GetBrokerReportResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            generateBrokerReportResponse: isSet(object.generateBrokerReportResponse)
                ? exports.GenerateBrokerReportResponse.fromJSON(object.generateBrokerReportResponse)
                : undefined,
            getBrokerReportResponse: isSet(object.getBrokerReportResponse)
                ? exports.GetBrokerReportResponse.fromJSON(object.getBrokerReportResponse)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateBrokerReportResponse !== undefined &&
            (obj.generateBrokerReportResponse = message.generateBrokerReportResponse
                ? exports.GenerateBrokerReportResponse.toJSON(message.generateBrokerReportResponse)
                : undefined);
        message.getBrokerReportResponse !== undefined &&
            (obj.getBrokerReportResponse = message.getBrokerReportResponse
                ? exports.GetBrokerReportResponse.toJSON(message.getBrokerReportResponse)
                : undefined);
        return obj;
    },
};
function createBaseGenerateBrokerReportRequest() {
    return { accountId: "", from: undefined, to: undefined };
}
exports.GenerateBrokerReportRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.from !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateBrokerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        return obj;
    },
};
function createBaseGenerateBrokerReportResponse() {
    return { taskId: "" };
}
exports.GenerateBrokerReportResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.taskId !== "") {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateBrokerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            taskId: isSet(object.taskId) ? String(object.taskId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },
};
function createBaseGetBrokerReportRequest() {
    return { taskId: "", page: 0 };
}
exports.GetBrokerReportRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.taskId !== "") {
            writer.uint32(10).string(message.taskId);
        }
        if (message.page !== 0) {
            writer.uint32(16).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBrokerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.page = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            taskId: isSet(object.taskId) ? String(object.taskId) : "",
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
};
function createBaseGetBrokerReportResponse() {
    return { brokerReport: [], itemsCount: 0, pagesCount: 0, page: 0 };
}
exports.GetBrokerReportResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.brokerReport) {
            exports.BrokerReport.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.itemsCount !== 0) {
            writer.uint32(16).int32(message.itemsCount);
        }
        if (message.pagesCount !== 0) {
            writer.uint32(24).int32(message.pagesCount);
        }
        if (message.page !== 0) {
            writer.uint32(32).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBrokerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerReport.push(exports.BrokerReport.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.itemsCount = reader.int32();
                    break;
                case 3:
                    message.pagesCount = reader.int32();
                    break;
                case 4:
                    message.page = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            brokerReport: Array.isArray(object?.brokerReport)
                ? object.brokerReport.map((e) => exports.BrokerReport.fromJSON(e))
                : [],
            itemsCount: isSet(object.itemsCount) ? Number(object.itemsCount) : 0,
            pagesCount: isSet(object.pagesCount) ? Number(object.pagesCount) : 0,
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.brokerReport) {
            obj.brokerReport = message.brokerReport.map((e) => e ? exports.BrokerReport.toJSON(e) : undefined);
        }
        else {
            obj.brokerReport = [];
        }
        message.itemsCount !== undefined &&
            (obj.itemsCount = Math.round(message.itemsCount));
        message.pagesCount !== undefined &&
            (obj.pagesCount = Math.round(message.pagesCount));
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
};
function createBaseBrokerReport() {
    return {
        tradeId: "",
        orderId: "",
        figi: "",
        executeSign: "",
        tradeDatetime: undefined,
        exchange: "",
        classCode: "",
        direction: "",
        name: "",
        ticker: "",
        price: undefined,
        quantity: 0,
        orderAmount: undefined,
        aciValue: undefined,
        totalOrderAmount: undefined,
        brokerCommission: undefined,
        exchangeCommission: undefined,
        exchangeClearingCommission: undefined,
        repoRate: undefined,
        party: "",
        clearValueDate: undefined,
        secValueDate: undefined,
        brokerStatus: "",
        separateAgreementType: "",
        separateAgreementNumber: "",
        separateAgreementDate: "",
        deliveryType: "",
    };
}
exports.BrokerReport = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.tradeId !== "") {
            writer.uint32(10).string(message.tradeId);
        }
        if (message.orderId !== "") {
            writer.uint32(18).string(message.orderId);
        }
        if (message.figi !== "") {
            writer.uint32(26).string(message.figi);
        }
        if (message.executeSign !== "") {
            writer.uint32(34).string(message.executeSign);
        }
        if (message.tradeDatetime !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.tradeDatetime), writer.uint32(42).fork()).ldelim();
        }
        if (message.exchange !== "") {
            writer.uint32(50).string(message.exchange);
        }
        if (message.classCode !== "") {
            writer.uint32(58).string(message.classCode);
        }
        if (message.direction !== "") {
            writer.uint32(66).string(message.direction);
        }
        if (message.name !== "") {
            writer.uint32(74).string(message.name);
        }
        if (message.ticker !== "") {
            writer.uint32(82).string(message.ticker);
        }
        if (message.price !== undefined) {
            common_js_1.MoneyValue.encode(message.price, writer.uint32(90).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(96).int64(message.quantity);
        }
        if (message.orderAmount !== undefined) {
            common_js_1.MoneyValue.encode(message.orderAmount, writer.uint32(106).fork()).ldelim();
        }
        if (message.aciValue !== undefined) {
            common_js_1.Quotation.encode(message.aciValue, writer.uint32(114).fork()).ldelim();
        }
        if (message.totalOrderAmount !== undefined) {
            common_js_1.MoneyValue.encode(message.totalOrderAmount, writer.uint32(122).fork()).ldelim();
        }
        if (message.brokerCommission !== undefined) {
            common_js_1.MoneyValue.encode(message.brokerCommission, writer.uint32(130).fork()).ldelim();
        }
        if (message.exchangeCommission !== undefined) {
            common_js_1.MoneyValue.encode(message.exchangeCommission, writer.uint32(138).fork()).ldelim();
        }
        if (message.exchangeClearingCommission !== undefined) {
            common_js_1.MoneyValue.encode(message.exchangeClearingCommission, writer.uint32(146).fork()).ldelim();
        }
        if (message.repoRate !== undefined) {
            common_js_1.Quotation.encode(message.repoRate, writer.uint32(154).fork()).ldelim();
        }
        if (message.party !== "") {
            writer.uint32(162).string(message.party);
        }
        if (message.clearValueDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.clearValueDate), writer.uint32(170).fork()).ldelim();
        }
        if (message.secValueDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.secValueDate), writer.uint32(178).fork()).ldelim();
        }
        if (message.brokerStatus !== "") {
            writer.uint32(186).string(message.brokerStatus);
        }
        if (message.separateAgreementType !== "") {
            writer.uint32(194).string(message.separateAgreementType);
        }
        if (message.separateAgreementNumber !== "") {
            writer.uint32(202).string(message.separateAgreementNumber);
        }
        if (message.separateAgreementDate !== "") {
            writer.uint32(210).string(message.separateAgreementDate);
        }
        if (message.deliveryType !== "") {
            writer.uint32(218).string(message.deliveryType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrokerReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeId = reader.string();
                    break;
                case 2:
                    message.orderId = reader.string();
                    break;
                case 3:
                    message.figi = reader.string();
                    break;
                case 4:
                    message.executeSign = reader.string();
                    break;
                case 5:
                    message.tradeDatetime = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.exchange = reader.string();
                    break;
                case 7:
                    message.classCode = reader.string();
                    break;
                case 8:
                    message.direction = reader.string();
                    break;
                case 9:
                    message.name = reader.string();
                    break;
                case 10:
                    message.ticker = reader.string();
                    break;
                case 11:
                    message.price = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 13:
                    message.orderAmount = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.aciValue = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.totalOrderAmount = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.brokerCommission = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.exchangeCommission = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.exchangeClearingCommission = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.repoRate = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.party = reader.string();
                    break;
                case 21:
                    message.clearValueDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.secValueDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.brokerStatus = reader.string();
                    break;
                case 24:
                    message.separateAgreementType = reader.string();
                    break;
                case 25:
                    message.separateAgreementNumber = reader.string();
                    break;
                case 26:
                    message.separateAgreementDate = reader.string();
                    break;
                case 27:
                    message.deliveryType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
            orderId: isSet(object.orderId) ? String(object.orderId) : "",
            figi: isSet(object.figi) ? String(object.figi) : "",
            executeSign: isSet(object.executeSign) ? String(object.executeSign) : "",
            tradeDatetime: isSet(object.tradeDatetime)
                ? fromJsonTimestamp(object.tradeDatetime)
                : undefined,
            exchange: isSet(object.exchange) ? String(object.exchange) : "",
            classCode: isSet(object.classCode) ? String(object.classCode) : "",
            direction: isSet(object.direction) ? String(object.direction) : "",
            name: isSet(object.name) ? String(object.name) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            price: isSet(object.price)
                ? common_js_1.MoneyValue.fromJSON(object.price)
                : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            orderAmount: isSet(object.orderAmount)
                ? common_js_1.MoneyValue.fromJSON(object.orderAmount)
                : undefined,
            aciValue: isSet(object.aciValue)
                ? common_js_1.Quotation.fromJSON(object.aciValue)
                : undefined,
            totalOrderAmount: isSet(object.totalOrderAmount)
                ? common_js_1.MoneyValue.fromJSON(object.totalOrderAmount)
                : undefined,
            brokerCommission: isSet(object.brokerCommission)
                ? common_js_1.MoneyValue.fromJSON(object.brokerCommission)
                : undefined,
            exchangeCommission: isSet(object.exchangeCommission)
                ? common_js_1.MoneyValue.fromJSON(object.exchangeCommission)
                : undefined,
            exchangeClearingCommission: isSet(object.exchangeClearingCommission)
                ? common_js_1.MoneyValue.fromJSON(object.exchangeClearingCommission)
                : undefined,
            repoRate: isSet(object.repoRate)
                ? common_js_1.Quotation.fromJSON(object.repoRate)
                : undefined,
            party: isSet(object.party) ? String(object.party) : "",
            clearValueDate: isSet(object.clearValueDate)
                ? fromJsonTimestamp(object.clearValueDate)
                : undefined,
            secValueDate: isSet(object.secValueDate)
                ? fromJsonTimestamp(object.secValueDate)
                : undefined,
            brokerStatus: isSet(object.brokerStatus)
                ? String(object.brokerStatus)
                : "",
            separateAgreementType: isSet(object.separateAgreementType)
                ? String(object.separateAgreementType)
                : "",
            separateAgreementNumber: isSet(object.separateAgreementNumber)
                ? String(object.separateAgreementNumber)
                : "",
            separateAgreementDate: isSet(object.separateAgreementDate)
                ? String(object.separateAgreementDate)
                : "",
            deliveryType: isSet(object.deliveryType)
                ? String(object.deliveryType)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.figi !== undefined && (obj.figi = message.figi);
        message.executeSign !== undefined &&
            (obj.executeSign = message.executeSign);
        message.tradeDatetime !== undefined &&
            (obj.tradeDatetime = message.tradeDatetime.toISOString());
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.direction !== undefined && (obj.direction = message.direction);
        message.name !== undefined && (obj.name = message.name);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.price !== undefined &&
            (obj.price = message.price
                ? common_js_1.MoneyValue.toJSON(message.price)
                : undefined);
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.orderAmount !== undefined &&
            (obj.orderAmount = message.orderAmount
                ? common_js_1.MoneyValue.toJSON(message.orderAmount)
                : undefined);
        message.aciValue !== undefined &&
            (obj.aciValue = message.aciValue
                ? common_js_1.Quotation.toJSON(message.aciValue)
                : undefined);
        message.totalOrderAmount !== undefined &&
            (obj.totalOrderAmount = message.totalOrderAmount
                ? common_js_1.MoneyValue.toJSON(message.totalOrderAmount)
                : undefined);
        message.brokerCommission !== undefined &&
            (obj.brokerCommission = message.brokerCommission
                ? common_js_1.MoneyValue.toJSON(message.brokerCommission)
                : undefined);
        message.exchangeCommission !== undefined &&
            (obj.exchangeCommission = message.exchangeCommission
                ? common_js_1.MoneyValue.toJSON(message.exchangeCommission)
                : undefined);
        message.exchangeClearingCommission !== undefined &&
            (obj.exchangeClearingCommission = message.exchangeClearingCommission
                ? common_js_1.MoneyValue.toJSON(message.exchangeClearingCommission)
                : undefined);
        message.repoRate !== undefined &&
            (obj.repoRate = message.repoRate
                ? common_js_1.Quotation.toJSON(message.repoRate)
                : undefined);
        message.party !== undefined && (obj.party = message.party);
        message.clearValueDate !== undefined &&
            (obj.clearValueDate = message.clearValueDate.toISOString());
        message.secValueDate !== undefined &&
            (obj.secValueDate = message.secValueDate.toISOString());
        message.brokerStatus !== undefined &&
            (obj.brokerStatus = message.brokerStatus);
        message.separateAgreementType !== undefined &&
            (obj.separateAgreementType = message.separateAgreementType);
        message.separateAgreementNumber !== undefined &&
            (obj.separateAgreementNumber = message.separateAgreementNumber);
        message.separateAgreementDate !== undefined &&
            (obj.separateAgreementDate = message.separateAgreementDate);
        message.deliveryType !== undefined &&
            (obj.deliveryType = message.deliveryType);
        return obj;
    },
};
function createBaseGetDividendsForeignIssuerRequest() {
    return {
        generateDivForeignIssuerReport: undefined,
        getDivForeignIssuerReport: undefined,
    };
}
exports.GetDividendsForeignIssuerRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.generateDivForeignIssuerReport !== undefined) {
            exports.GenerateDividendsForeignIssuerReportRequest.encode(message.generateDivForeignIssuerReport, writer.uint32(10).fork()).ldelim();
        }
        if (message.getDivForeignIssuerReport !== undefined) {
            exports.GetDividendsForeignIssuerReportRequest.encode(message.getDivForeignIssuerReport, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateDivForeignIssuerReport =
                        exports.GenerateDividendsForeignIssuerReportRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getDivForeignIssuerReport =
                        exports.GetDividendsForeignIssuerReportRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            generateDivForeignIssuerReport: isSet(object.generateDivForeignIssuerReport)
                ? exports.GenerateDividendsForeignIssuerReportRequest.fromJSON(object.generateDivForeignIssuerReport)
                : undefined,
            getDivForeignIssuerReport: isSet(object.getDivForeignIssuerReport)
                ? exports.GetDividendsForeignIssuerReportRequest.fromJSON(object.getDivForeignIssuerReport)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateDivForeignIssuerReport !== undefined &&
            (obj.generateDivForeignIssuerReport =
                message.generateDivForeignIssuerReport
                    ? exports.GenerateDividendsForeignIssuerReportRequest.toJSON(message.generateDivForeignIssuerReport)
                    : undefined);
        message.getDivForeignIssuerReport !== undefined &&
            (obj.getDivForeignIssuerReport = message.getDivForeignIssuerReport
                ? exports.GetDividendsForeignIssuerReportRequest.toJSON(message.getDivForeignIssuerReport)
                : undefined);
        return obj;
    },
};
function createBaseGetDividendsForeignIssuerResponse() {
    return {
        generateDivForeignIssuerReportResponse: undefined,
        divForeignIssuerReport: undefined,
    };
}
exports.GetDividendsForeignIssuerResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.generateDivForeignIssuerReportResponse !== undefined) {
            exports.GenerateDividendsForeignIssuerReportResponse.encode(message.generateDivForeignIssuerReportResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.divForeignIssuerReport !== undefined) {
            exports.GetDividendsForeignIssuerReportResponse.encode(message.divForeignIssuerReport, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateDivForeignIssuerReportResponse =
                        exports.GenerateDividendsForeignIssuerReportResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.divForeignIssuerReport =
                        exports.GetDividendsForeignIssuerReportResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            generateDivForeignIssuerReportResponse: isSet(object.generateDivForeignIssuerReportResponse)
                ? exports.GenerateDividendsForeignIssuerReportResponse.fromJSON(object.generateDivForeignIssuerReportResponse)
                : undefined,
            divForeignIssuerReport: isSet(object.divForeignIssuerReport)
                ? exports.GetDividendsForeignIssuerReportResponse.fromJSON(object.divForeignIssuerReport)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateDivForeignIssuerReportResponse !== undefined &&
            (obj.generateDivForeignIssuerReportResponse =
                message.generateDivForeignIssuerReportResponse
                    ? exports.GenerateDividendsForeignIssuerReportResponse.toJSON(message.generateDivForeignIssuerReportResponse)
                    : undefined);
        message.divForeignIssuerReport !== undefined &&
            (obj.divForeignIssuerReport = message.divForeignIssuerReport
                ? exports.GetDividendsForeignIssuerReportResponse.toJSON(message.divForeignIssuerReport)
                : undefined);
        return obj;
    },
};
function createBaseGenerateDividendsForeignIssuerReportRequest() {
    return { accountId: "", from: undefined, to: undefined };
}
exports.GenerateDividendsForeignIssuerReportRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.from !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateDividendsForeignIssuerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        return obj;
    },
};
function createBaseGetDividendsForeignIssuerReportRequest() {
    return { taskId: "", page: 0 };
}
exports.GetDividendsForeignIssuerReportRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.taskId !== "") {
            writer.uint32(10).string(message.taskId);
        }
        if (message.page !== 0) {
            writer.uint32(16).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.page = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            taskId: isSet(object.taskId) ? String(object.taskId) : "",
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
};
function createBaseGenerateDividendsForeignIssuerReportResponse() {
    return { taskId: "" };
}
exports.GenerateDividendsForeignIssuerReportResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.taskId !== "") {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateDividendsForeignIssuerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            taskId: isSet(object.taskId) ? String(object.taskId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },
};
function createBaseGetDividendsForeignIssuerReportResponse() {
    return {
        dividendsForeignIssuerReport: [],
        itemsCount: 0,
        pagesCount: 0,
        page: 0,
    };
}
exports.GetDividendsForeignIssuerReportResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.dividendsForeignIssuerReport) {
            exports.DividendsForeignIssuerReport.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.itemsCount !== 0) {
            writer.uint32(16).int32(message.itemsCount);
        }
        if (message.pagesCount !== 0) {
            writer.uint32(24).int32(message.pagesCount);
        }
        if (message.page !== 0) {
            writer.uint32(32).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dividendsForeignIssuerReport.push(exports.DividendsForeignIssuerReport.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.itemsCount = reader.int32();
                    break;
                case 3:
                    message.pagesCount = reader.int32();
                    break;
                case 4:
                    message.page = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            dividendsForeignIssuerReport: Array.isArray(object?.dividendsForeignIssuerReport)
                ? object.dividendsForeignIssuerReport.map((e) => exports.DividendsForeignIssuerReport.fromJSON(e))
                : [],
            itemsCount: isSet(object.itemsCount) ? Number(object.itemsCount) : 0,
            pagesCount: isSet(object.pagesCount) ? Number(object.pagesCount) : 0,
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.dividendsForeignIssuerReport) {
            obj.dividendsForeignIssuerReport =
                message.dividendsForeignIssuerReport.map((e) => e ? exports.DividendsForeignIssuerReport.toJSON(e) : undefined);
        }
        else {
            obj.dividendsForeignIssuerReport = [];
        }
        message.itemsCount !== undefined &&
            (obj.itemsCount = Math.round(message.itemsCount));
        message.pagesCount !== undefined &&
            (obj.pagesCount = Math.round(message.pagesCount));
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
};
function createBaseDividendsForeignIssuerReport() {
    return {
        recordDate: undefined,
        paymentDate: undefined,
        securityName: "",
        isin: "",
        issuerCountry: "",
        quantity: 0,
        dividend: undefined,
        externalCommission: undefined,
        dividendGross: undefined,
        tax: undefined,
        dividendAmount: undefined,
        currency: "",
    };
}
exports.DividendsForeignIssuerReport = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.recordDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.recordDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.paymentDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.securityName !== "") {
            writer.uint32(26).string(message.securityName);
        }
        if (message.isin !== "") {
            writer.uint32(34).string(message.isin);
        }
        if (message.issuerCountry !== "") {
            writer.uint32(42).string(message.issuerCountry);
        }
        if (message.quantity !== 0) {
            writer.uint32(48).int64(message.quantity);
        }
        if (message.dividend !== undefined) {
            common_js_1.Quotation.encode(message.dividend, writer.uint32(58).fork()).ldelim();
        }
        if (message.externalCommission !== undefined) {
            common_js_1.Quotation.encode(message.externalCommission, writer.uint32(66).fork()).ldelim();
        }
        if (message.dividendGross !== undefined) {
            common_js_1.Quotation.encode(message.dividendGross, writer.uint32(74).fork()).ldelim();
        }
        if (message.tax !== undefined) {
            common_js_1.Quotation.encode(message.tax, writer.uint32(82).fork()).ldelim();
        }
        if (message.dividendAmount !== undefined) {
            common_js_1.Quotation.encode(message.dividendAmount, writer.uint32(90).fork()).ldelim();
        }
        if (message.currency !== "") {
            writer.uint32(98).string(message.currency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDividendsForeignIssuerReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recordDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paymentDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.securityName = reader.string();
                    break;
                case 4:
                    message.isin = reader.string();
                    break;
                case 5:
                    message.issuerCountry = reader.string();
                    break;
                case 6:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 7:
                    message.dividend = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.externalCommission = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dividendGross = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.tax = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dividendAmount = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.currency = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            recordDate: isSet(object.recordDate)
                ? fromJsonTimestamp(object.recordDate)
                : undefined,
            paymentDate: isSet(object.paymentDate)
                ? fromJsonTimestamp(object.paymentDate)
                : undefined,
            securityName: isSet(object.securityName)
                ? String(object.securityName)
                : "",
            isin: isSet(object.isin) ? String(object.isin) : "",
            issuerCountry: isSet(object.issuerCountry)
                ? String(object.issuerCountry)
                : "",
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            dividend: isSet(object.dividend)
                ? common_js_1.Quotation.fromJSON(object.dividend)
                : undefined,
            externalCommission: isSet(object.externalCommission)
                ? common_js_1.Quotation.fromJSON(object.externalCommission)
                : undefined,
            dividendGross: isSet(object.dividendGross)
                ? common_js_1.Quotation.fromJSON(object.dividendGross)
                : undefined,
            tax: isSet(object.tax) ? common_js_1.Quotation.fromJSON(object.tax) : undefined,
            dividendAmount: isSet(object.dividendAmount)
                ? common_js_1.Quotation.fromJSON(object.dividendAmount)
                : undefined,
            currency: isSet(object.currency) ? String(object.currency) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.recordDate !== undefined &&
            (obj.recordDate = message.recordDate.toISOString());
        message.paymentDate !== undefined &&
            (obj.paymentDate = message.paymentDate.toISOString());
        message.securityName !== undefined &&
            (obj.securityName = message.securityName);
        message.isin !== undefined && (obj.isin = message.isin);
        message.issuerCountry !== undefined &&
            (obj.issuerCountry = message.issuerCountry);
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.dividend !== undefined &&
            (obj.dividend = message.dividend
                ? common_js_1.Quotation.toJSON(message.dividend)
                : undefined);
        message.externalCommission !== undefined &&
            (obj.externalCommission = message.externalCommission
                ? common_js_1.Quotation.toJSON(message.externalCommission)
                : undefined);
        message.dividendGross !== undefined &&
            (obj.dividendGross = message.dividendGross
                ? common_js_1.Quotation.toJSON(message.dividendGross)
                : undefined);
        message.tax !== undefined &&
            (obj.tax = message.tax ? common_js_1.Quotation.toJSON(message.tax) : undefined);
        message.dividendAmount !== undefined &&
            (obj.dividendAmount = message.dividendAmount
                ? common_js_1.Quotation.toJSON(message.dividendAmount)
                : undefined);
        message.currency !== undefined && (obj.currency = message.currency);
        return obj;
    },
};
function createBasePortfolioStreamRequest() {
    return { accounts: [] };
}
exports.PortfolioStreamRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioStreamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object?.accounts)
                ? object.accounts.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
};
function createBasePortfolioStreamResponse() {
    return { subscriptions: undefined, portfolio: undefined, ping: undefined };
}
exports.PortfolioStreamResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscriptions !== undefined) {
            exports.PortfolioSubscriptionResult.encode(message.subscriptions, writer.uint32(10).fork()).ldelim();
        }
        if (message.portfolio !== undefined) {
            exports.PortfolioResponse.encode(message.portfolio, writer.uint32(18).fork()).ldelim();
        }
        if (message.ping !== undefined) {
            common_js_1.Ping.encode(message.ping, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioStreamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptions = exports.PortfolioSubscriptionResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portfolio = exports.PortfolioResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ping = common_js_1.Ping.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptions: isSet(object.subscriptions)
                ? exports.PortfolioSubscriptionResult.fromJSON(object.subscriptions)
                : undefined,
            portfolio: isSet(object.portfolio)
                ? exports.PortfolioResponse.fromJSON(object.portfolio)
                : undefined,
            ping: isSet(object.ping) ? common_js_1.Ping.fromJSON(object.ping) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptions !== undefined &&
            (obj.subscriptions = message.subscriptions
                ? exports.PortfolioSubscriptionResult.toJSON(message.subscriptions)
                : undefined);
        message.portfolio !== undefined &&
            (obj.portfolio = message.portfolio
                ? exports.PortfolioResponse.toJSON(message.portfolio)
                : undefined);
        message.ping !== undefined &&
            (obj.ping = message.ping ? common_js_1.Ping.toJSON(message.ping) : undefined);
        return obj;
    },
};
function createBasePortfolioSubscriptionResult() {
    return { accounts: [] };
}
exports.PortfolioSubscriptionResult = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.accounts) {
            exports.AccountSubscriptionStatus.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioSubscriptionResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.AccountSubscriptionStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object?.accounts)
                ? object.accounts.map((e) => exports.AccountSubscriptionStatus.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? exports.AccountSubscriptionStatus.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
};
function createBaseAccountSubscriptionStatus() {
    return { accountId: "", subscriptionStatus: 0 };
}
exports.AccountSubscriptionStatus = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(48).int32(message.subscriptionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountSubscriptionStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 6:
                    message.subscriptionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            subscriptionStatus: isSet(object.subscriptionStatus)
                ? portfolioSubscriptionStatusFromJSON(object.subscriptionStatus)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = portfolioSubscriptionStatusToJSON(message.subscriptionStatus));
        return obj;
    },
};
function createBaseGetOperationsByCursorRequest() {
    return {
        accountId: "",
        instrumentId: "",
        from: undefined,
        to: undefined,
        cursor: "",
        limit: 0,
        operationTypes: [],
        state: 0,
        withoutCommissions: false,
        withoutTrades: false,
        withoutOvernights: false,
    };
}
exports.GetOperationsByCursorRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.instrumentId !== "") {
            writer.uint32(18).string(message.instrumentId);
        }
        if (message.from !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(50).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(58).fork()).ldelim();
        }
        if (message.cursor !== "") {
            writer.uint32(90).string(message.cursor);
        }
        if (message.limit !== 0) {
            writer.uint32(96).int32(message.limit);
        }
        writer.uint32(106).fork();
        for (const v of message.operationTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.state !== 0) {
            writer.uint32(112).int32(message.state);
        }
        if (message.withoutCommissions === true) {
            writer.uint32(120).bool(message.withoutCommissions);
        }
        if (message.withoutTrades === true) {
            writer.uint32(128).bool(message.withoutTrades);
        }
        if (message.withoutOvernights === true) {
            writer.uint32(136).bool(message.withoutOvernights);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOperationsByCursorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.instrumentId = reader.string();
                    break;
                case 6:
                    message.from = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.to = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.cursor = reader.string();
                    break;
                case 12:
                    message.limit = reader.int32();
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.operationTypes.push(reader.int32());
                        }
                    }
                    else {
                        message.operationTypes.push(reader.int32());
                    }
                    break;
                case 14:
                    message.state = reader.int32();
                    break;
                case 15:
                    message.withoutCommissions = reader.bool();
                    break;
                case 16:
                    message.withoutTrades = reader.bool();
                    break;
                case 17:
                    message.withoutOvernights = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
            cursor: isSet(object.cursor) ? String(object.cursor) : "",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            operationTypes: Array.isArray(object?.operationTypes)
                ? object.operationTypes.map((e) => operationTypeFromJSON(e))
                : [],
            state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
            withoutCommissions: isSet(object.withoutCommissions)
                ? Boolean(object.withoutCommissions)
                : false,
            withoutTrades: isSet(object.withoutTrades)
                ? Boolean(object.withoutTrades)
                : false,
            withoutOvernights: isSet(object.withoutOvernights)
                ? Boolean(object.withoutOvernights)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        message.cursor !== undefined && (obj.cursor = message.cursor);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        if (message.operationTypes) {
            obj.operationTypes = message.operationTypes.map((e) => operationTypeToJSON(e));
        }
        else {
            obj.operationTypes = [];
        }
        message.state !== undefined &&
            (obj.state = operationStateToJSON(message.state));
        message.withoutCommissions !== undefined &&
            (obj.withoutCommissions = message.withoutCommissions);
        message.withoutTrades !== undefined &&
            (obj.withoutTrades = message.withoutTrades);
        message.withoutOvernights !== undefined &&
            (obj.withoutOvernights = message.withoutOvernights);
        return obj;
    },
};
function createBaseGetOperationsByCursorResponse() {
    return { hasNext: false, nextCursor: "", items: [] };
}
exports.GetOperationsByCursorResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.hasNext === true) {
            writer.uint32(8).bool(message.hasNext);
        }
        if (message.nextCursor !== "") {
            writer.uint32(18).string(message.nextCursor);
        }
        for (const v of message.items) {
            exports.OperationItem.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOperationsByCursorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hasNext = reader.bool();
                    break;
                case 2:
                    message.nextCursor = reader.string();
                    break;
                case 6:
                    message.items.push(exports.OperationItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            hasNext: isSet(object.hasNext) ? Boolean(object.hasNext) : false,
            nextCursor: isSet(object.nextCursor) ? String(object.nextCursor) : "",
            items: Array.isArray(object?.items)
                ? object.items.map((e) => exports.OperationItem.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.hasNext !== undefined && (obj.hasNext = message.hasNext);
        message.nextCursor !== undefined && (obj.nextCursor = message.nextCursor);
        if (message.items) {
            obj.items = message.items.map((e) => e ? exports.OperationItem.toJSON(e) : undefined);
        }
        else {
            obj.items = [];
        }
        return obj;
    },
};
function createBaseOperationItem() {
    return {
        cursor: "",
        brokerAccountId: "",
        id: "",
        parentOperationId: "",
        name: "",
        date: undefined,
        type: 0,
        description: "",
        state: 0,
        instrumentUid: "",
        figi: "",
        instrumentType: "",
        instrumentKind: 0,
        positionUid: "",
        payment: undefined,
        price: undefined,
        commission: undefined,
        yield: undefined,
        yieldRelative: undefined,
        accruedInt: undefined,
        quantity: 0,
        quantityRest: 0,
        quantityDone: 0,
        cancelDateTime: undefined,
        cancelReason: "",
        tradesInfo: undefined,
        assetUid: "",
    };
}
exports.OperationItem = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.cursor !== "") {
            writer.uint32(10).string(message.cursor);
        }
        if (message.brokerAccountId !== "") {
            writer.uint32(50).string(message.brokerAccountId);
        }
        if (message.id !== "") {
            writer.uint32(130).string(message.id);
        }
        if (message.parentOperationId !== "") {
            writer.uint32(138).string(message.parentOperationId);
        }
        if (message.name !== "") {
            writer.uint32(146).string(message.name);
        }
        if (message.date !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(170).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(176).int32(message.type);
        }
        if (message.description !== "") {
            writer.uint32(186).string(message.description);
        }
        if (message.state !== 0) {
            writer.uint32(192).int32(message.state);
        }
        if (message.instrumentUid !== "") {
            writer.uint32(250).string(message.instrumentUid);
        }
        if (message.figi !== "") {
            writer.uint32(258).string(message.figi);
        }
        if (message.instrumentType !== "") {
            writer.uint32(266).string(message.instrumentType);
        }
        if (message.instrumentKind !== 0) {
            writer.uint32(272).int32(message.instrumentKind);
        }
        if (message.positionUid !== "") {
            writer.uint32(282).string(message.positionUid);
        }
        if (message.payment !== undefined) {
            common_js_1.MoneyValue.encode(message.payment, writer.uint32(330).fork()).ldelim();
        }
        if (message.price !== undefined) {
            common_js_1.MoneyValue.encode(message.price, writer.uint32(338).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            common_js_1.MoneyValue.encode(message.commission, writer.uint32(346).fork()).ldelim();
        }
        if (message.yield !== undefined) {
            common_js_1.MoneyValue.encode(message.yield, writer.uint32(354).fork()).ldelim();
        }
        if (message.yieldRelative !== undefined) {
            common_js_1.Quotation.encode(message.yieldRelative, writer.uint32(362).fork()).ldelim();
        }
        if (message.accruedInt !== undefined) {
            common_js_1.MoneyValue.encode(message.accruedInt, writer.uint32(370).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(408).int64(message.quantity);
        }
        if (message.quantityRest !== 0) {
            writer.uint32(416).int64(message.quantityRest);
        }
        if (message.quantityDone !== 0) {
            writer.uint32(424).int64(message.quantityDone);
        }
        if (message.cancelDateTime !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.cancelDateTime), writer.uint32(450).fork()).ldelim();
        }
        if (message.cancelReason !== "") {
            writer.uint32(458).string(message.cancelReason);
        }
        if (message.tradesInfo !== undefined) {
            exports.OperationItemTrades.encode(message.tradesInfo, writer.uint32(490).fork()).ldelim();
        }
        if (message.assetUid !== "") {
            writer.uint32(514).string(message.assetUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cursor = reader.string();
                    break;
                case 6:
                    message.brokerAccountId = reader.string();
                    break;
                case 16:
                    message.id = reader.string();
                    break;
                case 17:
                    message.parentOperationId = reader.string();
                    break;
                case 18:
                    message.name = reader.string();
                    break;
                case 21:
                    message.date = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.type = reader.int32();
                    break;
                case 23:
                    message.description = reader.string();
                    break;
                case 24:
                    message.state = reader.int32();
                    break;
                case 31:
                    message.instrumentUid = reader.string();
                    break;
                case 32:
                    message.figi = reader.string();
                    break;
                case 33:
                    message.instrumentType = reader.string();
                    break;
                case 34:
                    message.instrumentKind = reader.int32();
                    break;
                case 35:
                    message.positionUid = reader.string();
                    break;
                case 41:
                    message.payment = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 42:
                    message.price = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 43:
                    message.commission = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 44:
                    message.yield = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 45:
                    message.yieldRelative = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 46:
                    message.accruedInt = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 51:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 52:
                    message.quantityRest = longToNumber(reader.int64());
                    break;
                case 53:
                    message.quantityDone = longToNumber(reader.int64());
                    break;
                case 56:
                    message.cancelDateTime = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 57:
                    message.cancelReason = reader.string();
                    break;
                case 61:
                    message.tradesInfo = exports.OperationItemTrades.decode(reader, reader.uint32());
                    break;
                case 64:
                    message.assetUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            cursor: isSet(object.cursor) ? String(object.cursor) : "",
            brokerAccountId: isSet(object.brokerAccountId)
                ? String(object.brokerAccountId)
                : "",
            id: isSet(object.id) ? String(object.id) : "",
            parentOperationId: isSet(object.parentOperationId)
                ? String(object.parentOperationId)
                : "",
            name: isSet(object.name) ? String(object.name) : "",
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
            type: isSet(object.type) ? operationTypeFromJSON(object.type) : 0,
            description: isSet(object.description) ? String(object.description) : "",
            state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
            figi: isSet(object.figi) ? String(object.figi) : "",
            instrumentType: isSet(object.instrumentType)
                ? String(object.instrumentType)
                : "",
            instrumentKind: isSet(object.instrumentKind)
                ? (0, common_js_1.instrumentTypeFromJSON)(object.instrumentKind)
                : 0,
            positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
            payment: isSet(object.payment)
                ? common_js_1.MoneyValue.fromJSON(object.payment)
                : undefined,
            price: isSet(object.price)
                ? common_js_1.MoneyValue.fromJSON(object.price)
                : undefined,
            commission: isSet(object.commission)
                ? common_js_1.MoneyValue.fromJSON(object.commission)
                : undefined,
            yield: isSet(object.yield)
                ? common_js_1.MoneyValue.fromJSON(object.yield)
                : undefined,
            yieldRelative: isSet(object.yieldRelative)
                ? common_js_1.Quotation.fromJSON(object.yieldRelative)
                : undefined,
            accruedInt: isSet(object.accruedInt)
                ? common_js_1.MoneyValue.fromJSON(object.accruedInt)
                : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            quantityRest: isSet(object.quantityRest)
                ? Number(object.quantityRest)
                : 0,
            quantityDone: isSet(object.quantityDone)
                ? Number(object.quantityDone)
                : 0,
            cancelDateTime: isSet(object.cancelDateTime)
                ? fromJsonTimestamp(object.cancelDateTime)
                : undefined,
            cancelReason: isSet(object.cancelReason)
                ? String(object.cancelReason)
                : "",
            tradesInfo: isSet(object.tradesInfo)
                ? exports.OperationItemTrades.fromJSON(object.tradesInfo)
                : undefined,
            assetUid: isSet(object.assetUid) ? String(object.assetUid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.cursor !== undefined && (obj.cursor = message.cursor);
        message.brokerAccountId !== undefined &&
            (obj.brokerAccountId = message.brokerAccountId);
        message.id !== undefined && (obj.id = message.id);
        message.parentOperationId !== undefined &&
            (obj.parentOperationId = message.parentOperationId);
        message.name !== undefined && (obj.name = message.name);
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.type !== undefined &&
            (obj.type = operationTypeToJSON(message.type));
        message.description !== undefined &&
            (obj.description = message.description);
        message.state !== undefined &&
            (obj.state = operationStateToJSON(message.state));
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentType !== undefined &&
            (obj.instrumentType = message.instrumentType);
        message.instrumentKind !== undefined &&
            (obj.instrumentKind = (0, common_js_1.instrumentTypeToJSON)(message.instrumentKind));
        message.positionUid !== undefined &&
            (obj.positionUid = message.positionUid);
        message.payment !== undefined &&
            (obj.payment = message.payment
                ? common_js_1.MoneyValue.toJSON(message.payment)
                : undefined);
        message.price !== undefined &&
            (obj.price = message.price
                ? common_js_1.MoneyValue.toJSON(message.price)
                : undefined);
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? common_js_1.MoneyValue.toJSON(message.commission)
                : undefined);
        message.yield !== undefined &&
            (obj.yield = message.yield
                ? common_js_1.MoneyValue.toJSON(message.yield)
                : undefined);
        message.yieldRelative !== undefined &&
            (obj.yieldRelative = message.yieldRelative
                ? common_js_1.Quotation.toJSON(message.yieldRelative)
                : undefined);
        message.accruedInt !== undefined &&
            (obj.accruedInt = message.accruedInt
                ? common_js_1.MoneyValue.toJSON(message.accruedInt)
                : undefined);
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.quantityRest !== undefined &&
            (obj.quantityRest = Math.round(message.quantityRest));
        message.quantityDone !== undefined &&
            (obj.quantityDone = Math.round(message.quantityDone));
        message.cancelDateTime !== undefined &&
            (obj.cancelDateTime = message.cancelDateTime.toISOString());
        message.cancelReason !== undefined &&
            (obj.cancelReason = message.cancelReason);
        message.tradesInfo !== undefined &&
            (obj.tradesInfo = message.tradesInfo
                ? exports.OperationItemTrades.toJSON(message.tradesInfo)
                : undefined);
        message.assetUid !== undefined && (obj.assetUid = message.assetUid);
        return obj;
    },
};
function createBaseOperationItemTrades() {
    return { trades: [] };
}
exports.OperationItemTrades = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.trades) {
            exports.OperationItemTrade.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationItemTrades();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.trades.push(exports.OperationItemTrade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trades: Array.isArray(object?.trades)
                ? object.trades.map((e) => exports.OperationItemTrade.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map((e) => e ? exports.OperationItemTrade.toJSON(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
};
function createBaseOperationItemTrade() {
    return {
        num: "",
        date: undefined,
        quantity: 0,
        price: undefined,
        yield: undefined,
        yieldRelative: undefined,
    };
}
exports.OperationItemTrade = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.num !== "") {
            writer.uint32(10).string(message.num);
        }
        if (message.date !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(50).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(88).int64(message.quantity);
        }
        if (message.price !== undefined) {
            common_js_1.MoneyValue.encode(message.price, writer.uint32(130).fork()).ldelim();
        }
        if (message.yield !== undefined) {
            common_js_1.MoneyValue.encode(message.yield, writer.uint32(170).fork()).ldelim();
        }
        if (message.yieldRelative !== undefined) {
            common_js_1.Quotation.encode(message.yieldRelative, writer.uint32(178).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationItemTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.num = reader.string();
                    break;
                case 6:
                    message.date = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 16:
                    message.price = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.yield = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.yieldRelative = common_js_1.Quotation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            num: isSet(object.num) ? String(object.num) : "",
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            price: isSet(object.price)
                ? common_js_1.MoneyValue.fromJSON(object.price)
                : undefined,
            yield: isSet(object.yield)
                ? common_js_1.MoneyValue.fromJSON(object.yield)
                : undefined,
            yieldRelative: isSet(object.yieldRelative)
                ? common_js_1.Quotation.fromJSON(object.yieldRelative)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.num !== undefined && (obj.num = message.num);
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.price !== undefined &&
            (obj.price = message.price
                ? common_js_1.MoneyValue.toJSON(message.price)
                : undefined);
        message.yield !== undefined &&
            (obj.yield = message.yield
                ? common_js_1.MoneyValue.toJSON(message.yield)
                : undefined);
        message.yieldRelative !== undefined &&
            (obj.yieldRelative = message.yieldRelative
                ? common_js_1.Quotation.toJSON(message.yieldRelative)
                : undefined);
        return obj;
    },
};
function createBasePositionsStreamRequest() {
    return { accounts: [] };
}
exports.PositionsStreamRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsStreamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object?.accounts)
                ? object.accounts.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
};
function createBasePositionsStreamResponse() {
    return { subscriptions: undefined, position: undefined, ping: undefined };
}
exports.PositionsStreamResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.subscriptions !== undefined) {
            exports.PositionsSubscriptionResult.encode(message.subscriptions, writer.uint32(10).fork()).ldelim();
        }
        if (message.position !== undefined) {
            exports.PositionData.encode(message.position, writer.uint32(18).fork()).ldelim();
        }
        if (message.ping !== undefined) {
            common_js_1.Ping.encode(message.ping, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsStreamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptions = exports.PositionsSubscriptionResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.position = exports.PositionData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ping = common_js_1.Ping.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptions: isSet(object.subscriptions)
                ? exports.PositionsSubscriptionResult.fromJSON(object.subscriptions)
                : undefined,
            position: isSet(object.position)
                ? exports.PositionData.fromJSON(object.position)
                : undefined,
            ping: isSet(object.ping) ? common_js_1.Ping.fromJSON(object.ping) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptions !== undefined &&
            (obj.subscriptions = message.subscriptions
                ? exports.PositionsSubscriptionResult.toJSON(message.subscriptions)
                : undefined);
        message.position !== undefined &&
            (obj.position = message.position
                ? exports.PositionData.toJSON(message.position)
                : undefined);
        message.ping !== undefined &&
            (obj.ping = message.ping ? common_js_1.Ping.toJSON(message.ping) : undefined);
        return obj;
    },
};
function createBasePositionsSubscriptionResult() {
    return { accounts: [] };
}
exports.PositionsSubscriptionResult = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.accounts) {
            exports.PositionsSubscriptionStatus.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsSubscriptionResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.PositionsSubscriptionStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object?.accounts)
                ? object.accounts.map((e) => exports.PositionsSubscriptionStatus.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? exports.PositionsSubscriptionStatus.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
};
function createBasePositionsSubscriptionStatus() {
    return { accountId: "", subscriptionStatus: 0 };
}
exports.PositionsSubscriptionStatus = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(48).int32(message.subscriptionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsSubscriptionStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 6:
                    message.subscriptionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            subscriptionStatus: isSet(object.subscriptionStatus)
                ? positionsAccountSubscriptionStatusFromJSON(object.subscriptionStatus)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = positionsAccountSubscriptionStatusToJSON(message.subscriptionStatus));
        return obj;
    },
};
function createBasePositionData() {
    return {
        accountId: "",
        money: [],
        securities: [],
        futures: [],
        options: [],
        date: undefined,
    };
}
exports.PositionData = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        for (const v of message.money) {
            exports.PositionsMoney.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.securities) {
            exports.PositionsSecurities.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.futures) {
            exports.PositionsFutures.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.options) {
            exports.PositionsOptions.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.date !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.money.push(exports.PositionsMoney.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.securities.push(exports.PositionsSecurities.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.futures.push(exports.PositionsFutures.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.options.push(exports.PositionsOptions.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.date = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            money: Array.isArray(object?.money)
                ? object.money.map((e) => exports.PositionsMoney.fromJSON(e))
                : [],
            securities: Array.isArray(object?.securities)
                ? object.securities.map((e) => exports.PositionsSecurities.fromJSON(e))
                : [],
            futures: Array.isArray(object?.futures)
                ? object.futures.map((e) => exports.PositionsFutures.fromJSON(e))
                : [],
            options: Array.isArray(object?.options)
                ? object.options.map((e) => exports.PositionsOptions.fromJSON(e))
                : [],
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        if (message.money) {
            obj.money = message.money.map((e) => e ? exports.PositionsMoney.toJSON(e) : undefined);
        }
        else {
            obj.money = [];
        }
        if (message.securities) {
            obj.securities = message.securities.map((e) => e ? exports.PositionsSecurities.toJSON(e) : undefined);
        }
        else {
            obj.securities = [];
        }
        if (message.futures) {
            obj.futures = message.futures.map((e) => e ? exports.PositionsFutures.toJSON(e) : undefined);
        }
        else {
            obj.futures = [];
        }
        if (message.options) {
            obj.options = message.options.map((e) => e ? exports.PositionsOptions.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        message.date !== undefined && (obj.date = message.date.toISOString());
        return obj;
    },
};
function createBasePositionsMoney() {
    return { availableValue: undefined, blockedValue: undefined };
}
exports.PositionsMoney = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.availableValue !== undefined) {
            common_js_1.MoneyValue.encode(message.availableValue, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockedValue !== undefined) {
            common_js_1.MoneyValue.encode(message.blockedValue, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsMoney();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.availableValue = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockedValue = common_js_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            availableValue: isSet(object.availableValue)
                ? common_js_1.MoneyValue.fromJSON(object.availableValue)
                : undefined,
            blockedValue: isSet(object.blockedValue)
                ? common_js_1.MoneyValue.fromJSON(object.blockedValue)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.availableValue !== undefined &&
            (obj.availableValue = message.availableValue
                ? common_js_1.MoneyValue.toJSON(message.availableValue)
                : undefined);
        message.blockedValue !== undefined &&
            (obj.blockedValue = message.blockedValue
                ? common_js_1.MoneyValue.toJSON(message.blockedValue)
                : undefined);
        return obj;
    },
};
exports.OperationsServiceDefinition = {
    name: "OperationsService",
    fullName: "tinkoff.public.invest.api.contract.v1.OperationsService",
    methods: {
        /**
         * Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
         * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
         */
        getOperations: {
            name: "GetOperations",
            requestType: exports.OperationsRequest,
            requestStream: false,
            responseType: exports.OperationsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения портфеля по счёту. */
        getPortfolio: {
            name: "GetPortfolio",
            requestType: exports.PortfolioRequest,
            requestStream: false,
            responseType: exports.PortfolioResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения списка позиций по счёту. */
        getPositions: {
            name: "GetPositions",
            requestType: exports.PositionsRequest,
            requestStream: false,
            responseType: exports.PositionsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения доступного остатка для вывода средств. */
        getWithdrawLimits: {
            name: "GetWithdrawLimits",
            requestType: exports.WithdrawLimitsRequest,
            requestStream: false,
            responseType: exports.WithdrawLimitsResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения брокерского отчёта. */
        getBrokerReport: {
            name: "GetBrokerReport",
            requestType: exports.BrokerReportRequest,
            requestStream: false,
            responseType: exports.BrokerReportResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения отчёта "Справка о доходах за пределами РФ". */
        getDividendsForeignIssuer: {
            name: "GetDividendsForeignIssuer",
            requestType: exports.GetDividendsForeignIssuerRequest,
            requestStream: false,
            responseType: exports.GetDividendsForeignIssuerResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
         * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
         */
        getOperationsByCursor: {
            name: "GetOperationsByCursor",
            requestType: exports.GetOperationsByCursorRequest,
            requestStream: false,
            responseType: exports.GetOperationsByCursorResponse,
            responseStream: false,
            options: {},
        },
    },
};
exports.OperationsStreamServiceDefinition = {
    name: "OperationsStreamService",
    fullName: "tinkoff.public.invest.api.contract.v1.OperationsStreamService",
    methods: {
        /** Server-side stream обновлений портфеля */
        portfolioStream: {
            name: "PortfolioStream",
            requestType: exports.PortfolioStreamRequest,
            requestStream: false,
            responseType: exports.PortfolioStreamResponse,
            responseStream: true,
            options: {},
        },
        /** Server-side stream обновлений информации по изменению позиций портфеля */
        positionsStream: {
            name: "PositionsStream",
            requestType: exports.PositionsStreamRequest,
            requestStream: false,
            responseType: exports.PositionsStreamResponse,
            responseStream: true,
            options: {},
        },
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=operations.js.map