import { typeTodoList } from 'redux/todo-list/constance';

export const actionGetAllTasks = (token) => ({
  type: typeTodoList.GET_ALL_TASKS,
  token,
});
export const actionAddNewTask = (bodyTask, token) => ({
  type: typeTodoList.ADD_TASK,
  bodyTask,
  token,
});
export const actionRemoveTask = (idTask, token) => ({
  type: typeTodoList.REMOVE_TASK,
  idTask,
  token,
});
export const actionUpdateTask = (idTask, taskUpdate, token) => ({
  type: typeTodoList.UPDATE_TASK,
  idTask,
  taskUpdate,
  token,
});
export const actionClearTypeTodoList = () => ({
  type: typeTodoList.CLEAR_TYPE_TODO_LIST,
});
