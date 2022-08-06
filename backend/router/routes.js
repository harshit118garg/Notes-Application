const express = require("express");
const { registerUser, getAllNotes, getSingleNote, authUser } = require("../controllers/userControllers");
const router = new express.Router();
const notes = require("../data/notes");
const users = require("../data/users");

router.get("/", (req, res) => {
  res.send(`API is up and running`);
});

router.get("/api/notes", getAllNotes);

router.get("/api/notes/:id", getSingleNote);

router.get("/api/all/users", (req, res) => {
  res.json(users);
});

router.post("/api/users", registerUser);
router.post("/api/users/login", authUser);

module.exports = router;
