const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITES':
    return [...state, ...action.favorites];
  case 'ADD_FAVORITE_TO_STORE':
    return [...state, action.favorite];
  case 'RESET_FAVORITES':
    return [];
  case 'REMOVE_FAVORITE_FROM_STORE':
    return state.filter(movie => movie.movie_id !== action.movie_id);
  default:
    return state;
  }
};

export default favoritesReducer;
