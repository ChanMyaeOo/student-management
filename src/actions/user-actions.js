import { SET_USER } from '../constants/actionTypes';

export const setCurrentUser = (user) => ({
    type: SET_USER,
    payload: user
})