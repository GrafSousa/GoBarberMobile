import { combineReducers } from 'redux';

import { userEntityReducer } from '~/redux/user/entity';

const reducer = combineReducers({
  user: userEntityReducer,
});

export { reducer as entitiesReducer };
