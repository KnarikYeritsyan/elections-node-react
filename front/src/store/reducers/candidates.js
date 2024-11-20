import { GET_CANDIDATES_LIST_REQUEST, GET_CANDIDATES_LIST_SUCCESS } from "../actions/candidates";

const initialState = {
  candidatesList: [],
  candidatesListRequestStatus: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATES_LIST_SUCCESS: {
      const { candidates } = action.payload.data;
      console.log(111)
      return {
        ...state,
        candidatesListRequestStatus: 'ok',
        candidatesList: candidates
      }
    }
    default: {
      return state
    }
  }
}
