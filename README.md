# Redux设计和使用的三项原则
- store必须是唯一的 整个项目中只有一个store
- 只有store能改变自己的内容 store拿到reducer里面的数据，自己更新自己
- Reducer必须是纯函数 指的是给定固定的输入，就一定会有固定的输出而且不会有任何副作用

# redux核心api
- createStore 创建一个store
- store.dispatch 派发action
- store.getState 会获取到store里面所有的内容
- store.subscribe 订阅store的改变，只要store发生改变，subscribe接收的回调函数就会执行
