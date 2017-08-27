import * as types from './actionTypes';

const initialState = {
  loginStatus: null,
  signupStatus: null,
  currentLanguage: 'EN',
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    /************************/
    /* LogIn */
    /************************/
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: 'login_request',
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: 'login_success',
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginStatus: 'login_error',
      };
    /************************/
    /* Change Language(EN, AR) */
    /************************/
    case types.CHANGE_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.data,
      };
    default:
      return state;
  }
}