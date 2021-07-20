/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
// import DashBoard from './src/screens/DashBoard';
import store from './src/store';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import Onboarding from './src/screens/Onboarding';
import { SIGN_UP, LOG_IN, ONBOARDING } from './src/ulti/constants';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={ONBOARDING}
        >
          <Stack.Screen name={ONBOARDING} component={Onboarding} />
          <Stack.Screen name={LOG_IN} component={LoginScreen} />
          <Stack.Screen name={SIGN_UP} component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  textCenter: {
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  redText: {
    color: 'red',
  },
});

export default App;
