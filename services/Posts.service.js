const PostModel = require("../models/Posts.model");

const createPost = async (content) => {
  return await PostModel.create({ content });
};

module.exports = {
  createPost,
};
