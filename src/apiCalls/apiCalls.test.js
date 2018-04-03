import * as helper from './apiCalls';
import { movieCleaner } from './movieCleaner';
jest.mock('./movieCleaner')

describe('helper functions', () => {

  
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
