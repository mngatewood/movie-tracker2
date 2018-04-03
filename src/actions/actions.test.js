/* eslint-disable camelcase */

import * as actions from './index';

describe('actions', () => {

  describe('addMovies', () => {
    it('creates a type of ADD_MOVIES', () => {

      const movies = [
        { title: 'Black Panther',
          poster: "/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg" 
        },
        { title: 'Tomb Raider', 
          poster: '/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg'
        }  
      ];

      const expected = {
        type: 'ADD_MOVIES',
        movies
      };

      expect(actions.addMovies(movies)).toEqual(expected);
    });
  });
  
  describe('validateUser', () => {
    it('should create a type of VALIDATE_USER', () => {

      const user = { username: 'Will', password: 'iHeartTesting' };

      const expected = {
        type: 'VALIDATE_USER',
        user
      };

      expect(actions.validateUser(user)).toEqual(expected);
    });
  });

  describe('logOut', () => {
    it('should create a type of LOG_OUT', () => {
      const expected = {type: 'LOG_OUT'};
      expect(actions.logOut()).toEqual(expected);
    });
  });

  describe('setError', () => {
    it('should create a type of SET_ERROR', () => {
      const error = 'error';
      const expected = {"error": "error", "type": "SET_ERROR"};
      expect(actions.setError(error)).toEqual(expected);
    });
  });

  describe('addFavorites', () => {
    it('should create a type of ADD_FAVORITES', () => {
      const favorites = { movie_id: 1 };
      const expected = { type: 'ADD_FAVORITES', favorites};
      expect(actions.addFavorites(favorites)).toEqual(expected);
    });
  });

  describe('addFavoriteToStore', () => {
    it('should create a type of ADD_FAVORITE_TO_STORE', () => {
      const favorite = { movie_id: 1};
      const expected = {type: 'ADD_FAVORITE_TO_STORE', favorite};
      expect(actions.addFavoriteToStore(favorite)).toEqual(expected);
    });
  });

  describe('resetFavorites', () => {
    it('should create a type of RESET_FAVORITES', () => {
      const expected = {type: 'RESET_FAVORITES'};
      expect(actions.resetFavorites()).toEqual(expected);
    });
  });

  describe('removeFavoriteFromStore', () => {
    it('should create a type of REMOVE_FAVORITE_FROM_STORE', () => {
      const movie_id = 1;
      const expected = {type: 'REMOVE_FAVORITE_FROM_STORE', movie_id};
      expect(actions.removeFavoriteFromStore(movie_id)).toEqual(expected);
    });
  });
});