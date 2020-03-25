const Questions = require('./model.js');
const Answers = require('../answers/model.js');
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
        console.log('question', question);
        
        res.json(question);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

router.get('/:id/answers', (req, res) => {
    const { id } = req.params;
    console.log('params', req.params);
    
    Questions.findById(id)
    .then(question => {
        console.log('question', question);
        
        res.json(question);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

router.post('/',(req, res) => {
    const question = req.body;
    
    Questions.addQuestion(question)
    .then(added => {
        res.status(201).json(added);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

router.put('/:id',(req, res) => {
    const id = req.params.id;
    const changes = req.body;    
    
    Questions.editQuestion(changes, id)
    .then(edited => {
        res.json(edited);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

router.delete('/:id',(req, res) => {
    const id = req.params.id;
    
    Questions.delQuestion(id)
    .then(count => {
        res.json(count);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

module.exports = router;