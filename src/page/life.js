import React, { Component } from 'react'
import LiftItem from './lifeItem'

export default class Life extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      inputValue: '',
      list: []
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  UNSAFE_componentWillMount() {
    console.log('马上要被挂载到页面');
  }
  componentDidMount() {
    console.log('组件被挂载了');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('组件更新前自动执行');
    return true
  }
  UNSAFE_componentWillUpdate() {
    console.log('组件更新前执行，但是在shouldComponentUpdate之后执行');
  }
  componentDidUpdate() {
    console.log('组件更新完之后他会执行');
  }
  render() {
    console.log('render执行了');
    return (
      <div>
        <input ref={(input) => this.input = input} value={this.state.inputValue} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>提交</button>
        <ul>{this.update()}</ul>
      </div>
    )
  }
  handleChange() {
    this.setState({
      inputValue: this.input.value
    })
  }
  handleClick() {
    this.setState((prvState) => ({
      list: [...prvState.list, prvState.inputValue],
      inputValue: ''
    }))
  }
  update() {
    return this.state.list.map((item,index) => {
      return <LiftItem key={item+index} father={item} index={index} deletes={this.handleDelete.bind(this)}></LiftItem>
    })
  }
  handleDelete(index) {
    this.setState((prvState) => {
      const list = [...prvState.list]
      list.splice(index,1)
      return {list}
    })
  }
}