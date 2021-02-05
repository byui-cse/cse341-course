// Routes for W08 Prove Assignment.
const express = require('express');
const router = express.Router();
var jsonEngine = require('../../controllers/w08/pr08.js');

router.get('/', jsonEngine.processJson)
      .post('/', jsonEngine.getIndex)
module.exports = router;