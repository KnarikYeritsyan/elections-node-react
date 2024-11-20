export const PEOPLE_SING_IN_REQUEST = 'PEOPLE_SING_IN_REQUEST';
export const PEOPLE_SING_IN_SUCCESS = 'PEOPLE_SING_IN_SUCCESS';
export const PEOPLE_SING_IN_FAIL = 'PEOPLE_SING_IN_FAIL';

export function peopleSignInRequest(passport) {
  return {
    type: PEOPLE_SING_IN_REQUEST,
    payload: {
      passport
    }
  }
}
