const express = require("express");

const server = express();
server.use(express.json());

const cors = require("cors");
server.use(cors());

server.get("/", (req, res) => {
  res.send(`<h2>Ready, set go! for Hackathon!!</h2>`);
});

module.exports = server;
