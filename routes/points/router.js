const Points = require('./model.js');
const router = require('express').Router();

router.get("/", (req, res) => {
    Points.find()
    .then(points => {
        res.json(points)
    })
    .catch(() => {
        res.json({ error: "error" })
    })
})

router.get("/:answerId", (req, res) => {
    const { answerId } = req.params;
    console.log('PARAMS', req.params);
    
    Points.findById(answerId)
    .then(points => {
        res.json(points)
    })
    .catch(() => {
        res.json({ error: "error" })
    })
})

router.post('/:answerId/:trackId', (req, res) => {
    const { trackId, answerId } = req.params;
    const point = req.body;
    point.track_id = trackId;
    point.answer_id = answerId;
    
    Points.createPoint(point)
    .then(inserted => {
        res.status(201).json(inserted);
    })
    .catch((name, message, stack, code) => {
        res.status(500).json({name, message, stack, code});
    })
});

module.exports = router;