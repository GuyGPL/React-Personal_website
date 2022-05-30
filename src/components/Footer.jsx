import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-removebg-preview.png'
const HireBox= () => {
  return (
    <section className="footer-section">
        <div className='footer-content'>
          <Link className='navibar__link' to="/">
            <img className='navibar__brand--img footer-content__logo' src={logo} alt="logo-name" />
          </Link> 

          <p className='footer-content__quote-content'>There's Always Room For Improvement. </p>
          <p className='footer-content__quote-author'>Joey Logano</p>

          <div className='footer-content__contact'>
            <a  href="https://www.linkedin.com/in/poramut-laohakanwanich/" >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"/></svg>
            </a>
            <a href="mailto:Poramut_L@hotmail.com">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#1e88e5" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"/><path fill="#fff" d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"/></svg>
            </a>
            <a href="https://github.com/GuyGPL">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
            </a>
          </div>

          <p className='footer-content__copyright'>&copy; copyright 2022 made by Poramut Laohkanwanich</p>

        </div>

        
        
    </section>
  )
}

export default HireBox