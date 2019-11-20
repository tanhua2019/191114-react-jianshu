import { createStore } from 'redux' 
import render from './reducer'

const store = createStore(render,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;