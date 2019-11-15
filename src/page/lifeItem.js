import React, { Component } from 'react'

export default class LifeItem extends Component {

  UNSAFE_componentWillReceiveProps() {
    console.log('child UNSAFE_componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.log('组件即将被删除');
  }
  
  render() {
    console.log('子组件render');
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.father}</div>
    )
  }
  handleClick() {
    const { index, deletes } = this.props
    deletes(index)
  }
}