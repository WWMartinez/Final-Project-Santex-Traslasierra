const { DataTypes } = require('sequelize');
const sequelize =require('../config/configDB');

const Respondent = sequelize.define('Respondent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    allowNull: false
  },
  ip: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // MODIFICAR PARA EXTRAER LA FECHA DE ANSWER
  responseDateTime: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Respondent;
