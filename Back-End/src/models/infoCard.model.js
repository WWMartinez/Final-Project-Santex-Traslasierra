const { DataTypes } = require('sequelize');
const sequelize =require('../config/connection');

const InfoCard = sequelize.define('infoCard', {
  id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

module.exports = InfoCard;
