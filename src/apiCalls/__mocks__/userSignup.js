import { mockSignupApiResponse } from '../../mockData';

export const userLogin = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockSignupApiResponse });
});
