const db = require('../../database/connection.js');

module.exports = {
    find
}

function find() {
    return db('answers').select('choice', 'id', 'question_id');
}
