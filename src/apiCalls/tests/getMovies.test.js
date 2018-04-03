import { getMovies } from '../getMovies';

describe("getMovies", () => {
  let mockUrl;
  let mockMovieData;

  beforeEach(() => {
    mockMovieData = {
      results: [
        {
          title: "Tomb Raider",
          overview: "mockOverview",
          poster_path: "mockPosterPath",
          vote_average: "5"
        }
      ]
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovieData)
      })
    );
  });

  it("calls fetch with expected params", () => {
    getMovies();
    expect(window.fetch).toHaveBeenCalled();
  });

  it("returns a movie object when status is ok", async () => {
    const expected = [
      {
        overview: "mockOverview",
        poster_path: "mockPosterPath",
        title: "Tomb Raider",
        vote_average: "5"
      }
    ];
    await expect(getMovies(mockUrl)).resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error getting movies");

    expect(getMovies(mockUrl)).rejects.toEqual(expected);
  });
});
