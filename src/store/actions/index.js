import { INCREASE_DATA_REQUEST, DECREASE_DATA_REQUEST, RESET_DATA_REQUEST } from '../actionsType';
import { makeActionCreator } from '../ultis'

export const increaseAction = (payload) => {
  return makeActionCreator(INCREASE_DATA_REQUEST)(payload)
}

export const decreaseAction = (payload) => {
  return makeActionCreator(DECREASE_DATA_REQUEST)(payload)
}

export const resetCountAction = (payload) => {
  return makeActionCreator(RESET_DATA_REQUEST)(payload)
}
