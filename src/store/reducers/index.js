import { combineReducers } from 'redux';

import hello from './hello';
import todos from './todos';

export default combineReducers({
  hello,
  todos
});
