import { MODAL_ACTION } from '../constants/actionTypes';

export default (isModalOpen = false, action) => {
    switch(action.type) {
        case MODAL_ACTION:
            return !isModalOpen;
        default:
            return isModalOpen;
    }
}