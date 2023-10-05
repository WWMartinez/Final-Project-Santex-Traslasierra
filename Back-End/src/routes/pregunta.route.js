const { Router } =require('express');
const router = Router();
const { authIsAdmin } = require('../middleware');
const { postPregunta, getPregunta, getPreguntas, updatePregunta, deletePregunta } = require('../controllers/preguntas.controller');

router.post('/', authIsAdmin, postPregunta);
router.get('/:preguntaId', getPregunta);
router.get('/', getPreguntas);
router.put('/:preguntaId', authIsAdmin, updatePregunta);
router.delete('/:preguntaId', authIsAdmin, deletePregunta);

module.exports = router;
