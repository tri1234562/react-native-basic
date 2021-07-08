# react-native-basic

# Development Setup Guide

## Set up

Before setting up the project, [NodeJs](https://nodejs.org/en/) LTS version must be install in your machine.

Follow the React Native [Setting up the development environment](https://reactnative.dev/docs/environment-setup) in the **React Native CLI Quickstart** section. This will give the detail instruction for setting up for Android, iOS, and react-native cli.

## Running

After clonning the project from the repository,open the terminal, run `npm install` to install all the packages.

To run the project, follow the steps

### Step 1: Start Metro

To start Metro, run `npx react-native start` inside the React Native folder

### Step 2: Start your application

Let Metro Builder run in its own terminal. Open a new terminal inside the React Native folder, run `npx react-native run-android` to run on Android emulator or `npx react-native run-ios` to run on iOS simulator

## Debug mode

Debug tools is detailed document in [Debugging](https://reactnative.dev/docs/debugging) React Native documentation.

### Accessing the In-App Developer Menu

You can use `Cmd + D` keyboard shortcut when your app is running in the iOS Simulator, or `Cmd + M` when running in Android emulator on Mac OS and `Ctrl + M` on Windows and Linux.

### Enabling Fast Refresh

Fast Refresh is enable by default, and you can toggle **Enable Fast Refresh** in the React Native developer menu.

### Chrome Developer Tools

To debug the Javascript code in Chrome, select **Debug JS Remotely** from the Developer Menu. This will open a new tab at htttp://localhost:8081/debugger-ui

### React Developer Tools

Detailed documentation can be found at [React Developer Tools](https://reactnative.dev/docs/debugging#react-developer-tools) for React Native

You can use [the standalone version of React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools) to debug the React component hierachy. To use it, install the **react-devtools** package globally by running `npm install -g react-devtools` from the terminal.

Now run `react-devtools` from the terminal to launch the standalone DevTools app.

To use **react-devtools** with React Native Inspector,  open the in-app developer menu and choose **Toggle Inspector**. It will bring up an overlay that lets you tap on any UI element and see information about it.