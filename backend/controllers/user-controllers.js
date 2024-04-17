const User = require("../models/User");
const bcrypt = require("bcrypt");
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
module.exports = { userSignup, getAllUser, userLogin };
