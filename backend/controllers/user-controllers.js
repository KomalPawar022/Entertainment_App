const User = require("../models/User");
const bcrypt = require("bcrypt");
const express = require("express");
let upload;
const userSignup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) return res.status(401).send("User Already Exists");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    user.save();
    return res.status(201).json({ message: "OK", id: user._id.string });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "ERROR", cause: e.message });
  }
};

const getAllUser = async (req, res, next) => {
  let user;

  try {
    users = await User.find();
    return res.status(200).json({ message: "OK", users: users });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "ERROR", cause: e.message });
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not Registered");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status("403").send("Incorrect Password");
    }
    return res.status(200).json({ message: "Ok", email: user.email });
  } catch (e) {
    return res.status(200).json({ message: "Error", cause: e.message });
  }
};

const addName = async (req, res, next) => {
  try {
    const { email, name, picture } = req.body;
    console.log(picture);
    let { id } = await User.findOne({ email });
    console.log(id);
    const user = await User.findByIdAndUpdate(
      id,
      { name: name },
      { upsert: true, new: true },
    );
    return res.status(200).json({ message: "Ok", user: user });
  } catch (e) {
    return res.status(200).json({ message: "Error", cause: e.message });
  }
};

const addPicture = async (req, res, next) => {
  console.log(req);
  const { picture } = req.body;

  const multer = require("multer");
  const path = require("path");
  const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: picture.name,
  });

  upload = multer({ storage: storage });
  upload.single(picture);

  if (req.picture) {
    console.log("Image uploaded successfully:", req.picture.filename);
    res.json({ message: "Image uploaded successfully!" });
  } else {
    console.error("Error uploading image");
    res.status(400).json({ message: "Error uploading image" });
  }
};
module.exports = {
  userSignup,
  getAllUser,
  userLogin,
  addName,
  addPicture,
  upload,
};
