import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import { changeInput, addInput, deleteInput, getInitAction } from './store/actionCreator'
import TodoLisUi from './TodoLisUi'



export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.inputChange = this.inputChange.bind(this)
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this)
    this.addInput = this.addInput.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  componentDidMount() {
    const action = getInitAction()
    store.dispatch(action);
  }
  render() {
    return (
      <TodoLisUi
        inputValue={this.state.inputValue}
        inputChange={this.inputChange}
        addInput={this.addInput}
        list={this.state.list}
        deleteItem={this.deleteItem} />
    )
  }
  inputChange(e) {
    const action = changeInput(e)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  addInput() {
    const action = addInput();
    store.dispatch(action)
  }
  deleteItem(index) {
    console.log(index, '99');
    const action = deleteInput(index)
    store.dispatch(action)
  }
} 