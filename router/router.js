const express = require("express");
const userService = require("../services/userService");
const router = express.Router();

router.get("/", (req, res, next) => {
  // const location = req.body.location;
  // console.log(location)
  userService()
    .then((users) => {
      console.log(users.data);
      res.status(200).json({
        message: "GET ALL users",
        users: users.data.results
      });
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


router.get("/:gender", (req, res, next) => {

})
module.exports = router;
