const { Router } = require("express");
const { newAdmin, loginAdmin } = require("../controllers/index.controller");

const router = Router();

router.post('/', newAdmin);
router.post('/login', loginAdmin)

export default router;
