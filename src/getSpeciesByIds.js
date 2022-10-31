const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((animais) => ids.includes(animais.id));

console.log(getSpeciesByIds('tigersId'));
module.exports = getSpeciesByIds;
