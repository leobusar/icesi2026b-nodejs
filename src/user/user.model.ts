import { model, Schema } from "mongoose"

export interface UserInput {
    name: string, 
    email: string, 
    password: string
}

export interface UserDocument  extends  UserInput, Document {
    createAt: Date, 
    updateAt: Date, 
    deleteAt: Date
}

const userSchema  = new Schema({
    name: {type: String, required: true }, 
    email: {type: String, required: true, unique: true }, 
    password: {type: String, required: true, select: false },
}, {timestamps: true, collection: 'users'});

export const UserModel = model<UserDocument>("User", userSchema);