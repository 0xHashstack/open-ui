import { takeEvery, put, call } from "redux-saga/effects"

// Login Redux States
import { FORGET_PASSWORD } from "./actionTypes"
import { userForgetPasswordSuccess, userForgetPasswordError } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeForgetPwd,
  postJwtForgetPwd,
} from "../../../helpers/fakebackend_helper"

const fireBaseBackend = getFirebaseBackend()

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.forgetPassword, user.email)
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtForgetPwd, { email: user.email })
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    } else {
      const response = yield call(postFakeForgetPwd, { email: user.email })
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    }
  } catch (error) {
    yield put(userForgetPasswordError(error))
  }
}

function* forgetPasswordSaga() {
  yield takeEvery(FORGET_PASSWORD, forgetUser)
}

export default forgetPasswordSaga
