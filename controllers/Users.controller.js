const { createUsers } = require("../services/Users.service");

exports.createUsers = async (req, res, next) => {
  const { email, name, password } = req.body;
  const user = await createUsers(email, name, password);
  res.json(user);
};
