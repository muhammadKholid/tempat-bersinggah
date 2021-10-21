import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ResumeAboutMe.css';
import image from '../../assets/PicsArt_11-11-11.15.39.jpg';

AOS.init({
    duration: 1500,
});
export default function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='container' data-aos='fade-up'>
                <div className='row'>
                    <div className='section-title'>
                        <h1>About Me</h1>
                        <p className='small'>Informations About Me</p>
                    </div>
                </div>

                <div className='row' data-aos='fade-up'>
                    <div className='about-content'>
                        <div className='row'>
                            <div className='img'>
                                <img src={image} alt='avatar roku' />
                            </div>
                            <div className='text'>
                                <h4>
                                    I'm <span>Muhammad Kholid</span>
                                </h4>
                                <h5>
                                    A <span>Javascipt/Typescript Developer</span>
                                </h5>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am
                                    a Javascript/Typescript Developer who is able to write code
                                    either in the back(Node Js, Express Js, MySql, PostgresQL,
                                    MongoDB, Firebase Function Cloud, Firebase Firestore) or front
                                    side (React Js, React Native). Capable of translating business
                                    rules documentation into technical solutions(ex. payment gate,
                                    stock management, point management, etc.), proficient working
                                    with a team, working remote or on-site, blazing fast to learn
                                    something new, and love to solve technical problems.
                                </p>
                                <div className='detail-content'>
                                    <div className='content1'>
                                        <p>
                                            Birthday: <span> &nbsp;4th June 1997</span>
                                        </p>
                                        <p>
                                            Address: <span> &nbsp;Sleman, DI Yogyakarta</span>
                                        </p>
                                    </div>
                                    <div className='content2'>
                                        <p>
                                            E-mail: <span>&nbsp;muhamm4dkhal3d@gmail.com</span>
                                        </p>
                                        <p>
                                            Phone: <span>&nbsp;082230884539</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='social-media'>
                                    <a href='https://tempat-bersinggah.firebaseapp.com/'>
                                        <FontAwesomeIcon icon={faGlobeAsia} />
                                    </a>
                                    <a href='https://github.com/muhammadKholid/'>
                                        <FontAwesomeIcon icon={faGithub} className='icon' />
                                    </a>
                                    <a href='https://www.linkedin.com/in/muhammad-kholid-a57a051a9/'>
                                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' data-aos='fade-up'>
                    <div className='education'>
                        <h2 className='title'>My Education & Career Path</h2>
                        <div className='education-content'>
                            <div className='timeline box-shadow'>
                                <div className='timeline-item'>
                                    <h6 className='timeline-date'>
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                        &nbsp;&nbsp;August 2020 - October 2021
                                    </h6>
                                    <h4 className='timeline-title'>
                                        Software Engineer, Back-end Engineer
                                    </h4>
                                    <p className='timeline-text'>
                                        at PT. AVO Innovation and Technology
                                    </p>
                                    <ul>
                                        <li>
                                            -Designing database, either SQL (MySql) or no-SQL
                                            (Firebase Firestore).
                                        </li>
                                        <li>
                                            -Provide RestFul API to be consumed in front-end side.
                                        </li>
                                        <li>
                                            -Translating business rules into technical solutions.
                                            (ex. authentication process, payment gate, stock
                                            management, point system, revenue analytics, .etc)
                                        </li>
                                    </ul>
                                </div>
                                {/* timeline 
                  <div className="dot"></div>
                */}
                                <div className='timeline-item'>
                                    <h6 className='timeline-date'>
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                        &nbsp;&nbsp;January - June, 2020
                                    </h6>
                                    <h4 className='timeline-title'>Hacktiv8 Indonesia</h4>
                                    <p className='timeline-text'>
                                        Fullstack Javascript web development
                                    </p>
                                    <ul>
                                        <li>
                                            - Took classes on back-end, front-end, and mobile app.
                                        </li>
                                        <li>- Learned Database, either SQL and no-SQL and Git.</li>
                                    </ul>
                                </div>
                                {/* timeline 
                  <div className="dot"></div>
                  */}
                                <div className='timeline-item'>
                                    <h6 className='timeline-date'>
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                        &nbsp;&nbsp;2015 - 2019
                                    </h6>
                                    <h4 className='timeline-title'>
                                        University of 17 Agustus 1945 Surabaya
                                    </h4>
                                    <p className='timeline-text'>English Literature</p>
                                    <ul>
                                        <li>
                                            - My final thesis was about{' '}
                                            <a href='https://drive.google.com/file/d/15z6L7JVQW9VEJi6qtt2KnKjocZuX-puK/view?usp=sharing'>
                                                <i>
                                                    "RACISM AGAINST AFRO-AMERICAN PEOPLE IN ANGIE
                                                    THOMAS’ THE HATE U GIVE"
                                                </i>
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
