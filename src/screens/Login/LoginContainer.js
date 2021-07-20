import React, { useState } from 'react';
import { Alert } from 'react-native';
import LoginView from './LoginView';
import { SIGN_UP } from '../../ulti/constants';

const LoginContainer = (props) => { 
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameErrorMessage, setUserNameErrorMes] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMes] = useState(null);
  const [isError, setIsError] = useState(false)

  const regEmail = /.+@(gmail|yahoo)\.com$/;
  const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  const onUserNameChange = (text) => {
     setUserName(text)
     setUserNameErrorMes(null)
  }

  const onPasswordChange = (text) => {
     setPassword(text)
     setPasswordErrorMes(null)
  }

  const checkErrorStatus = () => {
    if (userNameErrorMessage || passwordErrorMessage) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }

  const validateUserName = () => {
    if(userName.trim() === '') {
      setUserNameErrorMes(`This field can't be emtpy`)
      isInvalidForm = true;
    } else if(!regEmail.test(userName)) {
      setUserNameErrorMes(`This email is not valid. Please use Gmail or Yahoo mail`)
    }
    checkErrorStatus()
  }

  const validatePassword = () => {
    if(password.trim() === '') {
      setPasswordErrorMes(`This field can't be emtpy`)
    } else if (!regPassword.test(password)) {
      setPasswordErrorMes(`Password is not valid`)
    }
    checkErrorStatus()
  }


  const handleSubmit = () => {
    validateUserName()
    validatePassword()
    if(!isError) {
      Alert.alert(
        'You Has Submited',
        `UserName: ${userName} Password: ${password}`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );
    }
  };
  const handleNatigateToSignUp = () => {
     props.navigation.replace(SIGN_UP)
  }
  return (
    <LoginView
      userNameValue={userName}
      passwordValue={password}
      onChangeUserName={onUserNameChange}
      onChangePassword={onPasswordChange}
      userNameErrorMessage={userNameErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      handleNatigateToSignUp={handleNatigateToSignUp}
      handleSubmit={handleSubmit}
      {...props}
    />
  );
};

export default LoginContainer;
