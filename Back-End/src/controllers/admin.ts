import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Admin } from '../models/admin';

export const newAdmin = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Validamos si el Admin ya existe en la base de datos
    const admin = await Admin.findOne({ where: { username: username } });

    if (admin) {
        return res.status(400).json({
            msg: 'Ya existe el Admin con el nombre: ' + admin
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Guardamos el Admin en la base de datos
        await Admin.create({
            username: username,
            password: hashedPassword
        })

        res.json({
            msg: 'Admin creado existosamente!'
        })
    } catch (err) {
        res.status(400).json({
            msg: 'Error al crear el Admin'
        })
    }
}

export const loginAdmin = async (req: Request, res: Response) => {
    
    const { username, password } = req.body;

    // Validamos si el Admin existe en la base de datos
    const admin: any = await Admin.findOne({ where: { username: username } });

    if (!admin) {
        return res.status(400).json({
            msg: 'No existe el Admin con el nombre: '+ username
        });
    }

    // Validamos password
    const passwordValid = await bcrypt.compare(password, admin.password);
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