/* eslint-disable camelcase */

import { getFavorites } from '../getFavorites';

describe("getFavorites", () => {
  let mockUserId;
  let mockFavorites;

  beforeEach(() => {
    const mockFavorites = [
      {
        id: 2,
        movie_id: 140607,
        user_id: 1
      },
      {
        id: 3,
        movie_id: 140654,
        user_id: 1
      }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFavorites)
      })
    );

    mockUserId = 1;
  });

  it("should call fetch", () => {
    getFavorites(mockUserId);
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return favorites when status is ok", () => {
    const expected = mockFavorites;
    expect(getFavorites(mockUserId)).resolves.toEqual(expected);
  });

  it("should throw an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );

    const expected = Error("Error getting favorites");
    expect(getFavorites(mockUserId)).rejects.toEqual(expected);
  });
});
