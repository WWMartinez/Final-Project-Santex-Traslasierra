"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestador_1 = require("../controllers/encuestador");
const router = (0, express_1.Router)();
router.post('/', encuestador_1.newEncuestador);
router.post('/login', encuestador_1.loginEncuestador);
exports.default = router;
