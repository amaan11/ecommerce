import { combineReducers } from 'redux';
import auth from './authReducer';
import product from './productReducer';

const rootReducer = history =>
  combineReducers({
    auth,
    product
  });

export default rootReducer;
