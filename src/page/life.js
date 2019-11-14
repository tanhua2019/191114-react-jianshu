import React, { Component } from 'react'

export default class Life extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      inputValue: ''
    })
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    console.log('马上要被挂载到页面');
  }
  componentDidMount() {
    console.log('组件被挂载了');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('组件更新前自动执行');
    return true
  }
  componentWillUpdate () {
    console.log('组件更新前执行，但是在shouldComponentUpdate之后执行');
  }
  componentDidUpdate() {
    console.log('组件更新完之后他会执行');
  }
  
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render执行了');
    return (
      <div>
        <input ref={(input) => this.input = input} value={this.state.inputValue} onChange={this.handleChange}></input>
      </div>
    )
  }
  handleChange() {
    this.setState({
      inputValue: this.input.value
    })
  }
}