const Article = require('../models/Article');

module.exports = class ArticleController {
	
	async list(req, res) {

		const article = await Article.find(); 

		res.status(404).json({
				msg: 'Вы залогинены.',
				status: 200,
				article,
		});
	};
	
};
