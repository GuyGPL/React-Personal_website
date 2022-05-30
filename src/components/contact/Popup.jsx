import React from 'react'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-box'>
            <div className='popup-content'>
                <h1 className='popup-content__text content-2'>Thank you!</h1>
                <p className='content-2'>We've received your message and will contact you soon.</p>
                <button onClick={props.closePopup} className='popup-content__button'>x</button>
            </div>
        </div>
    </div>
  ) : '';
}

export default Popup