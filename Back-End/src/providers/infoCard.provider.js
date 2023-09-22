const { InfoCardModel } = require('../models/infoCard.model');

const createInfoCard = async (infoCardOptions) => {
  try {
    const newInfoCard = await InfoCardModel.create(infoCardOptions);
    return newInfoCard;
  } catch (error) {
    throw error;
  }
};
console.log(createInfoCard);

module.exports = {
  createInfoCard,

};




