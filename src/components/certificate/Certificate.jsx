import React from "react";
import certificateA from "../../images/certificate_images/cer1.jpg";
import certificateJ from "../../images/certificate_images/cer10.jpg";
import certificateK from "../../images/certificate_images/cer11.jpg";
import certificateL from "../../images/certificate_images/cer12.jpg";
import certificateM from "../../images/certificate_images/cer13.jpg";
import certificateB from "../../images/certificate_images/cer2.jpg";
import certificateC from "../../images/certificate_images/cer3.jpg";
import certificateD from "../../images/certificate_images/cer4.jpg";
import certificateE from "../../images/certificate_images/cer5.jpg";
import certificateF from "../../images/certificate_images/cer6.jpg";
import certificateG from "../../images/certificate_images/cer7.jpg";
import certificateH from "../../images/certificate_images/cer8.jpg";
import certificateI from "../../images/certificate_images/cer9.jpg";

const Certificate = () => {
  const certificateImages = [
    certificateA,
    certificateB,
    certificateC,
    certificateD,
    certificateE,
    certificateF,
    certificateG,
    certificateH,
    certificateI,
    certificateJ,
    certificateK,
    certificateL,
    certificateM,
  ];

  return (
    <div className="certificate-page">
      <div className="certificate-heading">
        <h1 className="heading-2">My Certificate</h1>
        <p className="content-2">
          It's Certificate of achievement for my efforts and hard work!
        </p>
        <p className="content-2">Learning & Improvement</p>
      </div>
      <div className="certificate-collection">
        {certificateImages.map((src, index) => (
          <img
            key={index}
            className="certificate-collection__img"
            src={src}
            alt={`cer${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
