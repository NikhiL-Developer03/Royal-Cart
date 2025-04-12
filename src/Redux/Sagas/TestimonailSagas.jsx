import { put, takeEvery } from "redux-saga/effects";
import {
  CREATE_TESTIMONIAL,
  CREATE_TESTIMONIAL_RED,
  DELETE_TESTIMONIAL,
  DELETE_TESTIMONIAL_RED,
  GET_TESTIMONIAL,
  GET_TESTIMONIAL_RED,
  UPDATE_TESTIMONIAL,
  UPDATE_TESTIMONIAL_RED,
} from "../Constants";
import {
  createRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/index";
// import { createMultipartRecord, updateMultipartRecord, deleteRecord, getRecord, updateRecord } from "./Services/index";

//Worker saga
function* createSaga(action) {
  let response = yield createRecord("testimonial", action.payload);
  yield put({ type: CREATE_TESTIMONIAL_RED, payload: response });

  // let response = yield createMultipartRecord("Testimonial",action.payload);
  // yield put({ type: CREATE_TESTIMONIAL_RED, payload: response });
}

//Worker saga
function* getSaga() {
  let response = yield getRecord("testimonial");
  yield put({ type: GET_TESTIMONIAL_RED, payload: response });
}

//Worker saga
function* updateSaga(action) {
  yield updateRecord("testimonial", action.payload);
  yield put({ type: UPDATE_TESTIMONIAL_RED, payload: action.payload });

  // yield updateMultipartRecord("Testimonial",action.payload);
  // yield put({ type: UPDATE_TESTIMONIAL_RED, payload: response });
}

//Worker saga
function* deleteSaga(action) {
  yield deleteRecord("testimonial", action.payload);
  yield put({ type: DELETE_TESTIMONIAL_RED, payload: action.payload });
}

export default function* testimonialSagas() {
  yield takeEvery(CREATE_TESTIMONIAL, createSaga); //watcher saga
  yield takeEvery(GET_TESTIMONIAL, getSaga); //watcher saga
  yield takeEvery(UPDATE_TESTIMONIAL, updateSaga); //watcher saga
  yield takeEvery(DELETE_TESTIMONIAL, deleteSaga); //watcher saga
}
