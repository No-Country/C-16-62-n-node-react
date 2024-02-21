import { Model, Schema, model } from 'mongoose';

export interface IWorker {
    name: string;
    email: string;
    password: string;
    province: string;
    city: string;
    category: string;
    phone: number;
    code?: string;
}

const workerSchema = new Schema<IWorker>({
    name: {
        type: String,
        required: [true, "te faltó el nombre"]
    },
    email: {
        type: String,
        required: [true, "te faltó el email"]
    },
    password: {
        type: String,
        required: [true, "te faltó la password"]
    },
    province: {
        type: String,
        required: [true, "faltó la provincia"]
    },
    city: {
        type: String,
        required: [true, "faltó la ciudad"]
    },
    category:{
        type: String,
        required: [true, "faltó la categoría"]
    },
    phone: {
        type: Number,
        required: [ true, "te faltó el teléfono"]
    },

     code:{
        type: String
    }
});

workerSchema.methods.toJSON = function () {
    const { __v, password, _id, code, ...worker } = this.toObject();
    return worker;
};

const Worker: Model<IWorker> = model<IWorker>("Trabajador", workerSchema);
export default Worker;
