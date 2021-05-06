//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const ta03Controller = require('../controllers/ta03.js');

router.get('/', ta03Controller.getProducts);
router.get('/search', ta03Controller.getSearchProducts);

module.exports = router;