import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../../utils/service';

export function userLogin(data) {
  return {
    types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/Login`,
          headers: {'Content-Type': 'application/json'},
          data: data,
      })
  };
}

export function changeLanguage(lang) {
  return {
    type: types.CHANGE_LANGUAGE,
    data: lang,
  };
}

export function resetData() {
  return {
    type: types.RESET_LOGIN_DATA,
  };
}
