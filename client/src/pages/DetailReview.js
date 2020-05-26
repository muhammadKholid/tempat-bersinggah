import React from 'react';

import './DetailReview.css';

export default function About() {
  return (
    <div className="App">
      <div className="about-container">
        <div className="post">
          <div className="post-image">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565658920l/1398034._SY475_.jpg"
              alt="bumi-manusia"
              className="image"
            />
          </div>
          <div className="post-content">
            <h1 className="title">Bumi Manusia</h1>
            <p className="content">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Roman Tetralogi Buru
              mengambil latar belakang dan cikal bakal nation Indonesia di awal abad ke-20. Dengan
              membacanya waktu kita dibalikkan sedemikian rupa dan hidup di era membibitnya
              pergerakan nasional mula-mula, juga pertautan rasa, kegamangan jiwa, percintaan, dan
              pertarungan kekuatan anonim para srikandi yang mengawal penyemaian bangunan nasional
              yang kemudian kelak melahirkan Indonesia modern. Roman bagian pertama; Bumi Manusia,
              sebagai periode penyemaian dan kegelisahan dimana Minke sebagai aktor sekaligus
              kreator adalah manusia berdarah priyayi yang semampu mungkin keluar dari kepompong
              kejawaannya menuju manusia yang bebas dan merdeka, di sudut lain membelah jiwa
              ke-Eropa-an yang menjadi simbol dan kiblat dari ketinggian pengetahuan dan peradaban.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
