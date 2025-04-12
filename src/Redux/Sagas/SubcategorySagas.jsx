import { put, takeEvery } from "redux-saga/effects";
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constants";
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services/index";
// import { createMultipartRecord, updateMultipartRecord, deleteRecord, getRecord, updateRecord } from "./Services/index";

//Worker saga
function* createSaga(action) {
  let response = yield createRecord("subcategory",action.payload);
  yield put({ type: CREATE_SUBCATEGORY_RED, payload: response });
  
  // let response = yield createMultipartRecord("subcategory",action.payload);
  // yield put({ type: CREATE_SUBCATEGORY_RED, payload: response });
}

//Worker saga
function* getSaga() {
  let response = yield getRecord("subcategory");
  yield put({ type: GET_SUBCATEGORY_RED, payload: response });
}

//Worker saga
function* updateSaga(action) {
  yield updateRecord("subcategory",action.payload);
  yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload });
  
  // yield updateMultipartRecord("subcategory",action.payload);
  // yield put({ type: UPDATE_SUBCATEGORY_RED, payload: response });
}

//Worker saga
function* deleteSaga(action) {
  yield deleteRecord("subcategory",action.payload);
  yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload });
}

export default function* subcategorySagas() {
  yield takeEvery(CREATE_SUBCATEGORY, createSaga); //watcher saga
  yield takeEvery(GET_SUBCATEGORY, getSaga);  //watcher saga
  yield takeEvery(UPDATE_SUBCATEGORY, updateSaga);  //watcher saga
  yield takeEvery(DELETE_SUBCATEGORY, deleteSaga);  //watcher saga
}
 