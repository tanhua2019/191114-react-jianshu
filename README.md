# UI组件与容器组件
- UI组件也叫傻瓜组件，容器组件也叫聪明组件
# 使用Redux-thunk中间件进行ajax请求发送
- 把异步请求复杂的逻辑放在action中
- 打开github redux-thunk
- 打开github edux-devtools-extension
# 让redux既支持redux-thunk又支持redux-devtools
```JavaScript
import { createStore, applyMiddleware,compose } from 'redux'
import render from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(
  render,
  enhancer,
);

export default store;
```

