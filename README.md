# styled-components的使用
- 在react中，正常的给组件引入css文件，该css文件会直接作用于全局，使用styled-components可以有效控制好css作用域。

- 百度搜索reset.css 设置默认样式
```JavaScript
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
```
## 完成header组件的布局
- 创建common文件夹 因为header很多地方公用
> 小技巧 在styled-components中 直接用background: url('../../statics/logo.png')是不可以的，原因是webpack打包的时候会把他当成一个字符串;
import logoPic form '../../statics/logo.png'
background: url(${logoPic}) //多行文本嵌变量
- background-size: contain; 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。
- logo点击的时候需要跳转到首页 可以直接在<Logo href="/"> 也可以在style.js中a后面添加attr({href: '/'})
- &::placeholder 这个组件下面的placeholeder的样式

1. react-transition-group 
- import { CSSTransition } from 'react-transition-group' 注意css大写
```JavaScript
<CSSTransition
    in={this.state.focuse} //变量控制动画
    timeout={200} //动画时间
    classNames="whp" //命名
>
```
- whp-enter  whp-enter-active whp-exit whp-exit-active