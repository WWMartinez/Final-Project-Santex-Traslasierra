const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Respuesta = require("./answer.model");

const Pregunta = sequelize.define("Pregunta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Category of queston (hoteleria, gastronomia, etc)
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// PREGUNTA ASSOCIATION
Pregunta.hasMany(Respuesta, {
  foreignKey: { allowNull: false, field: "questionId" },
  onDelete: "CASCADE",
});

module.exports = Pregunta;
