import * as types from './actionTypes';

export function logIn(data) {
  alert(data.email);
  return {
    type: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_ERROR]
  };
}

export function changeLanguage(lang) {
  return {
    type: types.CHANGE_LANGUAGE,
    data: lang,
  };
}

