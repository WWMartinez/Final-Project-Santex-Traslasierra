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
exports.loginEncuestador = exports.newEncuestador = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const encuestador_1 = require("../models/encuestador");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newEncuestador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validamos si el Encuestador ya existe en la base de datos
    const encuestador = yield encuestador_1.Encuestador.findOne({ where: { username: username } });
    if (encuestador) {
        return res.status(400).json({
            msg: 'Ya existe el Encuestador con el nombre: ' + encuestador
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Guardamos el Encuestador en la base de datos
        yield encuestador_1.Encuestador.create({
            username: username,
            password: hashedPassword
        });
        res.json({
            msg: 'Admin creado existosamente!'
        });
    }
    catch (err) {
        res.status(400).json({
            msg: 'Error al crear el Encuestador'
        });
    }
});
exports.newEncuestador = newEncuestador;
const loginEncuestador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validamos si el Encuestador existe en la base de datos
    const encuestador = yield encuestador_1.Encuestador.findOne({ where: { username: username } });
    if (!encuestador) {
        return res.status(400).json({
            msg: 'No existe el Encuestador con el nombre: ' + username
        });
    }
    // Validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, encuestador.password);
    if (!passwordValid) {
        return res.status(400).json({
            message: 'Usuario o contraseña Incorrecto'
        });
    }
    // Generamos Token
    const token = jsonwebtoken_1.default.sign({
        username: username,
    }, process.env.TOKEN_SECRET || 'contraseña123');
    res.json(token);
});
exports.loginEncuestador = loginEncuestador;
