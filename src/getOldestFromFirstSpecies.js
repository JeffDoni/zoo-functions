const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const especie = employees.find((servidor) => servidor.id === id).responsibleFor[0];
  const especieId = species.find((element) => element.id === especie);
  const residente = especieId.residents;
  const maisVelho = residente.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  const array = [];
  array.push(maisVelho.name, maisVelho.sex, maisVelho.age);
  return array;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
