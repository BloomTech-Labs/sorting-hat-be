const db = require('../../database/connection.js');

module.exports = {
    find,
    findById,
    createTrack,
    removeTrack,
    editTrack
}

function find() {
    return db('tracks').select('*');
}

function findById(id) {
    return db('tracks')
        .where({ id })
        .first();
}

function createTrack(body) {
    return db('tracks')
        .insert(body, 'id');
}

function removeTrack(id) {
    return db('tracks')
        .where({ id })
        .delete()
}

function editTrack(body, id) {
    return db('tracks')
        .update(body)
        .where({ id })
}