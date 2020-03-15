import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '~/redux/auth/types';
import { UserTypes } from '~/redux/user/types';

import { userUpdateSaga } from './user';
import { setToken, signIn, signUp } from './auth';

export function* rootSaga() {
  yield all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, userUpdateSaga),
  ]);
}
