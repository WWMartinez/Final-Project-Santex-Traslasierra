import express, { Application } from 'express';
import cors from 'cors';
import routesAdmin from '../routes/admin';
import routesEncuestador from '../routes/encuestador'
import { Admin } from '../models/admin';
import { Encuestador } from './encuestador';

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
        this.app.use('/api/admins', routesAdmin);
        this.app.use('/api/encuestadores', routesEncuestador);
    }

    middlewares() {
        // Parseo Body
        this.app.use(express.json());

        // CORS
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Admin.sync();
                    Encuestador.sync();
        } catch (error) {
            console.log('No se pudo conectar a la base de datos', error);
        }
    }
}

export default Server;

