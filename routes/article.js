var express = require('express');
var router = express.Router();

const { list, getOne } = require('../controllers/article');

router.get('/list', list);
router.get('/:id', getOne);

module.exports = router;