import { combineReducers } from 'redux';
import userReducer from './userReducer';

let allReducer = combineReducers({
    userReducer
});

export default allReducer;