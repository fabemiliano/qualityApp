
const { Login } = require('../models');

const getAllLoginData = async () => {
  const loginData = await Login.findAll()
  return loginData
}

module.exports = {getAllLoginData};