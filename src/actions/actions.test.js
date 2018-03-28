import * as actions from './index';

describe('addMovies', () => {
  it('creates a type of ADD_MOVIES', () => {

    const movies = [
      { title: 'Black Panther',
        poster: "/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg" 
      },
      { title: 'Tomb Raider', 
        poster: '/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg'
      }  
    ]

    const expected = {
      type: 'ADD_MOVIES',
      movies
    }

    expect(actions.addMovies(movies)).toEqual(expected);
  })
})