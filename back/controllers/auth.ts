import User, { IUser, IWorker } from "../models/users";
import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response): Promise<void> => {

    const { name, email, phone, password }: IUser = req.body;

    const user = new User ({ name, email, password, phone });

     const saltRounds = 10;
     const salt = bcryptjs.genSaltSync(saltRounds);

     user.password = bcryptjs.hashSync(password, salt);
     await user.save();
    
    res.status(201).json({
        user,
    });
};

/* export const addWorkerData = async (req: Request, res: Response): Promise<void> => {
    const token = req.headers.authorization?.split(' ')[1]; // Obtener el token JWT del encabezado de autorizacion
    
    if (!token) {
        res.status(401).json({ message: 'Token de autenticación no proporcionado' });
        return;
    }

    try {
        const decodedToken = jwt.verify(token, 'pass?') as { userId: string }; //Definir firma del JWT para poder verificar y decodificar el token 
        
        const userId = decodedToken.userId;

        const { category, img, desc }: IWorker = req.body;

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
};
*/
export const logIn = async (req: Request, res: Response ) : Promise <void> =>{

    const { email, password } :IUser = req.body

    try {
        const user = await User.findOne({ email })
        if(!user){
            res.status(400).json({
                msg: "no se encontró el usuario en la base de datos"
            });
            return
        }

        const validatePassword = bcryptjs.compareSync(password, user.password)

        if(!validatePassword){
            res.status(400).json({
                msg: "la contraseña es incorrecta"
            });
            
        }
        

        res.json ({
            user

        })


    } catch (error) {
        console.log("error")
        res.status(500).json({
            msg: "error en el servidor"
        })
        
    }

}

export const addWorkerData = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId; // Suponiendo que pasas el ID del usuario en la URL
    const { category, img, desc, city, address }: IWorker = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }


        // Agrega los datos del trabajador al usuario
        user.worker = { category, img, desc, city, address };

        await user.save();

        res.status(200).json({ message: 'Datos de trabajador agregados exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar los datos de trabajador', error });
    }
};