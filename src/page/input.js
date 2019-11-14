import React, { Component } from 'react'

export default class input extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      inputValue: '',
      list: []
    })
    this.inputChange = this.inputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div>
        <input ref={(input) => this.input = input} value={this.state.inputValue} onChange={this.inputChange}></input>
        <button onClick={this.handleClick}>按钮</button>
        <ul ref={(ul) => this.ul = ul}>{this.getList()}</ul>
      </div>
    )
  }
  inputChange(e) {
    // console.log(e.target.value);
    // this.setState({
    //   inputValue: e.target.value
    // })
    console.log(this.input.value);
    this.setState({
      inputValue: this.input.value
    })
  }
  handleClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('li').length);
    })
    // console.log(this.ul.querySelectorAll('li').length);
  }
  getList() {
    return this.state.list.map(item => {
      return <li key={item}>{item}</li>
    })
  }
}
