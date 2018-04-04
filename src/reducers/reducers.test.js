/* eslint-disable camelcase */
import movieReducer from './movieReducer';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';
import errorReducer from './errorReducer';
import * as actions from '../actions/index.js';

describe('reducers', () => {

  describe('movieReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(movieReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with movies when given ADD_MOVIES action', () => {
      const movies = [{ title: 'Black Panther'}];
      const expected = [{ title: 'Black Panther'}];
      const action = actions.addMovies(movies);
      expect(movieReducer(undefined, action)).toEqual(expected);
    });   
  });

  describe('userReducer', () => {
    it('should return the default state', () => {
      const expected = {};
      expect(userReducer(undefined, {})).toEqual(expected);
    });

    it('should return a user when given VALIDATE_USER action', () => {
      const user = {username: 'Will', password: 'iLoveTesting'};
      const expected = user;
      const action = actions.validateUser(user);
      expect(userReducer(undefined, action)).toEqual(expected);
    });

    it('should return an empty object when given LOG_OUT action', () => {
      const expected = {};
      const action = actions.logOut();
      expect(userReducer(undefined, action)).toEqual(expected);
    });
  });

  describe('favoritesReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(favoritesReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with favorites', () => {
      const favorites = [
        {movie_id: 1},
        {movie_id: 2}
      ];
      const expected = [
        {movie_id: 1},
        {movie_id: 2}
      ];
      const action = actions.addFavorites(favorites);
      expect(favoritesReducer(undefined, action)).toEqual(expected);
    });

    it('should return a state with a favorite movie', () => {
      const favorite = {movie_id: 1};
      const store = [{movie_id: 2 }];
      const expected = [{movie_id:2}, {movie_id:1}];
      const action = actions.addFavoriteToStore(favorite);
      expect(favoritesReducer(store, action)).toEqual(expected);
    });

    it('should return an empty array to reset favorites', () => {
      const expected = [];
      const action = actions.resetFavorites();
      expect(favoritesReducer(undefined, action)).toEqual(expected);
    });

    it('should remove a favorite from store', () => {
      const store = [{movie_id:2}, {movie_id:1}];
      const expected = [{movie_id:2}];
      const movie = 1;
      const action = actions.removeFavoriteFromStore(movie);
      expect(favoritesReducer(store, action)).toEqual(expected);
    });
  });

  describe('errorReducer', () => {
    it('should return the default state', () => {
      const expected = false;
      expect(errorReducer(undefined, {})).toEqual(expected);
    });

    it('should return an error', () => {
      const expected = 'Create an account or Login';
      const error = 'Create an account or Login';
      const action = actions.setError(error);
      expect(errorReducer(undefined, action)).toEqual(expected);
    });
  });
});