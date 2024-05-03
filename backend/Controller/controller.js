const express = require("express");
const bcrypt = require("bcrypt");
const Post = require("../Modal/Post");
const jwt = require("jsonwebtoken");
const router = express.Router();

const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new Post({
    username,
    password: hashedPassword,
    email,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }
  try {
    const user = await Post.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "invalid email" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "invalid password" });
    }
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      "12345!@#$%qwert",
      { expiresIn: "2h" }
    );
    user.tokens = token;
    await user.save();
    res.json({ token, test: "test" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  registerUser,
  loginUser,
};
