import { homeActionTypes } from './homeConstants';

export function addLevel(level) {
    return {
        type: homeActionTypes.ADD_LEVEL,
        payload: level,
    }
}

export function addLevelSuccess(level) {
    return {
        type: homeActionTypes.ADD_LEVEL_SUCCESS,
        payload: level,
    }
}
