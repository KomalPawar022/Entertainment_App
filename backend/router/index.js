const express = require("express");
const appRouter = express.Router();
const userRoutes = require("./user-routes");
const movieRoutes = require("./movie-routes");
appRouter.use("/user", userRoutes);
appRouter.use("/movie", movieRoutes);
module.exports = appRouter;
