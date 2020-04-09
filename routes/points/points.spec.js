require('dotenv').config({ path: '../../config/.env' });
const request = require('supertest');
const server = require('../api/server.js');

describe('points router', () => {
	describe('test environment', function() {
		it('should use the staging environment', function() {
			expect(process.env.NODE_ENV).toBe('staging');
		});
	});

	describe('GET /api/points', function() {
		it('Returns all the points and the corresponding points per answer choice.', function() {
			return request(server).get('/api/points').expect(200);
		});
	});

	describe('GET /api/points/:answerId', function() {
		it('Returns all the points associated with each track per answer choice.', function() {
			return request(server).get('/api/points/1').expect(200);
		});
	});

	// describe('GET /api/points/:answerId/:trackId', function() {
	// 	it('Returns all the points associated with the specified track and answer choice.', function() {
	// 		return request(server).get('/api/points/1').expect(200);
	// 	});
	// });
});
