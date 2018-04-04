/* eslint-disable id-blacklist */
import { userLogin } from '../userLogin';

describe("userLogin", () => {
  let mockCredentials;

  beforeEach(() => {
    const mockCredentials = {
      username: "me@gmail.com",
      password: "password"
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: mockCredentials })
      })
    );
  });

  it("should call fetch", () => {
    userLogin(mockCredentials);
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return data when status is ok", () => {
    const expected = {
      username: "me@gmail.com",
      password: "password"
    };

    expect(userLogin(mockCredentials)).resolves.toEqual(expected);
  });

  it("should throw an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error logging in");

    expect(userLogin(mockCredentials)).rejects.toEqual(expected);
  });
});
