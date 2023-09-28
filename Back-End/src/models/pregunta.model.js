const { DataTypes }  = require('sequelize');
const sequelize = require('../config/configDB');
const Encuesta = require('./encuesta.model');

const Pregunta = sequelize.define('pregunta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});
// TODO esto? o crear una nueva tabla PreguntaEncuesta?

// Associations DB table
const preguntaEncuestaColumn = "encuestaId";
Pregunta.belongsTo(Encuesta, {
  foreignKey: preguntaEncuestaColumn,
  onDelete: "CASCADE",
});

Encuesta.hasMany(Pregunta, { foreignKey: preguntaEncuestaColumn });



module.exports = Pregunta;
