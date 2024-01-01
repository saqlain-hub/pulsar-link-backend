const mongoose = require("mongoose");

// Post Model
const PostsSchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  // reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
});

const Posts = mongoose.model("Posts", PostsSchema);

module.exports = Posts;
