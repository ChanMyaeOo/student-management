import { FETCH_STUDENT } from '../constants/actionTypes';

export default (students=[], action) => {
    switch(action.type) {
        case FETCH_STUDENT:
            return action.payload;
        default:
            return students
    }
}