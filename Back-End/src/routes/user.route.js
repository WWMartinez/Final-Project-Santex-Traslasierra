const { Router } = require("express");
const router = Router();
const { authIsAdmin } = require('../middleware');
const { getIdUser, findUsers, putUser, deleteUser } = require("../controllers/user.controller");

router.get('/:userId', getIdUser);
router.get('/', findUsers);
router.put('/:userId', authIsAdmin, putUser);
router.delete('/:userId', authIsAdmin, deleteUser);

module.exports = router;
