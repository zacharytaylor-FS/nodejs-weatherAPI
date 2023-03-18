const axios = require('axios');
require('dotenv').config();

const getNationalize = async (name) => {
  console.log('Real Nationalize Service');
  return await axios.get(`${process.env.nationalityURL}${name}`);
}

module.exports = getNationalize