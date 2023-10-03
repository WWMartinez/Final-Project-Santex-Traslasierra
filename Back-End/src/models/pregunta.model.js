const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Respuesta = require("./respuesta.model");

const Pregunta = sequelize.define("Pregunta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  visible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
    // encuestaId: {
  //   type: DataTypes.STRING,
  //   foreignKey: true,
  //   allowNull: false,
  // }
});
// TODO esto? o crear una nueva tabla PreguntaEncuesta?
// Associations DB table
// CASCADE: if Pregunta deleted then Respuesta deleted too.
Pregunta.hasMany(Respuesta, {
  foreignKey: 'preguntaId',
  onDelete: 'CASCADE',
});
Respuesta.belongsTo(Pregunta);

module.exports = Pregunta;
