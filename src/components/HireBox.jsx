import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='hire-me-box'>
        <div className='hire-me-text'>
          <h1 className='hire-me-text__title heading-2'>Hire me</h1>
          <p className='hire-me-text__content content-2'>Interested in working together? hire me as a freelance, front end developer, full stack developer</p>
          <Link className='hire-me-text__link' to="/contact">Contact</Link>
        </div>
      </div>
  )
}

export default Footer