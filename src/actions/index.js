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