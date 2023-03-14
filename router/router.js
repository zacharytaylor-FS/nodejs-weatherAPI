const express = require('express');
const getCurrent = require('../services/currentService');
const router = express.Router();

router.post('/', (req, res, next) => {
  const location = req.body.location;
  console.log(location)
  getCurrent(location)
    .then(result => {
      console.log(result.data);
      req.status(200).json({
        text: result.data.contents.text,
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

module.exports = router