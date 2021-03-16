import { typeTodoList } from 'redux/todo-list/constance';

const initialState = {
  tasks: null,
  loading: false,
  type: '',
  error: '',
};

const storeTodoList = (state = initialState, action) => {
  switch (action.type) {
    // testing
    case typeTodoList.GET_ALL_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default storeTodoList;
