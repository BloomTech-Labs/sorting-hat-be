require('dotenv').config({ path: '../../config/.env'});
const request = require('supertest');
const server = require('../api/server.js');

describe('questions router', () => {
    describe('test environment', function () {
        it('should use the staging environment', function () {
            expect(process.env.NODE_ENV).toBe('staging');
        })
    })

    describe('GET /api/questions', function () {
        it('should return all the questions', function () {
            return request(server)
            .get('/api/questions')
            .expect(200);
        });

    })

    describe('GET /api/questions/:id', function () {
        it('Retrieve an existing question.', function () {
            return request(server)
            .get('/api/questions')
            .expect(200);
        });
    })

    describe('POST /api/questions', function () {
        it('Create a question.', function () {
            return request(server)
            .post('/api/questions')
            .send({ question: `${Date.now()}` })
            .expect(201);
        });
    })

    describe('PUT /api/questions/:id', function () {
        it('Modify an existing question.', function () {
            return request(server)
            .put('/api/questions/1')
            .send({ question: `${Date.now()}` })
            .expect(200);
        });
    })

    describe('DELETE /api/questions/:id', function () {
        it('Delete an existing question.', function () {
            return request(server)
            .delete('/api/questions/6')
            .expect(200);
        });
    })
});

afterAll(async () => {
	await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});