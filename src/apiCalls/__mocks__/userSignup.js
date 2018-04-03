import { mockSignupDbResponse } from '../../mockData/mockData';

export const userSignup = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockSignupDbResponse });
});
