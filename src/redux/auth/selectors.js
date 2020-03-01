import { createSelector } from 'reselect';

const AuthStateSelector = state => state.authReducer;

export const AuthSignedSelector = createSelector(
  AuthStateSelector,
  authReducer => authReducer.isSigned
);

export const AuthIsLoadingSelector = createSelector(
  AuthStateSelector,
  authReducer => authReducer.isLoading
);
