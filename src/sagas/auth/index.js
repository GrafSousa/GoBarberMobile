import { Alert } from 'react-native';
import { call, put, delay } from 'redux-saga/effects';

import { SignInActions, SignUpActions } from '~/redux/auth/actions';
import { api } from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'O usuário não pode ser prestador de serviços'
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(3000);

    yield put(SignInActions.signInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(SignInActions.signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    yield delay(3000);
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );

    yield put(SignUpActions.signUpFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.authReducer;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
