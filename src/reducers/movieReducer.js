const initialValue = [];

const movieReducer = (state = initialValue, action) => {
  switch (action.type) {
  case 'ADD_MOVIES':
    return [...state, ...action.movies];
  default:
    return state;
  }
};

export default movieReducer;