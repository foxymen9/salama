import * as types from './actionTypes';

const initialState = {
  loading: false,
};

export default function signup(state = initialState, action = {}) {
  switch (action.type) {
    /************************/
    /* SignUp */
    /************************/
    case types.SIGNUP_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case types.SIGNUP_SUCCESS:
    console.log('SIGNUP_DATA', action);
      return {
        loading: false,
        ...state,
      };
    case types.SIGNUP_FAILED:
      return {
        loading: false,
        ...state,
      };
    default:
      return state;
  }
}