var express = require('express')
var router = express.Router()

router
    .get('/', controller.get);