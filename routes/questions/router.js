const Questions = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Questions.find()
        .then(questions => {
            console.log('questions', questions);
            res.json(questions);
        })
        .catch(err => {
            console.log('err', err);
            res.send(err);
        })
});

module.exports = router;