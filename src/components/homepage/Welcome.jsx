import React from 'react'
import welcomeImg from '../../images/welcome-img.png'

const Welcome = () => {

  return (
    <section className='welcome-section'>
      <div className='welcome-content'>
        <h1 className='welcome-content__title heading-2'>Full-stack Developer & Microbiologist</h1>  
        <p className='welcome-content__body content-1'> I enjoyed designing and coding both front end and back end.</p>
      </div>

      <div className='welcome-picture'>
        <img className='welcome-img' alt='welcome-img' src={welcomeImg}/>
      </div>
    </section>
  )
}

export default Welcome