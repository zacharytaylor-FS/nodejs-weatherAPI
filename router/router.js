const express = require('express');
const dogService = require('../services/dogService');
const router = express.Router();

router.get('/', (req, res, next) => {
  // const location = req.body.location;
  // console.log(location)
  dogService()
    .then(result => {
      console.log(result.data.message)
      res.status(200).json(result.data.message)
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

module.exports = router