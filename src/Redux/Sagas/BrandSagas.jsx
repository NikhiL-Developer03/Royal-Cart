import { put, takeEvery } from "redux-saga/effects";
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constants";
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services/index";
// import { createMultipartRecord, updateMultipartRecord, deleteRecord, getRecord, updateRecord } from "./Services/index";

//Worker saga
function* createSaga(action) {
  let response = yield createRecord("brand",action.payload);
  yield put({ type: CREATE_BRAND_RED, payload: response });
  
  // let response = yield createMultipartRecord("brand",action.payload);
  // yield put({ type: CREATE_BRAND_RED, payload: response });
}

//Worker saga
function* getSaga() {
  let response = yield getRecord("brand");
  yield put({ type: GET_BRAND_RED, payload: response });
}

//Worker saga
function* updateSaga(action) {
  yield updateRecord("brand",action.payload);
  yield put({ type: UPDATE_BRAND_RED, payload: action.payload });
  
  // yield updateMultipartRecord("brand",action.payload);
  // yield put({ type: UPDATE_BRAND_RED, payload: response });
}

//Worker saga
function* deleteSaga(action) {
  yield deleteRecord("brand",action.payload);
  yield put({ type: DELETE_BRAND_RED, payload: action.payload });
}

export default function* brandSagas() {
  yield takeEvery(CREATE_BRAND, createSaga); //watcher saga
  yield takeEvery(GET_BRAND, getSaga);  //watcher saga
  yield takeEvery(UPDATE_BRAND, updateSaga);  //watcher saga
  yield takeEvery(DELETE_BRAND, deleteSaga);  //watcher saga
}
 