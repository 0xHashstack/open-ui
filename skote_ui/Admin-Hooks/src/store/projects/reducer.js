import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_DETAIL_FAIL,
  GET_PROJECT_DETAIL_SUCCESS,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  projects: [],
  projectDetail: {},
  error: {},
}

const projects = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      }

    case GET_PROJECTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      }

    case ADD_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_PROJECT_DETAIL_SUCCESS:
      return {
        ...state,
        projectDetail: action.payload,
      }

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id.toString() === action.payload.id.toString()
            ? { project, ...action.payload }
            : project
        ),
      }

    case UPDATE_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id.toString() !== action.payload.id.toString()
        ),
      }

    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
      }


    case GET_PROJECT_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default projects
