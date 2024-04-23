const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const Bookmarks = new Schema({
  type: Schema.Types.String,
  id: Schema.Types.String,
});
const User = new Schema({
  email: Schema.Types.String,
  password: Schema.Types.String,
  picture: Schema.Types.String,
  name: Schema.Types.String,
  bookmarks: [Bookmarks],
});
module.exports = mongoose.model("User", User);
