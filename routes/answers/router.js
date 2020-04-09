const Answers = require('./model.js');
const Points = require('../points/model.js');
const Tracks = require('../tracks/model.js');
const Questions = require('../questions/model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
	Answers.find()
		.then((answers) => {
			res.json(answers);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to retrieve answers' });
		});
});

router.get('/:id', validateAnswerId, (req, res) => {
	const { id } = req.params;

	Answers.findById(id)
		.then((answer) => {
			res.json(answer);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to retrieve answer' });
		});
});

router.get('/questions/:questionId', validateQuestionId, (req, res) => {
	const { questionId } = req.params;

	Answers.findByQuestion(questionId)
		.then((answer) => {
			res.json(answer);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to retrieve question' });
		});
});

router.post('/questions/:questionId', validateInput, validateQuestionId, (req, res) => {
	const { questionId } = req.params;
	const choice = req.body;
	choice.question_id = questionId;

	Answers.addChoice(choice, questionId)
		.then((inserted) => {
			Tracks.find().then((tracks) => {
				res.status(201).json('OK');
				tracks.map((track) => {
					const point = {
						points: 0.0
					};
					point.track_id = track.id;
					point.answer_id = inserted[0];

					Points.createPointAnswer(point).then();
				});
			});
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to create the answer choice' });
		});
});

router.put('/:id', validateInput, validateAnswerId, (req, res) => {
	const id = req.params.id;
	const changes = req.body;

	Answers.editAnswer(changes, id)
		.then((edited) => {
			res.json(edited);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to edit answer' });
		});
});

router.delete('/:id', validateAnswerId, (req, res) => {
	const id = req.params.id;

	Answers.delAnswer(id)
		.then((count) => {
			res.json(count);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to delete answer' });
		});
});

// custom middleware

function validateAnswerId(req, res, next) {
	const { id } = req.params;

	Answers.findById(id)
		.then((answer) => {
			if (answer == null) {
				res.status(400).json({ message: 'invalid answerId' });
			} else next();
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: `Couldn't retrieve a point with answerId of ${answerId}` });
		});
}

function validateQuestionId(req, res, next) {
	const { questionId } = req.params;

	Questions.findById(questionId)
		.then((question) => {
			if (question == null) {
				res.status(400).json({ message: 'invalid questionId' });
			} else next();
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: `Couldn't retrieve a point with questionId of ${questionId}` });
		});
}

function validateInput(req, res, next) {
	if (Object.keys(req.body).length == 0) {
		res.status(400).json({ message: 'missing required fields' });
	} else if (!req.body.choice) {
		res.status(400).json({ message: 'missing required choice field' });
	} else next();
}

module.exports = router;
