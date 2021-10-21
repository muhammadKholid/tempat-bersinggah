import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './ResumeHeader.css';

export default function ResumeHeader() {
    return (
        <section className='home'>
            <div className='container'>
                <Link to='/'>
                    <div className='navigation'>
                        <FontAwesomeIcon icon={faArrowLeft} className='btn-sign' />
                    </div>
                </Link>
                <div className='row full-screen'>
                    <div className='home-content'>
                        <div className='block'>
                            <h6>Hello, My Name Is</h6>
                            <h1>MUHAMMAD KHOLID</h1>
                            <h3>Javascrypt/Typescript Developer (Full-stack)</h3>
                            <div className='webpage'>
                                <a href='https://drive.google.com/file/d/1RBAKCtV8BXz7Oc12ui8njvzgNp27f5nP/view?usp=sharing'>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                    &nbsp;&nbsp;&nbsp;DOWNLOAD CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
