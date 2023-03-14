const axios = require('axios');
require('dotenv').config();


const options = {
  method: 'GET',
  url: `${process.env.URL}`,
  params: {q: `${process.env.CITY_NAME}`},
  headers: {
    'X-RapidAPI-Key': `${process.env.API_KEY}`,
    'X-RapidAPI-Host': `${process.env.HOST}`
  }
};
const getCurrent = async (location) => {
  console.log(`Real Current Weather Service`)
  return await axios.request(options).get(`${process.env.URL}${location}`)
}

module.exports = getCurrent;