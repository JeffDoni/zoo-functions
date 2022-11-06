const { employees, species } = require('../data/zoo_data');

const funcionarios = () => employees.map((employee) => {
  const animais = species.filter((animal) => {
    if (employee.responsibleFor.includes(animal.id)) {
      return true;
    }
    return false;
  });
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animais.map((specie) => specie.name),
    locations: animais.map((specie) => specie.location),
  };
});

const getEmployeesCoverage = (dado) => {
  if (dado === undefined) {
    return funcionarios();
  }
  const { name, id } = dado;
  if (name !== undefined) {
    return funcionarios().find((funcionario) => funcionario.fullName.includes(name));
  }
  const confirmaId = funcionarios().find((funcionario) => funcionario.id === id);
  if (confirmaId !== undefined) {
    return confirmaId;
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
