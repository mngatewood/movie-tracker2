import * as helper from './apiCalls';
import { movieCleaner } from './movieCleaner';
jest.mock('./movieCleaner')

describe ('helper functions', () => {

  describe('userLogin', () => {
    let mockCredentials;

    beforeEach(() => {
      const mockCredentials = { 
        username: 'me@gmail.com', 
        password: 'password'
      }
      
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({data: mockCredentials})
        })
      ))
    })

    it('should call fetch', () => {
      helper.userLogin(mockCredentials)
      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return data when status is ok', () => {
      const expected = { 
        username: 'me@gmail.com', 
        password: 'password'
      }

      expect(helper.userLogin(mockCredentials)).resolves.toEqual(expected)
    })

    it('should throw an error when status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          ok: false,
        })
      ))
      const expected = Error('Error logging in')

      expect(helper.userLogin(mockCredentials)).rejects.toEqual(expected); 
    })
  })

  describe('userSignup', () => {
    let mockAccountInfo;
    let mockId

    beforeEach(() => {
      const mockAccountInfo = { 
        name: 'me', 
        username: 'me@gmail.com', 
        password: 'password'
      }
      const mockId = 0;

      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockId)
        })
      ))
    })

    it('should call fetch', () => {
      helper.userSignup(mockAccountInfo);
      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return userId when status is ok', () => {
      const expected = 0
      expect(helper.userSignup(mockAccountInfo)).resolves.toEqual(expected)
    })

    it('should throw an error when status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          ok: false,
        })
      ))
      const expected = Error('Error signing up')
      expect(helper.userSignup(mockAccountInfo)).rejects.toEqual(expected)
    })
  })

  describe('getFavorites', () => {
    let mockUserId;
    let mockFavorites;

    beforeEach(() => {
      const mockFavorites = [
        { id: 2,
          movie_id: 140607,
          user_id: 1 },
        { id: 3,
          movie_id: 140654,
          user_id: 1 },          
      ]

      window.fetch = jest.fn().mockImplementation( () => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockFavorites)
        })
      ))      

      const mockUserId = 1
    })

    it('should call fetch', () => {
      helper.getFavorites(mockUserId);
      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return favorites when status is ok', () => {
      const expected = mockFavorites;
      expect(helper.getFavorites(mockUserId)).resolves.toEqual(expected)
    })

    it('should throw an error when status is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => (
        Promise.reject({
          ok:false
        })
      ))

      const expected = Error('Error getting favorites')
      expect(helper.getFavorites(mockUserId)).rejects.toEqual(expected)
    })
  })
  describe('addToFavoritesDb', () => {
    let mockMovieData;
    let mockUserId;
    beforeEach(() => {
      const mockMovieData = 
        { id: 3,
          movie_id: 140654,
          user_id: 1 }          
      
      const mockUserId = 1

      window.fetch = jest.fn().mockImplementation( () => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovieData.movie_id)
        })
      ))
    })
    
    it('should call fetch', () => {
      helper.addToFavoritesDb(mockMovieData, mockUserId);
      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return favoriteId when status is ok', () => {
      const expected = 140654;
      expect(helper.addToFavoritesDb(mockMovieData, mockUserId)).resolves.toEqual(expected)
    })

    it('should throw an error when status is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => (
        Promise.reject({
          ok:false
        })
      ))

      const expected = Error('Error adding to favorites');
      expect(helper.addToFavoritesDb(mockMovieData, mockUserId)).rejects.toEqual(expected)
    })
  })  
  describe('removeFromFavoritesDb', () => {
    let mockMovieId;
    let mockUserId;
    let mockFavoriteId

    beforeEach(() => {
      const mockMovieId = 140654
      const mockUserId = 1
      const mockFavoriteId = {mockMovieId, mockUserId}

      window.fetch = jest.fn().mockImplementation( () => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockFavoriteId)
        })
      ))
    })
    
    it('should call fetch', () => {
      helper.removeFromFavoritesDb(mockMovieId, mockUserId);
      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return favoriteId when status is ok', () => {
      const expected = {"mockMovieId": 140654, "mockUserId": 1};
      expect(helper.removeFromFavoritesDb(mockMovieId, mockUserId)).resolves.toEqual(expected)
    })

    it('should throw an error when status is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => (
        Promise.reject({
          ok: false
        })
      ))

      const expected = Error('Error removing favorite')
      expect(helper.removeFromFavoritesDb(mockMovieId, mockUserId)).rejects.toEqual(expected)
    })
  })  
})
