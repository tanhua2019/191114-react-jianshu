import React from 'react'
import './App.css'

export default function App() {
  //JSX => 先被 createElement -> 转换成 虚拟DOM(JS对象) -> 真实的DOM
  // return (
  //   <div>item</div>
  // )
  // JSX -> JS对象 -> 真实的DOM
  // JSX语法之所以存在是为了让我们的代码看起来比较简洁
  return React.createElement('div', {}, React.createElement('span',{},'123')); //三个参数分别代表，标签名称，属性，内容
}
