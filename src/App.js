import './App.css';
import Login from './components/login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase/firebase';
import { useEffect } from 'react';
import Dashboard from './components/dashboard/Dashbord';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">
      {
        user ? <Dashboard /> : <Login />
      }
    </div>
  );
}

export default App;
