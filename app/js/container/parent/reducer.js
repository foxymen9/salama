import * as types from './actionTypes';

const initialState = {
  data: 0,
};

export default function parent(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_MENU:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}