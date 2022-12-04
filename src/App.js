import React, { useContext } from 'react';
import './index.css';
import TaskList from './components/TaskList';
import {
  Routes,
  Route
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import AuthContext from './Context/AuthProvider';



function App() {
  const { auth: { currentUser, isAuth } } = useContext(AuthContext)
  const token = localStorage.getItem('Token')
  // const { auth } = useContext(AuthContext)

  return (
    <div className='login-center'>
      <>
        {console.log(currentUser)}
        {!token ?
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
          :
          <Routes>
            <Route path='/TaskList' element={<TaskList />} />
          </Routes>
        }
      </>

      {/* {console.log(auth)} */}
      {/* {!auth.isAuth ?
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes> :
        <Routes>
          <Route path='/TaskList' element={<TaskList />} />
        </Routes>
      } */}
    </div>
  );
}

export default App;