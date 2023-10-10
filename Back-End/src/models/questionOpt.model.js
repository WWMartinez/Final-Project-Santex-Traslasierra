const { DataTypes } = require('sequelize');
const sequelize =require('../config/configDB');

const QuestionOpt = sequelize.define('QuestionOpt', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  optText: {
    type: DataTypes.STRING,
    allowNull: false
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },   
  nextQuestionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
});

module.exports = QuestionOpt;
