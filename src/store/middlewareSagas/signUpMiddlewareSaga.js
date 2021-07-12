import { put, select } from 'redux-saga/effects';
import { signUpError, signUpInProgress, signUpSuccess } from '../actions';

function* handleSignUpRequest(data) {
  try {
      const state = yield select();
      const user = {
        name: state.signUpReducer.name,
        email: state.signUpReducer.email,
        password: state.signUpReducer.password,
      };
    yield put(signUpInProgress());
    console.log('Signing up ', user);
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpError('Sign Up Faild! Please try again.'));
  }
}

signUpMiddleware = {
  handleSignUpRequest,
};

export default signUpMiddleware;
