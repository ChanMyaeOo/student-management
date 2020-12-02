import React, { useState } from 'react';
import { auth } from '../../firebase/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth) {
                alert('Success')
            }
        })
        .catch(error => alert(error))
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
               <input type="submit" value="Login"  />
           </form>
        </div>
    )
}

export default Login

