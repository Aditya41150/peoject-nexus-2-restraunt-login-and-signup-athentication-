import { validateUser,createUser } from "./controllers";
import { Router } from "express";

const router = Router();


router.post('/login', validateUser);
router.post('/createUser', createUser);

export default router;