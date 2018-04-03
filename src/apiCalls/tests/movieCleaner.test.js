import {movieCleaner} from '../movieCleaner';
import { mockDirtyMovieData, cleanMovieData } from "../../mockData/mockData";

describe('movieCleaner', () => {
  it('should clean a movies array', () => {
    const movieData = movieCleaner(mockDirtyMovieData);
    expect(movieData).toEqual(cleanMovieData);
  });
});