import './App.css';
import Login from './components/login/Login';
import { auth } from './firebase/firebase';
import { useEffect, useState } from 'react';
import Dashboard from './components/dashboard/Dashbord';
import Showcase from './components/showcase/Showcase';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './actions/user-actions';
import { getStudents } from './actions/student-actions';
import Form from './components/form/Form';


function App() {

  const user = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();

  const modalAction = useSelector(state => state.modal)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setCurrentUser(authUser))
      } else {
        dispatch(setCurrentUser(null))
      }
    })
  }, [dispatch])


  useEffect(() => {
    dispatch(getStudents());
  }, [])

  return (
    <div className="App">
      {
        user ? (
          <>
          <div className={modalAction ? 'modal-show' : 'modal-hide'}>
            <div className="form-container">
              <Form />
            </div>
          </div>
          <Dashboard />
          <Showcase />
          </>
        ) : <Login />
      }
    </div>
  );
}

export default App;
