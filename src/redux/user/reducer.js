import { typeUser } from 'redux/user/constance';

const initialState = {
  token: null,
  request: false,
  isAuthenticated: false,
  type: '',
  error: '',
};

const storeTodoList = (state = initialState, action) => {
  switch (action.type) {
    case typeUser.SIGN_IN:
      return {
        ...state,
      };
    case typeUser.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
export default storeTodoList;
