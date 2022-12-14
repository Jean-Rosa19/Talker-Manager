const express = require('express');

const router = express.Router();
const {
  readTalkerFile,
  findPersonById,
  writeNewPerson,
  editPersonById,
  deletePersonById,
  findPersonByName,
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
const HTTP_NO_CONTENT_STATUS = 204;

router.get('/', async (_req, res) => {
  const personsList = await readTalkerFile();
  res.status(HTTP_OK_STATUS).json(personsList);
});

router.get('/search', validateToken, async (req, res) => {
  const { q } = req.query;
  const filteredPersons = await findPersonByName(q);
  res.status(HTTP_OK_STATUS).json(filteredPersons);
});

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

router.use(validateToken);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await deletePersonById(id);
  res.status(HTTP_NO_CONTENT_STATUS).end();
});

router.use(
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
);

router.post('/', async (req, res) => {
  const newPerson = req.body;
  const newPersonWithId = await writeNewPerson(newPerson);
  res.status(HTTP_CREATED_STATUS).json(newPersonWithId);
});

router.put('/:id', async (req, res) => {
  const newInformations = req.body;
  const { id } = req.params;
  const editedPerson = await editPersonById(newInformations, id);
  res.status(HTTP_OK_STATUS).json(editedPerson);
});

module.exports = router;