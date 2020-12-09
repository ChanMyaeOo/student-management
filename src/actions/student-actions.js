import * as api from '../api';
import { FETCH_STUDENT } from '../constants/actionTypes';

export const getStudents = () => async (dispatch) => {
    try {
        const {data} = await api.fetchStudents();
        dispatch({
            type: FETCH_STUDENT,
            payload: data
        })
    } catch(error){
        console.log(error)
    }
}