import fetch from 'isomorphic-fetch'

/*
 * action 类型
 */
export const ACTIVE_ADD_TODO = 'ACTIVE_ADD_TODO';
export const COMPLETED_ADD_TODO = 'COMPLETED_ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function activeaddTodo(text) {
  return {type: ACTIVE_ADD_TODO, text}
}

export function completedaddTodo(text) {
  return {type: COMPLETED_ADD_TODO, text}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}

}

export function getCnodeApi() {
  return function (dispatch, getState) {
    fetch("https://cnodejs.org/api/v1/topics")
      .then(res => res.json())
      .then(function (res) {
        dispatch(activeaddTodo(res.data[0].author.loginname)); //本应该 state.todos=123
      })
  }
}