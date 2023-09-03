"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Rutas
const admin_1 = __importDefault(require("../routes/admin"));
const encuestador_1 = __importDefault(require("../routes/encuestador"));
const pregunta_1 = __importDefault(require("../routes/pregunta"));
// Modelos
const admin_2 = require("../models/admin");
const encuestador_2 = require("../models/encuestador");
const pregunta_2 = require("../models/pregunta");
// BD
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
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
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API WORKING'
            });
        });
        this.app.use('/api/admins', admin_1.default);
        this.app.use('/api/encuestadores', encuestador_1.default);
        this.app.use('/api/preguntas', pregunta_1.default);
    }
    middlewares() {
        // Parseo Body
        this.app.use(express_1.default.json());
        // CORS
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                admin_2.Admin.sync();
                encuestador_2.Encuestador.sync();
                pregunta_2.Pregunta.sync();
                console.log("Conectada a la Base de Datos con Exito!");
            }
            catch (error) {
                console.log('No se pudo conectar a la base de datos', error);
            }
        });
    }
}
exports.default = Server;
