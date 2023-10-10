const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Pregunta = require("./question.model");
const Respuesta = require("./answer.model");

const Survey = sequelize.define("Survey", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// PREGUNTA ASSOCIATION
Survey.hasMany(Pregunta, {
  foreignKey: { allowNull: false, field: "surveyId" },
  onDelete: 'CASCADE',
});

// RESPUESTA ASSOCIATION
Survey.hasMany(Respuesta, {
  foreignKey: { allowNull: false, field: "surveyId" },
  onDelete: "CASCADE",
});

module.exports = Survey;