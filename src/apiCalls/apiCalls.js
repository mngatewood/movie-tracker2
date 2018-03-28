import apiKey from './apiKey';

export const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-27&primary_release_date.lte=2018-03-27`;

export const getMovies = async (url) => {
  try {
    const response = await fetch(url);
    const movies = await response.json();
    const cleanMovies = movieCleaner(movies.results);
    return cleanMovies;
  } catch (error) {
    return 'error getting movies';
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

export const getUser = async (email, password) => {
  const url = '/api/users';
  const user = { email: email, password: password };
  try {
    console.log(user, url)
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    });
const data = await response.json();
console.log(data);
  } catch (error) {
    console.log(error)
  }
};
