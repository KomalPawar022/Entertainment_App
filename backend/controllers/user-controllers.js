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
    return res.status(201).json({ message: "OK", user: user });
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
    return res.status(200).json({ message: "Ok", user: user });
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
  const { email } = req.body;
  if (req.file) {
    let { id } = await User.findOne({ email });
    console.log(id);
    const user = await User.findByIdAndUpdate(
      id,
      { picture: req.file.path },
      { upsert: true, new: true },
    );

    console.log("Image uploaded successfully:", req.file.path);
    res.json({ message: "Image uploaded successfully!", path: req.file.path });
  } else {
    console.error("Error uploading image");
    res.status(400).json({ message: "Error uploading image" });
  }
};

const addBookmark = async (req, res, next) => {
  try {
    const { id, bookmark } = req.body;
    console.log({ id: bookmark.id, type: bookmark.id });
    const user = await User.findById(id);
    user.bookmarks.push(bookmark);
    user.save();
    return res.status(200).json({ message: "Ok" });
  } catch (e) {
    return res.status(200).json({ message: "Error", cause: e.message });
  }
};

module.exports = {
  userSignup,
  getAllUser,
  userLogin,
  addName,
  addPicture,
  upload,
  addBookmark,
};
