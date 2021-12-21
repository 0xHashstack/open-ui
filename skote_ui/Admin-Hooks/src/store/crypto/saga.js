import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_WALLET, GET_CRYPTO_ORDERS } from "./actionTypes"
import {
  getWalletSuccess,
  getWalletFail,
  getCryptoOrdersSuccess,
  getCryptoOrdersFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getWallet, getCryptoOrder } from "helpers/fakebackend_helper"

function* fetchWallet() {
  try {
    const response = yield call(getWallet)
    yield put(getWalletSuccess(response))
  } catch (error) {
    yield put(getWalletFail(error))
  }
}

function* fetchCrypto() {
  try {
    const response = yield call(getCryptoOrder)
    yield put(getCryptoOrdersSuccess(response))
  } catch (error) {
    yield put(getCryptoOrdersFail(error))
  }
}

function* cryptoSaga() {
  yield takeEvery(GET_WALLET, fetchWallet)
  yield takeEvery(GET_CRYPTO_ORDERS, fetchCrypto)
}

export default cryptoSaga
