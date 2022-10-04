import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import rootReducers from '../redux/reducers';
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
middleware.push(createLogger()); // for development purposes

const enhancers = [applyMiddleware(...middleware)];
const persistConfig = {enhancers};

const reducers = combineReducers(rootReducers);
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
);

const persistor = persistStore(store, persistConfig);

sagaMiddleware.run(sagas);

export {persistor, store};