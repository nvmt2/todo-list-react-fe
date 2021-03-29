import { typeUser } from 'redux/user/constance';

export const actionSignIn = (account) => ({
  type: typeUser.SIGN_IN,
  account,
});
export const actionSignUp = (account) => ({
  type: typeUser.SIGN_UP,
  account,
});
export const actionUpdateUser = (informationUser, token) => ({
  type: typeUser.UPDATE_USER,
  informationUser,
  token,
});
export const actionSignOut = (token) => ({
  type: typeUser.SIGN_OUT,
  token,
});
export const actionClearUserType = () => ({
  type: typeUser.CLEAR_TYPE_USER,
});
