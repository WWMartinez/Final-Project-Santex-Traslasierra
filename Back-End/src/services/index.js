const {
  validateInfoCard,
  createInfoCard,
  getIdInfoCard,
  putInfoCard,
  deleteInfoCard,
  findInfoCards,
} = require("./infoCard.ser");
const {
  validateEncuesta,
  createEncuesta,
  getIdEncuesta,
  putEncuesta,
  deleteEncuesta,
  findEncuestas,
} = require("./encuesta.ser");
const {
  createRespuesta,
  getIdRespuesta,
  findRespuestas,
  putRespuesta,
  deleteRespuesta,
} = require("./respuesta.ser");
const {
  validateUserId,
  validateUser,
  createUser,
  getIdUser,
  findUsers,
  putUser,
  deleteUser,
} = require("./user.ser");
const {
  validatePregunta,
  createPregunta,
  getIdPregunta,
  findPreguntas,
  putPregunta,
  deletePregunta,
} = require("./pregunta.ser");

module.exports = {
  infoCardService: {
    validateInfoCard,
    createInfoCard,
    getIdInfoCard,
    putInfoCard,
    deleteInfoCard,
    findInfoCards,
  },
  preguntaService: {
    validatePregunta,
    createPregunta,
    getIdPregunta,
    findPreguntas,
    putPregunta,
    deletePregunta,
  },
  encuestaService: {
    validateEncuesta,
    createEncuesta,
    getIdEncuesta,
    putEncuesta,
    deleteEncuesta,
    findEncuestas,
  },
  respuestaService: {
    createRespuesta,
    getIdRespuesta,
    findRespuestas,
    putRespuesta,
    deleteRespuesta,
  },
  userService: {
    validateUserId,
    validateUser,
    createUser,
    getIdUser,
    findUsers,
    putUser,
    deleteUser,
  },
};
