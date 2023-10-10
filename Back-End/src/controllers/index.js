const { createPregunta, getIdPregunta, findPreguntas, putPregunta, deletePregunta } = require('./pregunta.controller');
const { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard } = require('./infoCard.controller');
const { createSurvey, getSurveyId, findSurveys, updateSurvey, deleteSurvey } = require('./survey.controller');
const { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta } = require('./respuesta.controller');
const { getUserId, findUsers, updateUser, deleteUser } = require('./user.controller');

module.exports = {
  preguntaController: { createPregunta, getIdPregunta, findPreguntas, putPregunta, deletePregunta },
  infoCardController: { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard },
  surveyController: { createSurvey, getSurveyId, findSurveys, updateSurvey, deleteSurvey },
  respuestaController: { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta },
  userController: { getUserId, findUsers, updateUser, deleteUser },
};
