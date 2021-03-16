import { combineReducers } from 'redux';
import todoList from 'redux/todo-list/reducer';
import user from 'redux/user/reducer';

const rootReducer = combineReducers({
  todoList,
  user,
});

export default rootReducer;
