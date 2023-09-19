import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// Rutas
import routesAdmin from '../routes/admin.route';
import routesEncuestador from '../routes/encuestador.route';
import routesPregunta from '../routes/pregunta.route';
// Modelos
import { Admin } from './admin.model';
import { Encuestador } from './encuestador.model';
import { Pregunta } from './pregunta.model';
// BD
const sequelize = require('../config/connection');

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.DB_PORT || '3308';
    };

    async start() {
        this.listen();
        this.middlewares();
        this.routes();
    };

    listen() {
        this.app.listen(this.port, async () => {
            await this.dbConnect();
            console.log(`Server running on port ${this.port}`);
        });
    };

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API WORKING'
            })
        })
        this.app.use('/api/admins', routesAdmin);
        this.app.use('/api/encuestadores', routesEncuestador);
        this.app.use('/api/preguntas', routesPregunta);
    };

    middlewares() {
        // Parseo Body
        this.app.use(express.json());
        // CORS
        this.app.use(cors());
    };

    async dbConnect() {
        try {
            await sequelize.authenticate();
            Admin.sync();
            Encuestador.sync();
            Pregunta.sync();
            console.log("Conectada a la Base de Datos con Exito!")
        } catch (error) {
            console.log('No se pudo conectar a la base de datos', error);
        }
    };
};

module.exports = Server;
