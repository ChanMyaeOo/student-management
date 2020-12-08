import React from 'react';
import { auth } from '../../firebase/firebase';
import './dashboard.css';

const Dashbord = () => {
    return (
        <div className="dashboard">
            <div>Dashboard</div>

            <div className="dashboard__actions">
                <button onClick={() => alert('Add Student')}>Add Student</button>
                <button onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Dashbord
