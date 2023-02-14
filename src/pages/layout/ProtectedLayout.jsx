import React, { useContext } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import { authContext } from '../../store/AuthContext';

function ProtectedLayout() {

  const { loginStatus,setloginStatus } = useContext(authContext);

  const logout = () => {
    setloginStatus(false);
  }

  if (!loginStatus)
    return <Navigate to="/" />;

  return (<>
    <ul>
      <li><Link to='/admin/'>Home</Link></li>
      <li><Link to='/admin/group'>Group</Link></li>
      <li><Link to='/admin/group/create'>Group Create</Link></li>
    </ul>

    <h1>Admin Header</h1>
    <button onClick={logout}>Logout</button>

    <Outlet />

    <h1>Admin Footer</h1>
  </>

  )
}

export default ProtectedLayout