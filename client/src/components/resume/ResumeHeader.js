import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './ResumeHeader.css';

export default function ResumeHeader() {
  return (
    <section className="home">
      <div className="container">
        <Link to="/">
          <div className="navigation">
            <FontAwesomeIcon icon={faArrowLeft} className="btn-sign" />
          </div>
        </Link>
        <div className="row full-screen">
          <div className="home-content">
            <div className="block">
              <h6>Hello, My Name Is</h6>
              <h1>MUHAMMAD KHOLID</h1>
              <h3>Web Developer</h3>
              <div className="webpage">
                <a href="https://drive.google.com/file/d/1zlObuH4YiVnPvz8FZghpER5DRPTI_PS9/view?usp=sharing">
                  <FontAwesomeIcon icon={faFileDownload} />
                  &nbsp;&nbsp;&nbsp;DOWNLOAD CV
                </a>
                {/* <a href="https://tempat-bersinggah.firebaseapp.com/"> */}
                {/*   <FontAwesomeIcon icon={faGlobeAsia} /> */}
                {/* </a> */}
                {/* <a href="https://github.com/muhammadKholid/"> */}
                {/*   <FontAwesomeIcon icon={faGithub} className="icon" /> */}
                {/* </a> */}
                {/* <a href="https://www.linkedin.com/in/muhammad-kholid-a57a051a9/"> */}
                {/*   <FontAwesomeIcon icon={faLinkedin} className="icon" /> */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
