const userReducer = (state = {}, action) => {
  switch (action.type) {
  case 'VALIDATE_USER':
    return action.user;
  case 'LOG_OUT':
    return {};
  default:
    return state;
  }
};

export default userReducer;