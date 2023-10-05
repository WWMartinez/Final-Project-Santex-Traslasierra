const { Router } = require("express");
const router = Router();
const { authIsAdmin } = require('../middleware');
const { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta } = require("../controllers/encuesta.controller");

router.post('/', authIsAdmin, createEncuesta);
router.get('/:encuestaId', getIdEncuesta);
router.get('/', findEncuestas);
router.put('/:encuestaId', authIsAdmin, putEncuesta);
router.delete('/:encuestaId', authIsAdmin, deleteEncuesta);

module.exports = router;
