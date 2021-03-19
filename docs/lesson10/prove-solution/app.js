const express = require('express')
const bodyParser = require('body-parser')

// ...

// Make sure the app can handle requests with JSON
express.use(bodyParser.json())

// ...
