var express = require('express');
var router = express.Router();

const FakerCreateController = require('../controllers/faker-create');

router.get('/faker-create', FakerCreateController.create);

module.exports = router;