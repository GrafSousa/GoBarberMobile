import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

import createStore from './createStore';

import { rootSaga } from '~/sagas';

import { authReducer } from './auth/reducer';

const reducers = combineReducers({
  authReducer,
});

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
  whitelist: ['authReducer'],
};

export function createAppStore() {
  const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  const middlewares = [sagaMiddleware];

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, middlewares);

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
