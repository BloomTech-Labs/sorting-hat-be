const Questions = require('./model.js');
const Answers = require('../answers/model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
	Questions.find()
		.then((questions) => {
			res.json(questions);
		})
});

router.get('/:id', validateId, (req, res) => {
	const { id } = req.params;

	Questions.findById(id)
		.then((question) => {
			res.json(question);
		})
});

router.get('/:id/answers', validateId, (req, res) => {
	const { id } = req.params;

	Questions.findById(id)
		.then((question) => {
			res.json(question);
		})
});

router.post('/', validateInput, (req, res) => {
	const question = req.body;

	Questions.addQuestion(question)
		.then((added) => {
			res.status(201).json(added);
		})
});

router.put('/:id', validateId, (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Questions.editQuestion(changes, id)
		.then((edited) => {
			res.json(edited);
		})
});

router.delete('/:id', validateId, (req, res) => {
	const { id } = req.params;

	Questions.delQuestion(id)
		.then((count) => {
			res.json(count);
		})
});

// custom middleware

function validateId(req, res, next) {
	const { id } = req.params;

	Questions.findById(id)
		.then((question) => {
			if (question === undefined) {
				res.status(400).json({ message: 'invalid question id' });
			} else next();
		})
}

function validateInput(req, res, next) {
	if (Object.keys(req.body).length == 0) {
		res.status(400).json({ message: 'missing required fields' });
	} else if (!req.body.question) {
		res.status(400).json({ message: 'missing required question field' });
	} else next();
}

module.exports = router;
