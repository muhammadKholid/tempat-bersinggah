import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  image: String,
  title: String,
  author: String,
  thickness: Number,
  language: String,
  format: String,
  synopsis: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
