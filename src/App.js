import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   show: true
    // }
    this.state = {
      list: []
    }
  }
  render() {
    return (

      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>111</div> */}
        {/* <CSSTransition
          in={this.state.show}
          timeout={300}
          classNames="my-node"
          unmountOnExit
          onEntered={(el) => {el.style.color= 'blue'}}
          appear>
          <div>111</div>
        </CSSTransition> */}
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={300}
                  classNames="my-node"
                  unmountOnExit
                  onEntered={(el) => { el.style.color = 'blue' }}
                  appear
                  key={index}>
                  <div>{item}</div>
                </CSSTransition>

              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment >
    )
  }
  handleClick() {
    // this.setState({
    //   show: this.state.show ? false : true
    // })
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}