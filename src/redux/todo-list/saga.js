import { put, takeLatest, call } from 'redux-saga/effects';
//internal modules
import { typeTodoList } from 'redux/todo-list/constance';
import { getAllTasks } from 'service/todoApi';

function* getAllTasksSaga(payload) {
  try {
    let response = yield call(getAllTasks, payload.token);
    if (response.status === 200) {
      yield put({
        type: typeTodoList.GET_ALL_TASKS_SUCCEEDED,
        data: response.data.data,
      });
    } else {
      yield put({
        type: typeTodoList.GET_ALL_TASKS_FAILED,
        error: 'get all tasks fail',
      });
    }
  } catch (error) {
    yield put({
      type: typeTodoList.GET_ALL_TASKS_FAILED,
      error: error.message,
    });
  }
}

export function* actionWatcherTodoList() {
  yield takeLatest(typeTodoList.GET_ALL_TASKS, getAllTasksSaga);
}
