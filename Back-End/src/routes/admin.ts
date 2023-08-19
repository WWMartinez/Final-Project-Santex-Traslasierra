import { Router } from "express";
import { newAdmin, loginAdmin } from "../controllers/admin";

const router = Router();

router.post('/', newAdmin);
router.post('/login', loginAdmin)

export default router;