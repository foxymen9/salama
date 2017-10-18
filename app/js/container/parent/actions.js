import * as types from './actionTypes';
import axios from 'axios';

export function changeMenuState(data) {
  return {
    type: types.CHANGE_MENU,
    data: data,
  };
}

