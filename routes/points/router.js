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

module.exports = router;