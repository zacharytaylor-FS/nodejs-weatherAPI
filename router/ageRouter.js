const express = require("express");
const getAge = require("../services/ageService");
const ageRouter = express.Router();

ageRouter.get("/", (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  getAge(name)
    .then((result) => {
      console.log(result.data);
      res.status(200).json({
        name: req.body.name,
        age: result.data.age,
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

module.exports = ageRouter;
