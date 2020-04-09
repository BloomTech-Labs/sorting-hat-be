const db = require('../../database/connection.js');

module.exports = {
    find,
    findById,
    createPoint,
    createPointAnswer,
    findSpecificPoint,
    updateSpecificPoint,
    delPoint
}

function find() {
    return db('points').select('points', 'answer_id', 'track_id', 'id');
}

function findById(answerId) {
    return db('points')
    .select('points', 'answer_id', 'track_id')
    .where({ answer_id: answerId })
}

function findSpecificPoint(answerId, trackId) {
    return db('points')
    .select('points', 'answer_id', 'track_id')
    .first()
    .where({ answer_id: answerId, track_id: trackId })
}

function updateSpecificPoint(answerId, trackId, body) {
    return db('points')
    .select('points', 'answer_id', 'track_id')
    .first()
    .where({ answer_id: answerId, track_id: trackId })
    .update(body)
}

function createPoint(point) {
    return db('points')
    .join('tracks', 'tracks.id', 'points.track_id')
    .join('answers', 'answers.id', 'points.answer_id')
    .insert(point, 'id', 'answer_id', 'track_id');
}

function createPointAnswer(point) {
    return db('points')
    .insert(point, 'id', 'answer_id', 'track_id');
}

function delPoint(id) {
    return db('points')
        .where({ id })
        .del();
}