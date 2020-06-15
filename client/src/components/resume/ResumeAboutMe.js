import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ResumeAboutMe.css';
import image from '../../assets/DSC07865-03_compress57.jpg';

AOS.init({
  duration: 1500,
});
export default function AboutMe() {
  return (
    <div className="aboutme">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="section-title">
            <h1>About Me</h1>
            <p className="small">Informations About Me</p>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="about-content">
            <div className="row">
              <div className="img">
                <img src={image} alt="avatar roku" />
              </div>
              <div className="text">
                <h4>
                  I'm <span>Muhammad Kholid</span>
                </h4>
                <h5>
                  A <span>Fullstack Javascript</span> Web Developer based in <span>Indonesia</span>.
                </h5>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionately write
                  some code ever since I made my own app with Javascript. At that moment, my skills
                  to solve a problem are honed. I have experienced in making web and mobile based
                  applications, either back-end or front-end side. Accustomed to work in group
                  making an app, work remotely, and used to solve a practical problems.
                </p>
                <div className="detail-content">
                  <div className="content1">
                    <p>
                      Birthday: <span> &nbsp;4th June 1997</span>
                    </p>
                    <p>
                      Address: <span> &nbsp;Jakarta, Indonesia</span>
                    </p>
                  </div>
                  <div className="content2">
                    <p>
                      E-mail: <span>&nbsp;muhamm4dkhal3d@gmail.com</span>
                    </p>
                    <p>
                      Phone: <span>&nbsp;082230884539</span>
                    </p>
                  </div>
                </div>
                <div className="social-media">
                  <a href="https://tempat-bersinggah.firebaseapp.com/">
                    <FontAwesomeIcon icon={faGlobeAsia} />
                  </a>
                  <a href="https://github.com/muhammadKholid/">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-kholid-a57a051a9/">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="education">
            <h2 className="title">My Education</h2>
            <div className="education-content">
              <div className="timeline box-shadow">
                {/* timeline */}
                <div className="timeline-item">
                  <div className="dot"></div>
                  <h6 className="timeline-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;&nbsp;January - June, 2020
                  </h6>
                  <h4 className="timeline-title">Hacktiv8 Indonesia</h4>
                  <p className="timeline-text">Fullstack Javascript web development</p>
                </div>
                {/* timeline */}
                <div className="timeline-item">
                  <div className="dot"></div>
                  <h6 className="timeline-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;&nbsp;2015 - 2019
                  </h6>
                  <h4 className="timeline-title">University of 17 Agustus 1945 Surabaya</h4>
                  <p className="timeline-text">English Literature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
