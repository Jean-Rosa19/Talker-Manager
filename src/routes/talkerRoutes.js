const express = require('express');

const router = express.Router();
const {
  readTalkerFile,
  findPersonById,
  writeNewPerson,
} = require('../utils/fsUtils');

const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/ValidateRate');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;

router.get('/', async (_req, res) => {
  const personsList = await readTalkerFile();
  res.status(HTTP_OK_STATUS).json(personsList);
});

router.post(
  '/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const newPerson = req.body;
    const newPersonWithId = await writeNewPerson(newPerson);
    res.status(HTTP_CREATED_STATUS).json(newPersonWithId);
  },
);

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const person = await findPersonById(id);
  if (!person) {
    return res
      .status(HTTP_NOT_FOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(HTTP_OK_STATUS).json(person);
});
module.exports = router;