const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  // User Model
  username: String,
  email: String,
  password: String,
});

const Posts = mongoose.model("Posts", UsersSchema);

module.exports = Users;
