const fs = require('fs').promises;
const { resolve } = require('path');

const TALKER_FILE_PATH = '../talker.json';
const resolvedPath = resolve(__dirname, TALKER_FILE_PATH);

async function readTalkerFile() {
  try {
    const data = await fs.readFile(resolvedPath);
    const personsList = JSON.parse(data);
    return personsList;
  } catch (error) {
    console.error(`Error at reading file: ${error}`);
  }
}
async function findPersonById(personId) {
  const personsList = await readTalkerFile();
  const person = personsList.find(({ id }) => id === Number(personId));
  return person;
}

async function writeNewPerson(newPerson) {
  try {
    const oldPersons = await readTalkerFile();
    const newPersonWithId = { id: oldPersons.length + 1, ...newPerson };
    const allPersons = JSON.stringify([...oldPersons, newPersonWithId]);
    await fs.writeFile(resolvedPath, allPersons);
    return newPersonWithId;
  } catch (error) {
    console.error(`Error writing in file: ${error}`);
  }
}

async function editPersonById(newInformations, personId) {
  try {
    const allPersons = await readTalkerFile();
    const index = allPersons.findIndex(({ id }) => id === Number(personId));
    const editedPerson = { ...allPersons[index], ...newInformations };
    allPersons.splice(index, 1, editedPerson);
    await fs.writeFile(resolvedPath, JSON.stringify(allPersons));
    return editedPerson;
  } catch (error) {
    console.error(`Error writing in file: ${error}`);
  }
}

module.exports = {
  readTalkerFile,
  findPersonById,
  writeNewPerson,
  editPersonById,
};