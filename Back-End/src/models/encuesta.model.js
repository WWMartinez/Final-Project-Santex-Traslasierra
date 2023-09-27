const { DataTypes } = require('sequelize');
const sequelize =require('../config/configDB');

const Encuesta = sequelize.define('encuesta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
      type: DataTypes.STRING,
      allowNull: false
  },
  description: {
      type: DataTypes.STRING,
      allowNull: false
  },
  category: {
      type: DataTypes.STRING,
      allowNull: false
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = Encuesta;
