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



module.exports = {
  createInfoCard,
  getIdInfoCard,

};




