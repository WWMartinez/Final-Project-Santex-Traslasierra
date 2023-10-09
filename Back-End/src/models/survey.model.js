const { DataTypes } = require('sequelize');
const sequelize =require('../config/configDB');
const Pregunta = require("./pregunta.model");

const Survey = sequelize.define('Survey', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
      type: DataTypes.STRING,
      allowNull: false
  },
  visible: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});
// Associations DB table
// Encuesta.hasMany(Pregunta, {
//   foreignKey: 'encuestaId',
//   onDelete: 'CASCADE',
// });

module.exports = Survey;
