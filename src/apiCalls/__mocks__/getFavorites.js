import { mockGetFavoritesDbResponse } from '../../mockData/mockData';

export const getFavorites = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockGetFavoritesDbResponse });
});