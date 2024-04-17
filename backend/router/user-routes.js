const express = require("express");
const userRoutes = express.Router();
const {
  userSignup,
  getAllUser,
  userLogin,
} = require("../controllers/user-controllers");
userRoutes.post("/signup", userSignup);
userRoutes.post("/login", userLogin);
userRoutes.get("/", getAllUser);
module.exports = userRoutes;
