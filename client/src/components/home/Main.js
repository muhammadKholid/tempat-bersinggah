import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Slider from 'react-slick';

// import { Link } from 'react-router-dom';

import './Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import BumiManusia from './contents/bumi-manusia';
import TuhanIzinkan from './contents/tuhan-izinkan';
import BookList from './BookList';

AOS.init({
  duration: 2000,
});
export default function Main() {
  return (
    <section className="container">
      <div className="site-content">
        <div className="content-site" data-aos="fade-up">
          <div className="posts">
            <h1>Book's Review</h1>
            <br />
            <BumiManusia />
            <hr></hr>
            <br />
            <br />
            <TuhanIzinkan />
            <hr></hr>
            <br />
            <br />
          </div>
        </div>

        <aside className="sidebar" data-aos="fade-up">
          <div className="projects">
            <h1>
              <FontAwesomeIcon icon={faPaperPlane} />
              &nbsp;&nbsp;My Random Thought
            </h1>
            <div className="projects-thoughts">
              <p>
                <FontAwesomeIcon icon={faStar} />
                &nbsp;&nbsp;June 9, 2020
              </p>
              <p>
                Today is debut of my website. I have been so confused what is my website gonna be.
                Then I decided to review a book that I've red and also give you e-book for free if
                you want. Contact me through my social media account.
              </p>
            </div>
            <div className="projects-thoughts">
              <p>
                <FontAwesomeIcon icon={faStar} />
                &nbsp;&nbsp;June 10, 2020
              </p>
              <p>
                Soo, I added a new feature to my website. Maybe you are looking for e-book for your
                duty or just for spending your time in this pandemic situation. Go to newsletter
                below and write down your email and the e-book.
              </p>
            </div>
            <div className="projects-thoughts">
              <p>
                <FontAwesomeIcon icon={faStar} />
                &nbsp;&nbsp;June 12, 2020
              </p>
              <p>
                "Yeah, you know, I am not really like, a big planner, you know? I'm kinda more like
                an in-the-moment kind of guy. Like, just figuring it out very day-by-day, like the
                Prophet."
              </p>
              <p>- Ramy, 2019.</p>
            </div>
            <div className="projects-thoughts">
              <p>
                <FontAwesomeIcon icon={faStar} />
                &nbsp;&nbsp;June 15, 2020
              </p>
              <p>
                "Tak usah kalian menyesali ataupun membanggakan yang sudah-sudah. Itulah kenapa
                dirukun iman yang ke-5 kita harus mengimani Qodho dan Qodar Allah bahwa semuanya
                sudah tertulis 40 tahun sebelum Nabiyuallah Adam tercipta."
              </p>
              <p> - Gus Baha. Pengajian di Masji Sirothol Mustaqiem Korea Selatan. - </p>
            </div>
            <hr />
            <BookList />
          </div>
        </aside>
      </div>
    </section>
  );
}
