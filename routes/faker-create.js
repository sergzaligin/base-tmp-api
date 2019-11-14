var express = require('express');
var router = express.Router();

const FakerCreateController = require('../controllers/faker-create');
// console.log('article', new controller);
const c = new FakerCreateController;
/* GET users listing. */
router.get('/faker-create', c.create);

module.exports = router;