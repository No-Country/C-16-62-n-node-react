import { Model, Schema, model } from 'mongoose';

export interface IWorker {
    category: string;
    img: {
        data: Buffer,
        contentType: String
      },
    desc: string;
    province: string;
    city: string;
    address?: string;
}
export interface IUser extends Document {
    name: string;
    email: string;
    phone: number;
    password: string;
    worker?: IWorker;
    code?: string;
    verified?: boolean;
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
    phone: {
        type: Number,
        required: [true, "te faltó el celular"]
    },
    password: {
        type: String,
        required: [true, "te faltó la password"]
    },
     worker:{
            category: {
                type: String,
            },
            img: {
                data: Buffer,
                contentType: String,
            },
            desc: {
                type: String,
            },
            province : {
                type: String,
            },
            city:{
                type: String,
            },
            address:{
                type: String,
            }
    }, 
     code:{
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.toJSON = function () {
    const { __v, password, code, ...user } = this.toObject();
    return user;
};

const User: Model<IUser> = model<IUser>("Usuario", userSchema);
export default User;
