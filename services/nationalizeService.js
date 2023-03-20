const axios = require('axios');
require('dotenv').config();

const getNationality = async (name) => {
  console.log('Real Nationalize Service');
  return await axios.get(`${process.env.nationalityURL}${name}`);
}
const getNationalityByID = async (id) => {
  console.log('Real Nationalize Service');
  return await axios.get(`${process.env.nationalityURL}${id}`);
}

module.exports = {getNationality, getNationalityByID}