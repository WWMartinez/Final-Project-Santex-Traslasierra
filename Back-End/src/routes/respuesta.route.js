const { Router } =require('express');
const router = Router();
const { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta } = require('../controllers/respuesta.controller');

router.post('/', createRespuesta);
router.get('/:respuestaId', getIdRespuesta);
router.get('/', findRespuestas);
router.put('/:respuestaId', putRespuesta);
router.delete('/:respuestaId', deleteRespuesta);

module.exports = router;
