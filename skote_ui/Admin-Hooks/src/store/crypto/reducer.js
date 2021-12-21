import {
  GET_WALLET_FAIL,
  GET_WALLET_SUCCESS,
  GET_CRYPTO_ORDERS_SUCCESS,
  GET_CRYPTO_ORDERS_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  wallet: {},
  orders: [],
}

const Crypto = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WALLET_SUCCESS:
      return {
        ...state,
        wallet: action.payload,
      }

    case GET_WALLET_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_CRYPTO_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      }

    case GET_CRYPTO_ORDERS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default Crypto
