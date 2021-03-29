import { typeTodoList } from 'module/page/main/redux/constance';
import { typeUser } from 'module/page/account/redux/constance';
const initialState = {
  tasks: null,
  request: false,
  type: null,
  error: null,
};

const storeTodoList = (state = initialState, action) => {
  switch (action.type) {
    // handle for fetch tasks
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
        error: null,
      };
    case typeTodoList.GET_ALL_TASKS_FAILED:
      return {
        ...state,
        request: false,
        type: typeTodoList.GET_ALL_TASKS_FAILED,
        error: action.error,
      };
    // handle for create new task
    case typeTodoList.ADD_TASK:
      return {
        ...state,
        request: true,
      };
    case typeTodoList.ADD_TASK_SUCCEEDED:
      return {
        ...state,
        request: false,
        tasks: [...state.tasks, action.newTask],
        type: typeTodoList.ADD_TASK_SUCCEEDED,
        error: null,
      };
    case typeTodoList.ADD_TASK_FAILED:
      return {
        ...state,
        request: false,
        type: typeTodoList.ADD_TASK_FAILED,
        error: action.error,
      };
    //handle remove task
    case typeTodoList.REMOVE_TASK:
      return {
        ...state,
        request: true,
      };
    case typeTodoList.REMOVE_TASK_SUCCEEDED:
      return {
        ...state,
        request: false,
        tasks: state.tasks.filter((task) => task._id !== action._id),
        type: typeTodoList.REMOVE_TASK_SUCCEEDED,
        error: null,
      };
    case typeTodoList.REMOVE_TASK_FAILED:
      return {
        ...state,
        request: false,
        type: typeTodoList.REMOVE_TASK_FAILED,
        error: action.error,
      };
    //handle update task
    case typeTodoList.UPDATE_TASK:
      return {
        ...state,
        request: true,
      };
    case typeTodoList.UPDATE_TASK_SUCCEEDED:
      return {
        ...state,
        request: false,
        tasks: state.tasks.map((item) =>
          item._id === action._id ? (item = action.taskUpdate) : item
        ),
        type: typeTodoList.UPDATE_TASK_SUCCEEDED,
        error: null,
      };
    case typeTodoList.UPDATE_TASK_FAILED:
      return {
        ...state,
        request: false,
        type: typeTodoList.UPDATE_TASK_FAILED,
        error: action.error,
      };
    //clear type
    case typeTodoList.CLEAR_TYPE_TODO_LIST:
      return {
        ...state,
        type: null,
      };
    //clear tasks when system sign out
    case typeUser.SIGN_OUT_SUCCEEDED:
      return (state = initialState);
    default:
      return state;
  }
};
export default storeTodoList;
