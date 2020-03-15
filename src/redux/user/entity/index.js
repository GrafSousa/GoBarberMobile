import { AuthTypes } from '~/redux/auth/types';
import { UserTypes } from '~/redux/user/types';

const initialState = {
  user: null,
};

export function userEntityReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return { user: action.payload.user };
    case UserTypes.UPDATE_PROFILE_SUCCESS:
      return { user: action.payload };
    default:
      return state;
  }
}
