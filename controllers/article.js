const Article = require('../models/Article');

class ArticleController {
	
	async list(req, res) {

		const articles = await Article.find(); 

		res.status(200).json(articles);
	};

	async getOne(req, res) {

		const article = await Article.find({_id: req.params.id}); 

		res.status(200).json(article);
	};

};

module.exports = new ArticleController;