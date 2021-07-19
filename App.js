/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Provider } from 'react-redux';
import store from './src/store';

import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from './src/screens/SignUp';
import OnboardingScreen from './src/screens/Onboarding';
const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  textCenter: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  redText: {
    color: "red",
  },
});

export default App;
