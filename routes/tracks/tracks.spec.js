require('dotenv').config({ path: '../../config/.env'});
const request = require('supertest');
const server = require('../api/server.js');

describe('tracks router', () => {
    describe('test environment', function () {
        it('should use the staging environment', function () {
            expect(process.env.NODE_ENV).toBe('staging');
        })
    })

    describe('GET /api/tracks', function () {
        it('Returns all the tracks and the corresponding points per answer choice.', function () {
            return request(server)
            .get('/api/tracks')
            .expect(200);
        });
    })

    describe('GET /api/tracks/:id', function () {
        it('Returns all the points associated with each track per answer choice.', function () {
            return request(server)
            .get('/api/tracks/1')
            .expect(200);
        });
    })
    
    // describe('POST /api/tracks/:answerId', function () {
    //     it('Create a new track.', function () {
    //         return request(server)
    //         .post('/api/tracks/1')
    //         .send({
    //             "name": "android",
    //             "description": "This is fullstack track description",
    //             "link": "putOptionalLinkHere.com",
    //             "points": "2",
    //         })
    //         .expect(201);
    //     });
    // })

    // describe('PUT /api/tracks/:id', function () {
    //     it('Modify an existing track.', function () {
    //         return request(server)
    //         .put('/api/tracks/1')
    //         .send({
    //             "name": "android",
    //             "description": "This is fullstack track description",
    //             "link": "putOptionalLinkHere.com",
    //             "points": "2",
    //         })
    //         .expect(200);
    //     });
    // })

    // describe('DELETE /api/tracks/:id', function () {
    //     it('Delete an existing track..', function () {
    //         return request(server)
    //         .delete('/api/tracks/1')
    //         .expect(200);
    //     });
    // })
});

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});