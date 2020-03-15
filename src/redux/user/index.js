import { combineReducers } from 'redux';

import { userEntityReducer } from './entity';
import { userUpdateReducer } from './update';

const reducer = combineReducers({
  entity: userEntityReducer,
  update: userUpdateReducer,
});

export { reducer as crudUserReducer };
