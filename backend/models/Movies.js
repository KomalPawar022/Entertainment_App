const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const Movies = new Schema({
  title: Schema.Types.String,
  imdbrating: Schema.Types.Number,
  runtime: Schema.Types.String,
  released: Schema.Types.Number,
  imdbid: Schema.Types.String,
  genre: [Schema.Types.String],
  synopsis: Schema.Types.String,
  imageurl: [Schema.Types.String],
  language: [Schema.Types.String],
  streamingAvailability: [
    {
      platform: Schema.Types.String,
      url: Schema.Types.String,
    },
  ],
  cast: [Schema.Types.String],
//   quotes: [Schema.Types.String],
//   trailerUrl: Schema.Types.String,
});
module.exports = mongoose.model("Movies", Movies);
