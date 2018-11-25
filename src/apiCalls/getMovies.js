const apiKey = process.env.REACT_APP_MDB_API_KEY

export const getMovies = async () => {
  const urlRoot = "https://api.themoviedb.org/3/movie/now_playing?";
  const urlKey = `api_key=${apiKey}`;
  const urlQuery = "&language=en-US&page=1";
  const url = `${urlRoot}${urlKey}${urlQuery}`;

  try {
    const response = await fetch(url);
    const movies = await response.json();
    return movies.results;
  } catch (error) {
    throw new Error("Error getting movies");
  }
};
