import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_TASKS } from "./actionTypes"
import { getTasksSuccess, getTasksFail } from "./actions"

//Include Both Helper File with needed methods
import { getTasks } from "helpers/fakebackend_helper"

function* fetchTasks() {
  try {
    const response = yield call(getTasks)
    yield put(getTasksSuccess(response))
  } catch (error) {
    yield put(getTasksFail(error))
  }
}

function* tasksSaga() {
  yield takeEvery(GET_TASKS, fetchTasks)
}

export default tasksSaga
