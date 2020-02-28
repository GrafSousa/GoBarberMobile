import { AuthTypes } from './types';

export const SignInActions = {
  signInRequest(email, password) {
    return {
      type: AuthTypes.SIGN_IN_REQUEST,
      payload: { email, password },
    };
  },
  signInSuccess(token, user) {
    return {
      type: AuthTypes.SIGN_IN_SUCCESS,
      payload: { token, user },
    };
  },
  signInFailure() {
    return {
      type: AuthTypes.SIGN_IN_FAILURE,
    };
  },
};

export const SignUpActions = {
  signUpRequest(name, email, password) {
    return {
      type: AuthTypes.SIGN_UP_REQUEST,
      payload: { name, email, password },
    };
  },
  signUpSuccess() {
    return { type: AuthTypes.SIGN_UP_SUCCESS };
  },
  signUpFailure() {
    return { type: AuthTypes.SIGN_UP_FAILURE };
  },
};

export const SignOutActions = {
  signOut() {
    return {
      type: AuthTypes.SIGN_OUT,
    };
  },
};
