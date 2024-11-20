import { PEOPLE_SING_IN_FAIL, PEOPLE_SING_IN_REQUEST, PEOPLE_SING_IN_SUCCESS } from "../actions/people";

const initialState = {
  token: localStorage.getItem('token') || '',
  personData: {},
  singInRequestStatus: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PEOPLE_SING_IN_REQUEST: {
      return {
        ...state,
        singInRequestStatus: 'request'
      }
    }
    case PEOPLE_SING_IN_SUCCESS: {
      const { token, person } = action.payload.data;
      localStorage.setItem('token', token);
      return {
        ...state,
        singInRequestStatus: 'ok',
        personData: person,
        token,
      }
    }
    case PEOPLE_SING_IN_FAIL: {
      return {
        ...state,
        singInRequestStatus: 'fail',
        token: '',
      }
    }
    default: {
      return state
    }
  }
}
