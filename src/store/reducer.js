import { CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, DELETE_INPUT_VALUE} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState,action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) 
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}