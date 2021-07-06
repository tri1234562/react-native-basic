import { CHANGE_DATA_SUCCESS } from './testActionType'

const initialState = {
  name: "Tri Test",
  content: "Hello world",
  count: 1,
}

const TestReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_DATA_SUCCESS: {
      const { content, name, count } = action.payload
      console.log("action CHANGE_DATA_SUCCESS runnnnnn ==> ", action)
      return {
        ...state,
        content,
        name,
        count
      }
    }
    default: return state
  }
}

export default TestReducer