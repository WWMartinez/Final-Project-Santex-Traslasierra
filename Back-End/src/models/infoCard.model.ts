import { DataTypes } from 'sequelize';
const sequelize = require('../config/connection');

export const InfoCard = sequelize.define('infoCard', {
  id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
  },
  image: {
    public_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
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
}, );

export default InfoCard;
