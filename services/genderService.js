const axios = require("axios");
require("dotenv").config();

const getGender = async () => {
  console.log("Real Batch Gender Service");
  return await axios.get(`${process.env.genderBATCHURL}`);
};
const getGenderByName = async (name) => {
  console.log("Real Gender Service");
  return await axios.get(`${process.env.genderURL}${name}`);
};
module.exports = { getGender, getGenderByName };
