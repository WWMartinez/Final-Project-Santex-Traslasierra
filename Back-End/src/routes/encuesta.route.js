const { Router } = require("express");
const router = Router();
const { authIsAdmin, authIsUser } = require('../middleware');
const { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta } = require("../controllers/encuesta.controller");

router.post('/', authIsAdmin, createEncuesta);
router.get('/:encuestaId', authIsUser, getIdEncuesta);
router.get('/', authIsUser, findEncuestas);
router.put('/:encuestaId', authIsAdmin, putEncuesta);
router.delete('/:encuestaId', authIsAdmin, deleteEncuesta);

module.exports = router;
