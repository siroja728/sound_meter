import { homeActionTypes } from './homeConstants';

export function getData() {
    return {
        type: homeActionTypes.GET_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: homeActionTypes.GET_DATA_SUCCESS,
        payload: data,
    }
}

export function getDataError(error) {
    return {
        type: homeActionTypes.GET_DATA_ERROR,
        payload: error,
    }
}