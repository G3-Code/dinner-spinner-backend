const express = require("express");
const axios = require("axios");
const router = express.Router();

//GET ALL ACTIONS
router.get("/", async (req, res) => {
  console.log("------IN API GET RESTAURANTS--------");
  res.status(200).json({ message: "Restaurants" });
  try {
    const restaurants = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: `Bearer 0wtJSr_sSSCX8U-GbdmeKFYfipM8Xa2vNPn1GSbXe5B4Alhzp8sX64uvSTzAOOPquRWl54Cw6kugm6_TBD1Q2CaoX0uNWVUG6NOaLjpGhFhCxUbHoKlrq8DrXkOGXXYx`
        },
        params: {
          term: "restaurants",
          latitude: "33.1601807",
          longitude: "-96.70983"
        }
      }
    );
    console.log(restaurants.data.businesses.length);
    // if (actions.length > 0) {
    //   res.status(200).json(actions);
    // } else {
    //   res
    //     .status(400)
    //     .json({ ERROR_MESSAGE: "There are no actions to display" });
    // }
  } catch (error) {
    // res.status(500).json({
    //   ERROR_MESSAGE: "There was an error while retrieving the actions."
    // });
    console.log(error);
  }
});
module.exports = router;
