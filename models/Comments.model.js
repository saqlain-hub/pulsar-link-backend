const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "Users" },
  post: { type: Schema.Types.ObjectId, ref: "Posts" },
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
