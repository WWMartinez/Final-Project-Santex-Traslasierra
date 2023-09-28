const { Router } =require('express');
const router = Router();
const { postPregunta, getPregunta, getPreguntas, updatePregunta, deletePregunta } = require('../controllers/preguntas.controller');

router.post('/', postPregunta);
router.get('/:id', getPregunta);
router.get('/', getPreguntas);
router.put('/:id', updatePregunta);
router.delete('/:id', deletePregunta);

module.exports = router;
