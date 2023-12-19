const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/Users.routes");

const main = require("./database/connection");

main().catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

module.exports = app;
