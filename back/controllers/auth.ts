import Worker, { IWorker } from "../models/users";
import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

export const registerWorker = async (req: Request, res: Response): Promise<void> => {

    const { name, email, password, province, city, category, phone }: IWorker = req.body;

    const worker = new Worker ({ name, email, password, province, city, category, phone });

     const saltRounds = 10;
     const salt = bcryptjs.genSaltSync(saltRounds);

     worker.password = bcryptjs.hashSync(password, salt);
     await worker.save();
    
    res.status(201).json({
        worker,
    });
};