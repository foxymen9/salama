import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../../utils/service';

export function signUp(data) {
  // return {
  //   type: [types.SIGNUP_REQUEST, types.SIGNUP_SUCCESS, types.SIGNUP_ERROR]
  // };
  return {
    types: [types.SIGNUP_REQUEST, types.SIGNUP_SUCCESS, types.SIGNUP_ERROR],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/registration`,
          headers: {'Accept': 'application/json'},
          data: data,
      })
  };
}
