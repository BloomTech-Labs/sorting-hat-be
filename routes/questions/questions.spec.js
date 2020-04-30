const request = require('supertest');

// Start with a clean Express server, we're not testing our middleware here
const express = require('express');
const server = express();

// Setup the routes we want to test
const questionsRouter = require('../questions/router.js');
server.use('/api/questions', questionsRouter);

// Mock Knex so it no longer does anything, this will prevent it from initializing
jest.mock('knex')

// Mock the model module, as we want to control it during our tests
jest.mock('./model.js')

// These are now mock functions that we can control during testing
const model = require('./model.js')

beforeEach(() => {
  // Reset all mocks to we can count calls
  jest.resetAllMocks();
});

afterAll(async () => {
	// Avoid jest open handle error
	await new Promise((resolve) => setTimeout(() => resolve(), 500));
});

describe('questions router', function() {
	describe("GET /api/questions", function () {
    it("should call model.find() and return the results", async () => {
      // Mock the find() function on the model to be async and return a dummy object
      const dummyObject = { dummyField: "dummyData" };
      model.find = jest.fn().mockResolvedValue(dummyObject);

			// Make the API call, which should be a 200 and should return our dummy data
			await request(server).get("/api/questions").expect(200).expect('{"dummyField":"dummyData"}');

			// Make sure the find() function was called
			expect(model.find).toBeCalledTimes(1)
		});

		it("should return a 500 when model.find() throws an error", async () => {
			// Mock the find() function on the model to throw an error
      model.find.mockImplementation(() => {
				throw new Error();
			});

			// Make the API call, which should be a 200 and should return our dummy data
			await request(server).get("/api/questions").expect(500)

			// Make sure the find() function was called
			expect(model.find).toBeCalledTimes(1)
    });
  });

	// describe('GET /api/questions/:id', function() {
	// 	it('Retrieve an existing question.', function() {
	// 		return request(server).get('/api/questions/1').expect(200);
	// 	});

	// 	it('Check if the question exists.', function() {
	// 		return request(server).get('/api/questions/1000').expect(400).then((res) => {
	// 			expect(res.body).toEqual({ message: 'invalid question id' });
	// 		});
	// 	});
	// });

	// describe('GET /api/questions/:id/answers', function() {
	// 	it('Retrieve the answers of an existing question.', function() {
	// 		return request(server).get('/api/questions/1/answers').expect(200);
	// 	});

	// 	it('Check if the question exists.', function() {
	// 		return request(server).get('/api/questions/1000/answers').expect(400).then((res) => {
	// 			expect(res.body).toEqual({ message: 'invalid question id' });
	// 		});
	// 	});
	// });

	// describe('POST /api/questions', function() {
	// 	it('Create a question.', function() {
	// 		return request(server).post('/api/questions').send({ question: `${Date.now()}` }).expect(201);
	// 	});

	// 	it('Should send back an error saying missing question fields', function() {
	// 		return request(server).post('/api/questions').send({ question: '' }).expect(400).then((res) => {
	// 			expect(res.body).toEqual({ message: 'missing required question field' });
	// 		});
	// 	});

	// 	it('Should send back an error saying missing fields', function() {
	// 		return request(server).post('/api/questions').send({}).expect(400).then((res) => {
	// 			expect(res.body).toEqual({ message: 'missing required fields' });
	// 		});
	// 	});
	// });

	// describe('PUT /api/questions/:id', function() {
	// 	it('Modify an existing question.', function() {
	// 		return request(server).put('/api/questions/1').send({ question: `${Date.now()}` }).expect(200);
	// 	});

	// 	it('Should return an error of invalid ID.', function() {
	// 		return request(server)
	// 			.put('/api/questions/100000')
	// 			.send({ question: `${Date.now()}` })
	// 			.expect(400)
	// 			.then((res) => {
	// 				expect(res.body).toEqual({ message: 'invalid question id' });
	// 			});
	// 	});
	// });

	// describe('DELETE /api/questions/:id', function() {
	// 	it('Delete an existing question.', function() {
	// 		return request(server).delete('/api/questions/7').expect(200);
	// 	});

	// 	it('return invalid ID', function() {
	// 		return request(server).delete('/api/questions/10000').expect(400).then((res) => {
	// 			expect(res.body).toEqual({ message: 'invalid question id' });
	// 		});
	// 	});
	// });
});
