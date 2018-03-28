import * as apiCalls from './apiCalls';

describe('getMovies', () => {
  let mockUrl;

  beforeAll( () => {

    const mockMovieArray = [ 
      { title: 'Black Panther',
      poster_path : "/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg" }
    ]
    
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovieArray)
      })
    })

    mockUrl = 'http://www.movies.com'

  })

  it('calls fetch with expected params', () => {
    apiCalls.getMovies(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('returns a movie object when status is ok', async () => {
    const expected = { 
      title: 'Black Panther',
      poster_path : "/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg"
    }
    expect(apiCalls.getMovies(mockUrl)).resolves.toBe(expected)
  })

  it('throws an error when status is not ok', () => {

  })
})