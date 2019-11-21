import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

export default class TodoLisUi extends Component {
  render() {
    return (
      <Fragment>
        <Input placeholder="请输入" style={{ width: '300px', margin: '20px' }} onChange={this.props.inputChange} value={this.props.inputValue}></Input>
        <Button type="primary" onClick={this.props.addInput}>添加</Button>
        <List
          style={{width: '300px', marginLeft: 20}}
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => <List.Item onClick={this.deletes.bind(this,index)}>{item}</List.Item>}
        />
      </Fragment>
    )
  }
  deletes(index) {
    this.props.deleteItem(index)
  }
}
