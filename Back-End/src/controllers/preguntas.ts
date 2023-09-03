import { Request, Response } from 'express';
import { Pregunta } from '../models/pregunta';

export const getPreguntas = async (req: Request, res: Response) => {
    const listPreguntas = await Pregunta.findAll();

    res.json(listPreguntas);
}

export const getPregunta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const pregunta = await Pregunta.findByPk(id);

    if (pregunta) {
        res.json(pregunta);
    } else {
        res.status(404).json({
            msg: 'No existe la Pregunta con ese (id)'
        })
    }
}

export const deletePregunta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const pregunta = await Pregunta.findByPk(id);

    if (!pregunta) {
        res.status(404).json({
            msg: 'No existe la pregunta con ese (id)'
        })
    } else {
        await pregunta.destroy();
        res.json({
            msg: 'La pregunta fue eliminada con exito!'
        })
    }
}

export const postPregunta = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Pregunta.create(body);

        res.json({
            msg: 'La pregunta fue agregada con exito!'
        })
    } catch (err) {
        console.log(err);
        res.json({
            msg: 'Ocurrio un error: ' + err
        })
    }
}

export const updatePregunta = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const pregunta = await Pregunta.findByPk(id);

        if (pregunta) {
            await pregunta.update(body);
            res.json({
                msg: 'La pregunta fue actualizada con exito!'
            })
        } else {
            res.status(404).json({
                msg: 'No existe la pregunta con ese id'
            })
        }
    } catch (err) {
        console.log(err);
        res.json({
            msg: 'Ocurrio un error, reinicie el Server'
        })
    }
}