import { combineReducers } from "redux";
import people from './people'
import candidates from './candidates'

export default combineReducers({
  people,
  candidates
})
