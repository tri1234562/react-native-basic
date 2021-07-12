import {
  EMAIL_CHANGED,
  EMAIL_VALIDATE,
  NAME_CHANGED,
  NAME_VALIDATE,
  PASSWORD_CHANGED,
  PASSWORD_VALIDATE,
  SIGN_UP_ERROR,
  SIGN_UP_IN_PROGRESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../actionsType';
import { makeActionCreator } from '../ultis';

export const nameChangedAction = makeActionCreator(NAME_CHANGED);

export const nameValidateAction = makeActionCreator(NAME_VALIDATE);

export const emailChangedAction = makeActionCreator(EMAIL_CHANGED);

export const emailValidateAction = makeActionCreator(EMAIL_VALIDATE);

export const passwordChangedAction = makeActionCreator(PASSWORD_CHANGED);

export const passwordValidateAction = makeActionCreator(PASSWORD_VALIDATE);

export const signUpResquest = makeActionCreator(SIGN_UP_REQUEST);

export const signUpInProgress = makeActionCreator(SIGN_UP_IN_PROGRESS);

export const signUpSuccess = makeActionCreator(SIGN_UP_SUCCESS);

export const signUpError = makeActionCreator(SIGN_UP_ERROR);
