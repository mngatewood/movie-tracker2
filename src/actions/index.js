export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
});

export const validateUser = (user) => ({
  type: 'VALIDATE_USER',
  user
});

export const logOut = () => ({
  type: 'LOG_OUT'
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});

export const addFavorites = (favorites) => ({
  type: 'ADD_FAVORITES',
  favorites
});