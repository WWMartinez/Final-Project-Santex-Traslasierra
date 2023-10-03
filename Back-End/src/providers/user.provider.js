const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');

const validateUser = async (username) => {
  try {
    const user = await AdminModel.findOne({ where: { username: username }, });
    if (user) {
      return user;
    } else {
      throw Error(
        "No se encontro este usuario en la base de datos"
      );
    }
  } catch (error) {
    throw error;
  }
};


// CREATE USER
const createUser = async (userOptions) => {
  try {
    const newUser = await UserModel.create(userOptions);
    return newUser;
  } catch (error) {
    throw error;
  }
};

// GET USER BY ID
const getIdUser = async (id) => {
  try {
    const user = await UserModel.findByPk(id, { include: [{ all: true }] });
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET ALL USERs 
const findUsers = async (options) => {
  try {
    const users = await UserModel.findAll(options);
    // const usersArray = Array.isArray(users) ? users : [users];
    // console.log(users);
    return users;
  } catch (error) {
    throw error;
  }
};

// UPDATE USER BY ID
const putUser = async (userId, userOptions) => {
  try {
    await getIdUser(userId);
    const [numRowsUpdated] = await UserModel.update(userOptions, {
      where: { id: userId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return UserModel.findByPk(userId);
  } catch (error) {
    throw error;
  }
};

// DELETE USER
const deleteUser = async (userId) => {
  try {
    return UserModel.destroy({ where: { id: userId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateUser,
  createUser,
  getIdUser,
  findUsers,
  putUser,
  deleteUser,
};
