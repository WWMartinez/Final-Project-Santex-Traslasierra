const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Respuesta = require("./answer.model");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// RESPUESTA ASSOCIATION
User.hasMany(Respuesta, {
  foreignKey: { allowNull: false, field: "userId" },
  onDelete: "CASCADE",
});

// ENCUESTA ASSOCIATION


module.exports = User;
