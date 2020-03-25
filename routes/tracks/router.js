const Tracks = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Tracks.find()
        .then(tracks => {
            console.log('tracks', tracks);
            res.json(tracks);
        })
        .catch(({ name, message, stack, code }) => {
            console.log({ name, message, stack, code });

            res.status(500).json({ name, message, stack, code });
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Tracks.findById(id)
    .then(track => {
        console.log('track', track);
        
        res.json(track);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
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
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Tracks.removeTrack(id)
    .then(deleted => {
        res.json(deleted);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    
    Tracks.editTrack(changes, id)
        .then(edited => {
            res.json(edited);
        })
        .catch(({ name, message, stack, code }) => {
            console.log({ name, message, stack, code });

            res.status(500).json({ name, message, stack, code });
        })
})

module.exports = router;