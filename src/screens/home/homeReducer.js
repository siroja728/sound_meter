import { homeActionTypes } from './homeConstants';

const initialState = {
    levels: []
};

export default function homeReducer(state = initialState, action) {

    switch(action.type) {
        case homeActionTypes.ADD_LEVEL_SUCCESS:
            let newLevels = state.levels;
            if(state.levels.length > 100){
                newLevels = state.levels.splice(1,1);
            }
            return {
                ...state,
                levels: state.levels.length > 100 ? [...newLevels, action.payload] : [...state.levels, action.payload],
            };
        case homeActionTypes.RESET_DATA:
            return {
                ...state,
                levels: [0],
            };
        default:
            return state;
    }
}
