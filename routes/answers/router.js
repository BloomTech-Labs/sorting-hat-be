const Answers = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Answers.find()
        .then(answers => {
            res.json(answers);
        })
        .catch(() => {

            res.status(500).json({ error: 'Unable to retrieve answers' });
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Answers.findById(id)
    .then(answer => {
        res.json(answer);
    })
    .catch(() => {
        
        res.status(500).json({ error: 'Unable to retrieve answer' });
    })
});

router.get('/questions/:questionId', (req, res) => {
    const { questionId } = req.params;
    
    Answers.findByQuestion(questionId)
    .then(answer => {
        res.json(answer);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to retrieve question' });
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
    .catch(() => {

        res.status(500).json({ error: 'Unable to create question' });
    })
});

router.put('/:id',(req, res) => {
    const id = req.params.id;
    const changes = req.body;    
    
    Answers.editAnswer(changes, id)
    .then(edited => {
        res.json(edited);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to edit answer' });
    })
});

router.delete('/:id',(req, res) => {
    const id = req.params.id;
    
    Answers.delAnswer(id)
    .then(count => {
        res.json(count);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to delete answer' });
    })
});

module.exports = router;