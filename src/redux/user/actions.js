import { UserTypes } from './types';

export const UserUpdateProfileActions = {
  updateProfileRequest(data) {
    return {
      type: UserTypes.UPDATE_PROFILE_REQUEST,
      payload: data,
    };
  },
  updateProfileSuccess(response) {
    return {
      type: UserTypes.UPDATE_PROFILE_SUCCESS,
      payload: response,
    };
  },
  updateProfileFailure(errorMsg) {
    return {
      type: UserTypes.UPDATE_PROFILE_FAILURE,
      payload: errorMsg,
    };
  },
};
