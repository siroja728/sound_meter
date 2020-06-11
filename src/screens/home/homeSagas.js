import { takeEvery, put, call } from 'redux-saga/effects';
import { homeActionTypes } from './homeConstants';
import * as homeActions from './homeActions';
import { processRequest } from '../../services/api';

export function* watchGetData() {
    yield takeEvery(homeActionTypes.GET_DATA, handleGetData);
}

export function* handleGetData(action) {
    try {
       const data = yield call(processRequest,'users');
       yield put(homeActions.getDataSuccess(data));
    } catch (error) {
       yield put(homeActions.getDataError(error)); 
    }
}