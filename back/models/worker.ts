import { Model, Schema, Types, model } from 'mongoose';

export interface IWorker {
    user: Types.ObjectId;
    category: string;
    img: string;
    desc: string;

}

const workerSchema = new Schema <IWorker> ({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true

    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const Worker: Model <IWorker> = model<IWorker>("Worker", workerSchema)
export default Worker;
