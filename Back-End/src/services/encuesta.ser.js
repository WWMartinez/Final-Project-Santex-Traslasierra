const { encuestaProvider } = require('../providers');

const createEncuesta = async (encuesta) => {
  return await encuestaProvider.createEncuesta(encuesta);
};

const getIdEncuesta = async (id) => {
  return await encuestaProvider.getIdEncuesta(id);
};

const putEncuesta = async (id, encuesta) => {
  return await encuestaProvider.putEncuesta(id, encuesta);
};

const deleteencuesta = async (id) => {
  return await encuestaProvider.deleteEncuesta(id);
};

const findEncuesta = async (options) => {
  return await encuestaProvider.findEncuesta(options);
};

module.exports = { 
  createEncuesta,
  getIdEncuesta,
  putEncuesta,
  deleteencuesta,
  findEncuesta
};