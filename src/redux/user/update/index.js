import { UserTypes } from '~/redux/user/types';

const initialState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  errorMsg: '',
};

export function userUpdateReducer(state = initialState, action) {
  switch (action.type) {
    case UserTypes.UPDATE_PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserTypes.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        isDone: true,
      };
    }
    case UserTypes.UPDATE_PROFILE_FAILURE: {
      return {
        ...state,
        isDone: true,
        hasError: true,
        errorMsg: action.payload,
      };
    }
    default:
      return initialState;
  }
}
