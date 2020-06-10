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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dulu waktu kuliah, saya
                pernah mengikuti seminar tentang sastra. Saya lupa apa nama seminarnya dan pengisi
                acaranya karena sudah 3 tahun yang lalu. Ketika itu si pengisi acara menanyakan ke
                para audiens apakah mengenal sastrawan indonesia bernama Pramoedya Ananta Toer?.
                Pada waktu itu saya tidak mengenal siapa orang tersebut. Entah berselang 1 tahun
                kedepan, teman saya bercerita sedikit tentang buku bumi manusia ini. Dengan cara dia
                menceritakkan isi buku ini sangat menarik. "Percintaan yang penuh politik nan
                tragis", dia menceritakan kepadaku. "boleh lah aku pinjam" aku menyahut. Karena
                teman saya in sangat jarang keliatan akan kesibukan kerjanya, akhirnya saya
                memutuskan untuk membeli bukunya yang versi bekas di jl. Semarang. Dan akhirnya
                sayapun membaca buku tersebut.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ketika setelah saya
                membaca buku beliau ini, jujur saya sangat terkagum. Bahkan saya ingin menjadi
                penulis seperti beliau. Di buku bumi manusia ini kalian akan di ajak berjalan-jalan
                mengarungi waktu di awal tahun 1900-an. Dimulai dari kehidupan sosialnya, maupun
                politik. Beliau sangat jenius bisa menggabungkan antara percintaan(genre yang sangat
                banyak diminati banyak kalangan remaja) dengan salah satu permasalahan yang terjadi
                di zaman penjajahan kala itu yang nantinya akan menjadi buku petunjuk bagaimana
                perpolitikan Indonesia ini terbentuk(Tapi itu nanti di seri tetra buru berikutnya).
                Percintaannya pun sangat tragis karena sang pemeran utama, Minke, mencintai seorang
                anak Nyai, Nyai Ontosoroh(Nyai adalah sebutan bagi perempuan simpanan pembesar
                belanda kala itu. Dan dipandang sebelah mata oleh masyarakat sekitar meskipun secara
                ekonomi lebih baik daripada rakyat yang memandang sebelah mata tersebut.). Nama
                gadis ini adalah Annelis. Dia tergambarkan gadis yang sangat sempurna oleh Pram. Dia
                wanita yang cerdas, dapat diandalkan, bahkan bisnis yang dijalankan oleh Nyai
                Ontosoroh pun dia yang menanganinya.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Meraka, Minke dan
                Annelis sempat menikah, tapi karena perbedaan budaya antara Belanda dan
                Pribumi(dinovel status agama Minke adalah islam, maka pernikahan mereka dilakukan
                secara hukum islam), pernikahan mereka menjadi kontroversi di Surabaya. Hukum di
                Belanda meyakini pernikahan dini adalah suatu tindakan tidak pantas, sedangkan
                Pribumi menganggap pernikahan itu sah secara hukum islam. Sungguh tragis. Sampai
                akhirnya permasalahan tersebut harus dibawa ke ranah pengadilan.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kalian pasti sudah bisa
                menebak siapa yanag memenangkan pengadilan tersebut. Apapun yang berstatuskan
                pemilik orang belanda, maka harus mengikuti hukum Belanda. Akhirnya hukum memutuskan
                Annelis akan 'dipulangkan' kembali ke Belanda bersama keluarga besar ayahnya,
                Mellema. Tak hanya itu, kekeyaan yang ditangani oleh Nyai Ontosoroh pun harus
                dikembalikan kepada keluarga besar Mellema di belanda(padahal Ayahnya tak menangani
                sama sekali. Nanti akan diceritakan diseri kedua kisah bagaimana Nyai Ontosoroh bisa
                menjadi seorang pribumi nan berstatuskan Nyai bisa memiliki kekayaan sebesar ini).
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Itulah kisah cinta
                Minke dan Annelis di Bumi Manusia ini. Sebenarnya ada kisah persahabatannya juga di
                Bumi Manusia ini. Tapi, biarlah kalian yang menelusurinya sendiri dengan membacanya.
                Tunggu review seri berikutnya yaaa, Thanks for visitiing :)
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
