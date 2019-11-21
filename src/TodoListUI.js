import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'


const TodoListUI = (props) => {
  const { inputValue, changeInput, addInput, list, deleteItem } = props;
  return (
    <Fragment>
      <Input placeholder="请输入内容" style={{ width: 300, margin: 20 }} value={inputValue} onChange={changeInput}></Input>
      <Button type="primary" onClick={addInput}>提交</Button>
      <List
        style={{ width: 300, marginLeft: 20 }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (<List.Item onClick={() => { deleteItem(index) }}>{item}</List.Item>
        )}
      />
    </Fragment >
  )
}

export default TodoListUI;