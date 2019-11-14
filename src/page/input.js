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