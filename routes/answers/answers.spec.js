require('dotenv').config({ path: '../../config/.env' });
const request = require('supertest');
const server = require('../api/server.js');

const db = require('../../database/connection.js');

beforeAll(async function() {
	await db.raw('ALTER TABLE answers DROP CONSTRAINT answers_question_id_foreign');
	await db.raw('ALTER TABLE points DROP CONSTRAINT points_answer_id_foreign');
});

describe('answers router', () => {
	describe('test environment', function() {
		it('should use the staging environment', function() {
			expect(process.env.NODE_ENV).toBe('staging');
		});
	});

	describe('GET /api/answers', function() {
		it('Returns answers for all the questions of the quiz.', function() {
			return request(server).get('/api/answers').expect(200);
		});
	});

	describe('GET /api/answers/questions/:questionId', function() {
		it('Returns all answers associated with that question.', function() {
			return request(server).get('/api/answers/questions/1').expect(200);
		});
	});

	describe('POST /api/answers/questions/:questionId', function() {
		it('Create an answer for a specific question.', function() {
			return request(server).post('/api/answers/questions/1').send({ choice: 'This is a choice' }).expect(201);
		});
	});

	describe('PUT /api/answers/:id', function() {
		it('Update a specific answer.', function() {
			return request(server).put('/api/answers/1').send({ choice: 'This is a choice' }).expect(200);
		});
	});

	describe('DELETE /api/answers/:id', function() {
		it('Delete a specific answer.', function() {
			return request(server).delete('/api/answers/33').expect(200);
		});
	});
});

afterAll(async () => {
	await new Promise((resolve) => setTimeout(() => resolve(), 1000)); // avoid jest open handle error
	
});
