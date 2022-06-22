import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './combineReducers';
import rootSaga from './sagas';

const preloadedState = {};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistedReducers = persistReducer(persistConfig, rootReducer);
const enhancers = applyMiddleware(...middlewares);

export const store = createStore(persistedReducers, preloadedState, enhancers);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
