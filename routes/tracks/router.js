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

module.exports = router;