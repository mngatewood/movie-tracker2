import { mockGetMoviesApiData } from '../../mockData/mockData';

export const getMovies = jest.fn().mockImplementation(() => {
  return Promise.resolve({mockGetMoviesApiData});
});
