const { species, hours } = require('../data/zoo_data');

const especies = (dia) => {
  const exibicao = species.filter(({ availability }) => availability.includes(dia));
  return exibicao.map((animal) => animal.name);
};

const diasSelecionados = () => {
  const objeto = {};
  const daysWeek = Object.keys(hours);
  daysWeek.forEach((dias) => {
    if (dias === 'Monday') {
      objeto.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      objeto[dias] = {
        officeHour: `Open from ${hours[dias].open}am until ${hours[dias].close}pm`,
        exhibition: especies(dias),
      };
    }
  });
  return objeto;
};

const diasDaSemana = (dia) => {
  if (dia === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const dias = Object.keys(hours);
  if (dias.includes(dia)) {
    return { [dia]: {
      officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
      exhibition: especies(dia),
    },
    };
  }
  return dia;
};

const getSchedule = (scheduleTarget) => {
  const diasemana = diasDaSemana(scheduleTarget);
  if (typeof diasemana === 'object') return diasemana;
  const result = species.find(({ name }) => name === scheduleTarget);
  if (scheduleTarget === undefined || result === undefined) return diasSelecionados();
  return result.availability;
};

module.exports = getSchedule;
