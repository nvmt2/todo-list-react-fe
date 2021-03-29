import { put, takeLatest, call } from 'redux-saga/effects';
//internal modules
import { typeUser } from 'module/page/account/redux/constance';
import {
  signIn,
  signUp,
  updateUser,
  signOut,
  uploadUserImage,
} from 'service/userApi';

function* signInSaga(payload) {
  try {
    let response = yield call(signIn, payload.account);
    if (response.status === 200) {
      yield put({
        type: typeUser.SIGN_IN_SUCCEEDED,
        data: response.data,
      });
    } else {
      yield put({
        type: typeUser.SIGN_IN_FAILED,
        error: 'Do not know',
      });
    }
  } catch (error) {
    yield put({
      type: typeUser.SIGN_IN_FAILED,
      error: error.message,
    });
  }
}
function* signUpSaga(payload) {
  try {
    let response = yield call(signUp, payload.account);
    if (response.status === 201) {
      yield put({
        type: typeUser.SIGN_UP_SUCCEEDED,
      });
    } else {
      yield put({
        type: typeUser.SIGN_UP_FAILED,
        error: 'Do not know signUpSaga',
      });
    }
  } catch (error) {
    yield put({
      type: typeUser.SIGN_UP_FAILED,
      error: error.message,
    });
  }
}
function* updateUserSage(payload) {
  try {
    let { token, informationUser } = payload;
    const response = yield call(updateUser, informationUser, token);
    if (response.status === 200) {
      yield put({
        type: typeUser.UPDATE_USER_SUCCEEDED,
        data: response.data.data,
      });
    } else {
      yield put({
        type: typeUser.UPDATE_USER_FAILED,
      });
    }
  } catch (error) {
    yield put({
      type: typeUser.UPDATE_USER_FAILED,
      error: error.message,
    });
  }
}
function* updateImageSaga(payload) {
  let { formData, token } = payload;
  yield call(uploadUserImage, formData, token);
}
function* signOutSaga(payload) {
  try {
    const response = yield call(signOut, payload.token);
    if (response.status === 200) {
      yield put({
        type: typeUser.SIGN_OUT_SUCCEEDED,
      });
    } else {
      yield put({
        type: typeUser.SIGN_OUT_FAILED,
      });
    }
  } catch (error) {
    yield put({
      type: typeUser.SIGN_OUT_FAILED,
      error: error.message,
    });
  }
}

export function* actionWatcherUser() {
  yield takeLatest(typeUser.SIGN_IN, signInSaga);
  yield takeLatest(typeUser.SIGN_UP, signUpSaga);
  yield takeLatest(typeUser.UPDATE_USER, updateUserSage);
  yield takeLatest(typeUser.UPDATE_PROFILE_USER, updateImageSaga);
  yield takeLatest(typeUser.SIGN_OUT, signOutSaga);
}
