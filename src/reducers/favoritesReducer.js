const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITES':
    return [...state, ...action.favorites];
  default:
    return state;
  }
};

export default favoritesReducer;