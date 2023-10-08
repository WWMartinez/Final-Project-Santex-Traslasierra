const { loginAdmin, newAdmin } = require("./admin.controller");
const { loginEncuestador, newEncuestador } = require('./encuestador.controller');
const { createPregunta, getIdPregunta, findPreguntas, putPregunta, deletePregunta } = require('./pregunta.controller');
const { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard } = require('./infoCard.controller');
const { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta } = require('./encuesta.controller');
const { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta } = require('./respuesta.controller');
const { getIdUser, findUsers, putUser, deleteUser } = require('./user.controller');


module.exports = {
  
  adminController: { loginAdmin, newAdmin },
  encuestadorController: { loginEncuestador, newEncuestador },
  preguntaController: { createPregunta, getIdPregunta, findPreguntas, putPregunta, deletePregunta },
  infoCardController: { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard },
  encuestaController: { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta },
  respuestaController: { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta },
  userController: { getIdUser, findUsers, putUser, deleteUser },
};
