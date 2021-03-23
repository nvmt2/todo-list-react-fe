import { typeTodoList } from 'redux/todo-list/constance';

export const actionGetAllTasks = (token) => ({
  type: typeTodoList.GET_ALL_TASKS,
  token,
});
