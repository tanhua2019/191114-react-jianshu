import { CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, DELETE_INPUT_VALUE, INIT_LIST_DATA } from "./actionTypes";
import axios from 'axios'

export const changeValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addValue = () => ({
  type: ADD_INPUT_VALUE
})


export const deleteValue = (index) => ({
  type: DELETE_INPUT_VALUE,
  index
})

export const InitData = (data) => ({
  type: INIT_LIST_DATA,
  data
})

export const getInitData = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/list").then(res => {
      const action = InitData(res.data)
      dispatch(action)
    })
  }
}