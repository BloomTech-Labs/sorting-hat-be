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
            .get('/api/questions/1')
            .expect(200);
        });

        it('Check if the question exists.', function () {
            return request(server)
            .get('/api/questions/1000')
            .expect(500)
            .then(res => {
                expect(res.body).toEqual({ error: 'Couldn\'t retrieve a question with id of 1000' })
            })
        });
    })

    describe('POST /api/questions', function () {
        it('Create a question.', function () {
            return request(server)
            .post('/api/questions')
            .send({ question: `${Date.now()}` })
            .expect(201);
        });

        it('Should send back an error saying missing question fields', function () {
            return request(server)
            .post('/api/questions')
            .send({ question: '' })
            .expect(400)
            .then(res => {
                expect(res.body).toEqual({ 'message': 'missing required question field' })
            });
        });

        it('Should send back an error saying missing fields', function () {
            return request(server)
            .post('/api/questions')
            .send({ })
            .expect(400)
            .then(res => {
                expect(res.body).toEqual({ message: "missing required fields" })
            });
        });
    })
    
    describe('PUT /api/questions/:id', function () {
        it('Modify an existing question.', function () {
            return request(server)
            .put('/api/questions/1')
            .send({ question: `${Date.now()}` })
            .expect(200);
        });

        it('Modify an existing question.', function () {
            return request(server)
            .put('/api/questions/100000')
            .send({ question: `${Date.now()}` })
            .expect(500)
            .then(res => {
                expect(res.body).toEqual({ error: `Couldn't retrieve a question with id of 100000` })
            });
        });

        it('Modify an existing question.', function () {
            return request(server)
            .put('/api/questions/1')
            .send({})
            .expect(500)
            .then(res => {
                expect(res.body).toEqual({ "error": "Unable to edit question" })
            });
        });
    })

    describe('DELETE /api/questions/:id', function () {
        it('Delete an existing question.', function () {
            return request(server)
            .post('/api/questions')
            .send({ question: `${Date.now()}` })
            .then(() => {
                request(server)
                .delete('/api/questions/1')
                .expect(200);
            });
        })
    })
});

afterAll(async () => {
	await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});