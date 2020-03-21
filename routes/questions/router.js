const Questions = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Questions.find()
        .then(questions => {
            console.log('questions', questions);
            res.json(questions);
        })
        .catch(({ name, message, stack, code }) => {
            console.log({ name, message, stack, code });

            res.status(500).json({ name, message, stack, code });
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Questions.findById(id)
    .then(question => {
        res.json(question);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

module.exports = router;