import {
  GET_INBOX_MAILS_SUCCESS,
  GET_INBOX_MAILS_FAIL,
  ADD_INBOX_MAIL_SUCCESS,
  ADD_INBOX_MAIL_FAIL,
  DELETE_INBOX_MAIL_SUCCESS,
  DELETE_INBOX_MAIL_FAIL,
  GET_STARRED_MAILS_SUCCESS,
  GET_STARRED_MAILS_FAIL,
  GET_IMPORTANT_MAILS_SUCCESS,
  GET_IMPORTANT_MAILS_FAIL,
  GET_SENT_MAILS_SUCCESS,
  GET_SENT_MAILS_FAIL,
  GET_DRAFT_MAILS_SUCCESS,
  GET_DRAFT_MAILS_FAIL,
  GET_TRASH_MAILS_SUCCESS,
  GET_TRASH_MAILS_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  inboxmails: [],
  starredmails: [],
  importantmails: [],
  draftmails: [],
  sentmails: [],
  trashmails: [],
  error: {},
}

const Mails = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_INBOX_MAILS_SUCCESS:
      return {
        ...state,
        inboxmails: action.payload,
      }

    case GET_INBOX_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ADD_INBOX_MAIL_SUCCESS:
      return {
        ...state,
        inboxmails: [...state.inboxmails, action.payload],
      }

    case ADD_INBOX_MAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case DELETE_INBOX_MAIL_SUCCESS:
      return {
        ...state,
        inboxmails: state.inboxmails.filter(
          user => user.id.toString() !== action.payload.id.toString()
        ),
      }

    case DELETE_INBOX_MAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_STARRED_MAILS_SUCCESS:
      return {
        ...state,
        starredmails: action.payload,
      }

    case GET_STARRED_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      }



    case GET_IMPORTANT_MAILS_SUCCESS:
      return {
        ...state,
        importantmails: action.payload,
      }

    case GET_IMPORTANT_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_TRASH_MAILS_SUCCESS:
      return {
        ...state,
        trashmails: action.payload,
      }

    case GET_TRASH_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_DRAFT_MAILS_SUCCESS:
      return {
        ...state,
        draftmails: action.payload,
      }

    case GET_DRAFT_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_SENT_MAILS_SUCCESS:
      return {
        ...state,
        sentmails: action.payload,
      }

    case GET_SENT_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default Mails