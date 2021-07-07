import { put } from 'redux-saga/effects';
import { INCREASE_DATA_SUCCESS, DECREASE_DATA_SUCCESS, RESET_DATA_SUCCESS } from '../actionsType'
import { makeActionCreator } from '../ultis'

 function* handleUpdateData(data) {
  try {
    console.log('action INCREASE_DATA_REQUEST run', data);
    yield put(
      makeActionCreator(INCREASE_DATA_SUCCESS)(data.payload)
    );
  } catch (error) {}
}

function* handleDecreaseCount(data) {
  try {
    console.log('action DECREASE_DATA_SUCCESS run');
    yield put(
      makeActionCreator(DECREASE_DATA_SUCCESS)(data.payload)
    );
  } catch (error) {}
}


function* handleResetCount(data) {
  try {
    console.log('action RESET_DATA_SUCCESS run', data);
    yield put(
      makeActionCreator(RESET_DATA_SUCCESS)(data.payload)
    );ß
  } catch (error) {}
}

const testReduxMiddleware = {
  handleUpdateData,
  handleDecreaseCount,
  handleResetCount,
};

export default testReduxMiddleware
