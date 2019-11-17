import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';

import login, { watchLogin } from '../components/Login/login-store';
import search, { watchSearch } from '../components/Search/search-store';

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  login,
  search
});

let middlewares = [];

if (process.env.NODE_ENV !== 'test') {
  // skip logger middleware if we are running tests
  middlewares.push(logger);
}

middlewares.push(sagaMiddleware);

const store = createStore(appReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(function* () {
  return yield all([watchLogin(), watchSearch()]);
});

export * from '../components/Login/login-store';
export * from '../components/Search/search-store';

export default store;
