import React from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './ResumeProject.css';

import ecommerce from '../../assets/149208-OU090X-419.jpg';
import todo from '../../assets/446082-PFPZEN-169.jpg';
import kanban from '../../assets/kanban-vector-concept-web-banner-website-page-illustration-employees-moving-cards-whiteboard-start-to-finish-142689867.jpg';
import cms from '../../assets/flat-thinking-concept_23-2148154726.jpg';
// import joke from '../../assets/13f4093020fc96ba87eae8221d071af7.jpg';
// import movie from '../../assets/Its_movie_night_7167.png';
// import sudoku from '../../assets/sudoku.svg';
import website from '../../assets/modern-web-design-concept-with-isometric-view_23-2147936415.jpg';

AOS.init({
  duration: 1000,
});
export default function Project() {
  return (
    <div className="portofolio">
      <div className="container">
        <div className="row">
          <div className="portofolio-title" data-aos="fade-up">
            <h1 className="title">My Portofolios</h1>
          </div>
        </div>
        <div className="row">
          <div className="portofolio-box">
            <div className="box-item" data-aos="flip-up">
              <img src={todo} alt="todo" />
              <div className="box-title">
                <h4>
                  <a href="https://github.com/muhammadKholid/fancy-to-do">Fancy To-do</a>
                </h4>
              </div>
            </div>
            <div className="box-item" data-aos="flip-up">
              <img src={kanban} alt="kanban" />
              <div className="box-title">
                <h4>
                  <a href="https://github.com/muhammadKholid/My-Kanban">Kanban</a>
                </h4>
              </div>
            </div>
            <div className="box-item" data-aos="flip-up">
              <img src={cms} alt="cms" />
              <div className="box-title">
                <h4>
                  <a href="https://github.com/muhammadKholid/CMS-admin-e-commerce">
                    E-commerce CMS
                  </a>
                </h4>
              </div>
            </div>
            <div className="box-item" data-aos="flip-up">
              <img src={ecommerce} alt="ecommerce" />
              <div className="box-title">
                <h4>
                  <a href="https://github.com/muhammadKholid/Lapak-Online">E-commerce</a>
                </h4>
              </div>
            </div>
            {/* <div className="box-item" data-aos="flip-up"> */}
            {/*   <img src={joke} alt="chuck-norris" /> */}
            {/*   <div className="box-title"> */}
            {/*     <h4> */}
            {/*       <a href="https://hire.hacktiv8.com/verify/fsjs/MuhammadKholid-20200604"> */}
            {/*         E-commerce */}
            {/*       </a> */}
            {/*     </h4> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="box-item" data-aos="flip-up"> */}
            {/*   <img src={movie} alt="movie" /> */}
            {/*   <div className="box-title"> */}
            {/*     <h4>Movie List</h4> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="box-item" data-aos="flip-up"> */}
            {/*   <img src={sudoku} alt="sudoku" /> */}
            {/*   <div className="box-title"> */}
            {/*     <h4>Sudoku</h4> */}
            {/*   </div> */}
            {/* </div> */}
            <div className="box-item" data-aos="flip-up">
              <img src={website} alt="my-website" />
              <div className="box-title">
                <Link to="/">
                  <h4>Blog Website</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
