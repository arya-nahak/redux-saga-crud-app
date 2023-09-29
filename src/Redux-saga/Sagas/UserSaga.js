import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { createUserApi, deleteUserApi, getSingleUserByID, getUsersApi, updateUserApi } from "../../API/Contents";
import {
  Failure,
  Success,
  addFailure,
  addSuccess,
  delFailure,
  delSuccess,
  getSingleFailure,
  getSingleSuccess,
  updateFailure,
  updateSuccess,
} from "../Action/Action";

export function* userListSaga() {
  try {
    const callData = yield call(getUsersApi);
    yield put(Success(callData.data));
  } catch (error) {
    yield put(Failure(error));
  }
}

export function* addUserListSaga(payload) {
  try {
    const callData = yield call(createUserApi, payload.payload);
    yield put(addSuccess(callData.data));
  } catch (error) {
    yield put(addFailure(error));
  }
}

export function* getSingleUserListSaga({payload}) {
  try {
    const callData = yield call(getSingleUserByID, payload);
    yield put(getSingleSuccess(callData.data));
  } catch (error) {
    yield put(getSingleFailure(error));
  }
}

export function* updateUserListSaga({payload}) {
  try {
    const callData = yield call(updateUserApi, payload);
    yield put(updateSuccess(callData.data));
  } catch (error) {
    yield put(updateFailure(error));
  }
}

export function* userDeleteSaga({ type, payload }) {
  try {
    const callData = yield call(deleteUserApi, payload);
    yield put(delSuccess(callData.data));
  } catch (error) {
    yield put(delFailure(error));
  }
}

export function* watchUserList() {
  yield takeLatest("REQUEST", userListSaga);
  yield takeLatest("DELETE_REQUEST", userDeleteSaga);
  yield takeLatest("ADD_REQUEST", addUserListSaga);
  yield takeLatest("SINGLE_REQUEST", getSingleUserListSaga);
  yield takeLatest("UPDATE_REQUEST", updateUserListSaga);
}
