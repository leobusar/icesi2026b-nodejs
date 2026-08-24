import { model, Schema } from "mongoose";
import { UserDocument } from "./user.interface";



const userSchema  = new Schema({
    name: {type: String, required: true }, 
    email: {type: String, required: true, unique: true }, 
    password: {type: String, required: true, select: false },
}, {timestamps: true, collection: 'users'});

export const UserModel = model<UserDocument>("User", userSchema);