const express = require("express");
const userRoutes = express.Router();
const { userSignup, getAllUser } = require("../controllers/user-controllers");
userRoutes.post("/signup", userSignup);
userRoutes.get("/", getAllUser);
module.exports = userRoutes;
