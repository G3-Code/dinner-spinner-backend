const express = require("express");
const axios = require("axios");
const router = express.Router();

//GET ALL ACTIONS
router.get("/:latitude/:longitude/:radius/:limit", async (req, res) => {
  //:latitude/:longitude/:radius/:limit
  console.log("RESTAURANTS-ROUTER:: WITHIN RESTAURANTS /api/restaurants");
  //var paramsValue = `term:"restaurants", latitude:"33.1601807", longitude:"-96.70983"`;
  var radius = 5 * 1610;
  var limit = 10;
  radius = req.params.radius ? req.params.radius * 1610 : radius;
  limit = req.params.limit ? req.params.limit : limit;
  let paramsObj = {
    term: "restaurants",
    latitude: req.params.latitude,
    longitude: req.params.longitude,
    radius: radius,
    limit: limit
  };
  try {
    const restaurants = await axios.get(process.env.YELP_BASE_URL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      params: paramsObj
    });
    console.log(restaurants.data.businesses.length);
    res.status(200).json(restaurants.data);
    if (restaurants.data.businesses.length > 0) {
      res.status(200).json(restaurants.data.businesses);
    } else {
      res
        .status(400)
        .json({ ERROR_MESSAGE: "There are no restaurants to display" });
    }
  } catch (error) {
    res.status(500).json({
      ERROR_MESSAGE: "There was an error while retrieving the restaurants."
    });
    console.log(error);
  }
});
module.exports = router;
