const InfoCardModel = require('../models/infoCard.model');

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
    const indoCard = await InfoCardModel.findByPk(id, { include: [{ all: true }] });
    if (indoCard) {
      return indoCard;
    } else {
      throw error ("InfoCard not found");
    }
  } catch (error) {
    throw error;
  }
};



module.exports = {
  createInfoCard,
  getIdInfoCard,

};




