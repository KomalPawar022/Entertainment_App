const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const appRouter = require("./router/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
// app.use("/api", (req, res) => {
//   res.status(200).json({ message: "Hello World!" });
// });

module.exports = app;
