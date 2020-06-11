import { fork } from 'redux-saga/effects';
import * as homeSagas from './screens/home/homeSagas'
export default function* rootSaga(store) {
    yield fork(homeSagas.watchGetData, store);
}