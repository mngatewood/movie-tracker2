/* eslint-disable camelcase */
import { addToFavoritesDb } from '../addToFavoritesDb';

describe("addToFavoritesDb", () => {
  let mockMovieData;
  let mockUserId;
  beforeEach(() => {
    const mockMovieData = {
      id: 3,
      movie_id: 140654,
      user_id: 1
    };

    mockUserId = 1;

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovieData.movie_id)
      })
    );
  });

  it("should call fetch", () => {
    addToFavoritesDb(mockMovieData, mockUserId);
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return favoriteId when status is ok", () => {
    const expected = 140654;
    expect(addToFavoritesDb(mockMovieData, mockUserId)).resolves.toEqual(
      expected
    );
  });

  it("should throw an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );

    const expected = Error("Error adding to favorites");
    expect(addToFavoritesDb(mockMovieData, mockUserId)).rejects.toEqual(
      expected
    );
  });
});
