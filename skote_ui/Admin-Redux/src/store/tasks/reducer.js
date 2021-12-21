import { GET_TASKS_SUCCESS, GET_TASKS_FAIL } from "./actionTypes"

const INIT_STATE = {
  tasks: [],
  error: {},
}

const tasks = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      }

    case GET_TASKS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default tasks
