import * as types from '../types';

export const createUser = (userInfo) => ({
  type: types.CREATE_USER,
  payload: userInfo,
});

export const signIn = () => ({
  type: types.SIGN_IN,
});

export const logOut = () => ({
  type: types.LOGOUT,
});
