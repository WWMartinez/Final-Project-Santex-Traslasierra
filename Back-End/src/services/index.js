const { createInfoCard, getIdInfoCard, putInfoCard, deleteInfoCard, findInfoCards } = require('./infoCard.ser');
const { createEncuesta, getIdEncuesta, putEncuesta, deleteEncuesta, findEncuestas } = require('./encuesta.ser');
const { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta } = require('./respuesta.ser');
const { createUser, getIdUser, findUsers, putUser, deleteUser } = require('./user.ser');

module.exports = {
  infoCardService: { createInfoCard, getIdInfoCard, putInfoCard, deleteInfoCard, findInfoCards },
  encuestaService: { createEncuesta, getIdEncuesta, putEncuesta, deleteEncuesta, findEncuestas },
  respuestaService: { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta },
  userService: { createUser, getIdUser, findUsers, putUser, deleteUser },
};
