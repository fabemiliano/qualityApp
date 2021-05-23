const express = require('express');
const { getAllLoginData } = require('../../controllers/login')

const router = express.Router();

router.get('/', async (req, res) => {
  const loginData = await getAllLoginData()
  res.send(loginData)
})

module.exports = router;