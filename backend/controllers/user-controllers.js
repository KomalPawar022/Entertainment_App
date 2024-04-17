const User = require("../models/User");
const bcrypt = require("bcrypt");
const userSignup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const existingUser = User.findOne({ email });
    console.log("existingUser", existingUser);
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

module.exports = { userSignup, getAllUser };
