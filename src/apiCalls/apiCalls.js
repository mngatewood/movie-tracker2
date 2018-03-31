import apiKey from './apiKey';

export const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-27&primary_release_date.lte=2018-03-27`;

export const getMovies = async (url) => {
  try {
    const response = await fetch(url);
    const movies = await response.json();
    const cleanMovies = movieCleaner(movies.results);
    console.log(cleanMovies)
    return cleanMovies;
  } catch (error) {
    throw error;
  }
};

const movieCleaner = (moviesArray) => {
  return moviesArray.map((movie, index) => {
    return ({
      key: movie.title + index,
      title: movie.title, 
      overview: movie.overview,
      poster: movie.poster_path,
      rating: movie.vote_average,
      movieId: movie.id,
      release: movie.release_date
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

const movieData = {
  user_id: 1,
  movie_id: 338970,
  overview: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  poster_path: "/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
  vote_average: 6.2,
  release_date: "2018-03-08",
  title: "Tomb Raider"
};

export const addToFavorites = async () => {
  const url = 'api/users/favorites/new';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(movieData),
      headers: { 'Content-Type': 'application/json' }
    });
    const favoriteId = await response.json();
    console.log(favoriteId)
    return favoriteId;
  } catch (error) {
    throw error;
  }
};