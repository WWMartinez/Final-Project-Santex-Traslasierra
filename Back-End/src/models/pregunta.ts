import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Pregunta = sequelize.define('preguntas', {
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
}, );

export default Pregunta;