import { call, put, takeLatest } from 'redux-saga/effects'
import Api from "../../Api";
import {
  GET_CANDIDATES_LIST_FAIL,
  GET_CANDIDATES_LIST_REQUEST,
  GET_CANDIDATES_LIST_SUCCESS
} from "../actions/candidates";

export default function* watcher() {

  yield takeLatest(GET_CANDIDATES_LIST_REQUEST, handleCandidatesList)
}


function* handleCandidatesList() {
  try {
    const { data } = yield call(Api.getCandidates)
    yield put({
      type: GET_CANDIDATES_LIST_SUCCESS,
      payload: {
        data
      }
    })
  } catch (e) {
    console.warn(e);
    yield put({
      type: GET_CANDIDATES_LIST_FAIL,
      message: e.messages,
      payload: {
        data: e.response.data
      }
    })
  }
}
