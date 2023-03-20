const axios = require('axios');
require('dotenv').config()

const getGender = async () => {
  console.log('Real Gender Service');
  return await axios.get(`${process.env.genderBATCHURL}`);
}
const getGenderById= async (id) => {
  console.log('Real Batch Gender Service')
  return await axios.get(`${process.env.genderURL}${id}`);

}
module.exports = { getGender, getGenderById }