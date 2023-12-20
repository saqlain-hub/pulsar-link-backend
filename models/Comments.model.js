const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
