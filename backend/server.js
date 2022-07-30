const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send(`API is up and running`);
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === parseInt(req.params.id));
  res.json(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running at ${PORT}`));
