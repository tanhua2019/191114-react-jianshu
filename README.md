# redux-sago的使用
- 打开github redux-saga
```JavaScript
import { createStore, applyMiddleware, compose } from 'redux'
import render from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);
const store = createStore(
  render,
  enhancer,
);
sagaMiddleware.run(mySaga)

export default store;
```
```JavaScript sagas.js
import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initData } from "./actionCreator";


function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}
function* getInitList() {
  const res = yield axios.get('http://localhost:3000/list')
  const action = initData(res.data)
  yield put(action)
}

export default mySaga;
```