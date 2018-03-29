import { combineReducers } from 'redux';
import movies from './movieReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  movies,
  user
});

export default rootReducer;