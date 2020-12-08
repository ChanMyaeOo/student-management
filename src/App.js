import './App.css';
import Login from './components/login/Login';
import { auth } from './firebase/firebase';
import { useEffect } from 'react';
import Dashboard from './components/dashboard/Dashbord';
import Showcase from './components/showcase/Showcase';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './actions/user-actions';

function App() {

  const user = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setCurrentUser(authUser))
      } else {
        dispatch(setCurrentUser(null))
      }
    })
  }, [dispatch])

  return (
    <div className="App">
      {
        user ? (
          <>
          <Dashboard />
          <Showcase />
          </>
        ) : <Login />
      }
    </div>
  );
}

export default App;
