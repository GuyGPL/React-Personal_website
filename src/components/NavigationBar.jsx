import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-removebg-preview.png'

const NavigationBar = () => {
  return (
    <div>
      <header className='navibar'>
        <div className='navibar__brand heading-2'>
          <Link className='navibar__link' to="/">
            <img className='navibar__brand--img' src={logo} alt="logo-name" />
          </Link>
        </div>

        <div className='navibar__item '>
            <Link className='navibar__link' to="/">Home</Link>
            <Link className='navibar__link' to="/resume">Resume</Link>
            <Link className='navibar__link navibar__link--contact' to="/contact">Contact</Link>
        </div>
      </header>

    </div>
  )
}

export default NavigationBar