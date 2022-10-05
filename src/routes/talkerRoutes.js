const express = require('express');

const router = express.Router();
const { readTalkerFile, findPersonID } = require('../utils/fsUtils');

router.get('/', async (_req, res) => {
  const peopleList = await readTalkerFile();
  res.status(200).json(peopleList);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const pessoa = await findPersonID(id);
  if (!pessoa) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } 
    res.status(200).json(pessoa);
});
module.exports = router;