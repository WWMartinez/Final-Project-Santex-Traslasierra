const { Router } =require('express');
const router = Router();
const { authIsAdmin, authIsUser } = require('../middleware');
const { postPregunta, getPregunta, getPreguntas, updatePregunta, deletePregunta } = require('../controllers/preguntas.controller');

router.post('/', authIsAdmin, postPregunta);
router.get('/:preguntaId', authIsUser, getPregunta);
router.get('/', authIsUser, getPreguntas);
router.put('/:preguntaId', authIsAdmin, updatePregunta);
router.delete('/:preguntaId', authIsAdmin, deletePregunta);

module.exports = router;
