import express,  {Request, Response} from 'express'; 


const router =  express.Router();

router.get("/", (req: Request, res: Response) => { res.send("get all users")});
router.get("/:id", (req: Request, res: Response) =>
     { res.send(`get user with id ${req.params.id}`)});

router.post("/", (req: Request, res: Response) => { res.send("get all users")});
router.put("/:id", (req: Request, res: Response) => { res.send("get all users")});
router.delete("/:id", (req: Request, res: Response) => { res.send("get all users")});

export default router;