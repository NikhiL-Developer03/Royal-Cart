import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"

import RootSaga from "./Sagas/RootSaga"
import RootReducer from "./Reducer/RootReducer";

const Saga = createSagaMiddleware()

const Store = configureStore({
  reducer:RootReducer,
  middleware: () => [Saga]
})
export default Store

Saga.run(RootSaga)