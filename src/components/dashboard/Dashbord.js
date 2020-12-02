import React from 'react';
import { auth } from '../../firebase/firebase';

const Dashbord = () => {
    return (
        <div>
            Dashboard

            <button onClick={() => auth.signOut()}>Logout</button>
        </div>
    )
}

export default Dashbord
