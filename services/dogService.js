const axios = require('axios');
require('dotenv').config();

const getDogImage = async () => {
  console.log(`Real Dog Service`);
  return await axios.get(`${process.env.dogURL}`)
}

module.exports =  getDogImage 