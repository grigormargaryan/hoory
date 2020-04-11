import * as type from '../types';

const initialState = {
  isAuthenticated: false,
  userInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case type.SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case type.LOGOUT:
      return {
        userInfo: initialState.userInfo,
      };
    default:
      return state;
  }
};
