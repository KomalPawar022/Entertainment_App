const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const User = new Schema({
  user: Schema.Types.String,
  password: Schema.Types.String,
  picture: Schema.Types.String,
  name: Schema.Types.String,
  bookmarks: [Schema.Types.String],
});
module.exports = mongoose.model("User", User);
