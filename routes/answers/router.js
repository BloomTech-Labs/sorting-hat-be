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

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log('id', id);
    
    Answers.findById(id)
    .then(answer => {
        console.log('answer', answer);
        
        res.json(answer);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });
        
        res.status(500).json({ name, message, stack, code });
    })
});

router.get('/questions/:questionId', (req, res) => {
    const { questionId } = req.params;
    
    Answers.findByQuestion(questionId)
    .then(answer => {
        console.log('answer', answer);
        
        res.json(answer);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

router.post('/questions/:questionId', (req, res) => {
    const { questionId } = req.params;
    const choice = req.body;
    choice.question_id = questionId;
    
    Answers.addChoice(choice, questionId)
    .then(inserted => {
        res.status(201).json(inserted);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

router.put('/:id',(req, res) => {
    const id = req.params.id;
    const changes = req.body;    
    
    Answers.editAnswer(changes, id)
    .then(edited => {
        res.json(edited);
    })
    .catch(({ name, message, stack, code }) => {
        console.log({ name, message, stack, code });

        res.status(500).json({ name, message, stack, code });
    })
});

module.exports = router;