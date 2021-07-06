import { combineReducers } from 'redux';
import TestReducer from './testSaga/testReducers';

const reducers = combineReducers({
  testReducer: TestReducer,
});

export default reducers;
