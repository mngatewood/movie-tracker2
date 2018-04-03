import movieReducer from './movieReducer';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';
import errorReducer from './errorReducer'
import * as actions from '../actions/index.js';

describe('reducers', () => {

  describe('movieReducer', () => {
    it('should return the default state', () => {
      const expected = []
      expect(movieReducer(undefined, {})).toEqual(expected)
    })

    it('should return a state with movies when given ADD_MOVIES action', () => {
      const movies = [ { title: 'Black Panther'} ];
      const expected = [ { title: 'Black Panther'} ];
      expect(movieReducer(undefined, actions.addMovies(movies))).toEqual(expected)
    })   
  })

  describe('userReducer', () => {
    it('should return the default state', () => {
      const expected = {};
      expect(userReducer(undefined, {})).toEqual(expected);
    })

    it('should return a user when given VALIDATE_USER action', () => {
      const user = {username: 'Will', password: 'iLoveTesting'};
      const expected = user;

      expect(userReducer(undefined,actions.validateUser(user))).toEqual(expected)
    })

    it('should return an empty object when given LOG_OUT action', () => {
      const expected = {};
      expect(userReducer(undefined, actions.logOut())).toEqual(expected);
    })
  })

  describe('favoritesReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(favoritesReducer(undefined, {})).toEqual(expected)
    })

    it('should return a state with favorites', () => {
      const favorites = [
        {movie_id: 1},
        {movie_id: 2}
      ]
      const expected = [
        {movie_id: 1},
        {movie_id: 2}
      ]
      expect(favoritesReducer(undefined, actions.addFavorites(favorites))).toEqual(expected)
    })

    it('should return a state with a favorite movie', () => {
      const favorite = {movie_id: 1}
      const store = [ {movie_id: 2 } ]
      const expected = [ {movie_id:2}, {movie_id:1} ]
      expect(favoritesReducer(store, actions.addFavoriteToStore(favorite))).toEqual(expected)
    })

    it('should return an empty array to reset favories', () => {
      const expected = []
      expect(favoritesReducer(undefined, actions.resetFavorites())).toEqual(expected)
    })

    it('should remove a favorite from store', () => {
      const store = [ {movie_id:2}, {movie_id:1} ]
      const expected = [ {movie_id:2} ]
      const movie = 1
      expect(favoritesReducer(store, actions.removeFavoriteFromStore(movie))).toEqual(expected)
    })
  })

  describe('errorReducer', () => {
    it('should return the default state', () => {
      const expected = false
      expect(errorReducer(undefined, {})).toEqual(expected)
    })

    it('should return an error', () => {
      const expected = 'Create an account or Login'
      const error = 'Create an account or Login'
      expect(errorReducer(undefined, actions.setError(error))).toEqual(expected)
    })
  })
})