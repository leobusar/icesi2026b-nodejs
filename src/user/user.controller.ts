import { Request, Response } from "express";
import { userService } from "./user.service";
import { UserDocument, UserInput } from "./user.model";

class UserController {
    public async create  (req: Request, res: Response) { 
        try {
            const user: UserDocument = await userService.create(req.body as UserInput);
            res.status(201).json({message: "OK", user});            
        } catch (error) {
            res.status(500).json({message:"error", error})
        }
    }

    public async  getAll (req: Request, res: Response) {
        try {
            const users: UserDocument[] = await userService.getAll();
            res.json({message: "OK", users});            
        } catch (error) {
            res.status(500).json({message:"error", error})
        } 
    }
    public getOne(req: Request, res: Response){ 
        res.send(`get user with id ${req.params.id}`)
    };

    public update(req: Request, res: Response) {
      req.body.codigo = req.params.id;
      res.send(req.body);
     }
    public delete(req: Request, res: Response){ 
        res.send("get all users")
    };
}

export const userController = new UserController();