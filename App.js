/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import DashBoard from './src/screens/DashBoard';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
};

export default App;
