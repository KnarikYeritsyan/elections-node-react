import { call, put, takeLatest } from 'redux-saga/effects'
import { PEOPLE_SING_IN_FAIL, PEOPLE_SING_IN_REQUEST, PEOPLE_SING_IN_SUCCESS } from "../actions/people";
import Api from "../../Api";

export default function* watcher() {

  yield takeLatest(PEOPLE_SING_IN_REQUEST, handleSingIn)
}


function* handleSingIn(action) {
  try {
    const { passport } = action.payload;
    const { data } = yield call(Api.peopleSingIn, passport)
    yield put({
      type: PEOPLE_SING_IN_SUCCESS,
      payload: {
        data
      }
    })
  } catch (e) {
    console.warn(e);
    yield put({
      type: PEOPLE_SING_IN_FAIL,
      message: e.messages,
      payload: {
        data: e.response.data
      }
    })
  }
}
