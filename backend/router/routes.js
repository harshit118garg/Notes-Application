const express = require("express");
const router = new express.Router();
const notes = require("../data/notes");

router.get("/", (req, res) => {
  res.send(`API is up and running`);
});

router.get("/api/notes", (req, res) => {
  res.json(notes);
});

router.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === parseInt(req.params.id));
  res.json(note);
});

module.exports = router;
