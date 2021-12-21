import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_CHARTS_DATA } from "./actionTypes";
import { apiSuccess, apiFail } from "./actions";

//Include Both Helper File with needed methods
import {
    getWeeklyData,
    getYearlyData,
    getMonthlyData
}
    from "../../helpers/fakebackend_helper";

function* getChartsData({ payload: periodType }) {
    try {
        var response;
        if (periodType == "monthly") {
            response = yield call(getWeeklyData, periodType);
        }
        if (periodType == "yearly") {
            response = yield call(getYearlyData, periodType);
        }
        if (periodType == "weekly") {
            response = yield call(getMonthlyData, periodType);
        }

        yield put(apiSuccess(GET_CHARTS_DATA, response));
    } catch (error) {
        yield put(apiFail(GET_CHARTS_DATA, error));
    }
}

export function* watchGetChartsData() {
    yield takeEvery(GET_CHARTS_DATA, getChartsData);
}

function* dashboardSaga() {
    yield all([fork(watchGetChartsData)]);
}

export default dashboardSaga;
