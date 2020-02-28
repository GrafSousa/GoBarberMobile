import { AuthTypes } from './types';

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  isSigned: false,
  hasError: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isSigned: true,
        isLoading: false,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case AuthTypes.SIGN_OUT:
      return {
        ...state,
        token: null,
        isSigned: false,
      };
    default:
      return state;
  }
}
