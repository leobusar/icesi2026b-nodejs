import bcrypt from "bcrypt";
import { UserModel } from "./user.model";
import { UserDocument, UserInput, UserInputUpdate } from "./user.interface";

class UserService {
    public getAll(): Promise<UserDocument[]>{
        return UserModel.find();
    }

    public async create(userInput: UserInput): Promise<UserDocument> {
        const userExists: UserDocument | null = await this.findByEmail(userInput.email);
        if (userExists !== null)
            throw  new ReferenceError("User already exists");

        if(userInput.password)
            userInput.password = await  bcrypt.hash(userInput.password, 10);

        return UserModel.create(userInput);
    }

    public findByEmail(email: string): Promise <UserDocument | null> {
        return UserModel.findOne({email});
    }

    public update(id: string, userUpdate: UserInputUpdate): Promise <UserDocument | null> {
        return UserModel.findByIdAndUpdate(id, userUpdate, {new: true});
    }

    public delete(id: string): Promise <UserDocument | null> {
            return UserModel.findByIdAndDelete(id);
    }

}

export const userService = new UserService();