const { createPost } = require("../services/Posts.service");

exports.createPost = async (req, res, next) => {
  const { content } = req.body;
  const user = await createPost(content);
  res.json(user);
};
