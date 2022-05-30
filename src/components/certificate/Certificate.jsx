import React from 'react'
import certificateA from '../../images/certificate_images/cer1.jpg'
import certificateB from '../../images/certificate_images/cer2.jpg'
import certificateC from '../../images/certificate_images/cer3.jpg'
import certificateD from '../../images/certificate_images/cer4.jpg'
import certificateE from '../../images/certificate_images/cer5.jpg'
import certificateF from '../../images/certificate_images/cer6.jpg'
import certificateG from '../../images/certificate_images/cer7.jpg'
import certificateH from '../../images/certificate_images/cer8.jpg'
import certificateI from '../../images/certificate_images/cer9.jpg'


const Certificate = () => {

  return (
    <div className='certificate-page'>
      <div className='certificate-heading'>
        <h1 className='heading-2'>My Certificate</h1>
        <p className='content-2'>It's Certificate of achivementment for my efforts and hard work!</p>
        <p className='content-2'> Learning & Improvement</p>
      </div>
        <div className='certificate-collection'>
            <img className='certificate-collection__img' src={certificateB} alt="cer2" />
            <img className='certificate-collection__img' src={certificateA} alt="cer1" />
            <img className='certificate-collection__img' src={certificateC} alt="cer3" />
            <img className='certificate-collection__img' src={certificateD} alt="cer4" />
            <img className='certificate-collection__img' src={certificateE} alt="cer5" />
            <img className='certificate-collection__img' src={certificateF} alt="cer6" />
            <img className='certificate-collection__img' src={certificateG} alt="cer7" />
            <img className='certificate-collection__img' src={certificateH} alt="cer8" />
            <img className='certificate-collection__img' src={certificateI} alt="cer9" />
        </div>
    </div>
  )
}

export default Certificate