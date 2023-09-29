import { applyMiddleware, combineReducers, createStore } from "redux";
import Reducer from "../Reducers/Reducer";
import createSagaMiddleware from "@redux-saga/core";
import RootSaga from "../Sagas/RootSaga";

const rootReducer = combineReducers({
  user: Reducer,
});

const rootSaga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(rootSaga));
rootSaga.run(RootSaga);
export default store;
