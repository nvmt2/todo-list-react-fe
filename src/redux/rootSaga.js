import { all } from 'redux-saga/effects';
import { actionWatcherUser } from 'redux/user/saga';

export default function* rootSaga() {
  yield all([actionWatcherUser()]);
}
