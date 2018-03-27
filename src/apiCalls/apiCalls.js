import apiKey from './apiKey';

export const getMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-27&primary_release_date.lte=2018-03-27`;
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
  } catch (error) {
    return 'error getting movies';
  }
};
