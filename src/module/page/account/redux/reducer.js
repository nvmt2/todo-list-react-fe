import { typeUser } from 'module/page/account/redux/constance';

const initialState = {
  token: null,
  data: null,
  request: false,
  isAuthenticated: false,
  type: null,
  error: null,
};

const storeUser = (state = initialState, action) => {
  switch (action.type) {
    //handle for sign in
    case typeUser.SIGN_IN:
      return {
        ...state,
        request: true,
      };
    case typeUser.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        token: action.data.token,
        data: action.data.user,
        request: false,
        isAuthenticated: true,
        type: typeUser.SIGN_IN_SUCCEEDED,
      };
    case typeUser.SIGN_IN_FAILED:
      return {
        ...state,
        data: null,
        request: false,
        isAuthenticated: false,
        type: typeUser.SIGN_IN_FAILED,
        error: action.error,
      };
    //handle for sign up
    case typeUser.SIGN_UP:
      return {
        ...state,
        request: true,
      };
    case typeUser.SIGN_UP_SUCCEEDED:
      return {
        ...state,
        request: false,
        type: typeUser.SIGN_UP_SUCCEEDED,
      };
    case typeUser.SIGN_UP_FAILED:
      return {
        ...state,
        request: false,
        type: typeUser.SIGN_UP_FAILED,
        error: action.error,
      };
    //handle for update user
    case typeUser.UPDATE_USER:
      return {
        ...state,
        request: true,
      };
    case typeUser.UPDATE_USER_SUCCEEDED:
      return {
        ...state,
        request: false,
        data: action.data,
        type: typeUser.UPDATE_USER_SUCCEEDED,
      };
    case typeUser.UPDATE_USER_FAILED:
      return {
        ...state,
        request: false,
        type: typeUser.UPDATE_USER_FAILED,
      };
    //handle for sign out
    case typeUser.SIGN_OUT:
      return {
        ...state,
        request: true,
      };
    case typeUser.SIGN_OUT_SUCCEEDED:
      return {
        ...state,
        token: null,
        data: null,
        request: false,
        isAuthenticated: false,
        type: typeUser.SIGN_OUT_SUCCEEDED,
        error: null,
      };
    case typeUser.SIGN_OUT_FAILED:
      return {
        ...state,
        type: typeUser.SIGN_OUT_FAILED,
        error: action.error,
      };
    //clear reducer
    case typeUser.CLEAR_TYPE_USER:
      return {
        ...state,
        type: null,
      };
    default:
      return state;
  }
};
export default storeUser;
