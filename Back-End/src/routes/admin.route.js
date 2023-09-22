const { Router } = require("express");
const { newAdmin, loginAdmin } = require("../controllers/admin.controller");
const router = Router();

router.post('/', newAdmin);
router.post('/login', loginAdmin)

module.exports = router;
