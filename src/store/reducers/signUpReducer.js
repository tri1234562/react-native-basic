import { EMAIL_CHANGED, EMAIL_VALIDATE, NAME_CHANGED, NAME_VALIDATE, PASSWORD_CHANGED, PASSWORD_VALIDATE, SIGN_UP_ERROR, SIGN_UP_IN_PROGRESS, SIGN_UP_SUCCESS } from '../actionsType';

const Status = Object.freeze({
  pure: 'pure',
  inValid: 'inValid',
  valid: 'valid',
  submissionInProgress: 'submissionInProgress',
  submissionSuccess: 'submissionSuccess',
  submissionError: 'submissionError',
});

const initialState = {
  name: {
    value: '',
    error: ''
  },
  email: {
    value: '',
    error: ''
  },
  password: {
    value: '',
    error: ''
  },
  status: Status.pure,
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_CHANGED: {
      return {
        ...state,
        name: {
          value: action.payload,
          error: ''
        },
        status: Status.inValid,
      };
    }

    case NAME_VALIDATE: {
      const name = state.name;
      name.error = name.value === '' ? 'Full name cannot be empty.' : '';
      const status = name.error === '' && state.email.error === '' && state.password.error === '' ? Status.valid : Status.inValid;
      return {
        ...state,
        name: name,
        status: status,
      };
    }

    case EMAIL_CHANGED: {
      return {
        ...state,
        email: {
          value: action.payload,
          error: ''
        },
        status: Status.inValid,
      };
    }

    case EMAIL_VALIDATE: {
      const email = state.email;

      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (email.value === '') {
        email.error = 'Email cannot be empty.';
      } else if (!emailRegex.test(email.value)) {
        email.error = 'Incorrect email format.';
      }

      const status = state.name.error === '' && email.error === '' && state.password.error === '' ? Status.valid : Status.inValid;

      return {
        ...state,
        email: email,
        status: status,
      };
    }

    case PASSWORD_CHANGED: {
      return {
        ...state,
        password: {
          value: action.payload,
          error: ''
        },
        status: Status.inValid,
      };
    }

    case PASSWORD_VALIDATE: {
      const password = state.password;
      password.error = password.value === '' ? 'Password cannot be empty.' : '';
      const status = state.name.error === '' && state.email.error === '' && password.error === '' ? Status.valid : Status.inValid;
      return {
        ...state,
        password: password,
        status: status,
      };
    }

    case SIGN_UP_IN_PROGRESS: {
      return {
        ...state,
        status: Status.submissionInProgress,
      };
    }

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        status: Status.submissionSuccess,
      };
    }

    case SIGN_UP_ERROR: {
      return {
        ...state,
        status: Status.submissionError,
      };
    }

    default:
      return state;

  }
};

export default SignUpReducer;
