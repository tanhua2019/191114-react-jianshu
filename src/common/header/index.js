import React, { Component, Fragment } from 'react'
import { HeaderWarpper, Logo, Nav, NavItem, NavSearch, Addititon, Botton, SearchWarpper } from './style'
import { CSSTransition } from 'react-transition-group'
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.handleFocus = this.handleFocus.bind(this)
    this.state = {
      focuse: false
    }
  }
  render() {
    return (
      <Fragment>
        <HeaderWarpper>
          <Logo></Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登陆</NavItem>
            <NavItem className="right">Aa</NavItem>
            <CSSTransition
              in={this.state.focuse}
              timeout={200}
              classNames="whp"
            >
              <SearchWarpper>
                <NavSearch className={this.state.focuse ? 'focused' : ''} onFocus={this.handleFocus}></NavSearch>
                <i className={this.state.focuse ? 'iconfont focused' : 'iconfont'}>&#xe629;</i>
              </SearchWarpper>
            </CSSTransition>
          </Nav>
          <Addititon>
            <Botton>注册</Botton>
            <Botton><i className="iconfont">&#xe780;</i>写文章</Botton>
          </Addititon>
        </HeaderWarpper>
      </Fragment>
    )
  }
  handleFocus() {
    this.setState({
      focuse: true,
    })
  }
}
