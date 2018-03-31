import apiKey from './apiKey';

export const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-03-01&primary_release_date.lte=2018-03-31`;

export const getMovies = async (url) => {
  try {
    const response = await fetch(url);
    const movies = await response.json();
    const cleanMovies = movieCleaner(movies.results);
    return cleanMovies;
  } catch (error) {
    throw error;
  }
};

const movieCleaner = (moviesArray) => {
  return moviesArray.map((movie) => {
    return ({
      title: movie.title, 
      overview: movie.overview,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      movie_id: movie.id,
      release_date: movie.release_date
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

export const getFavorites = async userId => {
  const url = `api/users/${userId}/favorites`;
  try {
    const response = await fetch(url);
    const favorites = await response.json();
    return favorites.data;
  } catch (error) {
    throw error;
  }
};

export const addToFavoritesDb = async (movieData, userId) => {
  const favoriteData = {...movieData, user_id: userId};
  const url = 'api/users/favorites/new';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(favoriteData),
      headers: { 'Content-Type': 'application/json' }
    });
    const favoriteId = await response.json();
    return favoriteId;
  } catch (error) {
    throw error;
  }
};

export const removeFromFavoritesDb = async (movieId, userId) => {
  const favoriteData = {movieId, userId};
  const url = `api/users/${userId}/favorites/${movieId}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(favoriteData),
      headers: { 'Content-Type': 'application/json' }
    });
    const favoriteId = await response.json();
    return favoriteId;
  } catch (error) {
    throw error;
  }
};