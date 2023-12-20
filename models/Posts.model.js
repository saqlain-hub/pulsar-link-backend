const mongoose = require("mongoose");

// Post Model
const postSchema = new Schema({
  content: String,
  timestamp: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  // reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
