const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');

router.post('/', emailValidation, passwordValidation, (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;