/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

import DashBoard from './src/screens/DashBoard';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
};

export default App;
