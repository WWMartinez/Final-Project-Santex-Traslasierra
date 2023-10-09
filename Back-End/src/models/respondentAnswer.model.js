const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");

const RespondentAnswer = sequelize.define("RespondentAnswer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  respondenId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  questionId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false,
  },
  questionOpt: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  answerText: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = RespondentAnswer;
