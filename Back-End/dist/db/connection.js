"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Conexión a la BD MySQL
const sequelize = new sequelize_1.Sequelize('appmina', 'root', 'adminadmin', {
    host: "localhost",
    dialect: "mysql",
});
exports.default = sequelize;
