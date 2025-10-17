import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/logo.jpg'
function Navbar() {
  return (
    <nav className='navbar'>

      <Link to='/'>
        <img src={logo} alt='Mufat Farms logo' className='logo' />
      </Link>
      <ul className='nav-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li> 
        <li><Link to='/contact'>Contact</Link></li>       
      </ul>
    </nav>
  )
}

export default Navbar
