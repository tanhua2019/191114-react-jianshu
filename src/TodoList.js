import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state= store.getState();
    this.changeInput = this.changeInput.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.addList = this.addList.bind(this)
    store.subscribe(this.handleStoreChange)
    
  }
  render() {
    return (
      <Fragment>
        <Input placeholder="请输入" style={{ width: 300, margin: 30 }} onChange={this.changeInput} value={this.state.inputValue}/>
        <Button type="primary" style={{ marginLeft: '-20px' }} onClick={this.addList}>按钮</Button>
        <List
          style={{marginLeft: 30 , width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={this.deleateItem.bind(this,index)}>{item}</List.Item>)}></List>
      </Fragment>
    )
  }
  changeInput(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  addList() {
    const action = {
      type : "add_list",
    }
    store.dispatch(action);
  }
  deleateItem(index) {
    const action = {
      type: 'delete_item',
      value: index
    }
    store.dispatch(action)
  }
}