import { combineReducers } from 'redux';
import users from './users';
import students from './students';
import modal from './modal';

export default combineReducers({
    users,
    students,
    modal
})