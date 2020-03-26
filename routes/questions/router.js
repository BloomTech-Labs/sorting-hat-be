const Questions = require('./model.js');
const Answers = require('../answers/model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Questions.find()
        .then(questions => {
            res.json(questions);
        })
        .catch(() => {
            res.status(500).json({ error: 'Unable to retrieve questions' });
        })
});

router.get('/:id', validateId, (req, res) => {
    const { id } = req.params;

    Questions.findById(id)
    .then(question => {
        res.json(question);
    })
    .catch(() => {
        res.status(500).json({ error: 'Unable to retrieve that question' });
    })
});

router.get('/:id/answers', validateId, (req, res) => {
    const { id } = req.params;

    Questions.findById(id)
    .then(question => {
        res.json(question);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to retrieve answers' });
    })
});

router.post('/', validateInput, (req, res) => {
    const question = req.body;
    
    Questions.addQuestion(question)
    .then(added => {
        res.status(201).json(added);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to create question' });
    })
});

router.put('/:id', validateId, (req, res) => {
    const { id } = req.params;
    const changes = req.body;    
    
    Questions.editQuestion(changes, id)
    .then(edited => {
        res.json(edited);
    })
    .catch(() => {
        res.status(500).json({ error: 'Unable to edit question' });
    })
});

router.delete('/:id', validateId, (req, res) => {
    const { id } = req.params;
    
    Questions.delQuestion(id)
    .then(count => {
        res.json(count);
    })
    .catch(() => {

        res.status(500).json({ error: 'Unable to delete question' });
    })
});

// custom middleware

function validateId(req, res, next) {
    const { id } = req.params;

    Questions.findById(id)
    .then(question => {
      if( question === undefined ){
        
        res.status(400).json({ message: "invalid question id" });
      } else next();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: `Couldn't retrieve a question with id of ${id}` });
    });
}

function validateInput(req, res, next) {
    if( Object.keys(req.body).length == 0 ) {
      res.status(400).json({ message: "missing required fields" });
    } else if(!req.body.question) {
      res.status(400).json({ message: "missing required question field" });
    } else next();
}

module.exports = router;