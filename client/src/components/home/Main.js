import React from 'react';

import { Link } from 'react-router-dom';

import './Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  return (
    <section className="container">
      <div className="site-content">
        <div className="posts">
          <h1>Book's Review</h1>
          <div className="post-content">
            <div className="post-image flex-row">
              <div>
                <img
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565658920l/1398034._SY475_.jpg"
                  alt="kota tua"
                  className="image"
                />
              </div>
              <div className="book-description">
                <h2 href="">Bumi Manusia (Tetralogi #1)</h2>
                <p>
                  <strong>Penulis :</strong> Pramoedya Ananta Toer
                </p>
                <p>
                  <strong>Tebal Buku :</strong> 314
                </p>
                <p>
                  <strong>Bahasa :</strong> Indonesia
                </p>
                <p>
                  <strong>Format :</strong> E-book .PDF
                </p>
              </div>
            </div>
            <div className="post-title">
              <h3>Bumi Manusia, romansa tragis dizaman belanda.</h3>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Roman Tetralogi Buru
                mengambil latar belakang dan cikal bakal nation Indonesia di awal abad ke-20. Dengan
                membacanya waktu kita dibalikkan sedemikian rupa dan hidup di era membibitnya
                pergerakan nasional mula-mula, juga pertautan rasa, kegamangan jiwa, percintaan, dan
                pertarungan kekuatan anonim para srikandi yang mengawal penyemaian bangunan nasional
                yang kemudian kelak melahirkan Indonesia modern. Roman bagian pertama; Bumi Manusia,
                sebagai periode penyemaian dan kegelisahan dimana Minke sebagai aktor sekaligus
                kreator adalah manusia berdarah priyayi yang semampu mungkin keluar dari kepompong
                kejawaannya menuju manusia yang bebas dan merdeka, di sudut lain membelah jiwa
                ke-Eropa-an yang menjadi simbol dan kiblat dari ketinggian pengetahuan dan
                peradaban.
              </p>
              {/* <Link to="/review"> */}
              {/*   <button> */}
              {/*     {' '} */}
              {/*     Read My Review <FontAwesomeIcon icon={faArrowRight} />{' '} */}
              {/*   </button> */}
              {/* </Link> */}
            </div>
          </div>
          <hr></hr>
        </div>

        <aside className="sidebar">
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
            {/* <ul className="projects-list"> */}
            {/*   <li className="list-item"> */}
            {/*     <span> */}
            {/*       <a href="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565658920l/1398034._SY475_.jpg"> */}
            {/*         &nbsp;&nbsp;Bumi Manusia */}
            {/*       </a> */}
            {/*     </span> */}
            {/*   </li> */}
            {/*   <li className="list-item"> */}
            {/*     <span> */}
            {/*       <a href="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464929002l/1398044.jpg"> */}
            {/*         &nbsp;&nbsp;Anak Semua Bangsa */}
            {/*       </a> */}
            {/*     </span> */}
            {/*   </li> */}
            {/*   <li className="list-item"> */}
            {/*     <span> */}
            {/*       <a href="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360760182l/1398066.jpg"> */}
            {/*         &nbsp;&nbsp;Jejak Langkah */}
            {/*       </a> */}
            {/*     </span> */}
            {/*   </li> */}
            {/*   <li className="list-item"> */}
            {/*     <span> */}
            {/*       <a href="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360646538l/1353452.jpg"> */}
            {/*         &nbsp;&nbsp;Rumah Kaca */}
            {/*       </a> */}
            {/*     </span> */}
            {/*   </li> */}
            {/*   <li className="list-item"> */}
            {/*     <span> */}
            {/*       <a href="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360646538l/1353452.jpg"> */}
            {/*         &nbsp;&nbsp;And Many more. Just ask me through my social media. */}
            {/*       </a> */}
            {/*     </span> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>
        </aside>
      </div>
    </section>
  );
}
