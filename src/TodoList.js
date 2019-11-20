import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInput,addInput,deleteInput } from './store/actionCreator'


export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.inputChange = this.inputChange.bind(this)
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this)
    this.addInput = this.addInput.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <Fragment>
        <Input placeholder="请输入" style={{ width: '300px', margin: '20px' }} onChange={this.inputChange} value={this.state.inputValue}></Input>
        <Button type="primary" onClick={this.addInput}>添加</Button>
        <List
          style={{width: '300px', marginLeft: 20}}
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>}
        />
      </Fragment>
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
    const action = deleteInput(index)
    store.dispatch(action)
  }
} 