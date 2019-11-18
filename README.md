# React中实现CSS过渡动画
 - return两个div会报错 因为JSX return出去的内容只能是一个元素
 - 可以借助react16.x 之后的Fragment占位符, Fragment不会被渲染成任何标签或者元素
 - opacity 规定不透明度。从 0.0 （完全透明）到 1.0（完全不透明）
 - transition: property duration timing-function delay; 
```
transition 属性是一个简写属性，用于设置四个过渡属性：
transition-property     规定设置过渡效果的 CSS 属性的名称。
transition-duration     规定完成过渡效果需要多少秒或毫秒。
transition-timing-function     规定速度效果的速度曲线。
transition-delay           定义过渡效果何时开始。
注释：请始终设置 transition-duration属性，否则时长为 0，就不会产生过渡效果。
linear：匀速（等于 cubic-bezier(0,0,1,1)）。
ease：开始和结束慢，中间快（等于cubic-bezier(0.25,0.1,0.25,1)）。
ease-in：加速（等于 cubic-bezier(0.42,0,1,1)）
ease-out：减速（等于 cubic-bezier(0,0,0.58,1)）。
ease-in-out：和ease类似，但比ease幅度大（等于 cubic-bezier(0.42,0,0.58,1)）。
cubic-bezier函数：自定义速度模式。可能的值是 0 至 1 之间的数值。
```
## css的动画效果
- @keyframes 来定义一些css动画
```CSS
.show {
  opacity: 1;
  transition: all 1s ease-out;
}
.hide {
  animation: hide-item 2s ease-in forwards;
}

@keyframes hide-item {
  0% {
    opacity: 1;
    color: red;
  }
  50% {
    opacity: 0.5;
    color: green;
  }
  100% {
    opacity: 0;
    color: blue
  }
}
```
- animation 使用hide-item动画效果 2s完成 动画曲线ease-in  当动画执行完又显示出来的bug
- 动画运行结束，最后的css效果不会被保存，需要被保存，添加forwards属性保存属性
 >animation: name duration timing-function delay iteration-count direction fill-mode play-state ; 
 ```
animation 属性是一个简写属性，用于设置六个动画属性：
animation-name       规定需要绑定到选择器的 keyframe 名称。
animation-duration   规定完成动画所花费的时间，以秒或毫秒计。
animation-timing-function   规定动画的速度曲线。
animation-delay       规定在动画开始之前的延迟。
animation-iteration-count   规定动画应该播放的次数。
animation-direction  规定是否应该轮流反向播放动画。
animation-fill-mode   规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
animation-play-state  指定动画是否正在运或已暂停。
 ```

 ## 使用react-transition-group 实现动画
 - 打开github搜索react-transition-group 点击Main documentation进入主文档
 - CSSTransition 
 - in传入一个变量感知什么时候进行切换
 - timeout = {300} 动画要执行多久
 - classNames = "my-node" 随意起名，对应css
 - unmountOnExit 对应dom的创建与移除
 - onEnter onEntered={(el) => {el.style.color= 'blue'}}
 - appear = {true} 的时候，第一次加载页面的时候也会有动画
 ```
.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.my-node {
  opacity: 1;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}
.my-node-exit-done {
  opacity: 0;
}
 ```
