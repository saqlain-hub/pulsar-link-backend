const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
