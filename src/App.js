


import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style' 
import Header from './common/header'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header></Header>
      </Fragment>
    )
  }
}
