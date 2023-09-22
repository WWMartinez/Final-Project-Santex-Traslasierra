const { loginAdmin, newAdmin } = require("./admin.controller");
const { loginEncuestador, newEncuestador } = require('./encuestador.controller');
const { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta } = require('./preguntas.controller');
const { createInfoCard } = require('./infoCard.controller');

module.exports = {
  adminController: { loginAdmin, newAdmin },
  encuestadorController: { loginEncuestador, newEncuestador },
  preguntaController: { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta },
  infoCardController: { createInfoCard },
};
