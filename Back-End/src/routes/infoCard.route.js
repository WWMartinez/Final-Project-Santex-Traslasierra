const { Router } = require("express");
const router = Router();
const { authIsAdmin } = require('../middleware');
const { createInfoCard, getIdInfoCard, putInfoCard, deleteInfoCard, findInfoCards } = require("../controllers/infoCard.controller");

router.post('/', authIsAdmin, createInfoCard);
router.get('/:infoCardId', getIdInfoCard);
router.get('/', findInfoCards);
router.put('/:infoCardId', authIsAdmin, putInfoCard);
router.delete('/:infoCardId', authIsAdmin, deleteInfoCard);

module.exports = router;
