const axios = require("axios");
require("dotenv").config();

const getUser = async () => {
  console.log("Real Random User Service");
  return await axios.get(`${process.env.randomUSERURL}`);
};

module.exports = getUser;
