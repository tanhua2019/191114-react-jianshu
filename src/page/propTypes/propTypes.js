import React from 'react'
import Son from '@/components/propTypes'

export default class Father extends React.Component {
  render() {
    return (
      <Son number={'1'} array={['1','2','3']} boolean={'true'}></Son>
    )
  }
}