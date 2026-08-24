import { Request, Response } from "express";
import { userService } from "./user.service";
import { UserDocument, UserInput, UserInputUpdate } from "./user.interface";


class UserController {
    public async create  (req: Request, res: Response): Promise<void> { 
        try {
            const user: UserDocument = await userService.create(req.body as UserInput);
            res.status(201).json({message: "OK", user});
            return;          
        } catch (error) {
            if(error instanceof ReferenceError){
                res.status(422).json({message: "User already exists"});
                return;
            }
            res.status(500).json({message:"error", error});
            return;
        }
    }

    public async  getAll (req: Request, res: Response): Promise<void> {
        try {
            const users: UserDocument[] = await userService.getAll();
            res.json({message: "OK", users});
            return;
        } catch (error) {
            res.status(500).json({message:"error", error}); 
            return;

        } 
    }
    public getOne(req: Request, res: Response){ 
        res.send(`get user with id ${req.params.id}`)
    };

    public async update(req: Request, res: Response): Promise <void> {
        try {
            const id: string  =  req.params.id as string || '';

            const user: UserDocument | null = await userService.update(id, req.body as UserInputUpdate);
            if (user === null){
                res.status(404).json({message: `user with id ${id} not found`}); 
                return;
            }
            res.json({message: "OK", user});
            return;
        } catch (error) {
            res.status(500).json({message:"error", error});
            return;
        }
     }
    public async delete(req: Request, res: Response){ 
        try {
            const id: string  =  req.params.id as string || '';

            const user: UserDocument | null = await userService.delete(id);
            if (user === null){
                res.status(404).json({message: `user with id ${id} not found`}); 
                return;
            }
            res.json({message: "OK", user});
            return;
        } catch (error) {
            res.status(500).json({message:"error", error});
            return;
        }    };
}

export const userController = new UserController();