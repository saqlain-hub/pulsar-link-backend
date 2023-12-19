const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/pulsar";

async function main() {
  await mongoose.connect(URI);
}

module.exports = main;
