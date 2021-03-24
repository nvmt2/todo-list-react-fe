import { put, takeLatest, call } from 'redux-saga/effects';
//internal modules
import { typeTodoList } from 'redux/todo-list/constance';
import { getAllTasks, addTask, removeTask, updateTask } from 'service/todoApi';

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
function* createNewTaskSaga(payload) {
  try {
    let response = yield call(addTask, payload.bodyTask, payload.token);
    if (response.status === 201) {
      yield put({
        type: typeTodoList.ADD_TASK_SUCCEEDED,
        newTask: response.data.data,
      });
    } else {
      yield put({
        type: typeTodoList.ADD_TASK_FAILED,
        error: 'err create new task',
      });
    }
  } catch (error) {
    yield put({
      type: typeTodoList.ADD_TASK_FAILED,
      error: error.message,
    });
  }
}
function* removeTaskSaga(payload) {
  try {
    let response = yield call(removeTask, payload.idTask, payload.token);
    if (response.status === 200) {
      console.log('removeTaskSaga', response);
      yield put({
        type: typeTodoList.REMOVE_TASK_SUCCEEDED,
        _id: payload.idTask,
      });
    } else {
      yield put({
        type: typeTodoList.REMOVE_TASK_FAILED,
        error: 'remove task Saga',
      });
    }
  } catch (error) {
    yield put({
      type: typeTodoList.REMOVE_TASK_FAILED,
      error: error.message,
    });
  }
}
function* updateTaskSaga(payload) {
  try {
    let { idTask, taskUpdate, token } = payload;
    let response = yield call(updateTask, idTask, taskUpdate, token);
    if (response.status === 200) {
      yield put({
        type: typeTodoList.UPDATE_TASK_SUCCEEDED,
        _id: idTask,
        taskUpdate: response.data.data,
      });
    } else {
      yield put({
        type: typeTodoList.UPDATE_TASK_FAILED,
        error: 'updateTaskSaga error',
      });
    }
  } catch (error) {
    yield put({
      type: typeTodoList.UPDATE_TASK_FAILED,
      error: error.message,
    });
  }
}

export function* actionWatcherTodoList() {
  yield takeLatest(typeTodoList.GET_ALL_TASKS, getAllTasksSaga);
  yield takeLatest(typeTodoList.ADD_TASK, createNewTaskSaga);
  yield takeLatest(typeTodoList.REMOVE_TASK, removeTaskSaga);
  yield takeLatest(typeTodoList.UPDATE_TASK, updateTaskSaga);
}
