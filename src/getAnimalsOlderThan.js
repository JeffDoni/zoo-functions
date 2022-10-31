const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especies = species.filter((animais) => animais.name === animal)[0].residents
    .every((idade) => idade.age >= age);
  return especies;
};

module.exports = getAnimalsOlderThan;
