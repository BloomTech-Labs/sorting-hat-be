const Answers = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Answers.find()
        .then(answers => {
            console.log('answers', answers);
            res.json(answers);
        })
        .catch(({ name, message, stack, code }) => {
            console.log({ name, message, stack, code });

            res.status(500).json({ name, message, stack, code });
        })
});

module.exports = router;