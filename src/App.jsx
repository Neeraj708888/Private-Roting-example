
import './App.css'
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import React from 'react'
import PrivateRoute from './PrivatePages/PrivateRoute';
import Sidebar from './PrivatePages/Sidebar/Sidebar';
import Login from './PrivatePages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* Here we have a private route as a nested route child */}
          <Route path='/login' element={<PrivateRoute/>}>
          <Route path='sidebar' element={<Sidebar/>}/>
          </Route>

          <Route path='/footer' element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
