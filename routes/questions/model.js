const db = require('../../database/connection.js');

module.exports = {
    find,
    findById
}

function find() {
    return db('questions').select('question', 'id');
}

function findById(id) {
    return db('questions')
        .where({ id })
        .first();
}
