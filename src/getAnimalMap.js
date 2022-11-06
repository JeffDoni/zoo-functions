const { species } = require('../data/zoo_data');
// Desenvolvido na sala de estudos em uma colaboração InterTribo
const localizando = (regiao) => species.filter((element) => element.location === regiao)
  .map((element) => element.name);

// const objanimais = () => {
//   const filtraResidents = species.map((element) => element.residents.map((names)=> names.name) )
//   return filtraResidents;
// };

// console.log(objanimais());

function getAnimalMap(options) {
  const objeto = {
    NE: localizando('NE'),
    NW: localizando('NW'),
    SE: localizando('SE'),
    SW: localizando('SW'),
  };
  if (options === undefined || options.sex === 'female') {
    return objeto;
  }
}

module.exports = getAnimalMap;
