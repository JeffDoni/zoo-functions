const data = require('../data/zoo_data');

// Realizada com cooperação intertribos na sala de estudos

const { species } = data;
const localizacao = species.reduce((acc, curr) => {
  if (!acc.includes(curr.location)) {
    acc.push(curr.location);
    return acc;
  }
  return acc;
}, []);

const retorno = () => localizacao.reduce((acc1, location) => {
  const localizacaoEspecie = species.reduce((acc2, specie) => {
    if (specie.location === location) {
      acc2.push(specie.name);
      return acc2;
    }
    return acc2;
  }, []);
  const captura = acc1;
  captura[location] = localizacaoEspecie;
  return captura;
}, {});

const organizar = (array, sorted) => {
  if (sorted) {
    return array.sort();
  }
  return array;
};

const getSex = (residents, sex, sorted) => {
  if (!sex) {
    const Residents = residents.map((element) => element.name);
    return organizar(Residents, sorted);
  }
  const Residents = residents.reduce((acc, curr) => {
    if (curr.sex === sex) {
      acc.push(curr.name);
      return acc;
    }
    return acc;
  }, []);
  return organizar(Residents, sorted);
};

const localizacaoeNomes = (sorted, sex) => localizacao.reduce((acc1, location) => {
  const arraySpeciesByLocation = species.reduce((acc2, specie) => {
    if (specie.location === location) {
      acc2.push({ [specie.name]: getSex(specie.residents, sex, sorted) });
      return acc2;
    }
    return acc2;
  }, []);
  const captura = acc1;
  captura[location] = arraySpeciesByLocation;
  return captura;
}, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return retorno();
  }
  if (options.includeNames) {
    return localizacaoeNomes(options.sorted, options.sex);
  }
};

module.exports = getAnimalMap;
