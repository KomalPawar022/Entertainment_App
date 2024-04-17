const express = require("express");
const appRouter = express.Router();
const userRoutes = require("./user-routes");
appRouter.use("/user", userRoutes);
module.exports = appRouter;
