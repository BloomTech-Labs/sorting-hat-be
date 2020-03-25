const db = require('../../database/connection.js');

module.exports = {
    find,
    findById,
    findByQuestion
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
