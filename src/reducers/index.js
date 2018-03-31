import { combineReducers } from 'redux';
import movies from './movieReducer';
import user from './userReducer';
import error from './errorReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  movies,
  user,
  error,
  favorites
});

export default rootReducer;