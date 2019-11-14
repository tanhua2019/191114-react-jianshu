import React from 'react'
import PropTypes from 'prop-types'

class Son extends React.Component {
  render(h) {
    return (
      <div>{this.props.number}-{this.props.array}-{this.props.boolean}-{this.props.require}</div>
    ) 
  }
}
Son.propTypes = {
  number: PropTypes.number,
  array: PropTypes.array,
  boolean: PropTypes.bool,
  require: PropTypes.any.isRequired
}
Son.defaultProps = {
  require: 'hello word'
}
export default class Father extends React.Component {
  render() {
    return (
      <Son number={'1'} array={['1','2','3']} boolean={'true'}></Son>
    )
  }
}