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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePregunta = exports.postPregunta = exports.deletePregunta = exports.getPregunta = exports.getPreguntas = void 0;
const pregunta_1 = require("../models/pregunta");
const getPreguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPreguntas = yield pregunta_1.Pregunta.findAll();
    res.json(listPreguntas);
});
exports.getPreguntas = getPreguntas;
const getPregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pregunta = yield pregunta_1.Pregunta.findByPk(id);
    if (pregunta) {
        res.json(pregunta);
    }
    else {
        res.status(404).json({
            msg: 'No existe la Pregunta con ese (id)'
        });
    }
});
exports.getPregunta = getPregunta;
const deletePregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pregunta = yield pregunta_1.Pregunta.findByPk(id);
    if (!pregunta) {
        res.status(404).json({
            msg: 'No existe la pregunta con ese (id)'
        });
    }
    else {
        yield pregunta.destroy();
        res.json({
            msg: 'La pregunta fue eliminada con exito!'
        });
    }
});
exports.deletePregunta = deletePregunta;
const postPregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield pregunta_1.Pregunta.create(body);
        res.json({
            msg: 'La pregunta fue agregada con exito!'
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            msg: 'Ocurrio un error: ' + err
        });
    }
});
exports.postPregunta = postPregunta;
const updatePregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const pregunta = yield pregunta_1.Pregunta.findByPk(id);
        if (pregunta) {
            yield pregunta.update(body);
            res.json({
                msg: 'La pregunta fue actualizada con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe la pregunta con ese id'
            });
        }
    }
    catch (err) {
        console.log(err);
        res.json({
            msg: 'Ocurrio un error, reinicie el Server'
        });
    }
});
exports.updatePregunta = updatePregunta;
