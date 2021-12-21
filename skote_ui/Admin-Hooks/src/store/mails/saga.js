import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_INBOX_MAILS,
  ADD_NEW_INBOX_MAIL,
  DELETE_INBOX_MAIL,
  GET_STARRED_MAILS,
  GET_IMPORTANT_MAILS,
  GET_DRAFT_MAILS,
  GET_SENT_MAILS,
  GET_TRASH_MAILS,
} from "./actionTypes"

import {
  getInboxMailsSuccess,
  getInboxMailsFail,
  addInboxMailFail,
  addInboxMailSuccess,
  deleteInboxMailSuccess,
  deleteInboxMailFail,
  getStarredMailsSuccess,
  getStarredMailsFail,
  getImportantMailsSuccess,
  getImportantMailsFail,
  getDraftMailsSuccess,
  getDraftMailsFail,
  getSentMailsSuccess,
  getSentMailsFail,
  getTrashMailsSuccess,
  getTrashMailsFail,
} from "./actions"

//Include Both Helper File with needed methods
import {  
  getInboxMails,
  addNewInboxMail,
  deleteInboxMail,
  getStarredMails,
  getImportantMails,
  getDraftMails,
  getSentMails,
  getTrashMails,
} from "helpers/fakebackend_helper"

  function* fetchInboxMails() {
    try {
      const response = yield call(getInboxMails)
      yield put(getInboxMailsSuccess(response))
    } catch (error) {
      yield put(getInboxMailsFail(error))
    }
  }

  function* fetchStarredMails() {
    try {
      const response = yield call(getStarredMails)
      yield put(getStarredMailsSuccess(response))
    } catch (error) {
      yield put(getStarredMailsFail(error))
    }
  }

  function* fetchImportantMails() {
    try {
      const response = yield call(getImportantMails)
      yield put(getImportantMailsSuccess(response))
    } catch (error) {
      yield put(getImportantMailsFail(error))
    }
  }

  function* fetchDraftMails() {
    try {
      const response = yield call(getDraftMails)
      yield put(getDraftMailsSuccess(response))
    } catch (error) {
      yield put(getDraftMailsFail(error))
    }
  }

  function* fetchSentMails() {
    try {
      const response = yield call(getSentMails)
      yield put(getSentMailsSuccess(response))
    } catch (error) {
      yield put(getSentMailsFail(error))
    }
  }

  function* fetchTrashMails() {
    try {
      const response = yield call(getTrashMails)
      yield put(getTrashMailsSuccess(response))
    } catch (error) {
      yield put(getTrashMailsFail(error))
    }
  }
  
  function* onAddNewInboxMail({ payload: inboxmail }) {
    try {
      const response = yield call(addNewInboxMail, inboxmail)
      yield put(addInboxMailSuccess(response))
    } catch (error) {
  
      yield put(addInboxMailFail(error))
    }
  }
  
  function* onDeleteInboxMail({ payload: inboxmail }) {
    try {
      const response = yield call(deleteInboxMail, inboxmail)
      yield put(deleteInboxMailSuccess(response))
    } catch (error) {
      yield put(deleteInboxMailFail(error))
    }
  }

  
  
  function* mailsSaga() {
    yield takeEvery(GET_INBOX_MAILS, fetchInboxMails)
    yield takeEvery(GET_STARRED_MAILS, fetchStarredMails)
    yield takeEvery(GET_IMPORTANT_MAILS, fetchImportantMails)
    yield takeEvery(GET_DRAFT_MAILS, fetchDraftMails)
    yield takeEvery(GET_SENT_MAILS, fetchSentMails)
    yield takeEvery(GET_TRASH_MAILS, fetchTrashMails)
    yield takeEvery(ADD_NEW_INBOX_MAIL, onAddNewInboxMail)
    yield takeEvery(DELETE_INBOX_MAIL, onDeleteInboxMail)
  }

export default mailsSaga