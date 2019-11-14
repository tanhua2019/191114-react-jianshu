import React, { Component } from 'react'

export default class Son extends Component {
  render(h) {
    return (
      <div>{this.props.number}-{this.props.array}-{this.props.boolean}</div>
    ) 
  }
}