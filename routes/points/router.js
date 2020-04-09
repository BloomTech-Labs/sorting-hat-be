const Points = require('./model.js');
const Answers = require('../answers/model.js');
const Tracks = require('../tracks/model.js');
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

router.get('/:answerId', validateAnswerId, (req, res) => {
	const { answerId } = req.params;

	Points.findById(answerId)
		.then((points) => {
			res.status(200).json(points);
		})
		.catch(() => {
			res.status(500).json({ error: 'error' });
		});
});

router.get('/:answerId/:trackId', validateAnswerId, validateTrackId, (req, res) => {
    const { answerId, trackId } = req.params;

	Points.findSpecificPoint(answerId, trackId)
		.then((point) => {
			res.status(200).json(point);
		})
		.catch(() => {
			res.status(500).json({ error: 'error' });
		});
});

router.put('/:answerId/:trackId', validateInput, validateAnswerId, validateTrackId, (req, res) => {
    const { answerId, trackId } = req.params;
    const changes = req.body;

	Points.updateSpecificPoint(answerId, trackId, changes)
		.then((point) => {
			res.status(200).json(point);
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
});

// custom middleware

function validateAnswerId(req, res, next) {
    const { answerId } = req.params;

    Answers.findById(answerId)
    .then(answer => {
      if( answer == null ){
        
        res.status(400).json({ message: "invalid answerId" });
      } else next();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: `Couldn't retrieve a point with answerId of ${id}` });
    });
}

function validateTrackId(req, res, next) {
    const { trackId } = req.params;

    Tracks.findById(trackId)
    .then(track => {
      if( track == null ){
        
        res.status(400).json({ message: "invalid trackId" });
      } else next();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: `Couldn't retrieve a point with trackId of ${id}` });
    });
}

function validateInput(req, res, next) {
    if( Object.keys(req.body).length == 0 ) {
      res.status(400).json({ message: "missing required fields" });
    } else if(!req.body.points) {
      res.status(400).json({ message: "missing required point field" });
    } else next();
}

module.exports = router;
