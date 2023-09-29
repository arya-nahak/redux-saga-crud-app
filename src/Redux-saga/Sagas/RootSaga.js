import { all } from "redux-saga/effects";
import { watchUserList } from "./UserSaga";

export default function* RootSaga(){
    yield all([watchUserList()])
}