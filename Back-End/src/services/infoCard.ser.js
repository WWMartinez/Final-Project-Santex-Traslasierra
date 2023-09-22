const { infoCardProvider } = require('../providers');

const createInfoCard = async (infoCard) => {
  return await infoCardProvider.createInfoCard(infoCard);
};

module.exports = { createInfoCard };
