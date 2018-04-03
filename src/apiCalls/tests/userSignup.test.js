import { userSignup } from '../userSignup';

describe("userSignup", () => {
  let mockAccountInfo;
  let mockId;

  beforeEach(() => {
    mockAccountInfo = {
      name: "me",
      username: "me@gmail.com",
      password: "password"
    };
    mockId = 0;

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockId)
      })
    );
  });

  it("should call fetch", () => {
    userSignup(mockAccountInfo);
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return userId when status is ok", () => {
    const expected = 0;
    expect(userSignup(mockAccountInfo)).resolves.toEqual(expected);
  });

  it("should throw an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error signing up");
    expect(userSignup(mockAccountInfo)).rejects.toEqual(expected);
  });
});
