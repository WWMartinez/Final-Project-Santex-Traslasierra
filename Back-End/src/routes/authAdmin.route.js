
const { Router } = require("express");
const router = Router();
// const { authAdmin } = require('../middleware');
const authAdmin = require('../controllers/authAdmin.controller');

router.post('/', authAdmin);

module.exports = router;
