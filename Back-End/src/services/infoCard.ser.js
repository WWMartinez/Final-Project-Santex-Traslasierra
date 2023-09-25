const { infoCardProvider } = require('../providers');

const createInfoCard = async (infoCard) => {
  return await infoCardProvider.createInfoCard(infoCard);
};

const getIdInfoCard = async (id) => {
  return await infoCardProvider.getIdInfoCard(id);
};

const putInfoCard = async (id, infoCard) => {
  return await infoCardProvider.putInfoCard(id, infoCard);
};

const deleteInfoCard = async (id) => {
  return await infoCardProvider.deleteInfoCard(id);
};

const getIdInfoCards = async (options) => {
  return await infoCardProvider.getIdInfoCards(options);
};

module.exports = { 
  createInfoCard,
  getIdInfoCard,
  putInfoCard,
  deleteInfoCard,
  getIdInfoCards
};
