const { Router } = require("express");
const router = Router();
const { createInfoCard } = require("../controllers/infoCard.controller");

router.post('/', createInfoCard);
// router.get('/:id', getIdInfoCard);
// router.put('/:id', updateInfoCard);
// router.delete('/:id', deleteInfoCard);

module.exports = router;
