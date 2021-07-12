import { combineReducers } from 'redux';
import SignUpReducer from './signUpReducer';
import TestReducer from './testReducers';

const reducers = combineReducers({
  testReducer: TestReducer,
  signUpReducer: SignUpReducer,
});

export default reducers;