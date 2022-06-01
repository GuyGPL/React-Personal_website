import React, { useState, useRef } from 'react'
import Popup from './Popup';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const sendingForm = useRef();

  const [form, setFrom] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showError, setShowError] = useState({
    name: false,
    email: false
  })

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    error: true
  })

  const [popup, setPopup] = useState(false)

  function handleChange(event) {
    const {name, value} = event.target;
    console.log(name, value)

    setFrom((prevForm) => {
      return {
        ...prevForm, [name]: value
      }
    })

  }

  function submitForm(event) {
    event.preventDefault();

    if (errorMessage.name !== "" ) {
      console.log('error')
      return
    }

    if (errorMessage.email !== "" ) {
      console.log('error')
      return
    }

    if (errorMessage.name === "" && errorMessage.error) {
      console.log('error')
      return
    }

    if (errorMessage.email === "" && errorMessage.error) {
      console.log('error')
      return
    }


    console.log("submitted")
    console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_PUBLIC_ID)
    emailjs.sendForm( 'service_v2jis8e', 'template_2sszg1r', sendingForm.current, 'kEgmS2xq84yNlfiP7')
    
    setFrom({
      name: "",
      email: "",
      message: ""
    });
    setPopup(true)
    setErrorMessage((prevErrorMessage) => {
      return {
        prevErrorMessage, 'error' : true
      }
    })
  }

  function handleError(event) {
    const name = event.target.name

    setErrorMessage(()=> {
      return {
        "name" : "",
        "email": "",
        "error": false
      }
    })

    //handle error name
    if (form.name === "") {
      setErrorMessage((prevErrorMessage) => {
        return {
          ...prevErrorMessage, "name": 'name is required', "error": true
        }
      })
    }

    if (!form.name.match(/^[a-zA-Z\s]+$/) && form.name !== "" ) {
      setErrorMessage((prevErrorMessage) => {
        return {
          ...prevErrorMessage, "name": 'only letter', "error": true
        }
      })
    }

    //handle error email
    if (form.email === "") {
      setErrorMessage((prevErrorMessage) => {
        return {
          ...prevErrorMessage, "email": 'email is required', "error": true
        }
      })
    } else {
      let lastAtPos = form["email"].lastIndexOf("@");
      let lastDotPos = form["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          form["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          form["email"].length - lastDotPos > 2
        )
      ) {
        setErrorMessage((prevErrorMessage) => {
          return {
            ...prevErrorMessage, "email": 'please enter valid email address', "error": true
          }
        })
      }
    }

    setShowError((prevShowError)=> {
      return {...prevShowError, [name]: true}
    })
  }

  function exitPopup() {
    setPopup(false)
  }

  return (
    <section className='contact-section'>
      <div className='contact-content'>

        <h1 className='contact-content__title heading-2'>
          Thanks for taking the time to reach out. How can I help you today?
        </h1>

        <div className='contact-content__body'>
          <form ref={sendingForm} className='contact-content__form' autoComplete='off'>

            <div className='contact-content__form__first-section'>
              <div className='contact-content__form__first-section-item'>
                <label className='content-2'>
                  Name
                </label>
                <input required onChange={handleChange} onBlur={handleError} value={form.name} className='name-input' name='name' /> 
                {showError.name &&  <span className='name-error'>{errorMessage.name}</span>}
              </div>
              
              <div className='contact-content__form__first-section-item'>
              <label className='content-2'>
                Email
              </label>
              <input required type='email' onChange={handleChange} onBlur={handleError} value={form.email} className='email-input' name='email' /> 
              {showError.email && <span className='email-error'>{errorMessage.email}</span>}
              </div>
            </div>

            <div className='contact-content__form__second-section'>
              <label className='content-2'>
                Message
              </label>
              <textarea onChange={handleChange} value={form.message} name="message" className='message-input' cols="30" rows="10" />
            </div>

            <button type='submit' onClick={submitForm} className='submit-form-button'>
              Submit
            </button>

          </form>
        </div>
      </div>

      <Popup trigger={popup} closePopup={exitPopup}/>
    </section>
  )
}

export default Contact

