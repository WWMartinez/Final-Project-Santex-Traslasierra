const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");

const Respuesta = sequelize.define("Respuesta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  preguntaId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
// TODO asociar Respuesta con Pregunta? 
// Associations DB

module.exports = Respuesta;
