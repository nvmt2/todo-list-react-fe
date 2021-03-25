import { combineReducers } from 'redux';
import todoList from 'redux/todo-list/reducer';
import user from 'redux/user/reducer';
import dialog from 'redux/dialog/reducer';

const rootReducer = combineReducers({
  todoList,
  user,
  dialog,
});

export default rootReducer;
