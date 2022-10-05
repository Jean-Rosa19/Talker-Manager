const fs = require('fs').promises;
const { resolve } = require('path');

const caminhoTalker = '../talker.json';

async function readTalkerFile() {
  const path = resolve(__dirname, caminhoTalker);
  // tratamento de excessão com try e catch
  try {
    const data = await fs.readFile(path);
    const peopleList = JSON.parse(data);
    return peopleList;
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

async function findPersonID(idPerson) {
  const listaPessoas = await readTalkerFile();
  const pessoa = listaPessoas.find(({ id }) => id === Number(idPerson));
    return pessoa;
}

module.exports = { readTalkerFile, findPersonID };