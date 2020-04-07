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
	if (Object.keys(req.body).length == 0) {
		res.status(400).json({ message: 'missing required fields' });
		// } else if (req.body) {
		// 	Object.keys(req.body).map((item) => {
		// 		console.log(item[0]);
		// 		// if (!item["name"]) {
		// 		//     console.log("Name is missing")
		// 		// }
		// 	});
	} else if (req.body) {
		let jsonMess = [];
		Object.entries(req.body).map((trackInfo) => {
			console.log('trackInfo', trackInfo);
			if (!trackInfo[1]) {
				jsonMess.push(` ${trackInfo[0]}`);
			}
		});
		res.status(400).json({ message: `The following are missing fields: ${jsonMess}` });
	} else next();
}

module.exports = router;
