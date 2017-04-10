import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          ActiveAdd
        </button>
        <button onClick={(e) => this.handleClicked(e)}>
          CompletedAdd
        </button>
        <button onClick={(e)=>this.handleGetInfo(e)}>获取数据</button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
  handleClicked(e){
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClicked(text)
    node.value = ''
  }
  handleGetInfo(e){
    this.props.onGetInfo();
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}