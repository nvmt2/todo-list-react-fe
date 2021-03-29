import { all } from 'redux-saga/effects';
import { actionWatcherUser } from 'module/page/account/redux/saga';
import { actionWatcherTodoList } from 'module/page/main/redux/saga';

export default function* rootSaga() {
  yield all([actionWatcherUser(), actionWatcherTodoList()]);
}
