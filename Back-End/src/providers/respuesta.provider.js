const { Op } = require("sequelize");
const RespuestaModel = require('../models/respuesta.model');

// CREATE INFOCARD
const createRespuesta = async (respuestaOptions) => {
  try {
    const newRespuesta = await RespuestaModel.create(respuestaOptions);
    return newRespuesta;
  } catch (error) {
    throw error;
  }
};

// GET INFO CARD BY ID
const getIdRespuesta = async (id) => {
  try {
    const respuesta = await RespuestaModel.findByPk(id, { include: [{ all: true }] });
    if (respuesta) {
      return respuesta;
    } else {
      throw new Error("respuesta not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET INFOCARDs
const findRespuestas = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const respuestas = await respuestaModel.findAll(options);

    if (respuestas) {
      return respuestas;
    } else {
      return {};
    }
  } catch (error) {
    throw error;
  }
};

// UPDATE INFO CARD BY ID
const putRespuesta = async (respuestaId, respuestaOptions) => {
  try {
    await getIdRespuesta(respuestaId);
    const [numRowsUpdated] = await RespuestaModel.update(respuestaOptions, {
      where: { id: respuestaId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return RespuestaModel.findByPk(respuestaId);
  } catch (error) {
    throw error;
  }
};

// DELETE INFOCARD
const deleteRespuesta = async (respuestaId) => {
  try {
    return respuestaModel.destroy({ where: { id: respuestaId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createRespuesta,
  getIdRespuesta,
  findRespuestas,
  putRespuesta,
  deleteRespuesta
};