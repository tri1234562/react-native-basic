import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './LoginStyles';
import Images from '../../assets';
import CustomTextInput from '../../components/inputField/inputField';

const LoginView = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
        > */}
          <ImageBackground
            resizeMode='cover'
            style={styles.backgroundContainer}
            source={Images.background_login}
          >
            <View style={styles.titleContainer}>
              <Image
                style={styles.icon}
                source={Images.icon_splash}
              />
              <Text style={styles.title}>
                scratch
              </Text>
            </View>
            <Text style={styles.subTitle}>
              Welcome Back!
            </Text>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <Text style={styles.titleContent}>
              Please login to continue
            </Text>
            <Text style={styles.titleInput}>
              Email address
            </Text>
            <CustomTextInput
              onChangeText={props.onChangeUserName}
              value={props.userNameValue}
              style={styles.inputStyles}
              errorMessage={props.userNameErrorMessage}
            />
            <View style={styles.passwordTitleContainer}>
              <Text style={styles.titleInput}>
                Password
              </Text>
              <View style={styles.forgotContainer}>
                <Text style={styles.forgotText}>
                  Forgot password?
                </Text>
              </View>
            </View>
            <CustomTextInput
              onChangeText={props.onChangePassword}
              style={styles.inputStyles}
              value={props.passwordValue}
              errorMessage={props.passwordErrorMessage}
              secureTextEntry
            />
            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={styles.loginButton}
              >
                <Text style={styles.buttonTitle}>
                  Login
                </Text>
              </TouchableOpacity>
              <View style={styles.subContainer}>
                <Text style={styles.titleCreateAccount}>
                  New to Scratch?
                </Text>
                <TouchableOpacity
                  onPress={props.handleNatigateToSignUp}
                >
                  <Text style={styles.actionCreateAccount}>
                    Create Account Here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
