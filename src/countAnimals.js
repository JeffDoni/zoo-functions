const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const selecionaEspecie = species.find((element) => element.name === animal.specie).residents;
  if (animal.sex) {
    return selecionaEspecie.filter((element) => element.sex === animal.sex).length;
  } return selecionaEspecie.length;
};

console.log(countAnimals());
module.exports = countAnimals;
