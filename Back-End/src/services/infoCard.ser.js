const { infoCardProvider } = require('../providers');

const createInfoCard = async (infoCard) => {
  return await infoCardProvider.createInfoCard(infoCard);
};

const getIdInfoCard = async (id) => {
  return await infoCardProvider.getIdInfoCard(id);
};



module.exports = { 
  createInfoCard,
  getIdInfoCard
};
