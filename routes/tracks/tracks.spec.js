require('dotenv').config({ path: '../../config/.env' });
const request = require('supertest');
const server = require('../api/server.js');

describe('tracks router', () => {
	describe('test environment', function() {
		it('should use the staging environment', function() {
			expect(process.env.NODE_ENV).toBe('staging');
		});
	});

	describe('GET /api/tracks', function() {
		it('Returns all the tracks and the corresponding points per answer choice.', function() {
			return request(server).get('/api/tracks').expect(200);
		});
	});

	describe('GET /api/tracks/:id', function() {
		it('Returns all the points associated with each track per answer choice.', function() {
			return request(server).get('/api/tracks/1').expect(200);
		});
	});

	describe('POST /api/tracks/', function() {
		it('Create a new track.', function() {
			return request(server)
				.post('/api/tracks')
				.send({
					name: 'android',
					description: 'This is fullstack track description',
					shortDesc: 'This is a short description',
					strengths: 'You have many strengths',
					link: 'placeholder.com'
				})
				.expect(201);
		});

		it('Should return all the empty fields', function() {
			return request(server)
				.post('/api/tracks')
				.send({
					name: '',
					description: '',
					shortDesc: '',
					strengths: '',
					link: 'fakelink.com'
				})
				.expect(400)
				.then((res) => {
					expect(res.body).toEqual({
						message: 'The following fields are missing: Name, Description, Short Description'
					});
				});
		});

		it('Should return all the empty fields', function() {
			return request(server)
				.post('/api/tracks')
				.send({
					name: '',
					description: 'This is fullstack track description',
					shortDesc: 'This is a short description',
					strengths: 'You have many strengths',
					link: 'placeholder.com'
				})
				.expect(400)
				.then((res) => {
					expect(res.body).toEqual({
						message: 'The following fields are missing: Name'
					});
				});
		});

		it('Should return all the empty fields', function() {
			return request(server)
				.post('/api/tracks')
				.send({
					name: '',
					description: '',
					shortDesc: 'This is a short description',
					strengths: 'You have many strengths',
					link: 'placeholder.com'
				})
				.expect(400)
				.then((res) => {
					expect(res.body).toEqual({
						message: 'The following fields are missing: Name, Description'
					});
				});
		});

		it('Should return all the empty fields', function() {
			return request(server)
				.post('/api/tracks')
				.send({
					name: '',
					description: '',
					shortDesc: ''
				})
				.expect(400)
				.then((res) => {
					expect(res.body).toEqual({
						message: 'The following fields are missing: Name, Description, Short Description'
					});
				});
		});

		it('Should return all the empty fields', function() {
			return request(server)
				.post('/api/tracks')
				.send({
					link: 'fakelink.com'
				})
				.expect(400)
				.then((res) => {
					expect(res.body).toEqual({
						message: 'The following fields are missing: Name, Description, Short Description'
					});
				});
		});

		it('Should return all the empty fields', function() {
			return request(server)
				.post('/api/tracks')
				.send({
					name: '',
					description: '',
					shortDesc: '',
					strengths: '',
					link: 'fakelink.com'
				})
				.expect(400)
				.then((res) => {
					expect(res.body).toEqual({
						message: 'The following fields are missing: Name, Description, Short Description'
					});
				});
		});
	});

	describe('PUT /api/tracks/:id', function() {
		it('Modify an existing track.', function() {
			return request(server)
				.put('/api/tracks/6')
				.send({
					name: 'Data science',
					description: 'This is data science track description',
					shortDesc: 'This is a short description',
					strengths: 'You have many strengths',
					link: 'placeholder.com'
				})
				.expect(200)
				.then((res) => {
					expect(res.body).toBe(1);
				});
		});
		it('Should return missing required fields.', function() {
			return request(server).put('/api/tracks/6').send({}).expect(400).then((res) => {
				expect(res.body).toEqual({ message: 'missing required fields' });
			});
		});
	});

	describe('DELETE /api/tracks/:id', function() {
		it('Delete an existing track.', function() {
			return request(server).delete('/api/tracks/5').expect(200);
		});
		it('Should say unable to delete track', function() {
			return request(server).delete('/api/tracks/50').query({ id: 50 }).expect(400).then((res) => {
				expect(res.body).toEqual({ message: 'invalid track id' });
			});
		});
	});
});

afterAll(async () => {
	await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});
