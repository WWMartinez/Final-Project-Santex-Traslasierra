const { Admin } = require("../models/admin.model");

export const validateUser = async (username: string) => {
  try {
    const user = await Admin.findOne({ where: { username: username }, });
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


// export const createUser = async (userOptions: any) => {
//   try {
//     const newUser = await Admin.create(userOptions);
//     return newUser;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getUser = async (id: any) => {
//   try {
//     const user = await Admin.findByPk(id, { include: [{ all: true }] });
//     if (user) {
//       return user;
//     } else {
//       throw new Error("User not found");
//     }
//   } catch (error) {
//     throw error;
//   }
// };

