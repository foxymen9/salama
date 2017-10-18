import * as types from './actionTypes';

const initialState = {
  data: null,
  loading: false,
};

export default function signup(state = initialState, action = {}) {
  switch (action.type) {
    /************************/
    /* SignUp */
    /************************/
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.result.data.response,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
      };
    case types.RESET_SIGNUP_DATA:
      return {
        ...state,
        data: null,
      }
    default:
      return state;
  }
}