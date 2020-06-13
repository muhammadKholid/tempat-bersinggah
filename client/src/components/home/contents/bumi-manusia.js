import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Main.css';

AOS.init({
  duration: 2000,
});
export default function bumiManusia() {
  return (
    <div className="post-content" data-aos="fade-up">
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
          acaranya karena sudah 3 tahun yang lalu. Ketika itu si pengisi acara menanyakan ke para
          audiens apakah mengenal sastrawan indonesia bernama Pramoedya Ananta Toer?. Pada waktu itu
          saya tidak mengenal siapa orang tersebut. Entah berselang 1 tahun kedepan, teman saya
          bercerita sedikit tentang buku bumi manusia ini. Dengan cara dia menceritakkan isi buku
          ini sangat menarik. "Percintaan yang penuh politik nan tragis", dia menceritakan kepadaku.
          "boleh lah aku pinjam" aku menyahut. Karena teman saya in sangat jarang keliatan akan
          kesibukan kerjanya, akhirnya saya memutuskan untuk membeli bukunya yang versi bekas di jl.
          Semarang. Dan akhirnya sayapun membaca buku tersebut.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ketika setelah saya membaca
          buku beliau ini, jujur saya sangat terkagum. Bahkan saya ingin menjadi penulis seperti
          beliau. Di buku bumi manusia ini kalian akan di ajak berjalan-jalan mengarungi waktu di
          awal tahun 1900-an. Dimulai dari kehidupan sosialnya, maupun politik. Beliau sangat jenius
          bisa menggabungkan antara percintaan(genre yang sangat banyak diminati banyak kalangan
          remaja) dengan salah satu permasalahan yang terjadi di zaman penjajahan kala itu yang
          nantinya akan menjadi buku petunjuk bagaimana perpolitikan Indonesia ini terbentuk(Tapi
          itu nanti di seri tetra buru berikutnya). Percintaannya pun sangat tragis karena sang
          pemeran utama, Minke, mencintai seorang anak Nyai, Nyai Ontosoroh(Nyai adalah sebutan bagi
          perempuan simpanan pembesar belanda kala itu. Dan dipandang sebelah mata oleh masyarakat
          sekitar meskipun secara ekonomi lebih baik daripada rakyat yang memandang sebelah mata
          tersebut.). Nama gadis ini adalah Annelis. Dia tergambarkan gadis yang sangat sempurna
          oleh Pram. Dia wanita yang cerdas, dapat diandalkan, bahkan bisnis yang dijalankan oleh
          Nyai Ontosoroh pun dia yang menanganinya.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Meraka, Minke dan Annelis
          sempat menikah, tapi karena perbedaan budaya antara Belanda dan Pribumi(dinovel status
          agama Minke adalah islam, maka pernikahan mereka dilakukan secara hukum islam), pernikahan
          mereka menjadi kontroversi di Surabaya. Hukum di Belanda meyakini pernikahan dini adalah
          suatu tindakan tidak pantas, sedangkan Pribumi menganggap pernikahan itu sah secara hukum
          islam. Sungguh tragis. Sampai akhirnya permasalahan tersebut harus dibawa ke ranah
          pengadilan.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kalian pasti sudah bisa
          menebak siapa yanag memenangkan pengadilan tersebut. Apapun yang berstatuskan pemilik
          orang belanda, maka harus mengikuti hukum Belanda. Akhirnya hukum memutuskan Annelis akan
          'dipulangkan' kembali ke Belanda bersama keluarga besar ayahnya, Mellema. Tak hanya itu,
          kekeyaan yang ditangani oleh Nyai Ontosoroh pun harus dikembalikan kepada keluarga besar
          Mellema di belanda(padahal Ayahnya tak menangani sama sekali. Nanti akan diceritakan
          diseri kedua kisah bagaimana Nyai Ontosoroh bisa menjadi seorang pribumi nan berstatuskan
          Nyai bisa memiliki kekayaan sebesar ini).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Itulah kisah cinta Minke dan
          Annelis di Bumi Manusia ini. Sebenarnya ada kisah persahabatannya juga di Bumi Manusia
          ini. Tapi, biarlah kalian yang menelusurinya sendiri dengan membacanya. Tunggu review seri
          berikutnya yaaa, Thanks for visitiing :)
        </p>
        {/* <Link to="/review"> */}
        {/*   <button> */}
        {/*     {' '} */}
        {/*     Read My Review <FontAwesomeIcon icon={faArrowRight} />{' '} */}
        {/*   </button> */}
        {/* </Link> */}
      </div>
    </div>
  );
}
