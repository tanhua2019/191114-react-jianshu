import { CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, DELETE_INPUT_VALUE, INIT_DATA } from './actionTypes'
import axios from 'axios'

export const changeInput = (e) => ({
  type: CHANGE_INPUT_VALUE,
  value: e.target.value
})

export const addInput = () => ({
  type: ADD_INPUT_VALUE
})

export const deleteInput = (index) => ({
  type: DELETE_INPUT_VALUE,
  index
})

export const initData = (data) => ({
  type: INIT_DATA,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/list').then(res => {
      const action = initData(res.data)
      dispatch(action)
    })
  }
}