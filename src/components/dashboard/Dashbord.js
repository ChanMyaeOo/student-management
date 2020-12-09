import React from 'react';
import { auth } from '../../firebase/firebase';
import './dashboard.css';
import { useDispatch } from 'react-redux';
import { setModalAction } from '../../actions/modal-actions';

const Dashbord = () => {
    const dispatch = useDispatch();
    return (
        <div className="dashboard">
            <div>Dashboard</div>
            <div className="dashboard__actions">
                <button onClick={() => dispatch(setModalAction())}>Add Student</button>
                <button onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Dashbord
