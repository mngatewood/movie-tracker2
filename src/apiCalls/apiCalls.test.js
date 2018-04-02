import * as helper from './apiCalls';
import { movieCleaner } from './movieCleaner';
jest.mock('./movieCleaner')

describe ('helper functions', () => {

  describe('getMovies', () => {
    let mockUrl;
    let mockMovieData

    beforeEach( () => {
      mockMovieData = {
        results: [ 
          { title: 'Tomb Raider',
            overview: 'mockOverview',
            poster_path: 'mockPosterPath',
            vote_average: '5'
          }
        ]
      }

      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovieData)
        })
      ))

    })

    it('calls fetch with expected params', () => {
      helper.getMovies();
      expect(window.fetch).toHaveBeenCalled()
    })

    it('returns a movie object when status is ok', async () => {
      const expected = [{
        "overview": "mockOverview", 
        "poster_path": "mockPosterPath", 
        "title": "Tomb Raider", 
        "vote_average": "5" }]
      await expect(helper.getMovies(mockUrl)).resolves.toEqual(expected)
    })

    it('throws an error when status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          ok: false,
        })
      )) 
      const expected = Error('Error getting movies')
      
      expect(helper.getMovies(mockUrl)).rejects.toEqual(expected)
    })
  })

  describe('userLogin', () => {
    let mockCredentials;

    beforeEach(() => {
      const mockCredentials = { 
       username: 'me', 
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
        username: 'me', 
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
        username: 'me', 
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
})
