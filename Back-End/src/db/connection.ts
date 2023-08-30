import { Sequelize } from "sequelize";

// Conexión a la BD MySQL
const sequelize = new Sequelize('app-mina', 'root', 'admin', {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;