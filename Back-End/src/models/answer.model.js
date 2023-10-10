const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");

const Respuesta = sequelize.define("Respuesta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Associations DB


module.exports = Respuesta;
