import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    emailChangedAction,
    emailValidateAction,
    nameChangedAction,
    nameValidateAction,
    passwordChangedAction,
    passwordValidateAction,
    signUpResquest,
} from '../../store/actions';

import SignUpView from './SignUpView';

const SignUpContainer = ({ navigation }) => {
    const data = useSelector((state) => state.signUpReducer);
    const dispact = useDispatch();
    const { name, email, password, status } = data;

    return (
        <SignUpView
            nameValue={name.value}
            nameError={name.error}
            onChangeName={(value) => {
                dispact(nameChangedAction(value));
            }}
            nameValidator={() => {
                dispact(nameValidateAction());
            }}

            emailValue={email.value}
            emailError={email.error}
            onChangeEmail={(value) => {
                dispact(emailChangedAction(value));
            }}
            emailValidator={() => {
                dispact(emailValidateAction());
            }}

            passwordValue={password.value}
            passwordError={password.error}
            onChangePassword={(value) => {
                dispact(passwordChangedAction(value));
            }}
            passwordValidator={() => {
                dispact(passwordValidateAction());
            }}

            loading={status === 'submissionInProgress'}

            onSubmit={() => {
                console.log(status);
                if (status !== 'inValid' && status !== 'pure') {
                    dispact(signUpResquest());
                }
            }}

            toLogIn={() => {
                navigation.replace('Login');
            }}
        />
    );
};

export default SignUpContainer;
