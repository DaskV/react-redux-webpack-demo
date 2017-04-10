import {combineReducers} from 'redux'
import {
  ACTIVE_ADD_TODO,
  COMPLETED_ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  DELETE_TODO
} from './action'
const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ACTIVE_ADD_TODO:
      return [
        ...state, {
          text: action.text,
          completed: false,
          Id: state.reduce((maxId, todo) => Math.max(todo.Id, maxId), -1) + 1
        }
      ]
    case COMPLETED_ADD_TODO:
      return [
        ...state, {
          text: action.text,
          completed: true
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    case DELETE_TODO:
      return state.filter(todo => {
        todo.Id !== action.Id
      })
    default:
      return state
  }
}

const todoApp = combineReducers({visibilityFilter, todos})

export default todoApp