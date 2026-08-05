import { UserDocument, UserInput, UserModel } from "./user.model";

class UserService {
    public getAll(): Promise<UserDocument[]>{
        return UserModel.find();
    }

    public create(userInput: UserInput): Promise<UserDocument> {
        return UserModel.create(userInput);
    }
}

export const userService = new UserService();