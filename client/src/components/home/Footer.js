import React, { useEffect } from 'react';
import Particles from 'react-particles-js';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Footer() {
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }, []);

  function goUp() {
    scroll.scrollToTop();
  }

  return (
    <div className="footer">
      <Particles
        style={{ position: 'absolute' }}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
      <div className="container">
        <div className="aboutMe">
          <h2>About Me</h2>
          <p>
            Tempat Bersinggah is a brand that is made by me. It's actually a place where I can
            express my opinions, thought, and feelings. And also, It's possible to share my
            knowledge about what i just learned.{' '}
          </p>
        </div>
        <div className="newsLetter">
          <h2>NewsLetter</h2>
          <p>Stay update with my new new :)</p>
          <div className="form-element">
            <input type="text" placeholder="your email ..." />
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
        <div className="follow">
          <h2>Follow me :)</h2>
        </div>
      </div>
      <div className="rights flex-row">
        <h4 className="text-grey">
          Copyright @2020 All rights reserved | made by{' '}
          <a href="https://github.com/muhammadKholid">Muhammad Kholid</a>
        </h4>
      </div>
      <div className="movement">
        <span>
          <FontAwesomeIcon icon={faChevronUp} onClick={() => goUp()} />
        </span>
      </div>
    </div>
  );
}
