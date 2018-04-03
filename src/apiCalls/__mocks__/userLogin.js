import { mockUser } from '../../mockData';

export const userLogin = jest.fn().mockImplementation(() => {
  return Promise.resolve({mockUser});
});
