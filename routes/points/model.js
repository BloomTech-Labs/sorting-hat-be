const db = require('../../database/connection.js');

module.exports = {
    find,
    findById
}

function find() {
    return db('points')
}

function findById(answerId) {
    return db('points')
    .where({ answer_id: answerId })
}
