const errorReducer = (state = false, action) => {
  switch (action.type) {
  case 'SET_ERROR':
    return action.error;
  default:
    return state;
  }
};

export default errorReducer;