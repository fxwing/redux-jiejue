

 import * as types from '../../constants/types'
const initState={
  number:0
}
export const test = function(state = initState,action){
  switch (action.type){
    case types.CHANGE_TEST:
      return {
        ...state,
        number: action.payload.number
      }
    default:
      return state
  }
}

