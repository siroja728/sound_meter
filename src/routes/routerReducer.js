import { ActionConst } from 'react-native-router-flux';

export default function routerReducer(state = {}, action = {}) {
  switch(action.type) {
    case ActionConst.FOCUS:
    case ActionConst.JUMP:
    case ActionConst.RESET:
    case ActionConst.REPLACE:
    case ActionConst.REFRESH:
    case ActionConst.BACK_ACTION:
    case ActionConst.BACK:
    case ActionConst.PUSH:
    case ActionConst.PUSH_OR_POP: {
      return {
        ...state,
        currentSceneKey: action.routeName,
      };
    }
    default:
      return state;
  }
}