const express = require("express");

const router = express.Router();

const { createPosts } = require("../controllers/Posts.controller");

router.post("/", createPosts);

module.exports = router;
