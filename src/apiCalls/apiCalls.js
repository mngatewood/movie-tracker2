export const getMovies = async (url) => {
  try {
    const response = await fetch(url);
    const movies = await response.json();
    console.log(movies);
    return movies;
  } catch (error) {
    return 'error getting movies';
  }
};
