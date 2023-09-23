// require('dotenv').config()
// const express = require('express');
// const cors = require('cors');
// // Routes
// const { routesAdmin } = require('../routes');
// const { routesEncuestador } = require('../routes');
// const { routesPregunta } = require('../routes');
// // Models
// const { adminModel } = require('./admin.model');
// const { encuestadorModel } = require('./encuestador.model');
// const { preguntaModel } = require('./pregunta.model');
// const { infoCardModel } = require('./infoCard.model');
// // DB
// const sequelize = require('../config/configDB');

// class Server {
//     constructor() {
//         this.app = express();
//         this.port = process.env.DB_PORT || '3308';
//     };
//     async start() {
//         this.listen();
//         this.middlewares();
//         this.routes();
//     };
//     listen() {
//         this.app.listen(this.port, async () => {
//             await this.dbConnect();
//             console.log(`Server running on port ${this.port}`);
//         });
//     };
//     routes() {
//         this.app.get('/')
//         this.app.use('/api/admins', routesAdmin);
//         this.app.use('/api/encuestadores', routesEncuestador);
//         this.app.use('/api/preguntas', routesPregunta);
//         // this.app.use('/api/infocard', routesInfoCard);
//     };
//     middlewares() {
//         // Parseo Body
//         this.app.use(express.json());
//         // CORS
//         this.app.use(cors());
//     };
//     async dbConnect() {
//         try {
//             await sequelize.authenticate();
//             adminModel.sync();
//             encuestadorModel.sync();
//             preguntaModel.sync();
//             // infoCardModel.sync();
//             console.log("Conectada a la Base de Datos con Exito!")
//         } catch (error) {
//             console.log('No se pudo conectar a la base de datos', error);
//         }
//     };
// };

// module.exports = Server;
