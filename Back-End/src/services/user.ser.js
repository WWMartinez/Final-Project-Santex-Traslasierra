const { userProvider } = require('../providers');

const validateUser = async (user) => {
  return await userProvider.validateUser(user);
};

const validateUserId = async (id) => {
  return await userProvider.validateUserId(id);
};

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getIdUser = async (id) => {
  return await userProvider.getIdUser(id);
};

const findUsers = async (options) => {
  return await userProvider.findUsers(options);
};

const putUser = async (id, user) => {
  return await userProvider.putUser(id, user);
};

const deleteUser = async (id) => {
  return await userProvider.deleteUser(id);
};

module.exports = { 
  validateUser,
  validateUserId,
  createUser,
  getIdUser,
  findUsers,
  putUser,
  deleteUser,
};