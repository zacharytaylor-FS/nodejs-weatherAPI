const express = require('express');
const {getNationality,getNationalityById} = require('../services/nationalizeService');
const nationalizeRouter = express.Router();

nationalizeRouter.get('/',(req, res, next) => {
  const name = req.body.name;
  const nationality = req.body.nationality
  getNationality(name)
    .then(result => {
      console.log(result.data)
      res.status(200).json({
        name: req.body.name,
        nationality: result.data.nationality
      })
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
nationalizeRouter.get('/:id',(req, res, next) => {
  const name = req.body.name;
  const nationality = req.body.nationality
  getNationality(name)
    .then(result => {
      console.log(result.data)
      res.status(200).json({
        name: req.body.name,
        nationality: result.data.nationality
      })
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

// nationalizeRouterById.get('/:id', (req, res, next) => {

// })

module.exports = nationalizeRouter