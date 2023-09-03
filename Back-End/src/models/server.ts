import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// Rutas
import routesAdmin from '../routes/admin';
import routesEncuestador from '../routes/encuestador';
import routesPregunta from '../routes/pregunta';
// Modelos
import { Admin } from '../models/admin';
import { Encuestador } from '../models/encuestador';
import { Pregunta } from '../models/pregunta';
// BD
import sequelize from '../db/connection'

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    routes() {

        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API WORKING'
            })
        })

        this.app.use('/api/admins', routesAdmin);
        this.app.use('/api/encuestadores', routesEncuestador);
        this.app.use('/api/preguntas', routesPregunta);
    }

    middlewares() {
        // Parseo Body
        this.app.use(express.json());

        // CORS
        this.app.use(cors());
    }

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
    }
}

export default Server;

