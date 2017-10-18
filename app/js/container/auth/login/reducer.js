import * as types from './actionTypes';

const initialState = {
  loading: false,
  currentLanguage: 'EN',
  data: null,
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    /************************/
    /* LogIn */
    /************************/
    case types.LOGIN_REQUEST:
    console.log('LOGIN_REQUEST');
      return {
        ...state,
        data: null,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.result.data.response,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };
    case types.RESET_SIGNUP_DATA:
      return {
        ...state,
        data: null,
      }
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