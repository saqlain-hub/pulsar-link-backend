const PostsModel = require("../models/Posts.model");

const createPosts = async (content) => {
  return await PostsModel.create({ content });
};

module.exports = {
  createPosts,
};
