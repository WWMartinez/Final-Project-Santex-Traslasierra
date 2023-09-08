import { Router } from 'express';
import { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta } from '../controllers/preguntas';

const router = Router();

router.get('/', getPreguntas);
router.get('/:id', getPregunta);
router.delete('/:id', deletePregunta);
router.post('/', postPregunta);
router.put('/:id', updatePregunta);

export default router;