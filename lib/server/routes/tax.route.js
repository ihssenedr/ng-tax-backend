"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tax_controlleur_1 = require("../controllers/tax.controlleur");
const router = (0, express_1.Router)();
router.get("/", tax_controlleur_1.onDefault);
router.get("/all", tax_controlleur_1.getAllTaxes);
module.exports = router;
