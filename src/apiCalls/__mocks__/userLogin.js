import { mockUser } from '../../mockData/mockData';

export const userLogin = jest.fn().mockImplementation(() => {
  return Promise.resolve({mockUser});
});
