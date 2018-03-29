const initialValue = {};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
  case 'VALIDATE_USER':
    return action.user;
  default:
    return state;
  }
};

export default userReducer;