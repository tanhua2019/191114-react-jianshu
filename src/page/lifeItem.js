import React, { Component } from 'react'

export default class LifeItem extends Component {
  UNSAFE_componentWillReceiveProps() {
    console.log('child UNSAFE_componentWillReceiveProps');
  }
  render() {
    console.log('子组件render');
    return (
      <div onClick={(index) => this.delete.bind(index,this)}>{this.props.father}</div>
    )
  }
  delete(index) {
    console.log('dianji');
    console.log(index);
  }
}