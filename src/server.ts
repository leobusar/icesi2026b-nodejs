import express, {Express, Request, Response} from 'express'; 
import userRouter from './routes/user.routes';

const app: Express = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

app.use("/api/user", userRouter); 

app.get("/", (req:Request,res: Response ) =>{
    res.send("Hola mundo");
}); 


app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})
