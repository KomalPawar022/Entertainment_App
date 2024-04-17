const app = require("./app");
const connectToDatabase = require("./db/connection");
require("./db/connection");
app.listen(process.env.PORT, () => {
  console.log("Server Open & Connected To Database 🤟");
});
