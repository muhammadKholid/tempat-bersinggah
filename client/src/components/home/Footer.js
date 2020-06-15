import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Particles from 'react-particles-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { sendEmail } from '../../stores/actions/Action';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';

import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

AOS.init({
  duration: 500,
});
export default function Footer() {
  const [mail, setMail] = useState('');
  const [book, setBook] = useState('');
  const [valueMail, setValueMail] = useState('');
  const [valueBook, setValueBook] = useState('');
  const dispatch = useDispatch();

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

  function sendTo() {
    //logic
    const data = {
      email: mail,
      book,
    };
    setValueBook('');
    setValueMail('');
    dispatch(sendEmail(data));
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
                value_area: 3000,
              },
            },
            shape: {
              type: 'edge', // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
              stroke: {
                width: 1.5,
                color: '#fdbd10',
              },
            },
          },
        }}
      />
      <div className="container flex-row">
        <div className="aboutMe" data-aos="fade-up">
          <h2>About Me</h2>
          <p>
            Tempat Bersinggah is a place where I can express my opinions and thoughts. I'll be
            posting my content either in english or native ,and it can be praise or curse (just
            kidding). And also you can read review of a book that I've red. Thanks for visiting.{' '}
          </p>
        </div>
        <div className="newsLetter" data-aos="fade-up">
          <h2>NewsLetter</h2>
          <p>I have a bunch of e-books, ask me if you are looking for something.</p>
          <div className="form-element">
            <input
              type="text"
              value={valueMail}
              onChange={(e) => {
                setMail(e.target.value);
                setValueMail(e.target.value);
              }}
              placeholder="your email ..."
            />
            <input
              type="text"
              value={valueBook}
              onChange={(e) => {
                setBook(e.target.value);
                setValueBook(e.target.value);
              }}
              placeholder="What book are you looking for  ..."
            />
            <span onClick={() => sendTo()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
        <div className="follow" data-aos="fade-up">
          <h2>Do you like my page? </h2>
          <p>
            {' '}
            Give me a star in my github repository :) <FontAwesomeIcon icon={faStar} />
          </p>
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
