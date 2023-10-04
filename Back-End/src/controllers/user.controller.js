const { userService } = require("../services");

// TODO: Agregar permisos para cada accion. 
// CREATE USER
const createUser = async (req, res ) => {
  const { username, password } = req.body
  try {
    const newUser = await userService.createUser({
      username,
      password
    });
    res.status(201).json({ message: 'User successfully created', newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating User', error: error.message });
  }
};

// GET USER BY ID
const getIdUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userService.getIdUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "An error occurred finding User by ID", error: error.message });
  }
};

// GET ALL USERs
const findUsers = async (_req, res) => {
  try {
    const users = await userService.findUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE USER BY ID
const putUser = async (req, res) => {
  const userId = req.params.userId;
  const { username } = req.body;
  try {
    const newUser = await userService.putUser(userId, {
      username
    });
    res.status(200).json({ message: "User successfully updated", newUser });
  } catch (error) {
    res.status(500).json({ message: "An error occurred updating User", error: error.message });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = userService.deleteUser(userId);
    res.status(200).json({ message: 'User successfully deleted', user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting User", error: error.message });
  }
};

module.exports = { createUser, getIdUser, findUsers, putUser, deleteUser };
