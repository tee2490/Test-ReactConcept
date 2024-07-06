import React from 'react'
import logo from '../images/logo.png'
import './Header.css'

function Header() {
  return (
    <nav>
        <img src={logo} className='logo'/>
        <a href='/'>Homepage</a>
    </nav>
  )
}

export default Header