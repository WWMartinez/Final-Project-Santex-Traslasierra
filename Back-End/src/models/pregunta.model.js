const { DataTypes }  = require('sequelize');
const sequelize = require('../config/configDB');

const Pregunta = sequelize.define('pregunta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    question: {
        type: DataTypes.STRING
    }
});

module.exports = Pregunta;
