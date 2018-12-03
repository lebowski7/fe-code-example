import {applyMiddleware, createStore} from 'redux';
import {actions} from './actions';
import {appReducers, initialState} from './reducers';
import {IState} from './IState';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
type Actions = actions;

export const store = createStore<IState, Actions, any, any>(appReducers, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
