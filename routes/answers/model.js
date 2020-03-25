const db = require('../../database/connection.js');

module.exports = {
    find,
    findById,
    findByQuestion,
    addChoice,
    editAnswer,
    delAnswer
}

function find() {
    return db('answers').select('choice', 'id', 'question_id');
}

function findById(id) {
    return db('answers')
        .where({ id })
        .first();
}

function findByQuestion(question_id) {
    return db('answers')
        .where({ question_id });
}

function addChoice(choice) {
    return db('answers')
    .join('questions', 'questions.id', 'answers.question_id')
    .insert(choice, 'id');
}

function editAnswer(changes, id) {
    return db('answers')
      .where({ id })
      .update(changes);
}

function delAnswer(id) {
    return db('answers')
        .where({ id })
        .del();
}