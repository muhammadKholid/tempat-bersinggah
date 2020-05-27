import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  contentId: String,
  stranger: String,
  opinion: String,
  createdAt: {
    type: Date,
    default: Date.now().toString(),
  },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
