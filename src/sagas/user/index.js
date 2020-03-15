import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';

import { api } from '~/services/api';

import { UserUpdateProfileActions } from '~/redux/user/actions';

export function* userUpdateSaga({ payload }) {
  try {
    const { name, email, ...rest } = payload;

    const profile = {
      name,
      email,

      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso');

    yield put(UserUpdateProfileActions.updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados'
    );
    yield put(UserUpdateProfileActions.updateProfileFailure());
  }
}
