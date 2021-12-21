import {
    API_SUCCESS,
    API_FAIL,
    GET_TOP_SELLING_PRODUCT,
    GET_EARNING_DATA
} from "./actionType";

export const apiSuccess = (actionType, data) => ({
    type: API_SUCCESS,
    payload: { actionType, data },
});

export const apiFail = (actionType, error) => ({
    type: API_FAIL,
    payload: { actionType, error },
});

// charts data
export const getTopSellingProduct = (month) => ({
    type: GET_TOP_SELLING_PRODUCT,
    payload: month
});

/** Earning chart data */
export const getEarningChartsData = (month) => ({
    type: GET_EARNING_DATA,
    payload: month
})
