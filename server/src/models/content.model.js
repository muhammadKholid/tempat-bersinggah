import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  image: String,
  book: String,
  author: String,
  thickness: String,
  language: String,
  format: String,
  title: String,
  headline: String,
  createdAt: {
    type: String,
    default: Date.now().toString(),
  },
  review: String,
  rate: String,
  like: String,
});

const Content = mongoose.model('Content', contentSchema);

export default Content;
