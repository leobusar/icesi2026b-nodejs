export interface UserInput {
    name: string, 
    email: string, 
    password: string
}

export interface UserInputUpdate {
    name: string, 
    email: string
}

export interface UserDocument  extends  UserInput, Document {
    createAt: Date, 
    updateAt: Date, 
    deleteAt: Date
}