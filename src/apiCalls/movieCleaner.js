export const movieCleaner = (moviesArray) => {
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
