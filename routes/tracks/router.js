const Tracks = require('./model.js');
const Answers = require('../answers/model.js');
const Points = require('../points/model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Tracks.find()
        .then(tracks => {
            res.json(tracks);
        })
        .catch(() => {

            res.status(500).json({ error: 'Unable to retrieve tracks' });
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Tracks.findById(id)
    .then(track => {
        res.json(track);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to retrieve track' });
    })
});

router.post('/', (req, res) => {
    Tracks.createTrack(req.body)
    .then(created => {
        const trackId = created[0];
        res.status(201).json(created);

        // initialize points associated with the new track for each answer
        Answers.find()
            .then(answers => {
                
                answers.map(item => {
                    
                    const point = {
                        points: 0.00
                    };
                    
                    point.answer_id = item.id;
                    point.track_id = trackId;
                    
                    Points.createPoint(point)
                    .then();
                })
            })
            .catch(() => {
                res.status(500).json({ error: 'Unable to retrieve answers' });
            })
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to create track' });
    })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Tracks.removeTrack(id)
    .then(deleted => {
        res.json(deleted);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to delete track' });
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    
    Tracks.editTrack(changes, id)
        .then(edited => {
            res.json(edited);
        })
        .catch(() => {


            res.status(500).json({ error: 'Unable to edit track' });
        })
})

module.exports = router;