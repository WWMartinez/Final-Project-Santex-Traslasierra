const { createInfoCard, getIdInfoCard, putInfoCard, deleteInfoCard, findInfoCards } = require('./infoCard.ser');
const { createEncuesta, getIdEncuesta, putEncuesta, deleteencuesta, findEncuesta } = require('./encuesta.ser');

module.exports = {
  infoCardService: { createInfoCard, getIdInfoCard, putInfoCard, deleteInfoCard, findInfoCards },
  encuestaService: { createEncuesta, getIdEncuesta, putEncuesta, deleteencuesta, findEncuesta },
  
};
