import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store'
import { changeValue, addValue, deleteValue, getInitData } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import { connect } from 'react-redux'

class TodoList extends Component {
  componentDidMount() {
    store.dispatch(getInitData())
  }
  render() {
    const { inputValue, changeInput, addInput, deleteItem, list } = this.props;
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        changeInput={changeInput}
        addInput={addInput}
        deleteItem={deleteItem} />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInput: (e) => dispatch(changeValue(e.target.value)),
    addInput: () => dispatch(addValue()),
    deleteItem: (index) => dispatch(deleteValue(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)