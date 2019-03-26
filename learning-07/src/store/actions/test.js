import * as types from '../constants/types'

export function test(data) {
  return {
    type: types.CHANGE_TEST,
    payload: data
  }
}
