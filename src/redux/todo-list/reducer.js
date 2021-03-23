import { typeTodoList } from 'redux/todo-list/constance';

const initialState = {
  tasks: null,
  request: false,
  type: null,
  error: null,
};

const storeTodoList = (state = initialState, action) => {
  switch (action.type) {
    // testing
    case typeTodoList.GET_ALL_TASKS:
      return {
        ...state,
        request: true,
      };
    case typeTodoList.GET_ALL_TASKS_SUCCEEDED:
      return {
        ...state,
        request: false,
        tasks: action.data,
        type: typeTodoList.GET_ALL_TASKS_SUCCEEDED,
      };
    case typeTodoList.GET_ALL_TASKS_FAILED:
      return {
        ...state,
        request: false,
        type: typeTodoList.GET_ALL_TASKS_FAILED,
        error: action.error,
      };
    default:
      return state;
  }
};
export default storeTodoList;
