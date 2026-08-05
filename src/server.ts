import express, {Express, Request, Response} from 'express'; 

import userRouter from './user/user.routes';
import {db} from './config/connectionDB';

const app: Express = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

app.use("/api/user", userRouter); 

app.get("/", (req:Request,res: Response ) =>{
    res.send("Hola mundo");
}); 

db.then (() => app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
    })
)
