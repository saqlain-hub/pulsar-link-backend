const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  // User Model
  username: String,
  email: String,
  password: String,
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
