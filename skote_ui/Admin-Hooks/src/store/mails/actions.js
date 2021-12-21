import {
  GET_INBOX_MAILS,
  GET_INBOX_MAILS_FAIL,
  GET_INBOX_MAILS_SUCCESS,
  ADD_NEW_INBOX_MAIL,
  ADD_INBOX_MAIL_SUCCESS,
  ADD_INBOX_MAIL_FAIL,
  DELETE_INBOX_MAIL,
  DELETE_INBOX_MAIL_SUCCESS,
  DELETE_INBOX_MAIL_FAIL,
  GET_STARRED_MAILS,
  GET_STARRED_MAILS_FAIL,
  GET_STARRED_MAILS_SUCCESS,
  GET_IMPORTANT_MAILS,
  GET_IMPORTANT_MAILS_FAIL,
  GET_IMPORTANT_MAILS_SUCCESS,
  GET_TRASH_MAILS,
  GET_TRASH_MAILS_FAIL,
  GET_TRASH_MAILS_SUCCESS,
  GET_DRAFT_MAILS,
  GET_DRAFT_MAILS_FAIL,
  GET_DRAFT_MAILS_SUCCESS,
  GET_SENT_MAILS,
  GET_SENT_MAILS_FAIL,
  GET_SENT_MAILS_SUCCESS,
} from "./actionTypes"

export const getInboxMails = () => ({
  type: GET_INBOX_MAILS,
})

export const getInboxMailsSuccess = inboxmails => ({
  type: GET_INBOX_MAILS_SUCCESS,
  payload: inboxmails,
})

export const getInboxMailsFail = error => ({
  type: GET_INBOX_MAILS_FAIL,
  payload: error,
})

export const addNewInboxMail = inboxmail => ({
  type: ADD_NEW_INBOX_MAIL,
  payload: inboxmail,
})

export const addInboxMailSuccess = inboxmail => ({
  type: ADD_INBOX_MAIL_SUCCESS,
  payload: inboxmail,
})

export const addInboxMailFail = error => ({
  type: ADD_INBOX_MAIL_FAIL,
  payload: error,
})

export const deleteInboxMail = inboxmail => ({
  type: DELETE_INBOX_MAIL,
  payload: inboxmail,
})

export const deleteInboxMailSuccess = inboxmail => ({
  type: DELETE_INBOX_MAIL_SUCCESS,
  payload: inboxmail,
})

export const deleteInboxMailFail = error => ({
  type: DELETE_INBOX_MAIL_FAIL,
  payload: error,
})

export const getStarredMails = () => ({
  type: GET_STARRED_MAILS,
})

export const getStarredMailsSuccess = starredmail => ({
  type: GET_STARRED_MAILS_SUCCESS,
  payload: starredmail,
})

export const getStarredMailsFail = error => ({
  type: GET_STARRED_MAILS_FAIL,
  payload: error,
})

export const getImportantMails = () => ({
  type: GET_IMPORTANT_MAILS,
})

export const getImportantMailsSuccess = importantmail => ({
  type: GET_IMPORTANT_MAILS_SUCCESS,
  payload: importantmail,
})

export const getImportantMailsFail = error => ({
  type: GET_IMPORTANT_MAILS_FAIL,
  payload: error,
})

export const getDraftMails = () => ({
  type: GET_DRAFT_MAILS,
})

export const getDraftMailsSuccess = draftmail => ({
  type: GET_DRAFT_MAILS_SUCCESS,
  payload: draftmail,
})

export const getDraftMailsFail = error => ({
  type: GET_DRAFT_MAILS_FAIL,
  payload: error,
})

export const getSentMails = () => ({
  type: GET_SENT_MAILS,
})

export const getSentMailsSuccess = sentmail => ({
  type: GET_SENT_MAILS_SUCCESS,
  payload: sentmail,
})

export const getSentMailsFail = error => ({
  type: GET_SENT_MAILS_FAIL,
  payload: error,
})

export const getTrashMails = () => ({
  type: GET_TRASH_MAILS,
})

export const getTrashMailsSuccess = trashmail => ({
  type: GET_TRASH_MAILS_SUCCESS,
  payload: trashmail,
})

export const getTrashMailsFail = error => ({
  type: GET_TRASH_MAILS_FAIL,
  payload: error,
})