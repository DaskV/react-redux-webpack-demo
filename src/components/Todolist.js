import React, {Component, PropTypes} from 'react'
import Todo from './Todo'
export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .todos
                    .map((todo, index) => <Todo {...todo} key={index} deleteClick={() => this.props.delete(this.props.todos[index].Id)}/>)}
            </ul>
        )
    }
}

TodoList.propTypes = {
    delete: PropTypes.func.isRequired,
    todos: PropTypes
        .arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired}).isRequired)
        .isRequired
}