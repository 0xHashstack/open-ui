import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_INVOICES, GET_INVOICE_DETAIL } from "./actionTypes"
import {
  getInvoicesSuccess,
  getInvoicesFail,
  getInvoiceDetailSuccess,
  getInvoiceDetailFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getInvoices, getInvoiceDetail } from "helpers/fakebackend_helper"

function* fetchInvoices() {
  try {
    const response = yield call(getInvoices)
    yield put(getInvoicesSuccess(response))
  } catch (error) {
    yield put(getInvoicesFail(error))
  }
}

function* fetchInvoiceDetail({ invoiceId }) {
  try {
    const response = yield call(getInvoiceDetail, invoiceId)
    yield put(getInvoiceDetailSuccess(response))
  } catch (error) {
    yield put(getInvoiceDetailFail(error))
  }
}

function* invoiceSaga() {
  yield takeEvery(GET_INVOICES, fetchInvoices)
  yield takeEvery(GET_INVOICE_DETAIL, fetchInvoiceDetail)
}

export default invoiceSaga
