const { createPosts } = require("../services/Posts.service");

exports.createPosts = async (req, res, next) => {
  const { content } = req.body;
  const post = await createPosts(content);
  res.json(post);
};
