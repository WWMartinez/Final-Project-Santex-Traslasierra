const { Op } = require("sequelize");
const EncuestaModel = require('../models/encuesta.model');

// CREATE encuesta
const createEncuesta = async (encuestaOptions) => {
  try {
    const newEncuesta = await EncuestaModel.create(encuestaOptions);
    return newEncuesta;
  } catch (error) {
    throw error;
  }
};

// GET INFO CARD BY ID
const getIdEncuesta = async (id) => {
  try {
    const encuesta = await EncuestaModel.findByPk(id, { include: [{ all: true }] });
    if (encuesta) {
      return encuesta;
    } else {
      throw new Error("encuesta not found");
    }
  } catch (error) {
    throw error;
  }
};

// UPDATE INFO CARD BY ID
const putEncuesta = async (encuestaId, encuestaOptions) => {
  try {
    await getIdEncuesta(encuestaId);
    const [numRowsUpdated] = await EncuestaModel.update(encuestaOptions, {
      where: { id: encuestaId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return EncuestaModel.findByPk(encuestaId);
  } catch (error) {
    throw error;
  }
};

// DELETE encuesta
const deleteEncuesta = async (encuestaId) => {
  try {
    return EncuestaModel.destroy({ where: { id: encuestaId } });
  } catch (error) {
    throw error;
  }
};

// GET encuestaS
const findEncuestas = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const encuestas = await EncuestaModel.findAll(options);

    if (encuestas) {
      return encuestas;
    } else {
      return {};
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEncuesta,
  getIdEncuesta,
  putEncuesta,
  deleteEncuesta,
  findEncuestas
};