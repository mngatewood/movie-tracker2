/* eslint-disable camelcase */
export const movieCleaner = (moviesArray, favoritesArray) => {
  const favoriteIds = favoritesArray.map(favorite => {
    return parseInt(favorite.movie_id, 10);
  });
  return moviesArray.map((movie) => {
    const isFavorite = favoriteIds.includes(movie.id);
    return ({
      title: movie.title, 
      overview: movie.overview,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      movie_id: movie.id,
      release_date: movie.release_date,
      isFavorite: isFavorite
    });
  });
};
