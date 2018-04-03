import { mockRemoveFromFavoritesDbResponse } from '../../mockData/mockData';

export const removeFromFavoritesDb = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockRemoveFromFavoritesDbResponse });
});

