import express, {Express } from 'express'
import { connectDB } from '../database/config';
import authRoutes from "../routes/auth"
import workerRoutes from "../routes/worker"
import cors from "cors"

export class Server {
    app: Express;
    port: string | number | undefined;
    authPath: string;
    workerPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/auth';
        this.workerPath = "/worker";

        this.conectarDB();
        this.middlewares();
        this.routes();

    }
    async conectarDB(): Promise <void> {
        await connectDB();
    }

    middlewares(): void {
        this.app.use(cors())

        this.app.use(express.json());
    }

    routes(): void {
        this.app.use(this.authPath, authRoutes);
        this.app.use(this.workerPath, workerRoutes);
    }
    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}


