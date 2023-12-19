const express = require("express");
const router = express.Router();

const { createUsers } = require("../controllers/Users.controller");

router.post("/", createUsers);

module.exports = router;
