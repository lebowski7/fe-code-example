import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {actions} from './actions';
import {IState} from './IState';
import {appReducers, initialState} from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
type Actions = actions;

export const store = createStore<IState, Actions, any, any>(appReducers, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
