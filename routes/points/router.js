const Points = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
	Points.find()
		.then((points) => {
			res.status(200).json(points);
		})
		.catch(() => {
			res.status(500).json({ error: 'error' });
		});
});

router.get('/:answerId', (req, res) => {
	const { answerId } = req.params;
	console.log('PARAMS', req.params);

	Points.findById(answerId)
		.then((points) => {
			res.status(200).json(points);
		})
		.catch(() => {
			res.status(500).json({ error: 'error' });
		});
});

router.post('/:answerId/:trackId', (req, res) => {
	const { trackId, answerId } = req.params;
	const point = req.body;
	point.track_id = trackId;
	point.answer_id = answerId;

	Points.createPoint(point)
		.then((inserted) => {
			res.status(201).json(inserted);
		})
		.catch((name, message, stack, code) => {
			res.status(500).json({ name, message, stack, code });
		});
});

// router.delete('/:id', (req, res) => {
// 	const id = req.params.id;

// 	Points.delPoint(id)
// 		.then((count) => {
// 			res.status(200).json(count);
// 		})
// 		.catch(() => {
// 			res.status(500).json({ error: 'Unable to delete point' });
// 		});
// });

module.exports = router;
