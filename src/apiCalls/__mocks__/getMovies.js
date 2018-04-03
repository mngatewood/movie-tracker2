import { mockGetMoviesApiData } from '../../mockData';

export const getMovies = jest.fn().mockImplementation(() => {
  return Promise.resolve({mockGetMoviesApiData});
});
