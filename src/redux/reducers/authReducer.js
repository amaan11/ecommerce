import * as actionTypes from '../actions/actionTypes';
import initialState from '../intialState';

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, user: { data: action.res, error: '' } };
    case actionTypes.SIGNUP_USER_FAILED:
      return { ...state, user: { data: {}, error: action.error } };
    case actionTypes.LOGIN_WITH_EMAIL_SUCCESS:
      return { ...state, user: { data: action.res, error: '' } };
    case actionTypes.LOGIN_WITH_EMAIL_FAILED:
      return { ...state, user: { data: {}, error: action.error } };
    case actionTypes.GOOGLE_LOGIN_SUCCESS:
      return { ...state, user: { data: action.res, error: '' } };
    case actionTypes.GOOGLE_LOGIN_FAILED:
      return {
        ...state,
        user: { data: {}, error: action.error }
      };
    case actionTypes.FACEBOOK_LOGIN_SUCCESS:
      return { ...state, user: { data: action.res, error: '' } };
    case actionTypes.FACEBOOK_LOGIN_FAILED:
      return {
        ...state,
        auth: { user: {}, error: action.error }
      };
    case actionTypes.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        user: { data: {}, error: '' },
        logoutResponse: { data: action.res, error: '' }
      };
    case actionTypes.LOGOUT_REQUEST_FAILED:
      return {
        ...state,
        logoutResponse: { data: '', error: action.error }
      };
    default:
      return state;
  }
}
