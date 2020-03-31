const db = require('../../database/connection.js');

module.exports = {
    find,
    findById,
    createPoint
}

function find() {
    return db('points')
}

function findById(answerId) {
    return db('points')
    .where({ answer_id: answerId })
}

function createPoint(point) {
    return db('points')
    .join('tracks', 'tracks.id', 'points.track_id')
    .join('answers', 'answers.id', 'points.answer_id')
    .insert(point, 'answer_id', 'track_id');
}