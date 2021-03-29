import { combineReducers } from 'redux';
import todoList from 'module/page/main/redux/reducer';
import user from 'module/page/account/redux/reducer';
import dialog from 'common/dialog/redux/reducer';

const rootReducer = combineReducers({
  todoList,
  user,
  dialog,
});

export default rootReducer;
