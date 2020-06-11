import { homeActionTypes } from './homeConstants';

const initialState = {
    data: []
};

export default function homeReducer(state = initialState, action) {
    switch(action.type) {
        case homeActionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
            }
        default:
            return state;
    }
}