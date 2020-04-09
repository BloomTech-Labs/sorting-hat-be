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

	Points.findById(answerId)
		.then((points) => {
			res.status(200).json(points);
		})
		.catch(() => {
			res.status(500).json({ error: 'error' });
		});
});

router.get('/:answerId/:trackId', (req, res) => {
    const { answerId, trackId } = req.params;

	Points.findSpecificPoint(answerId, trackId)
		.then((point) => {
			res.status(200).json(point);
		})
		.catch(() => {
			res.status(500).json({ error: 'error' });
		});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;

	Points.delPoint(id)
		.then((count) => {
			res.status(200).json(count);
		})
		.catch(() => {
			res.status(500).json({ error: 'Unable to delete point' });
		});
});

module.exports = router;
