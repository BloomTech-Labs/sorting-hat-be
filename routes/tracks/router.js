const Tracks = require('./model.js');
const Answers = require('../answers/model.js');
const Points = require('../points/model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
	Tracks.find()
		.then((tracks) => {
			res.json(tracks);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to retrieve tracks' });
		});
});

router.get('/:id', validateId, (req, res) => {
	const { id } = req.params;

	Tracks.findById(id)
		.then((track) => {
			res.json(track);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to retrieve track' });
		});
});

router.post('/', validateInput, (req, res) => {
	Tracks.createTrack(req.body)
		.then((created) => {
			const trackId = created[0];
			res.status(201).json(created);

			// initialize points associated with the new track for each answer
			Answers.find()
				.then((answers) => {
					answers.map((item) => {
						const point = {
							points: 0.0
						};

						point.answer_id = item.id;
						point.track_id = trackId;

						Points.createPoint(point).then();
					});
				})
				.catch(() => {
					res.status(500).json({ error: 'Unable to retrieve answers' });
				});
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to create track' });
		});
});

router.delete('/:id', validateId, (req, res) => {
	const { id } = req.params;

	Tracks.removeTrack(id)
		.then((deleted) => {
			res.json(deleted);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to delete track' });
		});
});

router.put('/:id', validateId, validateInput, (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Tracks.editTrack(changes, id)
		.then((edited) => {
			res.json(edited);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to edit track' });
		});
});

// custom middleware

function validateId(req, res, next) {
	const { id } = req.params;

	Tracks.findById(id)
		.then((track) => {
			if (track === undefined) {
				res.status(400).json({ message: 'invalid track id' });
			} else next();
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: `Couldn't retrieve a track with id of ${id}` });
		});
}

function validateInput(req, res, next) {
	let jsonMess = [];
	function checkArr() {
		while (jsonMess.length <= 3) {
			return false;
		}
		console.log(jsonMess);
		return true;
	}
	console.log(req.body.name);
	if (Object.keys(req.body).length == 0) {
		res.status(400).json({ message: 'missing required fields' });
	} else if (req.body.name === '' || req.body.description === '' || req.body.shortDesc === '') {
		if (req.body.name === '' || req.body.name === undefined) {
			jsonMess.push('Name');
			checkArr();
		}
		if (req.body.description === '' || req.body.description === undefined) {
			jsonMess.push(' Description');
			checkArr();
		}
		if (req.body.shortDesc === '' || req.body.shortDesc === undefined) {
			jsonMess.push(' Short Description');
			checkArr();
		}
		if (checkArr() === false) {
			res.status(400).json({ message: `The following are missing fields: ${jsonMess}` });
		} else next();
	}
}

module.exports = router;
