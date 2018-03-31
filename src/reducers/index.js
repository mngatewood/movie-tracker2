import { combineReducers } from 'redux';
import movies from './movieReducer';
import user from './userReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  movies,
  user,
  error
});

export default rootReducer;