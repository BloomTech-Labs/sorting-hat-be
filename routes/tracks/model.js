const db = require('../../database/connection.js');

module.exports = {
    find,
    findById
}

function find() {
    return db('tracks').select('*');
}

function findById(id) {
    return db('tracks')
        .where({ id })
        .first();
}