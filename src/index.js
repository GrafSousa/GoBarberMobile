import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { Routes } from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}

export { App };
