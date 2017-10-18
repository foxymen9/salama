import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../../utils/service';

export function signUp(data) {
  return {
    types: [types.SIGNUP_REQUEST, types.SIGNUP_SUCCESS, types.SIGNUP_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/Registration`,
          headers: {'Content-Type': 'application/json'},
          data: data,
      })
  };
}

export function resetData() {
  return {
    type: types.RESET_SIGNUP_DATA,
  };
}
