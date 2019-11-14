var express = require('express');
var router = express.Router();

const ArticleController = require('../controllers/article');
// console.log('article', new controller);
const c = new ArticleController;
/* GET users listing. */
router.get('/list', c.list);

module.exports = router;