const db = require('../../database/connection.js');

module.exports = {
    find,
    findById,
    addQuestion,
    editQuestion,
    delQuestion
}

function find() {
    return db('questions').select('question', 'id');
}

function findById(id) {
    return db('questions')
        .where({ id })
        .first();
}

function addQuestion(question) {
    return db('questions').insert(question, 'id');
}

function editQuestion(changes, id) {
    return db('questions')
      .where({ id })
      .update(changes);
}

function delQuestion(id) {
    return db('questions')
        .where({ id })
        .del();
}