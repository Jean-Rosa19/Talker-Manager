const express = require('express');

const router = express.Router();
const { readTalkerFile } = require('../utils/fsUtils');

const HTTP_OK_STATUS = 200;

router.get('/', async (_req, res) => {
  const peopleList = await readTalkerFile();
  res.status(HTTP_OK_STATUS).json(peopleList);
});

module.exports = router;