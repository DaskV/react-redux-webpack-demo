import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {activeaddTodo,completedaddTodo, completeTodo, setVisibilityFilter, VisibilityFilters,getCnodeApi,deleteTodo} from '../action'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {

    render() {      
        const {dispatch, visibleTodos, visibilityFilter,Id} = this.props     
        return (
            <div>
                <AddTodo
                    onAddClick={(text)=> dispatch(activeaddTodo(text))}
                    onAddClicked={text =>dispatch(completedaddTodo(text))}
                    onGetInfo={()=>dispatch(getCnodeApi())}
                    />
                <TodoList
                    todos={visibleTodos}
                    delete={() => dispatch(deleteTodo(Id))}/>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes
        .arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired}).isRequired)
        .isRequired,
    visibilityFilter: PropTypes
        .oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'])
        .isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

//注入 dispatch 和 state 到其默认的<App/>组件的props中；
export default connect(select)(App)