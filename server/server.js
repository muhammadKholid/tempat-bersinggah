require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sendEmail = require('./utilities/nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/send-mail', async (req, res) => {
  const mail = req.body.email;
  const book = req.body.book;
  const subs = 'tempat bersinggah bagi bagi ebook gratis';
  const text = `Hai, saya tertarik dengan buku ${book}, apakah ada diderectory anda? kalo ada saya tertarik untuk membacanya. terimakasih`;
  await sendEmail(mail, subs, text);
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
