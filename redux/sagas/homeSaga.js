import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api';
import {HOME_ACT_ADD_REPOS, HOME_ACT_SET_REPOS} from "../action";

/**
 * @desc    Get Repository Me
 * @method  GET
 * @access  Private
 */
function* getRepositoryMe(payload) {
    let resultGet = yield call(api.getRepository, payload);
    if (!!resultGet){
        yield put ({type: HOME_ACT_SET_REPOS, resultGet})
    } else {
        console.log("GET DATA FAILED");
    }
}

export function* homeSagas() {
 yield takeLatest(HOME_ACT_ADD_REPOS, getRepositoryMe);
}