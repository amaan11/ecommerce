import * as actionTypes from '../actions/actionTypes';
import initialState from '../intialState';

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      console.log('action', action.res);
      return { ...state, categories: action.res };

    default:
      return state;
  }
}
