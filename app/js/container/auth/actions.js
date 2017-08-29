import * as types from './actionTypes';
import axios from 'axios';

export function logIn(data) {
    return {
      types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_ERROR],
      hasPost: 'true',
      promise:
        axios({
            method: 'get',
            url: 'http://salamainsurance.com/demo/rest/?hash=05fea4d118772c0ef654b34ed2a9425c944715dcb859e5d07f9ced1c66a00cce',
            headers: {'Accept': 'application/json'}
        })
      
    };
}

export function changeLanguage(lang) {
  return {
    type: types.CHANGE_LANGUAGE,
    data: lang,
  };
}

