import * as types from './actionTypes';

const initialState = {
  loading: false,
  currentLanguage: 'EN',
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    /************************/
    /* LogIn */
    /************************/
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
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