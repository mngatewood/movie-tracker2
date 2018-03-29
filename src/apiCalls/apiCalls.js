import apiKey from './apiKey';

export const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-27&primary_release_date.lte=2018-03-27`;

export const getMovies = async (url) => {
  try {
    const response = await fetch(url);
    const movies = await response.json();
    const cleanMovies = movieCleaner(movies.results);
    return cleanMovies;
  } catch (error) {
    throw error
    // throw new error('Error getting movies');
  }
};

const movieCleaner = (moviesArray) => {
  return moviesArray.map((movie, index) => {
    return ({
      key: movie.title + index,
      title: movie.title, 
      overview: movie.overview,
      poster: movie.poster_path,
      rating: movie.vote_average
    });
  });
};

export const userLogin = async credentials => {
  const url = 'api/users';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' }
    });
    const user = await response.json();
    return user.data;
  } catch (error) {
    throw error;
  }
};

export const userSignup = async accountInfo => {
  const url = 'api/users/new';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(accountInfo),
      headers: { 'Content-Type': 'application/json' }
    });
    const userId = await response.json();
    return userId;
  } catch (error) {
    throw error;
  }
};
