# Props, State 与 render 函数
- react是由数据驱动的一门框架 当数据发生变化，页面跟着发生变化
- 当组件的state或者props发生变化的时候，render函数就会重新执行
```JavaScript
import React, { Component } from 'react'

class Test extends Component {
  render() {
    console.log('son render');
    return (
      <div>{this.props.content}</div>
    )
  }
}

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      inputValue: ''
    }
  }
  render() {
    console.log('render');
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}></input>
        <Test content={this.state.inputValue}></Test>
      </div>
    )
  }
  handleInputChange(e) {
    console.log(e.target.value,'111');
    this.setState({
      inputValue: e.target.value
    })
  }
}
```
1. onChange监听input值的改变，改变及处罚，e.target找到改变的input Dom 获取他的值改变state的值
2. 首先页面首次加载的时候会调用一次render,之后每次改变input中输入的值render就调用一次
