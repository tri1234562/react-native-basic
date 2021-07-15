import React, { useState } from 'react';

import SignUpView from './SignUpView';

const Status = Object.freeze({
    inValid: 'inValid',
    valid: 'valid',
    submissionInProgress: 'submissionInProgress',
    submissionSuccess: 'submissionSuccess',
    submissionError: 'submissionError',
});

const SignUpContainer = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [status, setStatus] = useState(Status.inValid);

    const changeValidateStatus = () => {
        if (nameError === '' && emailError === '' && passwordError === '') {
            setStatus(Status.valid);
        } else {
            setStatus(Status.inValid);
        }
    }

    const changeName = (value) => {
        setName(value);
        setNameError('');
    }

    const validateName = () => {
        if (name === '') {
            setNameError('Full name cannot be empty.');
        }
        changeValidateStatus();
    }

    const changeEmail = (value) => {
        setEmail(value);
        setEmailError('');
    }

    const validateEmail = () => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === '') {
            setEmailError('Email cannot be empty.');
        } else if (!emailRegex.test(email)) {
            setEmailError('Incorrect email format.');
        }
        changeValidateStatus();
    }

    const changePassword = (value) => {
        setPassword(value);
        setPasswordError('');
    }

    const validatePassword = () => {
        if (password === '') {
            setPasswordError('Password cannot be empty.');
        }
        changeValidateStatus();
    }

    const signUp = () => {
        if (status !== Status.valid) return
        const user = {
            name: name,
            email: email,
            password: password,
        }
        setStatus(Status.submissionInProgress);
        try {
            console.log('Sign up user: ', user);
            setStatus(Status.submissionSuccess);
        } catch (error) {
            setStatus(Status.submissionError);
        }
    }

    return (
        <SignUpView
            nameValue={name}
            nameError={nameError}
            onChangeName={changeName}
            nameValidator={validateName}
            emailValue={email}
            emailError={emailError}
            onChangeEmail={changeEmail}
            emailValidator={validateEmail}
            passwordValue={password}
            passwordError={passwordError}
            onChangePassword={changePassword}
            passwordValidator={validatePassword}
            signUp={signUp}
            navigateToLogIn={() => {
                navigation.replace('Login');
            }}
        />
    );
};

export default SignUpContainer;
