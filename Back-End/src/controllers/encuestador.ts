import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Encuestador } from '../models/encuestador';

export const newEncuestador = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Validamos si el Encuestador ya existe en la base de datos
    const encuestador = await Encuestador.findOne({ where: { username: username } });

    if (encuestador) {
        return res.status(400).json({
            msg: 'Ya existe el Encuestador con el nombre: ' + encuestador
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Guardamos el Encuestador en la base de datos
        await Encuestador.create({
            username: username,
            password: hashedPassword
        })

        res.json({
            msg: 'Admin creado existosamente!'
        })
    } catch (err) {
        res.status(400).json({
            msg: 'Error al crear el Encuestador'
        })
    }
}

export const loginEncuestador = async (req: Request, res: Response) => {
    
    const { username, password } = req.body;

    // Validamos si el Encuestador existe en la base de datos
    const encuestador: any = await Encuestador.findOne({ where: { username: username } });

    if (!encuestador) {
        return res.status(400).json({
            msg: 'No existe el Encuestador con el nombre: '+ username
        });
    }

    // Validamos password
    const passwordValid = await bcrypt.compare(password, encuestador.password);
    if (!passwordValid) {
        return res.status(400).json({
            message: 'Usuario o contraseña Incorrecto'
        });
    }

    // Generamos Token
    const token = jwt.sign({
        username: username,
    }, process.env.TOKEN_SECRET || 'contraseña123');

    res.json(token);
}