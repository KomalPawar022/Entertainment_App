const express = require("express");
const seriesRoutes = express.Router();
const {
  addSeries,
  getAllSeries,
  getSeriesById,
} = require("../controllers/series-controller");
seriesRoutes.post("/addSeries", addSeries);
seriesRoutes.post("/getSeriesById", getSeriesById);
seriesRoutes.get("/", getAllSeries);

module.exports = seriesRoutes;
