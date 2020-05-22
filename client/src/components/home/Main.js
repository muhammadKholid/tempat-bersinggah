import React from 'react';
import './Main.css';
import Image1 from '../../assets/PicsArt_05-22-08.21.29.jpg';
import Image2 from '../../assets/PicsArt_05-22-08.26.49.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarAlt,
  faArrowRight,
  faBlog,
  faGamepad,
  faTools,
  faLaugh,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  return (
    <section className="container">
      <div className="site-content">
        <div className="posts">
          <h1>My Story</h1>
          <div className="post-content">
            <div className="post-image">
              <img src={Image1} alt="kota tua" className="image" />
            </div>
            <div className="post-info flex-row">
              <span>
                <FontAwesomeIcon icon={faUser} className="icon" />
                Admin&nbsp;&nbsp;
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                14 Feb, 2020
              </span>
            </div>
            <div className="post-title">
              <a href="https://bumidatar.id/">Mahameru, pertama dan terakhir kalinya?</a>
              <p>
                Ini adalah kisah perjalanan singkatku setelah lulus kuliah. Aku dan teman teman ku
                memutuskan untuk menjelajah alam sebagai hadiah kelulusan setelah bergelut melawan
                dosen yang berbelit dan kemalasan saat menyelesaikan skripsi.
              </p>
              <button>
                {' '}
                Read More <FontAwesomeIcon icon={faArrowRight} />{' '}
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="post-content">
            <div className="post-image">
              <img src={Image2} alt="kota tua" className="image" />
            </div>
            <div className="post-info flex-row">
              <span>
                <FontAwesomeIcon icon={faUser} className="icon" />
                Admin&nbsp;&nbsp;
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                14 Feb, 2020
              </span>
            </div>
            <div className="post-title">
              <a href="https://bumidatar.id/">
                Esensi hidup, hidup bagai berpetualang di alam mimpi.
              </a>
              <p>
                Salah satu imam besar dalam penokohan islam, Al-Ghozali, Beliau pernah berkata,
                "Hidup itu bagaikan mimpi, rasanya nyata, tetapi hanya mimpi setelah bangun(mati)
                nanti."
              </p>
              <button>
                {' '}
                Read More <FontAwesomeIcon icon={faArrowRight} />{' '}
              </button>
            </div>
          </div>
          <hr></hr>
        </div>

        <aside className="sidebar">
          <div className="projects">
            <h1>My Projects</h1>
            <ul className="projects-list">
              <li className="list-item">
                <span>
                  <FontAwesomeIcon icon={faBlog} />
                  <a href="https://github.com/muhammadKholid/kanban">&nbsp;&nbsp;Kanban</a>
                </span>
              </li>
              <li className="list-item">
                <span>
                  <FontAwesomeIcon icon={faGamepad} />
                  <a href=" ">&nbsp;&nbsp;Sugoku</a>
                </span>
              </li>
              <li className="list-item">
                <span>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <a href="https://github.com/muhammadKholid/e-commerce">&nbsp;&nbsp;E-commerce</a>
                </span>
              </li>
              <li className="list-item">
                <span>
                  <FontAwesomeIcon icon={faTools} />
                  <a href="https://github.com/muhammadKholid/fancy-to-do">
                    &nbsp;&nbsp;Fancy To-do
                  </a>
                </span>
              </li>
              <li className="list-item">
                <span>
                  <FontAwesomeIcon icon={faLaugh} />
                  <a href="https://github.com/muhammadKholid/react-challenge">
                    &nbsp;&nbsp;Chuck Norris' Joke list
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
