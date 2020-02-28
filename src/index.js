import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import { createAppStore } from '~/redux';

import './config/ReactotronConfig';
import { Routes } from './routes';

function App() {
  const { store, persistor } = createAppStore();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}

export { App };
