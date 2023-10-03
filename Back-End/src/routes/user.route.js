const { Router } = require("express");
const router = Router();
const { createUser, getIdUser, findUsers, putUser, deleteUser } = require("../controllers/user.controller");

router.post('/', createUser);
router.get('/:userId', getIdUser);
router.get('/', findUsers);
router.put('/:userId', putUser);
router.delete('/:userId', deleteUser);

module.exports = router;
