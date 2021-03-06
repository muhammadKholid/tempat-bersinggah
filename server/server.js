require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sendEmail = require('./utilities/nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/send-mail', async (req, res) => {
  const mail = req.body.email;
  const book = req.body.book;
  const subs = 'Tempat Bersinggah bagi bagi ebook gratis :)';
  const text = `Hai, saya tertarik dengan buku ${book}, apakah ada didirectori anda? kalo ada saya tertarik untuk membacanya. Kirim ke ${mail} jika anda memilikinya. Terimakasih`;
  await sendEmail(mail, subs, text);
  res.status(201).json({ message: 'Succesfully sending data into your mail boss!' });
  res.end();
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
