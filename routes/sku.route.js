const express = require('express');
const skuController = require("../controller/sku.controller");

const router = express.Router();

router.get('/search', skuController.searchSKU)
module.exports = router;
