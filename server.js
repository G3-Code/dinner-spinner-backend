const express = require("express");
const restaurantRouter = require("./routers/restaurantRouter");
const server = express();
server.use(express.json());

const cors = require("cors");
server.use(cors());

server.get("/", (req, res) => {
  res.send(`<h2>Ready, set go! for Hackathon!!</h2>`);
});

server.use("/api/restaurants", restaurantRouter);
module.exports = server;
