import React, {Component, PropTypes} from 'react'
import '../style/todo.scss'
export default class Todo extends Component {
    render() {
        return (
            <li className="list" 
                style={{
                textDecoration: this.props.completed
                    ? 'underline'
                    : 'none',
                cursor: this.props.completed
                    ? 'default'
                    : 'pointer'
            }}>
                {this.props.text}
                <a
                    href="javascript:void(0);"
                    style={{
                    marginLeft: '10px'
                }}
                    onClick
                    ={()=>this.props.deleteClick()}>删除</a>
            </li>
        )
    }
}

Todo.propTypes = {
    deleteClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}
