import React, { useRef, useEffect } from 'react'

const Popup = (props) => {

  const popupRef =useRef(null);

  useEffect(() => {

    // close popup if click outside popup
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        props.closePopup()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (props.trigger) ? ( //if trigger is true return popup if not return nothing
    <div ref={popupRef} className='popup'>
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