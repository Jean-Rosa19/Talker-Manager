const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;