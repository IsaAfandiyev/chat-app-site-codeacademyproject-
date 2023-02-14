import React from 'react'
import Create from './pages/Group/Create'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Group/Index'
import Login from './pages/public/Login'
// import { authContext } from './store/AuthContext'
import ConfirmCode from './pages/public/ConfirmCode'
import Home from './pages/dashboard/Home'
import PublicLayout from './pages/layout/PublicLayout'
// import ProtecrtedLayout from './pages/layout/ProtectedLayout'
import ProtectedLayout from './pages/layout/ProtectedLayout'

function App() {

  return (<>


    {/*  PublicLayout -> public pages   */}
    {/* protected layout -> private pages */}

      <Routes>

        <Route element={<PublicLayout />}>
          <Route path='/' element={<Login />} />
          <Route path='confirmCode' element={<ConfirmCode />} />
        </Route>

        <Route path='/admin' element={<ProtectedLayout />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='group/create' element={<Create />} />
          <Route path='group' element={<Index />} />
        </Route>

      </Routes>




  </>
  )
}

// function Auth({ children }) {
//
//   const { loginStatus } = useContext(authContext);
//
//   if (loginStatus) {
//     return children
//   }
//   else {
//     return <Routes>
//       <Route path='/' element={<Login />} />
//     </Routes>
//   }
// }


export default App