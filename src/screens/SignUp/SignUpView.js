import React from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './SignUpStyles';
import backgroundImage from '../../../assets/images/sign_up_background.png';
import logo from '../../../assets/images/logo.png';

const TextInputForm = ({
  label = '',
  value = '',
  error = '',
  secureTextEntry = false,
  onChangeText,
  onEndEditing,
  keyboardType = 'default',
  returnKeyType = 'done',

}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.inputField,
          error !== '' ? styles.inputError :
            value === '' ? styles.inputEmpty : styles.inputSuccess
        ]}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
      />
      {error !== '' &&
        <Text style={styles.inputErrorMessage}>
          {error}
        </Text>
      }
    </View>
  );
}

const SignUpView = ({
  nameValue,
  nameError,
  onChangeName,
  nameValidator,
  emailValue,
  emailError,
  onChangeEmail,
  emailValidator,
  passwordValue,
  passwordError,
  passwordValidator,
  onChangePassword,
  onSubmit,
  toLogIn
}) => {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior='position'
        keyboardVerticalOffset={30}>
        <View style={styles.header}>
          <ImageBackground
            source={backgroundImage}
            resizeMode='cover'
            style={styles.image}
          >
            <Image
              source={logo}
              style={styles.logoImage}
            />
            <Text style={styles.pageTitle}>
              {'Start\nfrom Scratch'}
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            Create account to continue
          </Text>
          <TextInputForm
            label={'Full name'}
            value={nameValue}
            error={nameError}
            onChangeText={onChangeName}
            onEndEditing={nameValidator}
            returnKeyType={'next'}
          />
          <TextInputForm
            label={'Email'}
            value={emailValue}
            error={emailError}
            onChangeText={onChangeEmail}
            onEndEditing={emailValidator}
            returnKeyType={'next'}
          />
          <TextInputForm
            label={'Password'}
            value={passwordValue}
            error={passwordError}
            secureTextEntry={true}
            onChangeText={onChangePassword}
            onEndEditing={passwordValidator}
            returnKeyType={'done'}
          />
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.submit} onPress={onSubmit}>
            <Text style={styles.submitText}>Create Account</Text>
          </TouchableOpacity>
          <Text style={styles.inputLabel}>Already have an account?</Text>
          <TouchableWithoutFeedback onPress={toLogIn}>
            <Text style={styles.textBtn}>Login Here</Text>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUpView;
