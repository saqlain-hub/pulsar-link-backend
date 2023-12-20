const UsersModel = require("../models/Users.model");

const createUsers = async (name, email, password) => {
  return await UsersModel.create({ name, email, password });
};

module.exports = {
  createUsers,
};
