const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/Users.routes");
const postRoutes = require("./routes/Posts.routes");

const main = require("./database/connection");

main().catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

module.exports = app;
