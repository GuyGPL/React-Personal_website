import React from 'react'

const SkillCard = (props) => {
    
  return (
    <div className='skill-card-block '>
        <div className='skill-card'>
            <div className='skill-card__img'>
                {props.icon}
            </div>  
            <div className='skill-card__title '>
                <p>{props.title}</p>
            </div>
        </div>
    </div>
  )
}

export default SkillCard