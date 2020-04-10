const Tracks = require('./model.js');
const Answers = require('../answers/model.js');
const Points = require('../points/model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
	Tracks.find().then((tracks) => {
		res.json(tracks);
	});
});

router.get('/:id', validateId, (req, res) => {
	const { id } = req.params;

	Tracks.findById(id).then((track) => {
		res.json(track);
	});
});

router.post('/', validateInput, (req, res) => {
	Tracks.createTrack(req.body).then((created) => {
		const trackId = created[0];
		res.status(201).json(created);

		// initialize points associated with the new track for each answer
		Answers.find().then((answers) => {
			answers.map((item) => {
				const point = {
					points: 0.0
				};

				point.answer_id = item.id;
				point.track_id = trackId;

				Points.createPoint(point).then();
			});
		});
	});
});

router.delete('/:id', validateId, async (req, res) => {
	const { id } = req.params;

	Tracks.removeTrack(id).then((deleted) => {
		res.json(deleted);
	});
});

router.put('/:id', validateId, validateInput, (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Tracks.editTrack(changes, id).then((edited) => {
		res.json(edited);
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
}

function validateInput(req, res, next) {
	let jsonMess = [];
	function checkArr() {
		if (req.body.name && req.body.description && req.body.shortDesc) {
			return true;
		} else {
			return false;
		}
	}
	if (Object.keys(req.body).length == 0) {
		res.status(400).json({ message: 'missing required fields' });
	} 
	else if (Object.keys(req.body).length > 0 && req.body.test !== "test") {
		if (req.body.name === '' || req.body.name === undefined) {
			jsonMess.push('Name');
			checkArr();
		}
		if (req.body.description === '' || req.body.description === undefined) {
			jsonMess.push('Description');
			checkArr();
		}
		if (req.body.shortDesc === '' || req.body.shortDesc === undefined) {
			jsonMess.push('Short Description');
			checkArr();
		}
		if (checkArr() === false) {
			missing = jsonMess.toString();
			formatted = missing.replace(/,/g, ', ');
			res.status(400).json({ message: `The following fields are missing: ${formatted}` });
		} else {
			next();
		}
	}
	else {
		res.status(400).json({ message: 'Congrats, you found the easter egg!' })
	}
}

module.exports = router;
