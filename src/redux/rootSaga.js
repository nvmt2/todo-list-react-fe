import { all } from 'redux-saga/effects';
import { actionWatcherUser } from 'redux/user/saga';
import { actionWatcherTodoList } from 'redux/todo-list/saga';

export default function* rootSaga() {
  yield all([actionWatcherUser(), actionWatcherTodoList()]);
}
