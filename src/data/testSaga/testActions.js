import { CHANGE_DATA_REQUEST } from './testActionType'

export const handleChangeData = (payload) => ({
  type: CHANGE_DATA_REQUEST,
  payload: payload,
})
