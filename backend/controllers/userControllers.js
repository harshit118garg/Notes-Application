const notes = require("../data/notes");
const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const getAllNotes = (req, res) => {
  res.json(notes);
};

const getSingleNote = (req, res) => {
  const note = notes.find((n) => n._id === parseInt(req.params.id));
  res.json(note);
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, pass, profileImg } = req.body;

  const userAlreadyExists = await userModel.findOne({ email });

  if (userAlreadyExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  const newUser = await userModel.create({
    name,
    email,
    pass,
    profileImg,
  });

  if (newUser) {
    res.status(201);
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      profileImg: newUser.profileImg,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("OOPS! Something goes wrong");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, pass} = req.body;

  const user = await userModel.findOne({ email });
  const passMatch = await bcrypt.compare(pass, user.pass);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      profileImg: user.profileImg,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email & Password");
  }
});

module.exports = { getAllNotes, getSingleNote, registerUser, authUser };
