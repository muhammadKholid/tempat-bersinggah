import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import TB from '../../assets/signature-tb.png';

import './Navbar.css';

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }, []);

  function goDown() {
    scroll.scrollToBottom();
  }
  function goTo() {
    scroll.scrollTo(1350);
  }

  function changeVal() {
    if (!toggleNav) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  }
  const variant = {
    visible: { opacity: 1, y: [-200, 0] },
    hidden: { opacity: 1 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={{ ease: 'easeInOut', duration: 2 }}
      variants={variant}
      className={toggleNav ? 'nav1' : 'nav'}>
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
              <p onClick={() => goTo()}>Book's Review</p>
            </li>
            <li className="nav-link">
              <p onClick={() => goDown()}>About me</p>
            </li>
            <li className="nav-link">
              <Link to="/resume">
                <p>My Resume</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="social text-grey">
          <a href="https://github.com/muhammadKholid/tempat-bersinggah">
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
          <a href="https://www.youtube.com/channel/UCtRNUAqw3YTe2FFDcH7o68A/videos">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
