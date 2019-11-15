# react生命周期函数
 - 概念：生命周期函数指在某一时刻组件会自动调用执行的函数
![react生命周期图](http://ask.qcloudimg.com/http-save/developer-news/6zev9uudex.jpeg)
 ## Mounting（挂载）
 - 经历三个周期
 - UNSAFE_componentWillMount 在组件即将挂载到页面的时候执行
 - componentDidMount  组件在被挂载到页面之后执行
 - 只在挂载的时候执行，组件第一次被放到页面的时候，只会执行一次
 ## Updation（组件更新的流程）
 - 分为props发生变化 和state发生变化
 - 共性的生命周期函数
  >shouldComponentUpdate 组件被更新之前会被自动执行 （对于返回值为bool值 可以理解成你的组件是要被更新吗？）
Warning: Life.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false. 
要求返回结果布尔值
 - UNSAFE_componentWillUpdate 组件更新之前他会自动执行，但是他在shouldComponentUpdate之后被执行，如果shouldComponentUpdate返回true才执行，如果返回false就不执行了
 - render
 - componentDidUpdate 组件更新完之后他会执行
 - UNSAFE_componentWillReceiveProps 当一个组件从父组件接受了参数，只要父组件的render的函数执行了，子组件的这个生命周期函数就会被执行
 - 如果这个组件第一次存在于父组件中，不会执行
 - 如果这个组件之前就已经存在于父组件中，才会执行

 ## Unmounting ()
  - componentWillUnmount 当这个组件即将被从页面中一处的时候才会执行