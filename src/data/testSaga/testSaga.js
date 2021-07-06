import { put, takeLatest } from 'redux-saga/effects';
import { CHANGE_DATA_REQUEST, CHANGE_DATA_SUCCESS } from './testActionType';

function* testChangeData() {
  yield takeLatest(CHANGE_DATA_REQUEST, handleUpdateData);
}

function* handleUpdateData(data) {
  try {
    console.log('action CHANGE_DATA_REQUEST run', data);
    yield put({
      type: CHANGE_DATA_SUCCESS,
      payload: {...data.payload},
    });
  } catch (error) {}
}

export { testChangeData };
