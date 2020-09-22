// Routes for W08 Team Activity. 
const express = require('express');
const router = express.Router();
var jsonEngine = require('../../controllers/w08/team-jsonEngine.js');

router.get('/', jsonEngine.processJson)
      .post('/', jsonEngine.getIndex)
module.exports = router;