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