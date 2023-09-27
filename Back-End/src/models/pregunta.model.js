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
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    question: {
        type: DataTypes.STRING
    }
});
// TODO esto? o crear una nueva tabla PreguntaEncuesta?

const preguntaEncuestaColumn = "encuestaId";
Pregunta.belongsTo(Encuesta, {
  foreignKey: preguntaEncuestaColumn,
  onDelete: "CASCADE",
});

Encuesta.hasMany(Pregunta, { foreignKey: preguntaEncuestaColumn });

module.exports = Pregunta;
