import express from 'express';
import { userController } from './user.controller';
import { validateSchema } from '../global/validate.middleware';
import { userSchema } from './user.schema';

const router =  express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);

router.post("/", validateSchema(userSchema), userController.create);

router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;