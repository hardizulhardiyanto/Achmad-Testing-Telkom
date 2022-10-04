import { call, spawn, takeLatest } from 'redux-saga/effects';
import {homeSagas} from "./homeSaga";

export default function* rootSaga() {
    yield spawn(homeSagas)
}