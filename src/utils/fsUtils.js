const fs = require('fs').promises;
const { resolve } = require('path');

const caminhoTalker = '../talker.json';

async function readTalkerFile() {
  const path = resolve(__dirname, caminhoTalker);
  // tratamento de excessão com try e catch
  try {
    const data = await fs.readFile(path);
    const listaPessoas = JSON.parse(data);
    return listaPessoas;
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

module.exports = { readTalkerFile };