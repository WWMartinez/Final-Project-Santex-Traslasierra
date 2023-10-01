const { DataTypes }  = require('sequelize');
const sequelize = require('../config/configDB');
// const Respuesta = require('./respuesta.model');

const Pregunta = sequelize.define('Pregunta', {
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
        allowNull: false,
        defaultValue: false,
    },
});
// TODO esto? o crear una nueva tabla PreguntaEncuesta?

// Associations DB table
Pregunta.associations = (models) => {
    Pregunta.hasMany(models.Respuesta, {
        onDelete: 'CASCADE',

    })
};
// CASCADE: if Pregunta deleted then Respuesta deleted too.

// const preguntaEncuestaColumn = "encuestaId";
// Pregunta.belongsTo(Encuesta, {
//   foreignKey: preguntaEncuestaColumn,
//   onDelete: "CASCADE",
// });
// Encuesta.hasMany(Pregunta, { foreignKey: preguntaEncuestaColumn });
  
module.exports = Pregunta;
