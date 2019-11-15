import React, { Component } from 'react'

export default class LifeItem extends Component {

  UNSAFE_componentWillReceiveProps() {
    console.log('child UNSAFE_componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.log('组件即将被删除');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.father !== this.props.father) {
      return true;
    } else {
      return false;
    } 
  }
  
  render() {
    console.log('子组件    render');
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.father}</div>
    )
  }
  handleClick() {
    const { index, deletes } = this.props
    deletes(index)
  }
}