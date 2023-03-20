const express = require("express");
const userService = require("../services/userService");
const router = express.Router();

router.get("/", (req, res, next) => {
  // const location = req.body.location;
  // console.log(location)
  userService()
    .then((results) => {
      console.log(results.data);
      res.status(200).json(results.data);
    })
    .catch((error) => {
      res.status(501).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    });
});

module.exports = router;
