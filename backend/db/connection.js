const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));

// async function disconnectFromDatabase() {
//   await mongoose
//     .disconnect(process.env.MONGODB_URL)
//     .then(() => console.log("MongoDB Disconnected"))
//     .catch((e) => console.log(e));
// }
