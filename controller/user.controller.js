const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new Error("All fields required");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already available");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user already exists");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    res.status(400);
    throw new Error("All fileds required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Invalid credintals");
  }

  const encryptpassword = await bcrypt.compare(password, user.password);
  console.log(encryptpassword);
  if (user && encryptpassword) {
    const token = await jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ token });
  } else {
    res.status(401);
    throw new Error("Email or password incorrect");
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = { registerUser, loginUser, currentUser };
