import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';

import './Main.css';

const books = [
  {
    book: 'Bumi Manusia',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565658920l/1398034._SY475_.jpg',
  },
  {
    book: 'Anak Semua Bangsa',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464929002l/1398044.jpg',
  },
  {
    book: 'Jejak Langkah',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360760182l/1398066.jpg',
  },
  {
    book: 'Rumah Kaca',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360646538l/1353452.jpg',
  },
  {
    book: 'Tuhan, Izinkan Aku Menjadi Pelacur',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465275663l/30365614.jpg',
  },
  {
    book: 'Filosofi Teras',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548033656i/42861019._UY1110_SS1110_.jpg',
  },
  {
    book: 'Arus Balik',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463799193i/963151._UY630_SR1200,630_.jpg',
  },
  {
    book: 'Kitab Anti Bodoh',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446023543i/27318448._UY1211_SS1211_.jpg',
  },
  {
    book: 'Bumi',
    image: 'https://images.gr-assets.com/books/1383884931l/18759843.jpg',
  },
  {
    book: 'Seni Mencintai Diri Sendir',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1462896335l/30157478._SX318_.jpg',
  },
  {
    book: 'Padang Bulan',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1276569400i/8460524._UY475_SS475_.jpg',
  },
  {
    book: 'Malik & Elsa',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533962914i/41109964._UY630_SR1200,630_.jpg',
  },
  {
    book: 'Maryam',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411613668l/23269499.jpg',
  },
  {
    book: 'Fatimah Az-Zahra',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1392188399i/20797705._UY471_SS471_.jpg',
  },
  {
    book: 'Rahvayana',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398848827i/22025401._UY464_SS464_.jpg',
  },
  {
    book: 'Edensor',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358321143l/11427330.jpg',
  },
  {
    book: 'Tuhan Dalam Secangkir Kopi',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466471150l/30658791.jpg',
  },
  {
    book: 'Tuhan, Maaf Kami Sedang Sibuk',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1311051357l/12070509.jpg',
  },
  {
    book: 'Melihat Api Bekerja',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428553025l/25325367.jpg',
  },
  {
    book: 'How The World Works',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351663909l/10728838.jpg',
  },
  {
    book: 'Garis Waktu',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471933385l/31604219._SX318_.jpg',
  },
  {
    book: 'Khalil Ghibran, Sang Pujaan',
    image:
      'https://cdn.statically.io/img/www.kahlilgibran.com/joomlatools-files/docman-images/Kahlil_Gibran_-_Sang_Pujaan.jpg',
  },
  {
    book: 'Talijiwo',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1517387716i/38310862._UY630_SR1200,630_.jpg',
  },
  {
    book: 'Akar',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1336361928l/13610751.jpg',
  },
  {
    book: 'Pulang',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1441194791i/26211806._UY1459_SS1459_.jpg',
  },
  {
    book: 'Negri Diujung Tanduk',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524563242l/39932102.jpg',
  },
  {
    book: 'Utang Pemerintah Mencekik Rakyat',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345266308i/15834129._UY630_SR1200,630_.jpg',
  },
  {
    book: 'Bumi Yang Tak Dapat Dihuni',
    image: 'https://ebooks.gramedia.com/ebook-covers/49257/image_highres/ID_BDD2019MTH09BD.jpg',
  },
  {
    book: 'Alam Pikiran Yunani',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1255104026l/1772451.jpg',
  },
  {
    book: 'The Last Samurai',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335259764l/13614962.jpg',
  },
  {
    book: 'Ayahku Bukan Pembohong',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472197488l/31683007._SX318_.jpg',
  },
  {
    book: 'Distilasi Alkena',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457168896l/29421717.jpg',
  },
  {
    book: 'Homo Deus',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522691489l/39704901._SY475_.jpg',
  },
  {
    book: 'Hikayat Pohon Ganja',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1322042180l/13098276.jpg',
  },
  {
    book: 'Layla & Majnun',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457658367l/29480266.jpg',
  },
  {
    book: 'Psikopatologi',
    image: 'https://romantikabook.id/wp-content/uploads/2019/12/PSIKOPATOLOGI-247x247.jpg',
  },
  {
    book: 'Gaya Filsafat Nietzsche',
    image: 'https://ebooks.gramedia.com/ebook-covers/47126/image_highres/ID_GFN2019MTH04.jpg',
  },
  {
    book: 'Sapiens',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433930311l/20873740._SY475_.jpg',
  },
  {
    book: 'Khadijah',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363572718i/17570524._UY470_SS470_.jpg',
  },
  {
    book: 'Negri Di Ujung Tanduk',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1362818782l/17566144.jpg',
  },
  {
    book: 'Perang Salib',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421908318l/24634140.jpg',
  },
  {
    book: ' Ayah',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431005462l/25498974.jpg',
  },
  {
    book: 'Muslihat kapitalis Global',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543566381i/15975117._UY1734_SS1734_.jpg',
  },
];

export default function BookList() {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faBookDead} />
        &nbsp;&nbsp;My E-book's List
      </h1>
      <ul className="projects-list">
        {books.map((book, i) => {
          return (
            <li key={i} className="list-item">
              <span>
                <a href={book.image}>&nbsp;&nbsp;{book.book}</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
