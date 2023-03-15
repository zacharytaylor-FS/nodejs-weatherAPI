const axios = require('axios');
require('dotenv').config()

const getGender = async (name) => {
  console.log('Real Gender Service');
  return await axios.get(`${process.env.genderURL}${name}`);
}

module.exports = getGender