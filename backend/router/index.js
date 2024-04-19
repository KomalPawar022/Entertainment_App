const express = require("express");
const appRouter = express.Router();
const userRoutes = require("./user-routes");
const movieRoutes = require("./movie-routes");
const seriesRoutes = require("./series-router");
appRouter.use("/user", userRoutes);
appRouter.use("/movie", movieRoutes);
appRouter.use("/series", seriesRoutes);
module.exports = appRouter;
