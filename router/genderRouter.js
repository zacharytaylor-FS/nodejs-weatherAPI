 const express = require('express');
 const {getGender, getGenderById} = require('../services/genderService')
 const genderRouter = express.Router();

 genderRouter.get('/', (req, res, next) => {
   const gender = req.body.gender;
   getGender()
   .then(result => {
      console.log(result.data);
      res.status(200).json({
        // name: result.data.name,
        gender: result.data.gender,
        // probability: result.data.probability,
        // count: result.data.count
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
 
 genderRouter.get('/:id', (req, res, next) => { 
   const gender = req.body.gender;
   getGenderById(req.params.id)
   .then(result => {
      console.log(result.data);
      res.status(200).json({
        // name: result.data.name,
        gender: result.data.gender,
        // probability: result.data.probability,
        // count: result.data.count
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

 genderRouter.post('/', (req, res, next) => {
  getGender()
    .then(result => {
      console.log(result.data)
      res.status(201).json(result.data)
    })
    .catch(error => {
      res.status(501).json({
        error: {
          message: error.message,
          status: error.status
        }
      })
    });
 })
 
 genderRouter.post('/:id ', (req, res, next) => {
  getGender(req.params.id)
    .then(result => {
      console.log(result.data)
      res.status(201).json(result.data.message)
    })
    .catch(error => {
      res.status(501).json({
        error: {
          message: error.message,
          status: error.status
        }
      })
    });
 })
 module.exports = genderRouter