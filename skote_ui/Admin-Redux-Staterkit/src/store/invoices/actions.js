import {
  GET_INVOICES,
  GET_INVOICES_FAIL,
  GET_INVOICES_SUCCESS,
  GET_INVOICE_DETAIL,
  GET_INVOICE_DETAIL_FAIL,
  GET_INVOICE_DETAIL_SUCCESS,
} from "./actionTypes"

export const getInvoices = () => ({
  type: GET_INVOICES,
})

export const getInvoicesSuccess = invoices => ({
  type: GET_INVOICES_SUCCESS,
  payload: invoices,
})

export const getInvoicesFail = error => ({
  type: GET_INVOICES_FAIL,
  payload: error,
})

export const getInvoiceDetail = invoiceId => ({
  type: GET_INVOICE_DETAIL,
  invoiceId,
})

export const getInvoiceDetailSuccess = invoices => ({
  type: GET_INVOICE_DETAIL_SUCCESS,
  payload: invoices,
})

export const getInvoiceDetailFail = error => ({
  type: GET_INVOICE_DETAIL_FAIL,
  payload: error,
})
