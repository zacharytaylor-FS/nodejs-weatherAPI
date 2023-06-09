const express = require("express");
const { getGender, getGenderByName } = require("../services/genderService");
const genderRouter = express.Router();

genderRouter.get("/", (req, res, next) => {
  // const gender = req.body.gender;
  getGender()
    .then((result) => {
      console.log(result.data);
      res.status(200).json({
        data: result.data[0],
       
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

genderRouter.get("/byName/:name", (req, res, next) => {
const name = req.params.name
  getGenderByName(name)
    .then((result) => {
      console.log(result.data);
      res.status(200).json({
        result:result.data,
        data:result.data
      
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

genderRouter.post("/:name/:id", (req, res, next) => {
  const id = parseInt(req.params.id)
  const name = req.params.name;

  getGenderByName(name)
    .then((result) => {
      console.log(result.data);
      res.status(201).json({
        // method: req.method,
        id: ++id,
        data:{
        name: result.data.name,
        count: result.data.count,
        probability: result.data.probability},
        metadata : {
          hostname: req.hostname,
          method: req.method,
          status: req.status,
        }
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

genderRouter.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id)
  const count = req.body.count;
  const gender = req.body.gender;
  const name = req.body.name;
  const probability = req.body.name;
  getGenderById(id)
    .then((result) => {
      console.log(result.data);
      res.status(200).json({
        // method: req.method,
        data:
        {
        id: ++result.data.id,
        name: result.data.name,
        count: result.data.count,
        probability: result.data.probability
        },
        metadata : {
          host: res.host,
          method: req.method,
          status: req.status,
        }
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

genderRouter.delete("/:id ", (req, res, next) => {
  // const id = req.body.id;
  // const name = req.body.name;
  const count = req.body.count
  // const probability = req.body.probability;

  getGenderById(req.params.id)
    .then((result) => {
      console.log(result.data.name);
      res.status(201).json({
        id: id,
        name: res.result.data.name,
        probability: result.data.probability,
        count: result.data.count_id,
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
