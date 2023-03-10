const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((element) => element.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees.filter((element) => element.managers.includes(managerId))
      .map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
