const axios = require('axios')
require('dotenv').config();

const getAge = async (name) => {
  console.log('Real Age Service');
  return await axios.get(`${process.env.ageURL}${name}`)
}

module.exports = getAge