require('dotenv').config({ path: '../../config/.env' });
const request = require('supertest');
const server = require('../api/server.js');
const db = require('../../database/connection.js');
describe('questions router', function() {
	describe('test environment', function() {
		it('should use the staging environment', function() {
			expect(process.env.NODE_ENV).toBe('staging');
		});
	});

	describe('GET /api/questions', function() {
		it('should return all the questions', function() {
			return request(server).get('/api/questions').expect(200);
		});
	});

	describe('GET /api/questions/:id', function() {
		it('Retrieve an existing question.', function() {
			return request(server).get('/api/questions/1').expect(200);
		});

		it('Check if the question exists.', function() {
			return request(server).get('/api/questions/1000').expect(400).then((res) => {
				expect(res.body).toEqual({ message: 'invalid question id' });
			});
		});
	});

	describe('POST /api/questions', function() {
		it('Create a question.', function() {
			return request(server).post('/api/questions').send({ question: `${Date.now()}` }).expect(201);
		});

		it('Should send back an error saying missing question fields', function() {
			return request(server).post('/api/questions').send({ question: '' }).expect(400).then((res) => {
				expect(res.body).toEqual({ message: 'missing required question field' });
			});
		});

		it('Should send back an error saying missing fields', function() {
			return request(server).post('/api/questions').send({}).expect(400).then((res) => {
				expect(res.body).toEqual({ message: 'missing required fields' });
			});
		});
	});

	describe('PUT /api/questions/:id', function() {
		it('Modify an existing question.', function() {
			return request(server).put('/api/questions/1').send({ question: `${Date.now()}` }).expect(200);
		});

		it('Should return an error of invalid ID.', function() {
			return request(server)
				.put('/api/questions/100000')
				.send({ question: `${Date.now()}` })
				.expect(400)
				.then((res) => {
					expect(res.body).toEqual({ message: 'invalid question id' });
				});
		});

		it('Should return a 500, unable to edit question', function() {
			return request(server).put('/api/questions/1').send({}).expect(500).then((res) => {
				expect(res.body).toEqual({ error: 'Unable to edit question' });
			});
		});
	});

	describe('DELETE /api/questions/:id', function() {
		it('Delete an existing question.', function() {
			return request(server).delete('/api/questions/7').expect(200);
		});

		it('return invalid ID', function() {
			return request(server).delete('/api/questions/10000').expect(400).then((res) => {
				expect(res.body).toEqual({ message: 'invalid question id' });
			});
		});
	});
});

afterAll(async () => {
	await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
	await db.seed.run();
	await db.raw(
		'ALTER TABLE points ADD CONSTRAINT points_answer_id_foreign FOREIGN KEY(answer_id) REFERENCES answers(id)'
	);
	await db.raw(
		'ALTER TABLE answers ADD CONSTRAINT answers_question_id_foreign FOREIGN KEY(question_id) REFERENCES questions(id)'
	);
});
