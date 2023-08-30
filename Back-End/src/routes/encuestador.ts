import { Router } from "express";
import { loginEncuestador, newEncuestador } from "../controllers/encuestador";

const router = Router();

router.post('/', newEncuestador);
router.post('/login', loginEncuestador)

export default router;