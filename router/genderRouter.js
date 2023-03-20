const express = require("express");
const { getGender, getGenderById } = require("../services/genderService");
const genderRouter = express.Router();

genderRouter.get("/", (req, res, next) => {
  const gender = req.body.gender;
  getGender()
    .then((result) => {
      console.log(result.data);
      res.status(200).json({
        // name: result.data.name,
        gender: result.data.gender,
        // probability: result.data.probability,
        // count: result.data.count
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

genderRouter.get("/gender/:id", (req, res, next) => {
  const gender = req.body.gender;
  getGenderById(req.params.id)
    .then((result) => {
      console.log(result.data);
      res.status(200).json({
        // name: result.data.name,
        gender: result.data.gender,
        // probability: result.data.probability,
        // count: result.data.count
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

genderRouter.post("/", (req, res, next) => {
  const name = req.body.name;
  getGender()
    .then((result) => {
      console.log(result.data);
      res.status(201).json({
        method: req.method,
        data: result.data,
        // id: result.data.id,
        // name: result.data.name,
        // count: result.data.count,
        // probability: result.data.probability
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

genderRouter.post("/:id ", (req, res, next) => {
  // const id = req.body.id;
  // const name = req.body.name;
  // const count = req.body.count;
  // const probability = req.body.probability;

  getGenderById(req.params.id)
    .then((result) => {
      console.log(result.data.name);
      res.status(201).json({
        id: id,
        name: res.result.data.name,
        probability: result.data.probability,
        count: result.data.count,
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
module.exports = genderRouter;
