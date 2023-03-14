const express = require('express');

const app = express();

//* use middleware
app.use(express.json());

//* http://localhost:80
app.get('/weather', (req, res, next) => {
  res.status(200).json({message: `Service is up`})
})

// Todo router middle
app.use('/current', router)

// Todo add middleware to handle errors and bad url paths
app.use((req, res, next) => {
  const error = new Error("URL NOT FOUND");
  error.status = 404;
  next(error)
});


app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      method: req.method,
      status: error.status,
      message: error.message,
    },
  });
});

module.exports =  app