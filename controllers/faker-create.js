const faker = require('faker');

const Article = require('../models/Article');

class FakerCreateController {
	
	create(req, res) {

		for(let i = 1; i > 0; i--){

			const title = faker.name.title();
			const paragraph = faker.lorem.paragraph();
			const text = faker.lorem.paragraphs();
			const image = faker.image.image();

			const ArticleBody = {
				title,
				paragraph,
				text,
				image,
			};

			Article.create(ArticleBody);
		}

		res.status(404).json({
			msg: 'Статьи успешно созданы.',
			status: 200
		});
	};

};

module.exports = new FakerCreateController;