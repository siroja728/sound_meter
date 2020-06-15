import { takeEvery, put, call } from 'redux-saga/effects';
import { homeActionTypes } from './homeConstants';
import * as homeActions from './homeActions';

export function* watchGetData() {
    yield takeEvery(homeActionTypes.ADD_LEVEL, addNewLevel);
}

export function* addNewLevel(action) {
    try {
       yield put(homeActions.addLevelSuccess(action.payload));
    } catch (error) {
       console.log(error);
    }
}
