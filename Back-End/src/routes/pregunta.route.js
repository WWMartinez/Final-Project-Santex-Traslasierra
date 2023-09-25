const { Router } =require('express');
const router = Router();
const { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta } = require('../controllers/preguntas.controller');

router.get('/', getPreguntas);
router.get('/:id', getPregunta);
router.delete('/:id', deletePregunta);
router.post('/', postPregunta);
router.put('/:id', updatePregunta);

module.exports = router;
