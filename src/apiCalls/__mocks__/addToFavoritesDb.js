import { mockAddToFavoritesDbResponse } from '../../mockData/mockData';

export const userLogin = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockAddToFavoritesDbResponse });
});