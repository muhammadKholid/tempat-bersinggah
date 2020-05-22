import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import TB from '../../assets/signature-tb.png';

import './Navbar.css';

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  function changeVal() {
    if (toggleNav) {
      setToggleNav(false);
    } else {
      setToggleNav(true);
    }
  }

  return (
    <nav className={toggleNav ? 'nav1' : 'nav'}>
      <div className="nav-menu flex-row">
        <div className="nav-brand">
          <a href="/">
            <img src={TB} alt="" className="brand"></img>
          </a>
        </div>

        <div className="toggle-collapse">
          <div className="toggle-icons">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                changeVal();
              }}
            />
          </div>
        </div>

        <div className="nav-groups">
          <ul className="nav-items">
            <li className="nav-link">
              <a href="/">Home</a>
            </li>
            <li className="nav-link">
              <a href="/#">My Work</a>
            </li>
            <li className="nav-link">
              <a href="/#">About</a>
            </li>
          </ul>
        </div>

        <div className="social text-grey">
          <a href="https://github.com/muhammadKholid">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-kholid-a57a051a9/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://twitter.com/tmptbersinggah">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="https://www.instagram.com/tempatbersinggah">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}
