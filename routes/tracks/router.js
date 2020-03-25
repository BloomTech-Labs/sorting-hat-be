const Tracks = require('./model.js');
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

router.post('/:answerId', (req, res) => {
    const { answerId } = req.params;
    const track = req.body;
    track.answer_id = answerId;

    Tracks.createTrack(req.body)
    .then(created => {
        res.status(201).json(created);
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