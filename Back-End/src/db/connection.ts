import { Sequelize } from "sequelize";

// Conexión a la BD MySQL
const sequelize = new Sequelize('appmina', 'root', 'adminadmin', {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;