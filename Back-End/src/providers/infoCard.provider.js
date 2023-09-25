const { Op } = require("sequelize");
const { infoCardModel } = require('../models');
const InfoCardModel = require('../models/infoCard.model');

// CREATE INFOCARD
const createInfoCard = async (infoCardOptions) => {
  try {
    const newInfoCard = await InfoCardModel.create(infoCardOptions);
    return newInfoCard;
  } catch (error) {
    throw error;
  }
};

// GET INFO CARD BY ID
const getIdInfoCard = async (id) => {
  try {
    const infoCard = await InfoCardModel.findByPk(id, { include: [{ all: true }] });
    if (infoCard) {
      return infoCard;
    } else {
      throw new Error("infoCard not found");
    }
  } catch (error) {
    throw error;
  }
};

// UPDATE INFO CARD BY ID
const putInfoCard = async (infoCardId, infoCardOptions) => {
  try {
    await getIdInfoCard(infoCardId);
    const [numRowsUpdated] = await InfoCardModel.update(infoCardOptions, {
      where: { id: infoCardId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return InfoCardModel.findByPk(infoCardId);
  } catch (error) {
    throw error;
  }
};

// DELETE INFOCARD
const deleteInfoCard = async (infoCardId) => {
  try {
    return infoCardModel.destroy({ where: { id: infoCardId } });
  } catch (error) {
    throw error;
  }
};

// GET INFOCARDs
const findInfoCards = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const infoCards = await infoCardModel.findAll(options);

    if (infoCards) {
      return infoCards;
    } else {
      return {};
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createInfoCard,
  getIdInfoCard,
  putInfoCard,
  deleteInfoCard,
  findInfoCards
};
