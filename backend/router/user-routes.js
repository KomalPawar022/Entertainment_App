const express = require("express");
const userRoutes = express.Router();
const {
  userSignup,
  getAllUser,
  userLogin,
  addName,
  addPicture,
} = require("../controllers/user-controllers");
const upload = require("../controllers/upload");
userRoutes.post("/signup", userSignup);
userRoutes.post("/login", userLogin);
userRoutes.get("/", getAllUser);
userRoutes.put("/addName", addName);
userRoutes.put("/upload-image", upload.single("image"), addPicture);

module.exports = userRoutes;
