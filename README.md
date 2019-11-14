# React配置之@绝对路径
  - npm run eject 将webpack配置文件搞出来，如报错git暂存提交之后再跑
  - 在webpack.config.js配置文件alias中配置'@': paths.appSrc即可
# propTypes的使用
  - [参考文章](https://blog.csdn.net/renlzrz/article/details/83545521)
  - 为什么要用propTypes? 当你想给子组件传入一个数字类型的参数，一不小心却写成了字符串类型，但是系统不给你任何的提示，出现错误都不知到去哪里找
## 如何使用propTypes
1. npm i prop-types -S
```JavaScript
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
  require: PropTypes.number
}
export default class Father extends React.Component {
  render() {
    return (
      <Son number={'1'} array={['1','2','3']} boolean={'true'}></Son>
    )
  }
}
```
2. index.js:1375 Warning: Failed prop type: Invalid prop `number` of type `string` supplied to `Son`, expected `number`. 报错信息
3. 存在错误的prop属性为number 错误的变量类型是string 属性所在的组件是Son 期望一个number类型的值
4. 值得注意的是Son.propTypes p是小写的 boolean类型的值写成bool
### isRequired 不仅要求校验类型，而且要求是必须传入的
```JavaScript
Son.propTypes = {
    number:PropTypes.number.isRequired
}
```
* Warning: Failed prop type: The prop `require` is marked as required in `Son`, but its value is `undefined`
* 如果报错会提示如下信息
* 如果不想控制它的类型只想控制他为必传的number:PropTypes.any.isRequired，any代表了该变量可取任何一种数据类型
### defaultProps 如果父组件没有向子组件传递相应的数据可以通过该属性设置一个默认值
[react官网 propTypes](https://react.docschina.org/docs/typechecking-with-proptypes.html)