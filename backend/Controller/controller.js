const express = require("express");
const bcrypt = require("bcrypt");
const Post = require("../Modal/Post");
const jwt = require("jsonwebtoken");
const upload = require("../multerconfiguration/multerConfiguration");
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

// In-memory user storage (replace with database in production)
// let users = [];

// // Upload user image
// const uploadImage = (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const file = req.file;

//     if (!file) {
//       return res.status(400).send("No file uploaded");
//     }

//     // Find user by ID
//     const user = users.find((u) => u.id === userId);
//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     // Update user profile with image URL
//     user.profileImageUrl = `/uploads/${file.filename}`;

//     return res.status(201).send("File uploaded successfully");
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     return res.status(500).send("Internal Server Error");
//   }
// };

// const users = []; // In-memory user storage (replace with database in production)

// Upload user image
const uploadImage = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await Post.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded");
    }

    const imagePath = file.filename;
    user.avatar = imagePath;

    await user.save();
    return res.status(201).send("File uploaded successfully");
  } catch (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).send("Multer Error: " + error.message);
    }

    console.error("Error uploading file:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  registerUser,
  loginUser,
  uploadImage,
};
