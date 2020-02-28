import { createSelector } from 'reselect';

const AuthStateSelector = state => state.authReducer;

export const AuthIsLoadingSelector = createSelector(
  AuthStateSelector,
  authReducer => authReducer.isLoading
);
