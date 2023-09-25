const { Router } = require("express");
const router = Router();
const { createInfoCard, getIdInfoCard, putInfoCard, deleteInfoCard, getIdInfoCards } = require("../controllers/infoCard.controller");

router.post('/', createInfoCard);
router.get('/:infoCardId', getIdInfoCard);
router.put('/:infoCardId', putInfoCard);
router.delete('/:infoCardId', deleteInfoCard);
router.get('/', getIdInfoCards);

module.exports = router;
