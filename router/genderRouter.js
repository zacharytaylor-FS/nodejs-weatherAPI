 const express = require('express');
 const getGender = require('../services/genderService')
 const genderRouter = express.Router();

 genderRouter.post('/', (req, res, next) => {
   const name = req.body.name;
   console.log(name)
   getGender(name)
   .then(result => {
      console.log(result.data);
      res.status(200).json({
        name: result.data.name,
        gender: result.data.gender,
        probablity: result.data.probablity,
        count: result.data.count,
      })
    })
    .catch(error => {
      res.status(501).json({
        error: {
          message: error.message,
          status: error.status,
        }
      })
    })
 })

 module.exports = genderRouter