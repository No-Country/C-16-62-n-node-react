import { Model, Schema, model } from 'mongoose';

export interface IWorker {
    category: string;
    img: string;
    desc: string;

}


export interface IUser {
    name: string;
    email: string;
    phone: number;
    password: string;
    location: string;
    worker?: IWorker;
    code?: string;
}


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "te faltó el nombre"]
    },
    email: {
        type: String,
        required: [true, "te faltó el email"]
    },
    phone:{
        type: Number,
        required: [true, "te faltó el celular"]
    },
    password: {
        type: String,
        required: [true, "te faltó la password"]
    },
    location: {
        type: String,
        required: [true, "faltó la ubicación"]
    },
    worker: {
        type: [{
            category: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            }

        }],
        required: false,
    },

     code:{
        type: String
    }
});

userSchema.methods.toJSON = function () {
    const { __v, password, code, ...user } = this.toObject();
    return user;
};

const User: Model<IUser> = model<IUser>("Usuario", userSchema);
export default User;


