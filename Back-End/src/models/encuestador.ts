import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'

export const Encuestador = sequelize.define('encuestador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, )