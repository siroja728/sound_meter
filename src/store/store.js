import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { ActionConst } from 'react-native-router-flux';
import rootSaga from '../rootSaga';
import rootReducer from '../reducersFactory';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

middleware.push(createLogger({
    level: 'info',
    collapsed: true,
    diff: true,
    predicate: (getState, action) => action.type !== ActionConst.FOCUS && action.type !== ActionConst.REFRESH,
  }));

enhancer = compose(
    applyMiddleware(...middleware),
);

const reducer = combineReducers(rootReducer);

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, enhancer);
  
    sagaMiddleware.run(rootSaga, store);
  
    return { store };
  }