const UsersModel = require("../models/Users.model");

const createUser = async (name, email, password) => {
  return await UsersModel.create({ name, email, password });
};

module.exports = {
  createUser,
};
