import User, { IUser, IWorker } from "../models/users";
import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response): Promise<void> => {

    const { name, email, password, phone, location }: IUser = req.body;

    const user = new User ({ name, email, password, phone, location  });

     const saltRounds = 10;
     const salt = bcryptjs.genSaltSync(saltRounds);

     user.password = bcryptjs.hashSync(password, salt);
     await user.save();
    
    res.status(201).json({
        user,
    });
};

export const addWorkerData = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId; // Suponiendo que pasas el ID del usuario en la URL
    
    const { category, img, desc }: IWorker = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        if (user.worker) {
            res.status(400).json({ message: 'El usuario ya tiene datos de trabajador' });
            return;
        }

        user.worker = { category, img, desc };

        await user.save();

        res.status(200).json({ message: 'Datos de trabajador agregados exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar los datos de trabajador', error });
    }
}