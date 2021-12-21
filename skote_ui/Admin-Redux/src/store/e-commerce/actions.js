import {
  GET_CART_DATA,
  GET_CART_DATA_FAIL,
  GET_CART_DATA_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_FAIL,
  GET_ORDERS_SUCCESS,
  ADD_NEW_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAIL,
  UPDATE_ORDER,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_CUSTOMERS,
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMERS_SUCCESS,
  GET_SHOPS,
  GET_SHOPS_FAIL,
  GET_SHOPS_SUCCESS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  ADD_NEW_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAIL,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAIL,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAIL,
} from "./actionTypes"

export const getProducts = () => ({
  type: GET_PRODUCTS,
})

export const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
})

export const getProductsFail = error => ({
  type: GET_PRODUCTS_FAIL,
  payload: error,
})

export const getProductDetail = productId => ({
  type: GET_PRODUCT_DETAIL,
  productId,
})

export const getProductDetailSuccess = products => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: products,
})

export const getProductDetailFail = error => ({
  type: GET_PRODUCT_DETAIL_FAIL,
  payload: error,
})

export const getOrders = () => ({
  type: GET_ORDERS,
})

export const getOrdersSuccess = orders => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
})

export const getOrdersFail = error => ({
  type: GET_ORDERS_FAIL,
  payload: error,
})

export const addNewOrder = order => ({
  type: ADD_NEW_ORDER,
  payload: order,
})

export const addOrderSuccess = order => ({
  type: ADD_ORDER_SUCCESS,
  payload: order,
})

export const addOrderFail = error => ({
  type: ADD_ORDER_FAIL,
  payload: error,
})

export const updateOrder = order => ({
  type: UPDATE_ORDER,
  payload: order,
})

export const updateOrderSuccess = order => ({
  type: UPDATE_ORDER_SUCCESS,
  payload: order,
})

export const updateOrderFail = error => ({
  type: UPDATE_ORDER_FAIL,
  payload: error,
})

export const deleteOrder = order => ({
  type: DELETE_ORDER,
  payload: order,
})

export const deleteOrderSuccess = order => ({
  type: DELETE_ORDER_SUCCESS,
  payload: order,
})

export const deleteOrderFail = error => ({
  type: DELETE_ORDER_FAIL,
  payload: error,
})

export const getCartData = () => ({
  type: GET_CART_DATA,
})

export const getCartDataSuccess = cartData => ({
  type: GET_CART_DATA_SUCCESS,
  payload: cartData,
})

export const getCartDataFail = error => ({
  type: GET_CART_DATA_FAIL,
  payload: error,
})

export const getCustomers = () => ({
  type: GET_CUSTOMERS,
})

export const getCustomersSuccess = customers => ({
  type: GET_CUSTOMERS_SUCCESS,
  payload: customers,
})

export const getCustomersFail = error => ({
  type: GET_CUSTOMERS_FAIL,
  payload: error,
})

export const getShops = () => ({
  type: GET_SHOPS,
})

export const getShopsSuccess = shops => ({
  type: GET_SHOPS_SUCCESS,
  payload: shops,
})

export const getShopsFail = error => ({
  type: GET_SHOPS_FAIL,
  payload: error,
})

export const addNewCustomer = customer => ({
  type: ADD_NEW_CUSTOMER,
  payload: customer,
})

export const addCustomerSuccess = customer => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer,
})

export const addCustomerFail = error => ({
  type: ADD_CUSTOMER_FAIL,
  payload: error,
})

export const updateCustomer = customer => ({
  type: UPDATE_CUSTOMER,
  payload: customer,
})

export const updateCustomerSuccess = customer => ({
  type: UPDATE_CUSTOMER_SUCCESS,
  payload: customer,
})

export const updateCustomerFail = error => ({
  type: UPDATE_CUSTOMER_FAIL,
  payload: error,
})

export const deleteCustomer = customer => ({
  type: DELETE_CUSTOMER,
  payload: customer,
})

export const deleteCustomerSuccess = customer => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: customer,
})

export const deleteCustomerFail = error => ({
  type: DELETE_CUSTOMER_FAIL,
  payload: error,
})