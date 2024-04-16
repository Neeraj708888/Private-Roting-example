import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  
  
    <div className='navbar-section'>
      <nav className='navbar'>
        <ul > 
          <Link to={'/'}><li>Home</li></Link>
        </ul>
        <ul>
        <Link to={'/about'}><li>About</li></Link>
        </ul>
        <ul>
        <Link to={'/contact'}><li>Contact</li></Link>
        </ul>
        <ul>
        <Link to={'/login'}><li>Login</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar