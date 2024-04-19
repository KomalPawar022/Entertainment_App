const Series = require("../models/Series");
const addSeries = async (req, res, next) => {
  try {
    const {
      title,
      rating,
      runtime,
      released,
      ended,
      schedule,
      genre,
      synopsis,
      imageurl,
      language,

      cast,
      type,
      status,
      url,
    } = req.body;

    const existingSeries = await Series.findOne({ title: title });

    if (existingSeries) return res.status(401).send("Movie Already Exists");

    const series = new Series({
      title,
      rating,
      runtime,
      released,
      ended,
      schedule,
      genre,
      synopsis,
      imageurl,
      language,
      cast,
      type,
      status,
      url,
    });
    series.save();
    return res.status(201).json({ message: "OK", id: series._id.string });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "ERROR", cause: e.message });
  }
};

const getAllSeries = async (req, res, next) => {
  try {
    series = await Series.find();
    return res.status(200).json({ message: "OK", series: series });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "ERROR", cause: e.message });
  }
};

const getSeriesById = async (req, res, next) => {
  let series;

  let { id } = req.body;
  id = id.toString();

  try {
    series = await Series.findById(id);
    return res.status(200).json({ message: "OK", series: series });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "ERROR", cause: e.message });
  }
};

module.exports = { addSeries, getAllSeries, getSeriesById };
