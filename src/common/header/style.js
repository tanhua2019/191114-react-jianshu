import styled from 'styled-components'
import logoPic from '../../statics/jianshu.png'

export const HeaderWarpper = styled.div`
  height: 56px;
  border-bottom: 1px solid #ccc;
  position: releative;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  display:: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
 width: 960px;
 height: 100%;
 margin: 0 auto;
`

export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: orange;
  }
  line-height: 56px;
  padding: 0 15px;
  color: #333;
`
export const SearchWarpper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height:30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    &.focused {
      background: #ccc;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
 width: 160px;
 height: 38px;
 border: none;
 outline: none;
 border-radius: 19px;
 background: #eee;
 margin-top: 9px;
 padding: 0 35px 0 20px;
 box-sizing: border-box;
 margin-left: 20px;
 &::placeholder {
   color: red;
 }
 &.focused {
   width: 240px;
 }
 &.whp-enter {
  transition: all .2s ease-out;
}
&.whp-enter-active {
  width: 240px;
}
&.whp-exit {
  transition: all .2s ease-out;
}
&.whp-exit-active {
  width: 160px;
}
`

export const Addititon = styled.div`
 position: absolute;
 right: 0;
 top: 0;
 height: 56px;
`

export const Botton = styled.div`
  float: right;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
`
