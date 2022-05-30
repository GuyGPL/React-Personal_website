import React from 'react';
import CV from '../../images/CV_Poramut_L.jpg'
const Resume = () => {
  return (
    <section className='resume-section'>
        <h1 className='resume-header heading-2'>My Resume</h1>
        <div className='resume-img-box'>
          <img className='resume-img' src={CV} alt="" />
        </div>
    </section>
  )
}

export default Resume