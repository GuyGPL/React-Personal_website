import React from 'react';
import rick from '../images/rick-morty.png'
import { Link } from 'react-router-dom'


const NoMatch = () => {
  return (
    <section className='no-match-section'>
      <div className='no-match-content'>
        <img className='no-match-content__img' src={rick} alt="404" />
        <h1 className="no-match-content__title heading-1">404 error</h1>
        <p className="no-match-content__text content-1">This isn't page you're looking for.</p>
        <Link className='no-match-content__button' to="/">Return Home</Link>
      </div>
    </section>
  )
}

export default NoMatch