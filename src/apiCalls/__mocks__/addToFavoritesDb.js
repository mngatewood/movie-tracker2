import { mockAddToFavoritesDbResponse } from '../../mockData/mockData';

export const addToFavoritesDb = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockAddToFavoritesDbResponse });
});