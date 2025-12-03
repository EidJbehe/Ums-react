import React from 'react'
import Navbar from './assets/components/navbar/Navbar.jsx'
import Footer from './assets/components/footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Users from './assets/pages/user/Users.jsx'
import AddUser from './assets/pages/user/AddUser.jsx'
import User from './assets/pages/user/User.jsx'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/addUser" element={<AddUser />} />
      <Route path="/users/:id" element={<User />} />
    </Routes>
    <Footer />
    
    
    </>
  )
}
