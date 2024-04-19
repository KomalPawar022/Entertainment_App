const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const Series = new Schema({
  title: Schema.Types.String,
  type: Schema.Types.String,
  status: Schema.Types.String,
  url: Schema.Types.String,
  language: [Schema.Types.String],
  genre: [Schema.Types.String],
  runtime: Schema.Types.String,
  released: Schema.Types.String,
  ended: Schema.Types.String,
  schedule: {
    time: Schema.Types.String,
    days: [Schema.Types.String],
  },
  rating: Schema.Types.Number,
  imageurl: [Schema.Types.String],
  synopsis: Schema.Types.String,

  cast: [Schema.Types.String],
});
module.exports = mongoose.model("Series", Series);
