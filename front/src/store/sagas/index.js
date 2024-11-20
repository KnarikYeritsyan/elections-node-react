import { all, fork } from 'redux-saga/effects'
import people from './people'
import candidates from './candidates'

export default function* watchers() {
  yield all([
    people,
    candidates
  ].map(fork));
}
